#!/bin/bash

echo "🚀 AgentTalk Frontend Redeployment"
echo "=================================="

# Stop any running processes
echo "🛑 Stopping any running processes..."
pkill -f "serve -s build" 2>/dev/null || true

# Clean build
echo "🧹 Cleaning previous build..."
rm -rf build/

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🌐 Testing locally..."
    npx serve -s build -l 3000 &
    sleep 3
    
    # Test for Web3Forms errors
    if curl -s http://localhost:3000/ | grep -q "web3forms\|error"; then
        echo "❌ Web3Forms errors detected!"
    else
        echo "✅ No Web3Forms errors found!"
    fi
    
    if curl -s http://localhost:3000/contact | grep -q "web3forms\|error"; then
        echo "❌ Web3Forms errors detected on contact page!"
    else
        echo "✅ No Web3Forms errors found on contact page!"
    fi
    
    # Stop the test server
    pkill -f "serve -s build"
    
    echo ""
    echo "📁 Build files ready in 'build/' directory"
    echo ""
    echo "🚀 Deployment Options:"
    echo "1. Run: ./deploy.sh (for server deployment)"
    echo "2. Run: npx serve -s build -l 3000 (for local testing)"
    echo "3. Upload build/ folder to your web server"
    echo ""
    echo "🔗 Backend API should be running on: http://localhost:3001"
    echo "📧 Contact form will send data to your custom backend"
    
else
    echo "❌ Build failed!"
    exit 1
fi
