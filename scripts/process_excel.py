#!/usr/bin/env python3
"""
Excel Document Processing Script for AccionLabs Delivery Management Portal

This script processes Excel files from SharePoint and generates embed codes
for web integration.
"""

import pandas as pd
import os
import json
import re
from pathlib import Path
from datetime import datetime
import logging

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('excel_processing.log'),
        logging.StreamHandler()
    ]
)

class ExcelProcessor:
    """Process Excel files for web embedding"""
    
    def __init__(self, input_dir="assets/sharepoint/documents/excel/", 
                 output_dir="assets/sharepoint/processed/"):
        self.input_dir = Path(input_dir)
        self.output_dir = Path(output_dir)
        self.output_dir.mkdir(parents=True, exist_ok=True)
        
    def process_excel_files(self):
        """Process all Excel files in the input directory"""
        logging.info(f"Processing Excel files from {self.input_dir}")
        
        excel_files = list(self.input_dir.glob("*.xlsx")) + list(self.input_dir.glob("*.xls"))
        
        if not excel_files:
            logging.info("No Excel files found to process")
            return
            
        for excel_file in excel_files:
            try:
                self.process_single_file(excel_file)
            except Exception as e:
                logging.error(f"Error processing {excel_file}: {str(e)}")
                
    def process_single_file(self, file_path):
        """Process a single Excel file"""
        logging.info(f"Processing {file_path}")
        
        # Read Excel file
        excel_data = pd.read_excel(file_path, sheet_name=None)
        
        # Generate metadata
        metadata = self.generate_metadata(file_path, excel_data)
        
        # Generate embed code
        embed_code = self.generate_embed_code(file_path, metadata)
        
        # Save processed data
        self.save_processed_data(file_path, metadata, embed_code)
        
        logging.info(f"Successfully processed {file_path}")
        
    def generate_metadata(self, file_path, excel_data):
        """Generate metadata for the Excel file"""
        metadata = {
            "filename": file_path.name,
            "file_path": str(file_path),
            "processed_date": datetime.now().isoformat(),
            "sheets": list(excel_data.keys()),
            "total_sheets": len(excel_data),
            "file_size": file_path.stat().st_size,
            "file_type": file_path.suffix
        }
        
        # Add sheet-specific metadata
        sheet_metadata = {}
        for sheet_name, df in excel_data.items():
            sheet_metadata[sheet_name] = {
                "rows": len(df),
                "columns": len(df.columns),
                "column_names": list(df.columns),
                "data_types": df.dtypes.to_dict()
            }
        metadata["sheet_details"] = sheet_metadata
        
        return metadata
        
    def generate_embed_code(self, file_path, metadata):
        """Generate HTML embed code for the Excel file"""
        # Create SharePoint URL (this would be configured based on your SharePoint setup)
        sharepoint_url = self.get_sharepoint_url(file_path)
        
        embed_code = f"""
<div class="embed-container">
  <div class="excel-embed-header">
    <h4>📊 {metadata['filename']}</h4>
    <p>Processed: {metadata['processed_date']}</p>
    <p>Sheets: {', '.join(metadata['sheets'])}</p>
  </div>
  <iframe src="https://view.officeapps.live.com/op/embed.aspx?src={sharepoint_url}" 
          frameborder="0" allowfullscreen>
  </iframe>
  <div class="excel-embed-footer">
    <p><strong>File Details:</strong> {metadata['total_sheets']} sheets, {metadata['file_size']} bytes</p>
    <p><a href="{sharepoint_url}" target="_blank">Open in SharePoint</a></p>
  </div>
</div>
"""
        return embed_code
        
    def get_sharepoint_url(self, file_path):
        """Generate SharePoint URL for the file"""
        # This is a placeholder - you would implement based on your SharePoint setup
        base_url = "https://accionlabs.sharepoint.com/sites/delivery-management"
        file_path_encoded = file_path.name.replace(" ", "%20")
        return f"{base_url}/Shared%20Documents/Delivery%20Management/{file_path_encoded}"
        
    def save_processed_data(self, file_path, metadata, embed_code):
        """Save processed data to output directory"""
        output_file = self.output_dir / f"{file_path.stem}_processed.json"
        
        processed_data = {
            "metadata": metadata,
            "embed_code": embed_code,
            "markdown_template": self.generate_markdown_template(file_path, metadata, embed_code)
        }
        
        with open(output_file, 'w') as f:
            json.dump(processed_data, f, indent=2)
            
        logging.info(f"Saved processed data to {output_file}")
        
    def generate_markdown_template(self, file_path, metadata, embed_code):
        """Generate markdown template for the Excel file"""
        template = f"""# {metadata['filename']}

## 📊 Excel Document Overview

**File:** {metadata['filename']}  
**Processed:** {metadata['processed_date']}  
**Sheets:** {metadata['total_sheets']}  
**Size:** {metadata['file_size']} bytes

## 📋 Sheet Information

"""
        
        for sheet_name, details in metadata['sheet_details'].items():
            template += f"""### {sheet_name}
- **Rows:** {details['rows']}
- **Columns:** {details['columns']}
- **Columns:** {', '.join(details['column_names'])}

"""
            
        template += f"""## 📄 Document Embed

{embed_code}

## 📝 Usage Instructions

1. **View Online:** Click the embed above to view the document
2. **Download:** Use the SharePoint link to download the original file
3. **Edit:** Open in SharePoint for collaborative editing
4. **Share:** Use SharePoint sharing features for team collaboration

## 🔄 Update Process

This document is automatically synced from SharePoint. Updates will be reflected here within 24 hours.

---
*Last updated: {metadata['processed_date']}*
"""
        
        return template

def main():
    """Main function to run the Excel processor"""
    processor = ExcelProcessor()
    processor.process_excel_files()
    
if __name__ == "__main__":
    main()
