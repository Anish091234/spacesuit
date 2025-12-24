# Quick Start Guide

## Running the Development Server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## What's Included

### Sections Built
1. **Hero Section** - Full-screen introduction with rotating 3D model
2. **Inner Shell Section** - Scroll-locked section highlighting inner suit features
3. **Outer Shell Section** - Scroll-locked section showcasing outer shell protection
4. **Life Support Section** - Details about oxygen and life support systems
5. **Specifications Section** - Technical specifications and CTA

### 3D Features
- Interactive 3D placeholder model with geometric shapes representing:
  - Inner shell (light gray capsule)
  - Outer shell (blue transparent capsule)
  - Life support tanks (red cylinders)
  - Power modules (green boxes)
  - Helmet and connections
- Auto-rotation on hero section
- Part highlighting based on section
- Orbit controls for user interaction

### Animations
- Smooth scrolling with Lenis
- Framer Motion fade-in and slide-in animations
- GSAP-ready scroll triggers
- Scroll-locked sections for immersive storytelling

### Responsive Design
- Mobile-first approach
- Tailwind CSS breakpoints
- Responsive typography and spacing

## Next Steps

### 1. Add Your CAD Model
When your spacesuit 3D model is ready:

```bash
# Place your .glb file in public/models/
# Update .env.local
NEXT_PUBLIC_MODEL_PATH=/models/your-spacesuit.glb

# Create SpacesuitModel component (optional)
# See README.md for detailed instructions
```

### 2. Customize Colors
Edit `tailwind.config.ts` to match your brand:

```typescript
colors: {
  mars: { ... },
  space: { ... },
  suit: { ... },
}
```

### 3. Add More Sections
Create new sections in `src/components/sections/`:
- PowerModulesSection
- ConnectionsSection
- TestimonialsSection
- etc.

### 4. Enhance Scroll Animations
Use GSAP ScrollTrigger for advanced animations:

```typescript
// Example in your component
useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.to('.element', {
      scrollTrigger: {
        trigger: '.section',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
      rotation: 360,
    });
  });
  return () => ctx.revert();
}, []);
```

### 5. Add Content
- Replace placeholder text with real content
- Add high-quality images to `public/images/`
- Update metadata in `src/app/layout.tsx`

### 6. Optimize for Production
```bash
# Build for production
npm run build

# Test production build
npm start
```

## Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms
Build the static files:
```bash
npm run build
```

Then deploy the `.next` folder and `public` directory.

## Troubleshooting

### 3D Model Not Showing
- Check browser console for errors
- Ensure WebGL is supported
- Try a different browser (Chrome/Firefox recommended)

### Smooth Scroll Not Working
- Check that SmoothScroll component wraps your content
- Verify Lenis is properly initialized

### Build Errors
- Run `npm run lint` to check for issues
- Run `npx tsc --noEmit` for type checking

## Support

For questions or issues, refer to:
- README.md - Detailed documentation
- Next.js docs - https://nextjs.org/docs
- React Three Fiber docs - https://docs.pmnd.rs/react-three-fiber
- GSAP docs - https://gsap.com/docs/v3/

Happy building!
