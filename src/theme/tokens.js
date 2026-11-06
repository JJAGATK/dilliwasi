/**
 * Sanchi Semantic Design Tokens
 * Extracted directly from the brand logo (#2A050C burgundy & #D4A346 antique brass)
 * Single Source of Truth for all components.
 */

export const tokens = {
  colors: {
    // Light Canvas System (Public Default & Admin Light)
    canvas: '#FAF7F2',        // Warm antique parchment surface
    surface: '#F4EFE6',       // Sandstone container fill
    surfaceElevated: '#EDE5D8',// Floating panels, dropdowns, modals
    surfaceHover: '#E8DFC8',

    // Dark Canvas System (Hero, Accent Sections & Admin Dark)
    canvasDark: '#2A050C',    // Royal Burgundy base
    surfaceDark: '#1F0409',   // Deep wine container
    surfaceElevatedDark: '#380812', // Modals and elevated dark panels
    surfaceHoverDark: '#4A0C1A',

    // Typography & Ink
    inkPrimary: '#241814',    // Deep roasted umber (WCAG AAA 13.8:1 on canvas)
    inkSecondary: '#6E5D53',  // Warm stone taupe (WCAG AA 5.2:1)
    inkMuted: '#9B897D',      // Subdued metadata
    
    // Dark Mode Inks
    textPrimaryDark: '#FAF7F2',
    textSecondaryDark: '#C7B8AA',
    textMutedDark: '#8C7A6D',

    // Primary Metallic Accent (Antique Brass / Gold)
    accent: '#D4A346',
    accentLight: '#E8C066',
    accentDark: '#B38234',
    accentGlow: 'rgba(212, 163, 70, 0.18)',

    // Borders
    borderSubtle: 'rgba(212, 163, 70, 0.22)',
    borderStrong: 'rgba(110, 93, 83, 0.35)',
    borderDark: 'rgba(232, 192, 102, 0.20)',

    // Dietary & Status Indicators
    veg: '#2E7D32',           // Forest Green (Vegetarian)
    nonVeg: '#C62828',        // Heritage Madder (Non-Vegetarian)
    spice: '#D84315',         // Saffron Cayenne
    success: '#2E7D32',
    warning: '#D4A346',
    danger: '#C62828',
    info: '#5D4037',
  },

  typography: {
    fontSerif: '"Bodoni Moda", Georgia, serif',
    fontSans: '"Instrument Sans", -apple-system, BlinkMacSystemFont, sans-serif',
    headingTracking: '-0.02em',
    labelTracking: '0.14em',
    bodyLineHeight: '1.6',
  },

  spacing: {
    0: '0px',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    8: '32px',
    10: '40px',
    12: '48px',
    16: '64px',
    20: '80px',
    24: '96px',
    32: '128px',
  },

  radii: {
    none: '0px',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '18px',
    full: '9999px',
  },

  shadows: {
    subtle: '0 4px 16px -2px rgba(42, 5, 12, 0.05)',
    card: '0 12px 32px -8px rgba(42, 5, 12, 0.08), 0 2px 6px -1px rgba(42, 5, 12, 0.04)',
    elevated: '0 24px 48px -12px rgba(42, 5, 12, 0.16)',
    goldGlow: '0 0 25px rgba(212, 163, 70, 0.25)',
  },

  motion: {
    fast: '120ms cubic-bezier(0.16, 1, 0.3, 1)',
    normal: '240ms cubic-bezier(0.16, 1, 0.3, 1)',
    slow: '380ms cubic-bezier(0.16, 1, 0.3, 1)',
    curve: 'cubic-bezier(0.16, 1, 0.3, 1)',
  }
};

