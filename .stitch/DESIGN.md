# Design System: showme.sites

## Visual Identity

- **Background:** #0a0a0a (near-black)
- **Surface:** #121212 (cards)
- **Border:** rgba(255,255,255,0.06)
- **Text Primary:** #fafafa (white)
- **Text Muted:** #a3a3a3 (gray)
- **Accent:** #f59e0b (amber/gold)
- **Accent Hover:** #fbbf24 (amber-light)
- **Font Display:** Space Grotesk (headlines)
- **Font Body:** Inter (body text)
- **Border Radius:** 16px (cards), 12px (buttons), 9999px (pills)
- **Shadow:** subtle, dark — 0 8px 32px rgba(0,0,0,0.2)

## Component Style

**Cards:**
- Background: linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))
- Border: 1px solid rgba(255,255,255,0.06)
- Backdrop-filter: blur(20px) where supported
- Hover: border-color transitions to rgba(255,255,255,0.12), subtle lift

**Buttons:**
- Primary: bg-amber-500, text-black, rounded-full, hover scale 1.03
- Secondary: border border-white/20, rounded-full, hover bg-white/5

**Gradients:**
- Hero: subtle radial gradients (amber + cyan) at 10-15% opacity, heavily blurred
- CTA: linear-gradient(135deg, rgba(245,158,11,0.1), rgba(6,182,212,0.08))

## Animation

- Entrance: fade-in-up, 0.5s duration, ease-out
- Stagger: 0.08s between items
- Hover: subtle scale (1.03) and color transitions
- Background: slow drift on gradient orbs (20s cycle)

## Layout

- Max width: 1200px (6xl)
- Section padding: py-24 (96px)
- Grid gaps: 24px (gap-6)
- Consistent horizontal padding: px-6
