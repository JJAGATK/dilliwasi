# Design System: Sanchi — Authentic Indian Cuisine

## 1. Visual Theme & Atmosphere
- **Brand Story**: Heritage, craft, and calm warmth inspired by the sacred Sanchi Stupa and the ancient culinary arts of North India.
- **Atmosphere Spectrum**:
  - **Density**: 4/10 ("Art Gallery Airy" for the public site, calibrated to 7/10 for the admin dashboard).
  - **Variance**: 7/10 ("Offset Asymmetric" — bespoke editorial splits, staggered pairings, zig-zag tasting journeys).
  - **Motion**: 6/10 ("Fluid Spring Restraint" — weighted multi-plane depth, tactile haptic feedback, 80–380ms ease-out curves).
- **Core Motif**: The Sanchi Stupa Torana (ceremonial gateway arch) rendered as a delicate 1px architectural vector divider and subtle section watermark — never repeated as repetitive wallpaper.

---

## 2. Color Calibration & Semantic Roles
Calibrated directly from the original Sanchi logo (`#2A050C` burgundy canvas and `#D4A346` metallic antique brass). Strictly no pure black (`#000000`) and no pure white (`#FFFFFF`). Saturation maintained below 80%. All pairings exceed WCAG AA contrast (4.5:1 for normal text, 3:1 for large display).

### Light Surface System (Public Site Default & Dashboard Light)
- **Canvas Cream (`--color-bg-canvas`)**: `#FAF7F2` — Warm antique parchment surface.
- **Surface Card (`--color-bg-surface`)**: `#F4EFE6` — Sandstone container fill with gentle warmth.
- **Surface Elevated (`--color-bg-elevated`)**: `#EDE5D8` — Floating panels, dropdowns, and modals.
- **Ink Primary (`--color-text-primary`)**: `#241814` — Deep roasted umber (Contrast 13.8:1 against Canvas).
- **Ink Secondary (`--color-text-secondary`)**: `#6E5D53` — Warm stone taupe for descriptions and metadata (Contrast 5.2:1).
- **Border Subtle (`--color-border-subtle`)**: `rgba(212, 163, 70, 0.22)` — 1px antique brass hairline.
- **Border Strong (`--color-border-strong`)**: `rgba(110, 93, 83, 0.35)` — Interactive states and dividers.

### Dark Surface System (Immersive Evening Sections & Dashboard Dark)
- **Imperial Garnet (`--color-bg-canvas-dark`)**: `#2A050C` — Deep royal burgundy extracted from the logo.
- **Shadow Crimson (`--color-bg-surface-dark`)**: `#1F0409` — High-depth container fill.
- **Garnet Elevated (`--color-bg-elevated-dark`)**: `#380812` — Modal dialogs and active card surfaces.
- **Ivory Primary (`--color-text-primary-dark`)**: `#FAF7F2` — Warm cream typography (Contrast 13.8:1 against Garnet).
- **Linen Secondary (`--color-text-secondary-dark`)**: `#C7B8AA` — Soft muted linen (Contrast 6.8:1).
- **Border Subtle Dark (`--color-border-subtle-dark`)**: `rgba(232, 192, 102, 0.20)` — Fine golden filigree edge.

### Accent System (Single Accent Hierarchy)
- **Antique Brass (`--color-accent-primary`)**: `#D4A346` — Primary CTAs, active indicators, focus rings.
- **Champagne Gold (`--color-accent-light`)**: `#E8C066` — Hover highlights and subtle metallic badges.
- **Deep Bronze (`--color-accent-dark`)**: `#B38234` — Pressed button states and high-contrast borders.
- **Warm Ochre Glow (`--color-accent-glow`)**: `rgba(212, 163, 70, 0.15)` — Soft diffused focus rings.

### Dietary & Functional Status Colors
- **Vegetarian Green**: `#2E7D32` (Deep Forest Green, distinct leaf marker).
- **Non-Vegetarian Crimson**: `#C62828` (Heritage Madder Red triangle/dot marker).
- **Spice Level Fire**: `#D84315` (Saffron Cayenne).
- **Status Confirmed / Ready**: `#2E7D32`
- **Status Pending / New**: `#D4A346`
- **Status Cancelled**: `#8D6E63`

---

## 3. Typographic Architecture
Max 2 font families across the entire system.
- **Display & Headings**: `Bodoni Moda`, serif
  - Optical sizes `6pt–96pt`, weights `400`, `600`, `700`, italic.
  - Tracking: Tight (`-0.02em` on `h1`, `h2`, `h3`).
  - Size Ratio: 3.2x–4x body font.
- **Body, UI & Dashboard**: `Instrument Sans`, sans-serif
  - Weights `400`, `500`, `600`.
  - Body Size: `17px` (`1.0625rem`), Line-Height: `1.6` (`1.7rem`), Max-Width: `64ch`.
  - Uppercase Micro-Labels: `12px` (`0.75rem`), Tracking: Wide (`+0.14em`), Weight `600`.
- **Numbers / Table Data**: `Instrument Sans` with tabular figures (`font-variant-numeric: tabular-nums`) and `ui-monospace` for financial IDs.

---

## 4. 8px Spacing Scale & Layout Grid
- **Scale**: `4px` (0.5), `8px` (1), `16px` (2), `24px` (3), `32px` (4), `48px` (6), `64px` (8), `96px` (12), `128px` (16).
- **Max Width**: `1400px` centered with responsive gutter padding:
  - Mobile (`375px`): `20px` padding, 1-column stack.
  - Tablet (`768px`): `36px` padding, 2-column asymmetric grid.
  - Desktop (`1440px`): `64px` padding, 12-column editorial layout.
- **Vertical Rhythm**: Section separation via `clamp(4.5rem, 9vw, 8.5rem)` with Torana ornamental line dividers.

---

## 5. Component Behaviors & Micro-Interactions
- **Buttons**:
  - Primary: Antique Brass `#D4A346` background, roasted umber `#241814` text, `font-medium`, `border-radius: 6px`.
  - Interaction: `-1px` translateY and subtle brass shadow on hover; `+1px` translateY on active press.
  - Secondary/Outline: 1px subtle brass border, transparent background, text in accent gold.
  - Minimum touch target: `44px` on all mobile and touch devices.
- **Cards**:
  - Border: 1px hairline `rgba(212, 163, 70, 0.2)`.
  - Corner Radius: `10px` (restrained, architectural).
  - Elevation: Diffused ambient shadow `0 12px 36px -12px rgba(42, 5, 12, 0.08)`. Never harsh black drop shadows.
- **Inputs & Forms**:
  - Sandstone fill `#F4EFE6`, floating label with `13px` uppercase tracking, inline real-time validation, explicit error text below.
- **Menu Filter Tabs**:
  - Tactile segmented tabs with smooth layout shift animation using sliding gold pill indicator.

---

## 6. Motion Tokens & Physics
- **Engine**: CSS variables & spring-weighted cubic-beziers.
- **Durations**:
  - Micro-action (hover, focus): `120ms`
  - Mid-transition (modal, drawer, tab switch): `260ms`
  - Page/Section reveals & parallax: `380ms`
- **Curves**:
  - Primary: `cubic-bezier(0.16, 1, 0.3, 1)` (Weighted Apple-standard ease-out).
  - Exit: `cubic-bezier(0.7, 0, 0.84, 0)`
- **Reduced Motion**: All animations disabled or replaced with immediate crossfades (`duration: 0.01ms`) under `@media (prefers-reduced-motion: reduce)`.

---

## 7. Anti-Patterns & Banned AI Tells (Anti-Slop Directives)
- NO emojis anywhere in UI or iconography (use clean SVG feather/lucide icons only).
- NO `Inter`, `Roboto`, `Poppins`, `Playfair Display`, or system serif defaults.
- NO pure black (`#000000`) and NO pure white (`#FFFFFF`).
- NO purple/blue AI glow buttons or neon drop shadows.
- NO generic 3-equal-card horizontal feature grids.
- NO centered-everything hero layouts.
- NO AI clichés ("Elevate your palate", "Seamless dining experience", "Next-gen flavours").
- NO fake metrics ("99.9% Happy Guests", "50k Meals Served").
- NO unverified external image hotlinks; use designated local assets with exact aspect ratios.

