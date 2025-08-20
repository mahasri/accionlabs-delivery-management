#!/usr/bin/env python3
"""
File Watcher Script for AccionLabs Delivery Management Portal

This script monitors SharePoint documents for changes and automatically
triggers rebuilds and processing when files are modified.
"""

import time
import os
import subprocess
import logging
from pathlib import Path
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import threading

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('file_watcher.log'),
        logging.StreamHandler()
    ]
)

class DocumentHandler(FileSystemEventHandler):
    """Handle file system events for document changes"""
    
    def __init__(self, rebuild_callback=None, process_callback=None):
        self.rebuild_callback = rebuild_callback
        self.process_callback = process_callback
        self.debounce_timer = None
        self.debounce_delay = 5  # seconds
        
    def on_created(self, event):
        """Handle file creation events"""
        if not event.is_directory:
            self.handle_file_event(event, "created")
            
    def on_modified(self, event):
        """Handle file modification events"""
        if not event.is_directory:
            self.handle_file_event(event, "modified")
            
    def on_deleted(self, event):
        """Handle file deletion events"""
        if not event.is_directory:
            self.handle_file_event(event, "deleted")
            
    def on_moved(self, event):
        """Handle file move/rename events"""
        if not event.is_directory:
            self.handle_file_event(event, "moved")
            
    def handle_file_event(self, event, event_type):
        """Handle file events with debouncing"""
        file_path = Path(event.src_path)
        
        # Check if it's a document we care about
        if self.is_relevant_file(file_path):
            logging.info(f"File {event_type}: {file_path}")
            
            # Cancel existing timer
            if self.debounce_timer:
                self.debounce_timer.cancel()
                
            # Start new timer
            self.debounce_timer = threading.Timer(self.debounce_delay, 
                                                self.process_changes, 
                                                args=[file_path, event_type])
            self.debounce_timer.start()
            
    def is_relevant_file(self, file_path):
        """Check if the file is relevant for processing"""
        relevant_extensions = {
            '.xlsx', '.xls',  # Excel files
            '.docx', '.doc',  # Word files
            '.pptx', '.ppt',  # PowerPoint files
            '.pdf',           # PDF files
            '.md',            # Markdown files
            '.yml', '.yaml'   # Configuration files
        }
        
        return file_path.suffix.lower() in relevant_extensions
        
    def process_changes(self, file_path, event_type):
        """Process file changes after debouncing"""
        logging.info(f"Processing changes for {file_path} ({event_type})")
        
        try:
            # Process document if applicable
            if self.process_callback:
                self.process_callback(file_path, event_type)
                
            # Trigger rebuild
            if self.rebuild_callback:
                self.rebuild_callback()
                
        except Exception as e:
            logging.error(f"Error processing changes: {str(e)}")

class FileWatcher:
    """Main file watcher class"""
    
    def __init__(self, watch_directories=None):
        self.watch_directories = watch_directories or [
            "assets/sharepoint/documents/",
            "assets/sharepoint/templates/",
            "assets/sharepoint/media/",
            "docs/"
        ]
        self.observer = Observer()
        self.handler = DocumentHandler(
            rebuild_callback=self.trigger_rebuild,
            process_callback=self.process_document
        )
        
    def start(self):
        """Start watching directories"""
        logging.info("Starting file watcher...")
        
        for directory in self.watch_directories:
            if os.path.exists(directory):
                self.observer.schedule(self.handler, directory, recursive=True)
                logging.info(f"Watching directory: {directory}")
            else:
                logging.warning(f"Directory does not exist: {directory}")
                
        self.observer.start()
        logging.info("File watcher started successfully")
        
    def stop(self):
        """Stop watching directories"""
        logging.info("Stopping file watcher...")
        self.observer.stop()
        self.observer.join()
        logging.info("File watcher stopped")
        
    def trigger_rebuild(self):
        """Trigger MkDocs rebuild"""
        logging.info("Triggering MkDocs rebuild...")
        
        try:
            # Run mkdocs build
            result = subprocess.run(
                ["mkdocs", "build"],
                capture_output=True,
                text=True,
                timeout=300  # 5 minute timeout
            )
            
            if result.returncode == 0:
                logging.info("MkDocs rebuild completed successfully")
            else:
                logging.error(f"MkDocs rebuild failed: {result.stderr}")
                
        except subprocess.TimeoutExpired:
            logging.error("MkDocs rebuild timed out")
        except Exception as e:
            logging.error(f"Error triggering rebuild: {str(e)}")
            
    def process_document(self, file_path, event_type):
        """Process document based on file type"""
        file_path = Path(file_path)
        
        try:
            if file_path.suffix.lower() in ['.xlsx', '.xls']:
                self.process_excel_file(file_path, event_type)
            elif file_path.suffix.lower() in ['.docx', '.doc']:
                self.process_word_file(file_path, event_type)
            elif file_path.suffix.lower() in ['.pptx', '.ppt']:
                self.process_powerpoint_file(file_path, event_type)
            elif file_path.suffix.lower() == '.pdf':
                self.process_pdf_file(file_path, event_type)
                
        except Exception as e:
            logging.error(f"Error processing document {file_path}: {str(e)}")
            
    def process_excel_file(self, file_path, event_type):
        """Process Excel file"""
        logging.info(f"Processing Excel file: {file_path}")
        
        try:
            result = subprocess.run(
                ["python", "scripts/process_excel.py"],
                capture_output=True,
                text=True,
                timeout=60
            )
            
            if result.returncode == 0:
                logging.info(f"Excel processing completed for {file_path}")
            else:
                logging.error(f"Excel processing failed: {result.stderr}")
                
        except subprocess.TimeoutExpired:
            logging.error("Excel processing timed out")
        except Exception as e:
            logging.error(f"Error processing Excel file: {str(e)}")
            
    def process_word_file(self, file_path, event_type):
        """Process Word file"""
        logging.info(f"Processing Word file: {file_path}")
        
        try:
            result = subprocess.run(
                ["python", "scripts/process_word.py"],
                capture_output=True,
                text=True,
                timeout=60
            )
            
            if result.returncode == 0:
                logging.info(f"Word processing completed for {file_path}")
            else:
                logging.error(f"Word processing failed: {result.stderr}")
                
        except subprocess.TimeoutExpired:
            logging.error("Word processing timed out")
        except Exception as e:
            logging.error(f"Error processing Word file: {str(e)}")
            
    def process_powerpoint_file(self, file_path, event_type):
        """Process PowerPoint file"""
        logging.info(f"Processing PowerPoint file: {file_path}")
        
        try:
            result = subprocess.run(
                ["python", "scripts/process_powerpoint.py"],
                capture_output=True,
                text=True,
                timeout=60
            )
            
            if result.returncode == 0:
                logging.info(f"PowerPoint processing completed for {file_path}")
            else:
                logging.error(f"PowerPoint processing failed: {result.stderr}")
                
        except subprocess.TimeoutExpired:
            logging.error("PowerPoint processing timed out")
        except Exception as e:
            logging.error(f"Error processing PowerPoint file: {str(e)}")
            
    def process_pdf_file(self, file_path, event_type):
        """Process PDF file"""
        logging.info(f"Processing PDF file: {file_path}")
        
        try:
            result = subprocess.run(
                ["python", "scripts/process_pdf.py"],
                capture_output=True,
                text=True,
                timeout=60
            )
            
            if result.returncode == 0:
                logging.info(f"PDF processing completed for {file_path}")
            else:
                logging.error(f"PDF processing failed: {result.stderr}")
                
        except subprocess.TimeoutExpired:
            logging.error("PDF processing timed out")
        except Exception as e:
            logging.error(f"Error processing PDF file: {str(e)}")

def main():
    """Main function to run the file watcher"""
    watcher = FileWatcher()
    
    try:
        watcher.start()
        
        # Keep the script running
        while True:
            time.sleep(1)
            
    except KeyboardInterrupt:
        logging.info("Received interrupt signal")
        watcher.stop()
        
if __name__ == "__main__":
    main()
