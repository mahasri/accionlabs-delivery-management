#!/usr/bin/env python3
"""
Script to copy documents folder to site directory after MkDocs build
"""
import os
import shutil
from pathlib import Path

def copy_documents():
    """Copy documents folder from docs/assets/documents to site/assets/documents"""
    
    # Define paths
    docs_source = Path("docs/assets/documents")
    site_destination = Path("site/assets/documents")
    
    # Check if source exists
    if not docs_source.exists():
        print(f"Source directory {docs_source} does not exist")
        return
    
    # Create destination directory if it doesn't exist
    site_destination.mkdir(parents=True, exist_ok=True)
    
    # Copy all files from source to destination
    for file_path in docs_source.iterdir():
        if file_path.is_file():
            dest_file = site_destination / file_path.name
            shutil.copy2(file_path, dest_file)
            print(f"Copied: {file_path.name}")
    
    print(f"Documents copied to {site_destination}")

if __name__ == "__main__":
    copy_documents()
