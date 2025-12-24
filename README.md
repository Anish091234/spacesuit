# Mars Suit - Product Website

A premium, interactive product website for a next-generation Mars spacesuit, featuring smooth scroll animations and 3D model integration.

## Features

- **Smooth Scrolling**: Apple-style smooth scroll experience using Lenis
- **3D Visualization**: Interactive 3D spacesuit model with React Three Fiber
- **Scroll Animations**: GSAP-powered scroll-triggered animations
- **Scroll-Locked Sections**: Immersive sections that pin while animating
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop
- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js + React Three Fiber + Drei
- **Animations**: GSAP (ScrollTrigger) + Framer Motion
- **Smooth Scroll**: Lenis

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
SpaceSuit-Project/
├── src/
│   ├── app/                    # Next.js app directory
│   ├── components/
│   │   ├── layout/            # Layout components (Navbar, Footer, SmoothScroll)
│   │   ├── sections/          # Page sections (Hero, InnerShell, OuterShell, etc.)
│   │   ├── three/             # 3D components (Scene, Lighting, Placeholder)
│   │   ├── animations/        # Animation components (FadeIn, SlideIn)
│   │   └── ui/                # Reusable UI components
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utilities and configurations
│   └── types/                 # TypeScript type definitions
├── public/
│   ├── models/                # 3D model files
│   └── images/                # Image assets
└── ...config files
```

## 3D Model Integration

### Current State
The website uses a geometric placeholder model built with Three.js primitives.

### Adding Your CAD Model

When your spacesuit CAD model is ready:

1. **Export to GLTF Format**
   - Use Blender, 3DS Max, or your CAD software
   - Export as `.glb` (binary GLTF)
   - Recommended polygon count: 50k-150k triangles

2. **Name Mesh Groups**
   - `InnerShell`: Inner suit layer
   - `OuterShell`: Outer suit layer
   - `LifeSupportTanks`: Oxygen/life support tanks
   - `PowerModules`: Power modules
   - `Helmet`: Helmet component
   - `Connections`: Connection ports

3. **Optimize the Model**
   ```bash
   npx gltf-pipeline -i your-model.glb -o optimized-model.glb -d
   ```

4. **Replace Placeholder**
   - Place your `.glb` file in `/public/models/`
   - Update `.env.local`:
     ```
     NEXT_PUBLIC_MODEL_PATH=/models/your-model.glb
     ```

5. **Update Component** (if needed)
   - Edit `src/components/three/SpacesuitModel.tsx`
   - Adjust camera positions in `src/lib/three/sceneConfig.ts`

## Customization

### Colors
Edit the color palette in `tailwind.config.ts`:

```typescript
colors: {
  mars: { ... },      // Mars-themed colors
  space: { ... },     // Space/background colors
  suit: { ... },      // Suit/accent colors
}
```

### Sections
Add or modify sections in `src/components/sections/`:
- Each section is a standalone component
- Use `SpacesuitScene` to integrate 3D model
- Apply `highlightPart` prop to highlight specific parts

### Animations
- GSAP animations: `src/lib/animations/gsapConfig.ts`
- Framer Motion variants: `src/components/animations/`

## Performance

- **3D Model**: Optimized with LOD and frustum culling
- **Code Splitting**: Automatic with Next.js
- **Image Optimization**: Next.js Image component
- **Lazy Loading**: Sections load as needed

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
Build the production bundle:
```bash
npm run build
```

## License

All rights reserved.

## Support

For questions or issues, please contact the development team.
