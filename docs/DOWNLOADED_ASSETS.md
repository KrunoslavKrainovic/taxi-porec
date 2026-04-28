# Downloaded Assets from Old Website

## Images Available from porectaxi.com

### Logo
**URL**: https://porectaxi.com/wp-content/uploads/2024/06/TRANSFER-OPATIJA-7.png
- **Filename**: TRANSFER-OPATIJA-7.png
- **Dimensions**: 400x100px
- **Format**: PNG
- **Usage**: Main logo, header, footer
- **Download to**: `images/logo/logo-original.png`

**Variations**:
- 300x75: https://porectaxi.com/wp-content/uploads/2024/06/TRANSFER-OPATIJA-7-300x75.png

---

### Favicon
**URL**: https://porectaxi.com/wp-content/uploads/2024/06/taxi-CRIKVENICA-1.jpg
- **Filename**: taxi-CRIKVENICA-1.jpg
- **Format**: JPG
- **Usage**: Favicon source
- **Download to**: `images/favicon/favicon-original.jpg`

**Available Sizes**:
- 150x150: https://porectaxi.com/wp-content/uploads/2024/06/taxi-CRIKVENICA-1-150x150.jpg
- 300x300: https://porectaxi.com/wp-content/uploads/2024/06/taxi-CRIKVENICA-1-300x300.jpg

---

### Hero/Banner Image
**URL**: https://porectaxi.com/wp-content/uploads/2024/06/Untitled-design-10.png
- **Filename**: Untitled-design-10.png
- **Dimensions**: 500x220px
- **Format**: PNG
- **Usage**: Call-to-action banner, hero section
- **Download to**: `images/hero/hero-banner.png`

**Variations**:
- 300x132: https://porectaxi.com/wp-content/uploads/2024/06/Untitled-design-10-300x132.png

---

### Design Credit Image
**URL**: https://porectaxi.com/wp-content/uploads/2024/06/Untitled-design-24.png
- **Filename**: Untitled-design-24.png
- **Dimensions**: 80x50px
- **Format**: PNG
- **Usage**: Footer credit (optional)
- **Download to**: `images/misc/design-credit.png`

---

## How to Download

### Option 1: Using the Script
```bash
cd "/Users/krunoslavkrainovic/Documents/Developer/taxi porec"
chmod +x download-assets.sh
./download-assets.sh
```

### Option 2: Manual Download
Right-click each URL above and save to the specified location.

### Option 3: Using curl (individual files)
```bash
# Logo
curl -o images/logo/logo-original.png "https://porectaxi.com/wp-content/uploads/2024/06/TRANSFER-OPATIJA-7.png"

# Favicon
curl -o images/favicon/favicon-original.jpg "https://porectaxi.com/wp-content/uploads/2024/06/taxi-CRIKVENICA-1.jpg"

# Hero banner
curl -o images/hero/hero-banner.png "https://porectaxi.com/wp-content/uploads/2024/06/Untitled-design-10.png"
```

---

## Post-Download Optimization Tasks

### 1. Logo Optimization
- [ ] Convert to SVG if possible (for scalability)
- [ ] Create white version for dark backgrounds
- [ ] Compress PNG (use TinyPNG or similar)
- [ ] Create WebP version
- [ ] Test on different background colors

### 2. Favicon Creation
From the downloaded favicon-original.jpg, create:
- [ ] favicon.ico (16x16, 32x32, 48x48)
- [ ] favicon-16x16.png
- [ ] favicon-32x32.png
- [ ] apple-touch-icon.png (180x180)
- [ ] android-chrome-192x192.png
- [ ] android-chrome-512x512.png

**Tools**:
- Online: https://realfavicongenerator.net/
- CLI: ImageMagick or similar

### 3. Hero Image Enhancement
The current hero banner (500x220px) is quite small. Consider:
- [ ] Upscale or recreate at higher resolution (1920x1080)
- [ ] Source high-quality Poreč photos for background
- [ ] Create mobile version (800x600)
- [ ] Convert to WebP with JPG fallback
- [ ] Optimize file size

### 4. Image Optimization Workflow
For each downloaded image:
```bash
# Convert to WebP
cwebp -q 80 input.png -o output.webp

# Compress PNG
pngquant --quality=80-90 input.png -o output.png

# Compress JPG
jpegoptim --max=85 input.jpg
```

---

## Additional Images Needed

These are NOT available from the old site and need to be sourced:

### High Priority
1. **Professional vehicle photos**
   - Sedan exterior (clean, professional lighting)
   - Van/MPV exterior
   - Interior shots (optional)
   - Recommended: 1200x900px minimum

2. **Poreč destination photos**
   - Old town panorama
   - Euphrasian Basilica
   - Marina/waterfront
   - Coastal views
   - Recommended: 1920x1080px for hero

3. **Service icons** (SVG format)
   - Airplane (airport transfers)
   - Map marker (locations)
   - Clock (24/7 service)
   - Car (fleet)
   - Phone, WhatsApp, Email
   - User/driver icon
   - Price tag

### Medium Priority
4. **Istria destinations**
   - Rovinj
   - Motovun
   - Pula Arena
   - Other popular tourist spots

5. **Driver/team photos** (optional)
   - Professional headshots
   - Team photo
   - Action shots (helping with luggage, etc.)

### Sources for Additional Images

**Free Stock Photos**:
- Unsplash: https://unsplash.com/s/photos/porec
- Pexels: https://www.pexels.com/search/istria/
- Pixabay: https://pixabay.com/images/search/croatia/

**Icons**:
- Lucide Icons: https://lucide.dev/
- Heroicons: https://heroicons.com/
- Font Awesome: https://fontawesome.com/

**Professional Photography**:
- Hire local photographer in Poreč
- Use your own vehicle photos
- Commission drone shots of the area

---

## File Organization After Download

```
images/
├── logo/
│   ├── logo-original.png          ✅ Downloaded
│   ├── logo.svg                    ⏳ To create
│   ├── logo-white.png              ⏳ To create
│   └── logo.webp                   ⏳ To create
├── favicon/
│   ├── favicon-original.jpg        ✅ Downloaded
│   ├── favicon.ico                 ⏳ To create
│   ├── favicon-16x16.png           ⏳ To create
│   ├── favicon-32x32.png           ⏳ To create
│   ├── apple-touch-icon.png        ⏳ To create
│   └── android-chrome-192x192.png  ⏳ To create
├── hero/
│   ├── hero-banner.png             ✅ Downloaded
│   ├── hero-desktop.webp           ⏳ To create
│   ├── hero-desktop.jpg            ⏳ To create
│   ├── hero-mobile.webp            ⏳ To create
│   └── hero-mobile.jpg             ⏳ To create
├── fleet/
│   ├── sedan.webp                  ❌ Need to source
│   ├── sedan.jpg                   ❌ Need to source
│   ├── van.webp                    ❌ Need to source
│   └── van.jpg                     ❌ Need to source
├── icons/
│   ├── phone.svg                   ❌ Need to source
│   ├── whatsapp.svg                ❌ Need to source
│   ├── email.svg                   ❌ Need to source
│   ├── airplane.svg                ❌ Need to source
│   ├── map.svg                     ❌ Need to source
│   └── clock.svg                   ❌ Need to source
└── destinations/
    ├── porec-old-town.webp         ❌ Need to source
    ├── rovinj.webp                 ❌ Need to source
    └── motovun.webp                ❌ Need to source
```

---

## Image Specifications for New Website

### Logo
- **Format**: SVG (preferred) or PNG with transparency
- **Minimum width**: 400px
- **Color versions**: Full color, white, dark
- **File size**: <50KB

### Hero Images
- **Desktop**: 1920x1080px (16:9)
- **Mobile**: 800x600px (4:3)
- **Format**: WebP + JPG fallback
- **File size**: <200KB each

### Vehicle Photos
- **Dimensions**: 1200x900px (4:3)
- **Format**: WebP + JPG fallback
- **File size**: <150KB each
- **Style**: Professional, clean, well-lit

### Icons
- **Format**: SVG
- **Size**: 24x24px viewBox
- **Style**: Simple, line-based
- **Color**: Inherit from CSS

### Destination Photos
- **Dimensions**: 800x600px minimum
- **Format**: WebP + JPG fallback
- **File size**: <150KB each
- **Style**: Vibrant, tourist-friendly

---

## Next Steps

1. ✅ Run download script to get existing assets
2. ⏳ Optimize downloaded images
3. ⏳ Create favicon set
4. ⏳ Source vehicle photos
5. ⏳ Find/create Poreč hero image
6. ⏳ Download SVG icons
7. ⏳ Organize all files in proper structure
8. ⏳ Update image paths in HTML
