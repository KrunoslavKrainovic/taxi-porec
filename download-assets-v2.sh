#!/bin/bash

# Download Assets Script v2 for Taxi Poreč Website
# Handles errors gracefully and reports success/failure for each download

echo "========================================="
echo "  Taxi Poreč Asset Download Script v2"
echo "========================================="
echo ""

# Create directories
echo "Creating directory structure..."
mkdir -p images/logo
mkdir -p images/favicon
mkdir -p images/hero
mkdir -p images/fleet
mkdir -p images/icons
mkdir -p images/misc
echo "✓ Directories created"
echo ""

# User agent string
UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"

# Counters
SUCCESS=0
FAILED=0

# Function to download and verify
download_file() {
    local url=$1
    local output=$2
    local description=$3
    
    echo "Downloading: $description"
    echo "  URL: $url"
    
    # Download with error handling
    if curl -L -A "$UA" -f -s -S -o "$output" "$url" 2>/dev/null; then
        # Verify file exists and has content
        if [ -f "$output" ] && [ -s "$output" ]; then
            local filesize=$(du -h "$output" | cut -f1)
            local filetype=$(file -b "$output" 2>/dev/null || echo "unknown")
            echo "  ✅ SUCCESS - $filesize - $filetype"
            echo "  Saved to: $output"
            ((SUCCESS++))
        else
            echo "  ❌ FAILED - File is empty or not created"
            rm -f "$output" 2>/dev/null
            ((FAILED++))
        fi
    else
        echo "  ❌ FAILED - Could not download (may not be accessible)"
        rm -f "$output" 2>/dev/null
        ((FAILED++))
    fi
    echo ""
}

# Download Logo
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "LOGO FILES"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
download_file \
    "https://porectaxi.com/wp-content/uploads/2024/06/TRANSFER-OPATIJA-7.png" \
    "images/logo/logo-original.png" \
    "Main Logo (400x100px)"

download_file \
    "https://porectaxi.com/wp-content/uploads/2024/06/TRANSFER-OPATIJA-7-300x75.png" \
    "images/logo/logo-300x75.png" \
    "Logo Small (300x75px)"

# Download Favicon
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "FAVICON FILES"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
download_file \
    "https://porectaxi.com/wp-content/uploads/2024/06/taxi-CRIKVENICA-1.jpg" \
    "images/favicon/favicon-original.jpg" \
    "Favicon Original"

download_file \
    "https://porectaxi.com/wp-content/uploads/2024/06/taxi-CRIKVENICA-1-150x150.jpg" \
    "images/favicon/favicon-150x150.jpg" \
    "Favicon 150x150"

download_file \
    "https://porectaxi.com/wp-content/uploads/2024/06/taxi-CRIKVENICA-1-300x300.jpg" \
    "images/favicon/favicon-300x300.jpg" \
    "Favicon 300x300"

# Download Hero/Banner Images
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "HERO/BANNER FILES"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
download_file \
    "https://porectaxi.com/wp-content/uploads/2024/06/Untitled-design-10.png" \
    "images/hero/hero-banner.png" \
    "Hero Banner (500x220px)"

download_file \
    "https://porectaxi.com/wp-content/uploads/2024/06/Untitled-design-10-300x132.png" \
    "images/hero/hero-banner-300x132.png" \
    "Hero Banner Small (300x132px)"

# Download Miscellaneous Images
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "MISCELLANEOUS FILES"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
download_file \
    "https://porectaxi.com/wp-content/uploads/2024/06/Untitled-design-24.png" \
    "images/misc/design-credit.png" \
    "Design Credit (80x50px)"

# Summary
echo "========================================="
echo "  DOWNLOAD SUMMARY"
echo "========================================="
echo "✅ Successful downloads: $SUCCESS"
echo "❌ Failed downloads: $FAILED"
echo ""

if [ $SUCCESS -gt 0 ]; then
    echo "Successfully downloaded files:"
    find images -type f -name "*.png" -o -name "*.jpg" | while read file; do
        size=$(du -h "$file" | cut -f1)
        echo "  • $file ($size)"
    done
    echo ""
fi

if [ $FAILED -gt 0 ]; then
    echo "⚠️  Some files could not be downloaded."
    echo "   This is normal - some images may not be publicly accessible."
    echo ""
fi

echo "Next steps:"
echo "1. Review downloaded images in the 'images/' folder"
echo "2. Optimize images (compress, convert to WebP)"
echo "3. Create proper favicon set (16x16, 32x32, etc.)"
echo "4. Source additional photos for fleet and destinations"
echo ""
echo "✅ Script complete!"
echo ""
