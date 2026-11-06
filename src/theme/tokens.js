/**
 * Dilliwasi Semantic Design Tokens
 * Harmonized with the DW Monogram Emblem (Rich Ruby Rose & Saffron Gold):
 *
 * 1. Brand Ruby Rose (#9F1239 / #BE123C) - Rich, warm, appetizing culinary shade of the DW monogram
 * 2. Warm Saffron Gold (#C59B27 / #D4AF37) - Aged brass, candlelight warmth, matches DW gold circular ring
 * 3. Warm Alabaster Canvas (#FAF8F5 / #FFFFFF) - Clean, minimalist backdrop making food photography pop
 * 4. Deep Charcoal Velvet (#1C1917 / #292524) - Grounded luxury text with high contrast
 * 5. Muted Taupe (#57534E / #8C827A) - Subdued, elegant metadata
 * 6. Pure Vegetarian Green (#15803D) - Authentic culinary certification seal
 */

export const tokens = {
  colors: {
    // Brand Core
    brandBurgundy: '#9F1239',       // Appetizing Ruby Rose (harmonized with DW monogram)
    brandBurgundyDeep: '#881337',
    brandBurgundyHover: '#BE123C',
    brandRose: '#BE123C',
    brandRoseLight: '#FFF1F2',
    brandGold: '#C59B27',           // Saffron Brass Gold (matches DW gold rim)
    brandGoldLight: '#D4AF37',
    brandGoldPale: '#FDF8EC',

    // Canvas Surfaces (Minimalist warm neutrals)
    canvas: '#FAF8F5',
    canvasPure: '#FFFFFF',
    surface: '#F5F2EB',
    surfaceElevated: '#EDE8DE',
    surfaceHover: '#E5DFD2',

    // Nocturnal Luxury Surfaces (Hero & Footer)
    canvasDark: '#160307',
    surfaceDark: '#22060F',
    surfaceElevatedDark: '#320916',

    // Typography
    inkPrimary: '#1C1917',
    inkSecondary: '#57534E',
    inkMuted: '#8C827A',

    // Dark Mode Text
    textPrimaryDark: '#FAF8F5',
    textSecondaryDark: '#D6CECB',
    textMutedDark: '#9C908D',

    // Hairline Borders
    borderSubtle: 'rgba(197, 155, 39, 0.22)',
    borderNeutral: 'rgba(28, 25, 23, 0.08)',
    borderDark: 'rgba(212, 175, 55, 0.22)',

    // Pure Vegetarian Marker
    veg: '#15803D',
  },

  typography: {
    fontSerif: '"Bodoni Moda", Georgia, serif',
    fontSans: '"Instrument Sans", -apple-system, BlinkMacSystemFont, sans-serif',
    headingTracking: '-0.025em',
    labelTracking: '0.18em',
  }
};
