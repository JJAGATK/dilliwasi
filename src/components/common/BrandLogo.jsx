import React from 'react';

/**
 * High-Clarity Sanchi Heritage Brand Logo
 * Features the Ashokan Torana Gateway, Great Stupa dome, and royal peacocks.
 * Completely vector-crisp at any size with zero blur or AI clutter.
 */
export function BrandLogo({
  variant = 'horizontal', // 'horizontal' | 'crest' | 'full'
  theme = 'light',        // 'light' | 'dark' | 'gold'
  className = '',
  size = 'md',            // 'sm' | 'md' | 'lg' | 'xl'
  ...props
}) {
  // Color palette definitions
  const isDark = theme === 'dark';
  const isGold = theme === 'gold';

  const goldPrimary = isGold ? '#D4A346' : isDark ? '#E8C066' : '#B38234';
  const goldSecondary = isGold ? '#E8C066' : isDark ? '#D4A346' : '#D4A346';
  const inkPrimary = isGold ? '#E8C066' : isDark ? '#FAF7F2' : '#2A050C';

  // Sizing maps
  const heightMap = {
    horizontal: { sm: 'h-8', md: 'h-10', lg: 'h-12', xl: 'h-16' },
    crest: { sm: 'h-7 w-7', md: 'h-10 w-10', lg: 'h-14 w-14', xl: 'h-20 w-20' },
    full: { sm: 'h-16', md: 'h-24', lg: 'h-32', xl: 'h-44' },
  };

  const currentSizeClass = heightMap[variant]?.[size] || heightMap.horizontal.md;

  // 1. The Pure Crest Emblem (Scalable vector, clean geometric arcs, zero jumble)
  const CrestSVG = ({ width = '48', height = '48', className: crestClass = '' }) => (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={crestClass}
      width={width}
      height={height}
      aria-hidden="true"
    >
      {/* Outer Sacred Halo with Scalloped Arches */}
      <circle
        cx="50"
        cy="50"
        r="47"
        stroke={goldPrimary}
        strokeWidth="1.2"
        strokeDasharray="2 3"
        opacity="0.8"
      />
      <circle
        cx="50"
        cy="50"
        r="44"
        stroke={goldPrimary}
        strokeWidth="1"
      />
      <circle
        cx="50"
        cy="50"
        r="41"
        stroke={goldSecondary}
        strokeWidth="0.6"
        opacity="0.5"
      />

      {/* Decorative Cardinal Lotus Points */}
      <path d="M50 3 L52 7 L50 9 L48 7 Z" fill={goldPrimary} />
      <path d="M50 97 L52 93 L50 91 L48 93 Z" fill={goldPrimary} />
      <path d="M3 50 L7 52 L9 50 L7 48 Z" fill={goldPrimary} />
      <path d="M97 50 L93 52 L91 50 L93 48 Z" fill={goldPrimary} />

      {/* The Great Stupa Dome (Hemispherical Anda) */}
      <path
        d="M26 68 A24 24 0 0 1 74 68 Z"
        stroke={inkPrimary}
        strokeWidth="1.8"
        fill={isDark ? '#380812' : '#F4EFE6'}
        fillOpacity="0.6"
      />

      {/* Inner Dome Architectural Terrace Rings */}
      <path
        d="M32 68 A18 18 0 0 1 68 68"
        stroke={goldPrimary}
        strokeWidth="1"
        fill="none"
        strokeDasharray="1.5 2"
      />

      {/* Harmika Terrace Railing */}
      <rect
        x="44"
        y="39"
        width="12"
        height="5"
        rx="1"
        stroke={goldPrimary}
        strokeWidth="1.2"
        fill={isDark ? '#2A050C' : '#FAF7F2'}
      />
      <line x1="48" y1="39" x2="48" y2="44" stroke={goldPrimary} strokeWidth="0.8" />
      <line x1="52" y1="39" x2="52" y2="44" stroke={goldPrimary} strokeWidth="0.8" />

      {/* Three Umbrella Chhatras (Three Jewels: Buddha, Dharma, Sangha) */}
      <line x1="50" y1="28" x2="50" y2="39" stroke={goldPrimary} strokeWidth="1.4" />
      <path d="M42 35 C46 33, 54 33, 58 35" stroke={goldPrimary} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M44 31 C47 29.5, 53 29.5, 56 31" stroke={goldPrimary} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M46 27 C48 26, 52 26, 54 27" stroke={goldPrimary} strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="50" cy="24" r="1.5" fill={goldPrimary} />

      {/* Sacred Sanchi Torana Gateway Lintels (Three Arched Beams with Spiraled Terminals) */}
      {/* Top Lintel */}
      <path
        d="M18 48 C20 45, 23 47, 24 49 L76 49 C77 47, 80 45, 82 48"
        stroke={goldPrimary}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Middle Lintel */}
      <path
        d="M20 54 C22 51, 24 53, 25 55 L75 55 C76 53, 78 51, 80 54"
        stroke={goldPrimary}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Bottom Lintel */}
      <path
        d="M22 60 C23 58, 25 59, 26 61 L74 61 C75 59, 77 58, 78 60"
        stroke={goldPrimary}
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* Gateway Twin Square Pillars */}
      <line x1="28" y1="47" x2="28" y2="78" stroke={inkPrimary} strokeWidth="2" strokeLinecap="square" />
      <line x1="72" y1="47" x2="72" y2="78" stroke={inkPrimary} strokeWidth="2" strokeLinecap="square" />

      {/* Pillar Capital Brackets */}
      <path d="M26 47 L30 47 L29 50 L27 50 Z" fill={goldPrimary} />
      <path d="M70 47 L74 47 L73 50 L71 50 Z" fill={goldPrimary} />

      {/* Base Plinth & Meditative Steps */}
      <line x1="18" y1="78" x2="82" y2="78" stroke={goldPrimary} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="24" y1="81" x2="76" y2="81" stroke={inkPrimary} strokeWidth="1.4" strokeLinecap="round" />
      <line x1="30" y1="84" x2="70" y2="84" stroke={goldSecondary} strokeWidth="1" strokeLinecap="round" />

      {/* Flanking Royal Peacocks (Profile Silhouette) */}
      {/* Left Peacock */}
      <path
        d="M16 68 C16 63, 19 62, 21 64 C22 66, 21 70, 18 73 C16 75, 14 74, 15 72 Z"
        fill={goldPrimary}
        opacity="0.85"
      />
      {/* Right Peacock */}
      <path
        d="M84 68 C84 63, 81 62, 79 64 C78 66, 79 70, 82 73 C84 75, 86 74, 85 72 Z"
        fill={goldPrimary}
        opacity="0.85"
      />

      {/* Central Heritage Ashokan Star Jewel */}
      <circle cx="50" cy="55" r="2.2" fill={goldPrimary} />
    </svg>
  );

  // Variant A: Just the crisp Crest
  if (variant === 'crest') {
    return (
      <div className={`inline-flex items-center justify-center ${currentSizeClass} ${className}`} {...props}>
        <CrestSVG width="100%" height="100%" />
      </div>
    );
  }

  // Variant B: Horizontal Lockup (Crest + SANCHI Wordmark + Subline) - Ideal for Navbar & Headers
  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center space-x-3 select-none ${className}`} {...props}>
        <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-105">
          <CrestSVG width="100%" height="100%" />
        </div>
        <div className="flex flex-col text-left">
          <span
            className="font-serif text-2xl sm:text-[26px] font-bold tracking-tight leading-none transition-colors duration-400"
            style={{ color: inkPrimary }}
          >
            SANCHI
          </span>
          <span
            className="text-[9px] uppercase tracking-[0.22em] font-semibold transition-colors duration-400 mt-1"
            style={{ color: goldPrimary }}
          >
            Heritage Dining
          </span>
        </div>
      </div>
    );
  }

  // Variant C: Full Centered Stacked Lockup (Large Crest on top, Wordmark in center, Tagline on bottom)
  return (
    <div className={`inline-flex flex-col items-center text-center select-none ${className}`} {...props}>
      <div className="w-16 h-16 sm:w-20 sm:h-20 mb-2 drop-shadow-sm">
        <CrestSVG width="100%" height="100%" />
      </div>
      <span
        className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-none"
        style={{ color: inkPrimary }}
      >
        SANCHI
      </span>
      <div className="flex items-center space-x-3 my-2 w-full max-w-[200px]">
        <div className="flex-1 h-[1px]" style={{ backgroundColor: goldPrimary, opacity: 0.4 }} />
        <span className="text-[10px] sm:text-xs" style={{ color: goldPrimary }}>✦</span>
        <div className="flex-1 h-[1px]" style={{ backgroundColor: goldPrimary, opacity: 0.4 }} />
      </div>
      <span
        className="text-[10px] sm:text-xs uppercase tracking-[0.26em] font-semibold"
        style={{ color: goldPrimary }}
      >
        Heritage Dining &bull; Est. 3rd Century BCE
      </span>
    </div>
  );
}
