# 🚀 Deployment Guide - AccionLabs Delivery Management Portal

This guide will help you deploy the AccionLabs Delivery Management Portal to GitHub and enable the edit functionality.

## 📋 Prerequisites

- GitHub account
- Git installed on your machine
- Python 3.8+ installed

## 🔧 Step-by-Step Deployment

### 1. Create GitHub Repository

1. **Go to GitHub.com** and sign in to your account
2. **Click "New repository"** or the "+" icon in the top right
3. **Repository settings:**
   - **Repository name:** `accionlabs-delivery-management`
   - **Description:** `AccionLabs Delivery Management Portal - Comprehensive intranet site for delivery excellence and governance`
   - **Visibility:** Choose Private (recommended for internal company content)
   - **Initialize with:** Don't initialize (we already have content)
4. **Click "Create repository"**

### 2. Connect Local Repository to GitHub

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/accionlabs-delivery-management.git

# Push the code to GitHub
git branch -M main
git push -u origin main
```

### 3. Update Configuration for Your Repository

Edit the `mkdocs.yml` file and update these lines with your actual GitHub repository URL:

```yaml
# Repository
repo_name: YOUR_USERNAME/accionlabs-delivery-management
repo_url: https://github.com/YOUR_USERNAME/accionlabs-delivery-management
edit_uri: edit/main/docs/
```

### 4. Enable GitHub Pages (Optional)

If you want to host the site on GitHub Pages:

1. **Go to your repository on GitHub**
2. **Click "Settings"** tab
3. **Scroll down to "Pages"** section
4. **Source:** Select "Deploy from a branch"
5. **Branch:** Select "main" and "/docs" folder
6. **Click "Save"**

### 5. Test Edit Functionality

1. **Start the development server:**
   ```bash
   ./start_dev_server.sh
   ```

2. **Navigate to any page** on your site
3. **Click the edit icon** (pencil icon) in the top right
4. **You should be redirected to GitHub** where you can edit the file directly

## 🎯 Edit Workflow

### Option 1: Direct GitHub Editing (Recommended for quick changes)

1. **Click the edit icon** on any page
2. **Make your changes** in the GitHub web editor
3. **Commit changes** with a descriptive message
4. **Changes will be live** once you rebuild the site

### Option 2: Local Development (Recommended for major changes)

1. **Clone the repository locally:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/accionlabs-delivery-management.git
   cd accionlabs-delivery-management
   ```

2. **Set up virtual environment:**
   ```bash
   python3 -m venv genai
   source genai/bin/activate
   pip install -r requirements.txt
   ```

3. **Start development server:**
   ```bash
   ./start_dev_server.sh
   ```

4. **Make changes** to the markdown files in `docs/`
5. **Preview changes** in real-time at `http://127.0.0.1:8001`
6. **Commit and push changes:**
   ```bash
   git add .
   git commit -m "Update content: [description of changes]"
   git push
   ```

## 📝 Content Management

### Adding New Pages

1. **Create new markdown file** in appropriate directory under `docs/`
2. **Add to navigation** in `mkdocs.yml`
3. **Test locally** with development server
4. **Commit and push** changes

### Updating Existing Content

1. **Find the markdown file** in the `docs/` directory
2. **Edit the content** using your preferred editor
3. **Preview changes** with development server
4. **Commit and push** changes

### Document Embedding

1. **Upload documents** to `assets/sharepoint/documents/`
2. **Use embed templates** from the README.md
3. **Test embeds** in development server
4. **Commit and push** changes

## 🔄 Continuous Deployment

### Automated Build (Optional)

You can set up GitHub Actions for automatic deployment:

1. **Create `.github/workflows/deploy.yml`:**
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [ main ]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
       - uses: actions/checkout@v2
       - uses: actions/setup-python@v2
         with:
           python-version: 3.8
       - run: pip install mkdocs-material
       - run: mkdocs gh-deploy --force
   ```

2. **Push the workflow file** to your repository
3. **GitHub will automatically build and deploy** your site

## 🛠️ Customization

### Branding

1. **Update logo:** Replace `assets/sharepoint/media/accionlabs-logo.png`
2. **Update favicon:** Replace `assets/sharepoint/media/favicon.ico`
3. **Update colors:** Edit `assets/stylesheets/extra.css`

### Content Structure

1. **Modify navigation:** Edit the `nav` section in `mkdocs.yml`
2. **Add new sections:** Create new directories and files in `docs/`
3. **Update templates:** Modify existing template files

### SharePoint Integration

1. **Configure SharePoint sync:** Set up OneDrive sync for `assets/sharepoint/`
2. **Update document processing:** Modify scripts in `scripts/` directory
3. **Test document embeds:** Use the provided embed templates

## 🚨 Troubleshooting

### Edit Links Not Working

- **Check repository URL** in `mkdocs.yml`
- **Ensure repository is public** or you have proper access
- **Verify edit_uri** is set correctly

### Development Server Issues

- **Check virtual environment:** Ensure `genai` environment is activated
- **Install dependencies:** Run `pip install -r requirements.txt`
- **Check port availability:** Use different port if 8001 is busy

### Build Errors

- **Check markdown syntax:** Ensure all markdown files are valid
- **Verify navigation:** Check that all links in `mkdocs.yml` exist
- **Review logs:** Check for specific error messages

## 📞 Support

- **GitHub Issues:** Create issues in your repository for bugs
- **Documentation:** Check MkDocs documentation for advanced features
- **Community:** Join MkDocs community for help and tips

---

## 🎉 Success!

Once you've completed these steps, you'll have:

✅ **Working edit functionality** - Click edit icons to edit directly on GitHub  
✅ **Live development server** - Real-time preview of changes  
✅ **Professional intranet site** - Ready for your content  
✅ **SharePoint integration** - Document management capabilities  
✅ **Responsive design** - Works on all devices  

**Your AccionLabs Delivery Management Portal is now ready for use!**
