# Career Discovery MVP

A radical career discovery application for students, designed with Netflix-style discovery mechanics, gamified curiosity measurement, and immersive "day in the life" experiences.

## Features

✨ **Screen 1**: Activity-Based Onboarding
- Age, gender, and verb-based interest selection
- Discovers preferences before showing careers

🎮 **Screen 2**: The Inclination Game
- Tinder-style choice mechanics
- Measures cognitive inclinations implicitly

✨ **Screen 3**: The "X" Reveal
- Minimalist white screen with vibrant gradient number
- Shows calculated career path count

🌊 **Screen 4**: The Dissolve Transition
- Smooth opacity fade with curated path summary
- Modify or Proceed options

🎬 **Screen 5**: Netflix-style Dashboard
- Horizontal scrolling career categories
- Interactive cards with hover typewriter effects

🔍 **Screen 6**: Career Deep-Dive (Coming Soon)
- Day in the life narratives
- Required skills and university courses
- Real-world project showcases

## Design System

- **Color Palette**: Pure monochrome (white background, black text)
- **Gradient Exception**: Vibrant gradient on numbers only
- **Typography**: Retro monospaced fonts (VT323, Courier Prime)
- **Text Rendering**: Custom TypewriterText with word-by-word periods

## Tech Stack

- React 18
- Next.js 14
- Tailwind CSS
- Framer Motion (animations)
- TypeScript

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
├── components/          # Reusable UI components
│   ├── TypewriterText.tsx
│   ├── GradientNumber.tsx
│   ├── RetroButton.tsx
│   ├── CareerCard.tsx
│   └── SwipeCard.tsx
├── pages/              # Next.js pages
│   ├── screens/        # Screen implementations
│   ├── _app.tsx
│   ├── _document.tsx
│   └── index.tsx
├── styles/             # Global styles
└── public/             # Static assets
```

## Custom Components

### TypewriterText
Automatically splits text into words and appends periods with typewriter animation.

```tsx
<TypewriterText text="Welcome to your future" />
// Renders: Welcome. to. your. future.
```

### GradientNumber
Renders numbers with vibrant CSS gradient fill.

```tsx
<GradientNumber number={42} className="text-9xl" />
```

### RetroButton
Classic button with typewriter text and sharp borders.

```tsx
<RetroButton text="Proceed" onClick={() => handleNext()} />
```

## License

MIT
