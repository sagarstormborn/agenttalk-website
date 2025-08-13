#!/bin/bash

# AgentTalk Nginx Deployment Script
# Deploys the React build to /var/www/agenttalk.dev/

echo "🚀 Deploying AgentTalk to Nginx Server"
echo "======================================"

# Check if build folder exists
if [ ! -d "build" ]; then
    echo "❌ Build folder not found. Run 'npm run build' first."
    exit 1
fi

echo "✅ Build folder found"
echo "📁 Deploying files to /var/www/agenttalk.dev/"

# Deploy files
sudo cp -r build/* /var/www/agenttalk.dev/

if [ $? -eq 0 ]; then
    echo "✅ Files copied successfully"
else
    echo "❌ Failed to copy files"
    exit 1
fi

# Set proper permissions
sudo chown -R www-data:www-data /var/www/agenttalk.dev/
echo "✅ Permissions set"

# Test nginx config
echo "🔧 Testing nginx configuration..."
sudo nginx -t

if [ $? -eq 0 ]; then
    echo "✅ Nginx configuration is valid"
    
    # Reload nginx
    echo "🔄 Reloading nginx..."
    sudo systemctl reload nginx
    
    if [ $? -eq 0 ]; then
        echo "✅ Nginx reloaded successfully"
    else
        echo "❌ Failed to reload nginx"
        exit 1
    fi
else
    echo "❌ Nginx configuration has errors"
    exit 1
fi

echo ""
echo "🎉 Deployment Complete!"
echo "======================"
echo "🌐 Main Site: https://agenttalk.dev/"
echo "📊 Pitch Deck: https://agenttalk.dev/pitch-deck.html"
echo "📱 Demo: https://agenttalk.dev/demo"
echo "📋 Protocol: https://agenttalk.dev/protocol"
echo ""
echo "✨ Your new version is now live!"
