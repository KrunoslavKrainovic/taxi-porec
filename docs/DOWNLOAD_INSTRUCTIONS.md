# Asset Download Instructions

## Overview
Two scripts are available to download images from the old porectaxi.com website. Both scripts handle errors gracefully - some images may not be accessible, and that's normal.

## Scripts Available

### 1. Simple Script: `download-assets.sh`
- **Best for**: Quick downloads with minimal output
- **Features**: Clean, concise output with success/fail indicators

### 2. Detailed Script: `download-assets-v2.sh`
- **Best for**: Detailed information about each download
- **Features**: Shows file sizes, types, and full URLs

## How to Run

### Option 1: Simple Script (Recommended)
```bash
cd "/Users/krunoslavkrainovic/Documents/Developer/taxi porec"
./download-assets.sh
```

### Option 2: Detailed Script
```bash
cd "/Users/krunoslavkrainovic/Documents/Developer/taxi porec"
./download-assets-v2.sh
```

## What Gets Downloaded

### Logo Files
- ✅ Main logo (400x100px) → `images/logo/logo-original.png`
- ✅ Small logo (300x75px) → `images/logo/logo-300x75.png` (v2 only)

### Favicon Files
- ✅ Favicon 150x150 → `images/favicon/favicon-150x150.jpg`
- ✅ Favicon 300x300 → `images/favicon/favicon-300x300.jpg`
- ✅ Favicon original → `images/favicon/favicon-original.jpg` (v2 only)

### Hero/Banner Files
- ✅ Hero banner (500x220px) → `images/hero/hero-banner.png`
- ✅ Hero banner small (300x132px) → `images/hero/hero-banner-300x132.png` (v2 only)

### Miscellaneous
- ✅ Design credit image → `images/misc/design-credit.png`

## Expected Results

### Success Indicators
- ✅ Green checkmarks indicate successful downloads
- Files will be saved in the `images/` directory structure
- Summary shows count of successful vs failed downloads

### Failure Indicators
- ❌ Red X marks indicate files that couldn't be downloaded
- This is **normal** - some images may not be publicly accessible
- Failed downloads are automatically cleaned up (empty files removed)

## After Download

### Immediate Next Steps
1. **Review downloaded images**
   ```bash
   ls -lh images/logo/
   ls -lh images/favicon/
   ls -lh images/hero/
   ```

2. **View images** (macOS)
   ```bash
   open images/logo/logo-original.png
   open images/hero/hero-banner.png
   ```

### Image Optimization Tasks
1. **Convert to WebP** (for better web performance)
2. **Compress images** (reduce file sizes)
3. **Create favicon set** (16x16, 32x32, etc.)
4. **Source additional images** (fleet photos, destinations)

## Troubleshooting

### Script won't run
```bash
# Make scripts executable
chmod +x download-assets.sh download-assets-v2.sh
```

### All downloads fail
- Check internet connection
- Website may be temporarily down
- Some images may have been removed from the old site

### Partial downloads
- This is normal and expected
- Use whatever downloads successfully
- Source missing images from other places

## What's NOT Available

These images need to be sourced separately:
- ❌ Professional vehicle photos (fleet)
- ❌ High-resolution Poreč destination photos
- ❌ SVG icons (phone, WhatsApp, email, etc.)
- ❌ Driver/team photos

See `ASSETS_CHECKLIST.md` for complete list of needed assets.

## Directory Structure After Download

```
images/
├── logo/
│   ├── logo-original.png          ✅ Downloaded
│   └── logo-300x75.png             ✅ Downloaded (v2)
├── favicon/
│   ├── favicon-original.jpg        ✅ Downloaded (v2)
│   ├── favicon-150x150.jpg         ✅ Downloaded
│   └── favicon-300x300.jpg         ✅ Downloaded
├── hero/
│   ├── hero-banner.png             ✅ Downloaded
│   └── hero-banner-300x132.png     ✅ Downloaded (v2)
├── misc/
│   └── design-credit.png           ✅ Downloaded
├── fleet/                          ⏳ Empty (need to source)
└── icons/                          ⏳ Empty (need to source)
```

## Notes

- Both scripts create the directory structure automatically
- Empty files are automatically removed on failure
- Scripts are safe to run multiple times (will overwrite existing files)
- No sudo/admin permissions required
