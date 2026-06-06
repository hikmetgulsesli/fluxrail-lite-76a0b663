---
name: FluxRail Lite
colors:
  surface: '#10131a'
  surface-dim: '#10131a'
  surface-bright: '#363940'
  surface-container-lowest: '#0b0e14'
  surface-container-low: '#191c22'
  surface-container: '#1d2026'
  surface-container-high: '#272a31'
  surface-container-highest: '#32353c'
  on-surface: '#e1e2eb'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e1e2eb'
  inverse-on-surface: '#2e3037'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#fface8'
  on-secondary: '#5e0053'
  secondary-container: '#ff24e4'
  on-secondary-container: '#520049'
  tertiary: '#f6f5ff'
  on-tertiary: '#002780'
  tertiary-container: '#d0d8ff'
  on-tertiary-container: '#004eeb'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#ffd7f0'
  secondary-fixed-dim: '#fface8'
  on-secondary-fixed: '#3a0033'
  on-secondary-fixed-variant: '#840076'
  tertiary-fixed: '#dce1ff'
  tertiary-fixed-dim: '#b6c4ff'
  on-tertiary-fixed: '#001551'
  on-tertiary-fixed-variant: '#0039b3'
  background: '#10131a'
  on-background: '#e1e2eb'
  surface-variant: '#32353c'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  body-base:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  status-mono:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
  label-xs:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  playfield-margin: 12px
  hud-gap: 8px
---

## Brand & Style

The design system is engineered for **FluxRail Lite**, a fast-paced, deterministic rail-management experience. The brand personality is high-energy, technical, and pulsating with the "digital-noir" energy of a retro-future arcade. The UI should evoke an immediate adrenaline response, making the user feel like a systems operator in a high-stakes environment.

The visual style is a hybrid of **Cyberpunk Minimalism** and **Glassmorphism**. It utilizes deep, light-absorbing backgrounds to make neon interactive elements "pop" with maximum luminance. Information is presented through high-clarity HUD overlays that feel like digital glass projected onto a hardware console.

- **Primary Motif:** Light-trails and glowing filaments.
- **Visual Depth:** Translucent layers that prioritize the playfield while keeping controls accessible.
- **Energy:** High-motion through glowing states and sharp transitions.

## Colors

The palette is rooted in a "Deep Space" neutral to provide infinite contrast for the neon accent colors. 

- **Electric Cyan (#00F0FF):** Used for primary rails, active connections, and successful pathing. This is the "safe" energy color.
- **Neon Pink (#FF00E5):** Reserved for secondary interactions, power-ups, and high-priority HUD highlights.
- **Vibrant Blue (#0055FF):** Used for background structural elements and inactive but functional rails.
- **Warning Red (#FF3131):** Exclusively for "dead rails," terminal errors, or collision warnings.
- **Neutral Background (#0B0E14):** A custom deep navy-black that prevents pure black "crushing" while maintaining a high-contrast environment.

Interactive elements should utilize a `drop-shadow` or `box-shadow` with the same color as the element to simulate a neon glow (bloom effect).

## Typography

This design system employs a dual-font strategy to balance legibility with thematic immersion.

- **Primary Sans (Inter):** Used for all functional HUD elements, settings menus, and instructional text. It provides a clean, modern anchor to the chaotic neon visuals. Headlines use tight tracking and heavy weights.
- **Technical Mono (JetBrains Mono):** Used for dynamic data points—scores, rail IDs, timers, and system logs. The monospaced nature ensures that shifting numbers don't cause layout "jitter" during gameplay.

**Visual Treatment:** 
- Headings should occasionally use a subtle outer glow in the primary cyan.
- Labels and Status fonts should always be in uppercase to mimic military/industrial hardware displays.

## Layout & Spacing

The layout philosophy is **Compact HUD over Fluid Playfield**. The gameplay area takes up 100% of the viewport, with UI elements "floating" in tactical positions.

- **Grid:** A 4px baseline grid ensures tight alignment of tech-heavy components.
- **HUD Positioning:** Information is clustered in the corners (top-left for score, top-right for status, bottom for controls) to keep the center of the screen clear for rail management.
- **Safe Areas:** A 12px "Playfield Margin" is maintained around the edges to ensure HUD elements don't feel "stuck" to the screen bezel.
- **Mobile Adaptation:** On mobile, the HUD clusters merge into top and bottom bars, with touch-target areas increasing to a minimum of 44px while visual graphics remain compact.

## Elevation & Depth

Depth in this design system is achieved through **Luminance and Translucency** rather than traditional shadows.

- **The Playfield (Base):** The lowest layer, featuring the dark neutral background and the active rail network.
- **Glass HUD Panels:** Semi-transparent containers (`rgba(11, 14, 20, 0.75)`) with a `backdrop-filter: blur(12px)`. These panels should have a 1px thin border in a low-opacity version of the primary cyan to define their edges.
- **Interactive Bloom:** Buttons and active rails sit at the highest "visual" elevation. This is communicated via "bloom"—a soft, colored glow that bleeds into the surrounding glass panels.
- **Scanlines:** A very low-opacity overlay of horizontal lines can be applied to the entire screen to enhance the retro-arcade feel, sitting just below the top-level HUD text.

## Shapes

The shape language is sharp, precise, and industrial. 

- **Small Radii:** We use a `Soft` (0.25rem) setting for containers to prevent the UI from feeling too "friendly." The slight rounding suggests precision-machined hardware.
- **Angular Accents:** Use 45-degree clipped corners for decorative elements or high-level HUD containers to reinforce the "tech" aesthetic.
- **Rail Geometry:** Rails should be rendered as continuous paths with rounded caps but sharp turn-angles, emphasizing a grid-locked, deterministic movement system.

## Components

- **Buttons:** Rectangular with a 1px inner border. Default state is low-opacity cyan. Hover/Active state triggers a "Full Neon" fill with an external bloom. Text should be uppercase JetBrains Mono.
- **Glass Cards:** Used for settings and scoreboards. Features a subtle "frosted" texture and a 1px border. No drop shadows; use backdrop-blur to separate from the playfield.
- **Status Chips:** Small, pill-shaped indicators for "Online," "Offline," or "Warning" status. They should "flicker" slightly when their state changes.
- **Input Fields:** Dark background with a bottom-only 2px border in cyan. When focused, the border glows and the cursor is a solid block.
- **Progress Bars:** High-contrast cyan fill on a dark blue background. The fill should have a "scanning" highlight moving across it periodically.
- **Rail Indicators:** Small arrows or icons that sit on the rails. They must be high-contrast (Neon Pink) to remain visible against the blue rails.