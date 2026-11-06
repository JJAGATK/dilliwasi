import React from 'react';

/**
 * Minimalist Brand Logo for Dilliwasi
 * Features the interlocking 'DW' monogram crest with golden circular rim and royal wine core.
 * Zero emojis, clean typography, strict luxury color discipline.
 */
export function BrandLogo({
  variant = 'horizontal', // 'horizontal' | 'crest' | 'full'
  theme = 'light',        // 'light' | 'dark' | 'gold'
  className = '',
  size = 'md',            // 'sm' | 'md' | 'lg' | 'xl'
  ...props
}) {
  const isDark = theme === 'dark';
  const isGold = theme === 'gold';

  const goldPrimary = isGold ? '#D4A346' : isDark ? '#E8C066' : '#C59B27';
  const inkPrimary = isGold ? '#E8C066' : isDark ? '#FAF7F2' : '#241814';

  // Sizing maps
  const heightMap = {
    horizontal: { sm: 'h-8', md: 'h-10', lg: 'h-12', xl: 'h-16' },
    crest: { sm: 'h-7 w-7', md: 'h-10 w-10', lg: 'h-14 w-14', xl: 'h-20 w-20' },
    full: { sm: 'h-20', md: 'h-28', lg: 'h-36', xl: 'h-44' },
  };

  const currentSizeClass = heightMap[variant]?.[size] || heightMap.horizontal.md;

  // The DW Monogram Emblem (Gold rim ring + deep royal wine burgundy core)
  const CrestImage = ({ sizeClass = 'w-10 h-10', extraClass = '' }) => (
    <div className={`relative shrink-0 rounded-full overflow-hidden p-[1.5px] bg-gradient-to-tr from-[#C59B27] via-[#FDF0CD] to-[#D4A346] shadow-xs ${sizeClass} ${extraClass}`}>
      <img
        src="/assets/dw-logo.jpg"
        alt="Dilliwasi DW Monogram Emblem"
        className="w-full h-full object-cover rounded-full select-none"
        loading="eager"
      />
    </div>
  );

  // Variant A: Pure Crest
  if (variant === 'crest') {
    return (
      <div className={`inline-flex items-center justify-center ${currentSizeClass} ${className}`} {...props}>
        <CrestImage sizeClass="w-full h-full" />
      </div>
    );
  }

  // Variant B: Horizontal Lockup (Crest + Wordmark)
  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center space-x-2.5 sm:space-x-3 select-none min-w-0 ${className}`} {...props}>
        <div className="shrink-0 transition-transform duration-300 group-hover:scale-102">
          <CrestImage sizeClass="w-8 h-8 sm:w-10 sm:h-10" />
        </div>
        <div className="flex flex-col text-left min-w-0">
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <span
              className="font-serif text-xl sm:text-2xl font-bold tracking-tight leading-none truncate"
              style={{ color: inkPrimary }}
            >
              DILLIWASI
            </span>
            <span
              className="inline-flex items-center justify-center w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-[2px] border border-[#15803D] bg-white p-[1px] shrink-0"
              title="100% Pure Vegetarian"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#15803D]" />
            </span>
          </div>
          <span
            className="text-[8px] sm:text-[9px] uppercase tracking-[0.14em] sm:tracking-[0.22em] font-medium transition-colors duration-300 mt-0.5 sm:mt-1 truncate max-w-[170px] sm:max-w-none"
            style={{ color: goldPrimary }}
          >
            Fine Dine &bull; Pure Desi Ghee
          </span>
        </div>
      </div>
    );
  }

  // Variant C: Full Centered Stacked Lockup
  return (
    <div className={`inline-flex flex-col items-center text-center select-none ${className}`} {...props}>
      <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3 drop-shadow-xs">
        <CrestImage sizeClass="w-full h-full" />
      </div>
      <div className="flex items-center space-x-2">
        <span
          className="font-serif text-3xl sm:text-4xl font-bold tracking-tight leading-none"
          style={{ color: inkPrimary }}
        >
          DILLIWASI
        </span>
        <span
          className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-[2px] border border-[#15803D] bg-white p-[1.5px]"
          title="100% Pure Vegetarian"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#15803D]" />
        </span>
      </div>
      <div className="flex items-center space-x-3 my-2.5 w-full max-w-[200px]">
        <div className="flex-1 h-[1px]" style={{ backgroundColor: goldPrimary, opacity: 0.35 }} />
        <div className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: goldPrimary }} />
        <div className="flex-1 h-[1px]" style={{ backgroundColor: goldPrimary, opacity: 0.35 }} />
      </div>
      <span
        className="text-[10px] uppercase tracking-[0.22em] font-medium"
        style={{ color: goldPrimary }}
      >
        Fine Dine &bull; Rooftop Cafe &bull; Since 2001
      </span>
      <span className="text-[10px] text-[#6E5D53] tracking-widest mt-1 uppercase font-light">
        100% Pure Vegetarian &bull; Pure Desi Ghee
      </span>
    </div>
  );
}
