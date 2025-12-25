#!/bin/bash

# Quick Start Script for Tech Gear Project
# Run this from the project root directory

echo ""
echo "========================================"
echo "Tech Gear - Quick Start"
echo "========================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is not installed!"
    echo "Please download and install Node.js from: https://nodejs.org/"
    exit 1
fi

echo "Node.js is installed:"
node --version
echo ""

# Install dependencies
echo "Installing frontend dependencies..."
npm install
if [ $? -ne 0 ]; then
    echo "ERROR: Failed to install frontend dependencies"
    exit 1
fi

echo ""
echo "Installing backend dependencies..."
cd backend
npm install
if [ $? -ne 0 ]; then
    echo "ERROR: Failed to install backend dependencies"
    cd ..
    exit 1
fi
cd ..

echo ""
echo "========================================"
echo "Installation Complete!"
echo "========================================"
echo ""
echo "To start the project:"
echo ""
echo "1. Open two terminal windows"
echo ""
echo "2. In Terminal 1 (Backend):"
echo "   cd backend"
echo "   npm run dev"
echo ""
echo "3. In Terminal 2 (Frontend):"
echo "   npm run dev"
echo ""
echo "4. Open browser to: http://localhost:3000"
echo ""
echo "========================================"
echo ""
