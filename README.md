# AccionLabs Delivery Management Portal

A comprehensive intranet website for AccionLabs delivery management, providing centralized access to templates, checklists, dashboards, and governance frameworks.

## 🚀 Quick Start

### Prerequisites
- Python 3.8 or higher
- Git
- Node.js (optional, for additional tools)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/accionlabs/accionlabs-delivery-management.git
   cd accionlabs-delivery-management
   ```

2. **Install MkDocs and dependencies**
   ```bash
   pip install mkdocs mkdocs-material mkdocs-git-revision-date-localized mkdocs-minify-plugin mkdocs-awesome-pages-plugin mkdocs-section-index-plugin mkdocs-macros-plugin
   ```

3. **Start the development server**
   ```bash
   mkdocs serve
   ```

4. **Access the site**
   Open your browser and navigate to `http://127.0.0.1:8000`

## 📁 Project Structure

```
accionlabs-delivery-management/
├── docs/                          # Documentation content
│   ├── index.md                   # Homepage
│   ├── delivery-excellence/       # Delivery Excellence Framework
│   │   ├── index.md
│   │   ├── checklists/           # Delivery checklists
│   │   ├── templates/            # Report templates
│   │   └── induction-guide.md    # Team induction guide
│   └── delivery-governance/      # Delivery Governance Framework
│       ├── index.md
│       ├── maturity-dashboard.md
│       ├── review-process.md
│       ├── architecture-value-board/  # AVB framework
│       └── program-value-board/       # PVB framework
├── assets/                        # Static assets
│   ├── stylesheets/
│   │   └── extra.css             # Custom styling
│   └── sharepoint/               # SharePoint integration
│       ├── documents/            # Document storage
│       ├── templates/            # Template storage
│       └── media/                # Media storage
├── mkdocs.yml                    # MkDocs configuration
└── README.md                     # This file
```

## 🛠️ Development Workflow

### Development Server

The development server provides live reload functionality for real-time development:

```bash
# Start development server with live reload
mkdocs serve

# Start with specific host and port
mkdocs serve -a 0.0.0.0:8080

# Start with verbose output
mkdocs serve -v
```

**Server Features:**
- **Live Reload**: Automatically refreshes browser when files change
- **Hot Reload**: Instant updates without full page refresh
- **Error Reporting**: Real-time error messages in browser and terminal
- **File Watching**: Monitors all documentation files for changes

### Building for Production

```bash
# Build static site
mkdocs build

# Build with clean directory
mkdocs build --clean

# Build with verbose output
mkdocs build -v
```

### Deployment

```bash
# Deploy to GitHub Pages
mkdocs gh-deploy

# Deploy with custom message
mkdocs gh-deploy -m "Update documentation"

# Deploy to custom remote
mkdocs gh-deploy --remote-name custom
```

## 📋 Content Management

### Adding New Pages

1. **Create new markdown file** in appropriate directory
2. **Add frontmatter** (optional):
   ```yaml
   ---
   title: Page Title
   description: Page description
   ---
   ```
3. **Update navigation** in `mkdocs.yml`
4. **Test locally** with development server

### Content Guidelines

- **File Naming**: Use kebab-case for file names
- **Headings**: Use proper heading hierarchy (H1 → H2 → H3)
- **Links**: Use relative links for internal navigation
- **Images**: Store in `assets/sharepoint/media/` and use relative paths
- **Code**: Use appropriate code blocks with language specification

### Embed Templates

#### Excel Files
```html
<div class="embed-container">
  <iframe src="https://view.officeapps.live.com/op/embed.aspx?src=[EXCEL_URL]" 
          frameborder="0" allowfullscreen>
  </iframe>
</div>
```

#### Word Documents
```html
<div class="embed-container">
  <iframe src="https://view.officeapps.live.com/op/embed.aspx?src=[WORD_URL]" 
          frameborder="0" allowfullscreen>
  </iframe>
</div>
```

#### PowerPoint Presentations
```html
<div class="embed-container">
  <iframe src="https://view.officeapps.live.com/op/embed.aspx?src=[PPT_URL]" 
          frameborder="0" allowfullscreen>
  </iframe>
</div>
```

#### Looker Studio Dashboards
```html
<div class="embed-container">
  <iframe src="[LOOKER_STUDIO_URL]" 
          frameborder="0" allowfullscreen>
  </iframe>
</div>
```

#### Calendar Integration
```html
<div class="embed-container">
  <iframe src="[CALENDAR_URL]" 
          frameborder="0" allowfullscreen>
  </iframe>
</div>
```

## 🔗 SharePoint Integration

### SharePoint Sync Workflow

1. **Document Organization**
   - Store documents in `assets/sharepoint/documents/`
   - Organize by category: templates, reports, guides, etc.
   - Use consistent naming conventions

2. **OneDrive Sync**
   ```bash
   # Sync SharePoint documents to local
   # Configure OneDrive sync for SharePoint document library
   # Documents will automatically sync to assets/sharepoint/
   ```

3. **Document Processing Scripts**

#### Excel Processing
```python
# scripts/process_excel.py
import pandas as pd
import os

def process_excel_files():
    """Process Excel files for web embedding"""
    excel_dir = "assets/sharepoint/documents/excel/"
    for file in os.listdir(excel_dir):
        if file.endswith('.xlsx'):
            # Process Excel file
            df = pd.read_excel(os.path.join(excel_dir, file))
            # Generate embed code
            generate_embed_code(file, df)
```

#### Word Processing
```python
# scripts/process_word.py
from docx import Document
import os

def process_word_files():
    """Process Word documents for web embedding"""
    word_dir = "assets/sharepoint/documents/word/"
    for file in os.listdir(word_dir):
        if file.endswith('.docx'):
            # Process Word document
            doc = Document(os.path.join(word_dir, file))
            # Generate embed code
            generate_embed_code(file, doc)
```

#### PowerPoint Processing
```python
# scripts/process_powerpoint.py
from pptx import Presentation
import os

def process_powerpoint_files():
    """Process PowerPoint presentations for web embedding"""
    ppt_dir = "assets/sharepoint/documents/powerpoint/"
    for file in os.listdir(ppt_dir):
        if file.endswith('.pptx'):
            # Process PowerPoint file
            prs = Presentation(os.path.join(ppt_dir, file))
            # Generate embed code
            generate_embed_code(file, prs)
```

### File Watcher Configuration

```python
# scripts/file_watcher.py
import time
import os
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

class DocumentHandler(FileSystemEventHandler):
    def on_modified(self, event):
        if event.is_directory:
            return
        if event.src_path.endswith(('.xlsx', '.docx', '.pptx')):
            print(f"Document changed: {event.src_path}")
            # Trigger rebuild
            os.system("mkdocs build")

def start_file_watcher():
    event_handler = DocumentHandler()
    observer = Observer()
    observer.schedule(event_handler, 'assets/sharepoint/', recursive=True)
    observer.start()
    return observer
```

### Pandoc Integration

```bash
# Convert Word documents to Markdown
pandoc -f docx -t markdown input.docx -o output.md

# Convert Excel to CSV for processing
pandoc -f xlsx -t csv input.xlsx -o output.csv

# Convert PowerPoint to HTML
pandoc -f pptx -t html input.pptx -o output.html
```

## 📤 Document Upload Procedures

### Upload Placeholders

Use these placeholders in your markdown files for document uploads:

```html
<div class="upload-placeholder">
  <h4>📄 Document Upload</h4>
  <p>Upload your document here for processing and embedding.</p>
  <p><strong>Supported formats:</strong> Excel (.xlsx), Word (.docx), PowerPoint (.pptx), PDF (.pdf)</p>
  <p><strong>Instructions:</strong> Drag and drop or click to upload</p>
</div>
```

### Upload Workflow

1. **Upload Document** to SharePoint
2. **Sync to Local** via OneDrive
3. **Process Document** using appropriate script
4. **Generate Embed Code** automatically
5. **Update Page** with embed code
6. **Test Embed** in development server

### Document Processing Pipeline

```bash
# Automated processing pipeline
python scripts/process_documents.py

# Manual processing
python scripts/process_excel.py
python scripts/process_word.py
python scripts/process_powerpoint.py
```

## 🔧 Configuration

### MkDocs Configuration

The `mkdocs.yml` file contains all site configuration:

```yaml
site_name: AccionLabs Delivery Management
site_description: Comprehensive delivery management portal
site_author: AccionLabs PMO
site_url: https://accionlabs.github.io/delivery-management

theme:
  name: material
  palette:
    - media: "(prefers-color-scheme)"
      scheme: default
      primary: indigo
      accent: indigo
      toggle:
        icon: material/toggle-switch
        name: Switch to dark mode
    - media: "(prefers-color-scheme: dark)"
      scheme: slate
      primary: indigo
      accent: indigo
      toggle:
        icon: material/toggle-switch-off-outline
        name: Switch to light mode

plugins:
  - search
  - git-revision-date-localized
  - minify:
      minify_html: true
  - awesome-pages
  - section-index
  - macros

markdown_extensions:
  - abbr
  - admonition
  - attr_list
  - codehilite
  - def_list
  - footnotes
  - md_in_html
  - toc
  - pymdownx.arithmatex
  - pymdownx.betterem
  - pymdownx.caret
  - pymdownx.details
  - pymdownx.emoji
  - pymdownx.highlight
  - pymdownx.inlinehilite
  - pymdownx.keys
  - pymdownx.magiclink
  - pymdownx.mark
  - pymdownx.smartsymbols
  - pymdownx.snippets
  - pymdownx.superfences:
      custom_fences:
        - name: mermaid
          class: mermaid
          format: !!python/name:pymdownx.superfences.fence_code_format
  - pymdownx.tabbed
  - pymdownx.tasklist
  - pymdownx.tilde

extra_css:
  - stylesheets/extra.css

extra_javascript:
  - https://unpkg.com/mermaid@8.13.0/dist/mermaid.min.js
  - javascripts/mermaid-init.js

extra:
  social:
    - icon: fontawesome/brands/github
      link: https://github.com/accionlabs
    - icon: fontawesome/brands/linkedin
      link: https://linkedin.com/company/accionlabs
    - icon: fontawesome/brands/twitter
      link: https://twitter.com/accionlabs

copyright: Copyright &copy; 2024 AccionLabs
```

### Custom Styling

The `assets/stylesheets/extra.css` file contains custom AccionLabs branding:

- **Brand Colors**: Deep blue, bright blue, orange accent
- **Typography**: Inter font family
- **Components**: Cards, grids, status indicators
- **Responsive Design**: Mobile-friendly layouts
- **Dark Mode Support**: Automatic theme switching

## 🚨 Troubleshooting

### Common Issues

#### Development Server Won't Start
```bash
# Check if port is in use
lsof -i :8000

# Kill process using port
kill -9 <PID>

# Start server on different port
mkdocs serve -a 127.0.0.1:8001
```

#### Build Errors
```bash
# Clean build directory
rm -rf site/

# Rebuild with verbose output
mkdocs build -v

# Check for syntax errors
mkdocs build --strict
```

#### Plugin Issues
```bash
# Reinstall plugins
pip uninstall mkdocs-material mkdocs-git-revision-date-localized mkdocs-minify-plugin mkdocs-awesome-pages-plugin mkdocs-section-index-plugin mkdocs-macros-plugin
pip install mkdocs-material mkdocs-git-revision-date-localized mkdocs-minify-plugin mkdocs-awesome-pages-plugin mkdocs-section-index-plugin mkdocs-macros-plugin
```

#### SharePoint Sync Issues
```bash
# Check OneDrive sync status
onedrive --status

# Force sync
onedrive --synchronize

# Reset OneDrive
onedrive --reset
```

### Performance Optimization

#### Large Document Processing
```python
# Process documents in batches
def process_documents_batch(directory, batch_size=10):
    files = os.listdir(directory)
    for i in range(0, len(files), batch_size):
        batch = files[i:i + batch_size]
        process_batch(batch)
```

#### Memory Management
```python
# Use generators for large files
def process_large_file(file_path):
    with open(file_path, 'r') as f:
        for line in f:
            yield process_line(line)
```

### Debug Mode

```bash
# Enable debug mode
export MKDOCS_DEBUG=1
mkdocs serve

# Check configuration
mkdocs config

# Validate configuration
mkdocs build --strict
```

## 📞 Support

### Contact Information
- **PMO Team**: pmo@accionlabs.com
- **Technical Support**: tech-support@accionlabs.com
- **Content Management**: content@accionlabs.com

### Resources
- **MkDocs Documentation**: https://www.mkdocs.org/
- **Material for MkDocs**: https://squidfunk.github.io/mkdocs-material/
- **AccionLabs Internal Wiki**: [Internal Link]
- **Support Portal**: [Internal Link]

### Training
- **Content Management Training**: Available through LMS
- **Technical Training**: Scheduled monthly sessions
- **Best Practices Workshop**: Quarterly sessions

## 📝 Contributing

### Contribution Guidelines
1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/new-feature`
3. **Make changes** following content guidelines
4. **Test locally** with development server
5. **Submit pull request** with detailed description

### Code of Conduct
- Follow AccionLabs coding standards
- Maintain professional communication
- Respect team members and stakeholders
- Provide constructive feedback

## 📄 License

This project is proprietary to AccionLabs. All rights reserved.

---

*Last updated: {{ git_revision_date_localized }}*
