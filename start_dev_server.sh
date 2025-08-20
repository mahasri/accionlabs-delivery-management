#!/bin/bash

# AccionLabs Delivery Management Portal - Development Server Startup Script

echo "🚀 Starting AccionLabs Delivery Management Portal Development Server..."

# Check if virtual environment exists
if [ ! -d "genai" ]; then
    echo "❌ Virtual environment 'genai' not found!"
    echo "Please create a virtual environment named 'genai' first."
    exit 1
fi

# Activate virtual environment
echo "📦 Activating virtual environment..."
source genai/bin/activate

# Check if MkDocs is installed
if ! command -v mkdocs &> /dev/null; then
    echo "❌ MkDocs not found! Installing dependencies..."
    pip install mkdocs mkdocs-material mkdocs-minify-plugin
fi

# Start development server
echo "🌐 Starting development server on http://127.0.0.1:8001"
echo "📝 Press Ctrl+C to stop the server"
echo ""

mkdocs serve --dev-addr=127.0.0.1:8001
