#!/bin/bash

# AgentTalk Website Deployment Script
# This script helps deploy the built React app to your server

echo "🚀 AgentTalk Website Deployment"
echo "================================"

# Check if build folder exists
if [ ! -d "build" ]; then
    echo "❌ Build folder not found. Run 'npm run build' first."
    exit 1
fi

echo "✅ Build folder found"
echo "📁 Contents:"
ls -la build/

echo ""
echo "🌐 Deployment Options:"
echo "1. Upload to server via SCP/SFTP"
echo "2. Deploy to Vercel"
echo "3. Deploy to Netlify"
echo "4. Deploy to GitHub Pages"
echo "5. Manual upload instructions"

read -p "Choose deployment method (1-5): " choice

case $choice in
    1)
        echo ""
        echo "📤 Server Upload via SCP/SFTP"
        echo "============================="
        read -p "Enter server hostname/IP: " server_host
        read -p "Enter username: " username
        read -p "Enter remote directory path (e.g., /var/www/html): " remote_path
        
        echo "Uploading files to $username@$server_host:$remote_path"
        echo "This may take a few minutes..."
        
        # Upload all build contents
        scp -r build/* $username@$server_host:$remote_path/
        
        if [ $? -eq 0 ]; then
            echo "✅ Upload successful!"
            echo "🌐 Your site should be live at: http://$server_host"
            echo "📊 Pitch deck available at: http://$server_host/pitch-deck.html"
        else
            echo "❌ Upload failed. Check your credentials and server path."
        fi
        ;;
    2)
        echo ""
        echo "🚀 Vercel Deployment"
        echo "==================="
        echo "1. Install Vercel CLI: npm i -g vercel"
        echo "2. Run: vercel --prod"
        echo "3. Follow the prompts"
        ;;
    3)
        echo ""
        echo "🌐 Netlify Deployment"
        echo "===================="
        echo "1. Install Netlify CLI: npm i -g netlify-cli"
        echo "2. Run: netlify deploy --prod --dir=build"
        echo "3. Follow the prompts"
        ;;
    4)
        echo ""
        echo "📚 GitHub Pages Deployment"
        echo "========================="
        echo "1. Add to package.json:"
        echo '   "homepage": "https://yourusername.github.io/reponame"'
        echo "2. Install gh-pages: npm install --save-dev gh-pages"
        echo "3. Add scripts:"
        echo '   "predeploy": "npm run build"'
        echo '   "deploy": "gh-pages -d build"'
        echo "4. Run: npm run deploy"
        ;;
    5)
        echo ""
        echo "📋 Manual Upload Instructions"
        echo "============================"
        echo "1. Copy all files from the 'build' folder"
        echo "2. Upload them to your web server's root directory"
        echo "3. Ensure your server is configured to serve static files"
        echo "4. Your pitch deck will be available at: /pitch-deck.html"
        echo ""
        echo "📁 Files to upload:"
        ls -la build/
        ;;
    *)
        echo "❌ Invalid choice"
        exit 1
        ;;
esac

echo ""
echo "🎉 Deployment complete!"
echo "📊 Your pitch deck is available at: /pitch-deck.html"
echo "🏠 Main site: /"
