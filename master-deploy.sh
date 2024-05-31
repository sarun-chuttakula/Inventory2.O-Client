#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

# Define your project directory (update this path as necessary)
PROJECT_DIR="/Users/ch.sarun/Documents/Code/Projects/Inventory/client"

# Define the build output directory
BUILD_DIR="$PROJECT_DIR/build"

# Define the application name for pm2
APP_NAME="react-app"

# Navigate to the project directory
cd $PROJECT_DIR

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the React project
echo "Building the project..."
npm run build

# Check if the build was successful
if [ ! -d "$BUILD_DIR" ]; then
  echo "Build directory not found. Build failed."
  exit 1
fi

# Install serve globally if not already installed
if ! command -v serve &> /dev/null
then
    echo "Serve is not installed. Installing serve globally..."
    npm install -g serve
fi

# Stop the existing pm2 process if it is running
echo "Stopping existing pm2 process if it is running..."
pm2 stop $APP_NAME || true

# Serve the build directory using pm2
echo "Deploying the build with pm2..."
pm2 serve $BUILD_DIR 3000 --name $APP_NAME --spa

echo "Deployment complete. Your app is running on port 3000 and managed by pm2."
