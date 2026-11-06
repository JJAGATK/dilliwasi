/**
 * Dilliwasi Semantic Design Tokens
 * Minimalist luxury palette derived directly from the DW Emblem:
 * - Brand Ruby/Magenta (#D81B60 / #E60067)
 * - Warm Antique Gold (#C59B27 / #D4A346)
 * - Deep Charcoal & Ink (#1C1917 / #292524)
 * - Muted Stone (#78716C / #A8A29E)
 * - Pure Light Canvas (#FCFBF9 / #FAF8F5 / #FFFFFF)
 * - Night Ruby (#180308 / #1F040A)
 * - Pure Vegetarian Green (#15803D)
 */

export const tokens = {
  colors: {
    // Brand Core (DW Monogram & Ring)
    brandMagenta: '#D81B60',
    brandMagentaLight: '#FCE4EC',
    brandGold: '#C59B27',
    brandGoldLight: '#FDF8EC',

    // Canvas Surfaces (Minimalist warm neutrals)
    canvas: '#FAF8F5',
    canvasPure: '#FFFFFF',
    surface: '#F5F2EB',
    surfaceSubtle: '#ECE7DD',

    // Dark Surface
    canvasDark: '#180308',
    surfaceDark: '#1F040A',
    surfaceElevatedDark: '#2C0610',

    // Typography
    inkPrimary: '#1C1917',
    inkSecondary: '#57534E',
    inkMuted: '#8C827A',

    // Dark Mode Text
    textPrimaryDark: '#FAF8F5',
    textSecondaryDark: '#D6CECB',
    textMutedDark: '#9C908D',

    // Hairline Borders
    borderSubtle: 'rgba(197, 155, 39, 0.20)',
    borderNeutral: 'rgba(28, 25, 23, 0.08)',
    borderDark: 'rgba(197, 155, 39, 0.22)',

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
