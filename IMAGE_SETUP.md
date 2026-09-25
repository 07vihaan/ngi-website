# Image Setup Guide for NextGenInspires Website

## Quick Setup (Copy-Paste)

### Step 1: Create Image Folder
```bash
mkdir public/images
mkdir public/images/team-photos
```

### Step 2: Add Your Images
Place these files in `public/images/`:
- `ngi-logo.png` - Your NGI logo
- `hero-image.jpg` - Main hero section image (800x800px recommended)
- `about-image.jpg` - Team about section image (800x800px)

For team photos, place them in `public/images/team-photos/`:
- `vihaan-singh.jpg`
- `meharbaan-kaler.jpg`
- `muhammad-rao.jpg`
- etc.

### Step 3: Copy-Paste Code Updates

#### 1. Update Navbar Logo

**File:** `src/components/Navbar.jsx`

Find this line (around line 7):
```jsx
<div className="logo-placeholder">NGI</div>
```

Replace with:
```jsx
<img src="/images/ngi-logo.png" alt="NGI Logo" className="navbar-logo-img" />
```

Then update `src/components/Navbar.css` and add this CSS:
```css
.navbar-logo-img {
  width: 2.5rem;
  height: 2.5rem;
  object-fit: contain;
}
```

---

#### 2. Update Hero Image

**File:** `src/pages/Home.jsx`

Find this section (around line 24):
```jsx
<div className="hero-visual">
  <div className="hero-image-placeholder">
    <span>Hero Image</span>
  </div>
</div>
```

Replace with:
```jsx
<div className="hero-visual">
  <img src="/images/hero-image.jpg" alt="NextGenInspires Students Learning" className="hero-visual-img" />
</div>
```

Then add to `src/pages/Home.css`:
```css
.hero-visual-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}
```

---

#### 3. Update About Section Image

**File:** `src/pages/Team.jsx`

Find this section (around line 49):
```jsx
<div className="about-image">
  <div className="about-image-placeholder">
    <span>Team Photo</span>
  </div>
</div>
```

Replace with:
```jsx
<div className="about-image">
  <img src="/images/about-image.jpg" alt="NextGenInspires Team" className="about-image-img" />
</div>
```

Then add to `src/pages/Team.css`:
```css
.about-image-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}
```

---

#### 4. Update Team Member Photos

**File:** `src/pages/Team.jsx`

Find the team member rendering (around line 73-77 and similar sections):
```jsx
{officers.map((person, index) => (
  <div key={index} className="team-member">
    <div className="member-image-placeholder">
      <span>Photo</span>
    </div>
    <h4>{person.name}</h4>
```

Replace just the image placeholder section:
```jsx
{officers.map((person, index) => (
  <div key={index} className="team-member">
    <img 
      src={`/images/team-photos/${person.name.toLowerCase().replace(/\s+/g, '-')}.jpg`} 
      alt={person.name}
      className="team-member-img"
    />
    <h4>{person.name}</h4>
```

Do the same for `michiganTeam` and `founders` arrays.

Then add to `src/pages/Team.css`:
```css
.team-member-img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1rem;
}
```

---

## Image Specifications

### Recommended Sizes

| Image | Recommended Size | Format | Notes |
|-------|-----------------|--------|-------|
| Logo | 256x256px | PNG | Will be scaled to 40x40px |
| Hero Image | 1200x800px | JPG | Aspect ratio ~1.5:1 |
| About Image | 800x800px | JPG | Square format |
| Team Photos | 600x600px | JPG | Square format, portrait |

### Image Optimization Tips

1. **Compress Images**
   - Use TinyPNG.com or ImageOptim
   - Aim for < 100KB per image
   - Smaller file sizes = faster page load

2. **Use JPG for Photos**
   - Better compression than PNG
   - Good for team photos and hero images
   - Use PNG only for logo with transparency

3. **Convert to WebP (Optional)**
   ```jsx
   // Modern browsers support WebP - more efficient
   <source srcSet="/images/hero-image.webp" type="image/webp" />
   <img src="/images/hero-image.jpg" alt="..." />
   ```

---

## Troubleshooting

### Images Not Showing?

1. **Check file path:**
   - Images must be in `public/images/` folder
   - Use forward slashes in paths: `/images/logo.png`
   - Don't use relative paths like `../images/`

2. **Clear browser cache:**
   ```bash
   npm run dev
   # Press Ctrl+Shift+Delete and clear cache
   ```

3. **Check file names:**
   - File names must match exactly (case-sensitive on Linux/Mac)
   - Example: `vihaan-singh.jpg` not `Vihaan-Singh.jpg`

### Images Look Blurry?

- Use high-quality source images (at least 2x the display size)
- Ensure images are at least 600x600px for team photos
- Use JPG quality 85+ to balance quality and file size

### Images Not Responsive?

Make sure you're using:
```css
object-fit: cover; /* For cropping to aspect ratio */
width: 100%;
max-width: 100%;
```

---

## File Organization Example

```
public/
├── images/
│   ├── ngi-logo.png
│   ├── hero-image.jpg
│   ├── about-image.jpg
│   └── team-photos/
│       ├── vihaan-singh.jpg
│       ├── meharbaan-kaler.jpg
│       ├── muhammad-rao.jpg
│       ├── ethan-kim.jpg
│       ├── jay-pharma.jpg
│       ├── aayush-paul.jpg
│       ├── ryan-fan.jpg
│       ├── sophia-shinh.jpg
│       ├── aayush-butala.jpg
│       ├── tanmay-shah.jpg
│       ├── kailash-thayvallay.jpg
│       └── harsh-patel.jpg
```

---

## Need More Help?

Refer to the main README.md for additional customization options!
