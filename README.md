# NextGenInspires Website

A modern, responsive 3-page website for NextGenInspires, a student-led STEM education nonprofit.

## Features

- ✨ Modern, minimalist design with professional aesthetic
- 📱 Fully responsive (mobile, tablet, desktop)
- 🚀 Built with React + Vite for optimal performance
- 🎨 Clean color palette and typography
- ♿ Accessible and SEO-friendly
- 🔗 Working navigation across all pages
- 📧 Contact form with validation

## Pages

1. **Home** - Hero section, mission statement, impact statistics, and what we do
2. **Programs** - Lesson details, registration locations, how lessons work, and partnership info
3. **Team** - Leadership, volunteer opportunities, mission/vision, and contact form

## Setup Instructions

### 1. Install Dependencies

```bash
cd ngi-website
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The site will open in your browser at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
npm run preview
```

## Adding Images & Logo

### Step 1: Create Images Folder

```bash
mkdir public/images
```

### Step 2: Add Your Files

Place your images in `public/images/`:
- `ngi-logo.png` - Your NGI logo (the navbar will use this)
- `hero-image.jpg` - Hero section image
- `about-image.jpg` - Team about section
- `team-photos/` - Team member photos

### Step 3: Replace Placeholders

**Update the Logo (in `src/components/Navbar.jsx`):**
```jsx
// Replace this:
<div className="logo-placeholder">NGI</div>

// With this:
<img src="/images/ngi-logo.png" alt="NGI Logo" className="navbar-logo-img" />
```

**Add CSS for logo image (in `src/components/Navbar.css`):**
```css
.navbar-logo-img {
  width: 2.5rem;
  height: 2.5rem;
  object-fit: contain;
}
```

**Update Hero Image (in `src/pages/Home.jsx`):**
```jsx
// Replace this:
<div className="hero-image-placeholder">
  <span>Hero Image</span>
</div>

// With this:
<img src="/images/hero-image.jpg" alt="NextGenInspires" className="hero-image" />
```

**Add CSS:**
```css
.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}
```

**Update Team Photos (in `src/pages/Team.jsx`):**
```jsx
// In the team member map, replace:
<div className="member-image-placeholder">
  <span>Photo</span>
</div>

// With:
<img 
  src={`/images/team-photos/${person.name.toLowerCase().replace(/\s+/g, '-')}.jpg`} 
  alt={person.name} 
  className="member-image"
/>
```

## Customization Guide

### Change Colors

Edit the color variables in your CSS files. Main colors used:
- **Primary Navy:** `#2d5a8c`
- **Dark Navy:** `#1a365d`
- **Light Gray:** `#f8fafc`
- **Text Gray:** `#4a5568`

To change globally, update these colors in:
- `src/components/Navbar.css`
- `src/pages/Home.css`
- `src/pages/Programs.css`
- `src/pages/Team.css`

### Update Content

**Home Page** - Edit `src/pages/Home.jsx`:
- Mission statement
- Impact numbers
- "What We Do" descriptions

**Programs Page** - Edit `src/pages/Programs.jsx`:
- Program descriptions
- Locations and registration links
- How lessons work steps

**Team Page** - Edit `src/pages/Team.jsx`:
- Officer names and roles
- Team member list
- Mission/vision statements
- Volunteer opportunities

### Modify Navigation Links

In `src/components/Navbar.jsx`, update the navbar menu links as needed.

### Update Footer Content

Edit `src/components/Footer.jsx` to:
- Change social media links
- Update contact info
- Modify footer text

## Directory Structure

```
ngi-website/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── Programs.jsx
│   │   ├── Programs.css
│   │   ├── Team.jsx
│   │   └── Team.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── public/
│   └── images/
│       ├── ngi-logo.png
│       ├── hero-image.jpg
│       ├── about-image.jpg
│       └── team-photos/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images**: Compress images before adding to `public/images/`
2. **Use WebP**: Convert images to WebP format for better performance
3. **Lazy Loading**: Images load efficiently with responsive sizing

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repo to Vercel
3. Set build command: `npm run build`
4. Set output directory: `dist`

### Other Platforms

- Netlify
- GitHub Pages
- Firebase Hosting
- Any static host that supports SPA routing

## Accessibility Features

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Mobile-friendly touch targets

## SEO

- Meta descriptions in HTML head
- Semantic HTML structure
- Image alt texts
- Open Graph tags (add to index.html if needed)

## Contact & Support

For questions about customization, refer to React and Vite documentation:
- [React Docs](https://react.dev)
- [Vite Docs](https://vitejs.dev)

## License

Created for NextGenInspires

---

**Made with ❤️ for NextGenInspires**
