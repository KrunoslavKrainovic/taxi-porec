#!/bin/bash

# Download Assets Script for Taxi Poreč Website
# Simple version with error handling

echo "========================================="
echo "  Taxi Poreč Asset Download Script"
echo "========================================="
echo ""

# Create directories
echo "Creating directories..."
mkdir -p images/logo
mkdir -p images/favicon
mkdir -p images/hero
mkdir -p images/fleet
mkdir -p images/icons
mkdir -p images/misc
echo "✓ Directories created"
echo ""

# Counters
SUCCESS=0
FAILED=0

# Function to download with error handling
download() {
    local url=$1
    local output=$2
    local name=$3
    
    echo -n "Downloading $name... "
    if curl -f -s -S -L -o "$output" "$url" 2>/dev/null && [ -s "$output" ]; then
        echo "✅"
        ((SUCCESS++))
    else
        echo "❌ (not accessible)"
        rm -f "$output" 2>/dev/null
        ((FAILED++))
    fi
}

# Download Logo
download \
    "https://porectaxi.com/wp-content/uploads/2024/06/TRANSFER-OPATIJA-7.png" \
    "images/logo/logo-original.png" \
    "Logo"

# Download Favicon
download \
    "https://porectaxi.com/wp-content/uploads/2024/06/taxi-CRIKVENICA-1-150x150.jpg" \
    "images/favicon/favicon-150x150.jpg" \
    "Favicon 150x150"

download \
    "https://porectaxi.com/wp-content/uploads/2024/06/taxi-CRIKVENICA-1-300x300.jpg" \
    "images/favicon/favicon-300x300.jpg" \
    "Favicon 300x300"

# Download Hero/Banner Image
download \
    "https://porectaxi.com/wp-content/uploads/2024/06/Untitled-design-10.png" \
    "images/hero/hero-banner.png" \
    "Hero Banner"

# Download other visible images from the site
download \
    "https://porectaxi.com/wp-content/uploads/2024/06/Untitled-design-24.png" \
    "images/misc/design-credit.png" \
    "Design Credit"

echo ""
echo "========================================="
echo "  SUMMARY"
echo "========================================="
echo "✅ Successful: $SUCCESS"
echo "❌ Failed: $FAILED"
echo ""

if [ $SUCCESS -gt 0 ]; then
    echo "Downloaded files are in the 'images/' folder"
    echo ""
fi

echo "Next steps:"
echo "1. Review downloaded images"
echo "2. Optimize images (compress, convert to WebP)"
echo "3. Create proper favicon set (16x16, 32x32, etc.)"
echo "4. Gather additional photos for fleet and destinations"
echo ""
