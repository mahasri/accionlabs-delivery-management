#!/bin/bash

# AccionLabs Delivery Management Portal - GitHub Setup Script

echo "🚀 Setting up GitHub repository for AccionLabs Delivery Management Portal"
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Get GitHub username
echo "📝 Please enter your GitHub username:"
read -r github_username

if [ -z "$github_username" ]; then
    echo "❌ GitHub username is required."
    exit 1
fi

echo ""
echo "🔧 Setting up Git configuration..."

# Set Git user configuration
git config user.name "AccionLabs PMO"
git config user.email "pmo@accionlabs.com"

# Update mkdocs.yml with correct repository information
echo "📝 Updating mkdocs.yml with your GitHub repository information..."

# Create a backup of the original file
cp mkdocs.yml mkdocs.yml.backup

# Update the repository configuration
sed -i.bak "s|repo_name: accionlabs-delivery-management|repo_name: $github_username/accionlabs-delivery-management|g" mkdocs.yml
sed -i.bak "s|repo_url: https://github.com/accionlabs/accionlabs-delivery-management|repo_url: https://github.com/$github_username/accionlabs-delivery-management|g" mkdocs.yml

# Remove backup files
rm -f mkdocs.yml.bak

echo "✅ Configuration updated successfully!"
echo ""

echo "📋 Next steps:"
echo "1. Create a new repository on GitHub named 'accionlabs-delivery-management'"
echo "2. Run the following commands:"
echo ""
echo "   git remote add origin https://github.com/$github_username/accionlabs-delivery-management.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. After pushing to GitHub, the edit functionality will work correctly!"
echo ""
echo "📖 For detailed instructions, see DEPLOYMENT_GUIDE.md"
echo ""
echo "🎉 Setup complete! Your repository is ready for GitHub deployment."
