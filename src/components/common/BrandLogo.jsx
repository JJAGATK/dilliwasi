import React from 'react';

/**
 * Dilliwasi Fine Dine & Rooftop Cafe Brand Logo
 * Features the signature interlocking 'DW' monogram crest with golden rim ring,
 * pure veg emblem, and refined royal typography.
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

  const goldPrimary = isGold ? '#D4A346' : isDark ? '#E8C066' : '#C29032';
  const goldAccent = '#E8C066';
  const inkPrimary = isGold ? '#E8C066' : isDark ? '#FAF7F2' : '#2A050C';
  const magentaBrand = '#E60067';

  // Sizing maps
  const heightMap = {
    horizontal: { sm: 'h-8', md: 'h-10', lg: 'h-12', xl: 'h-16' },
    crest: { sm: 'h-8 w-8', md: 'h-11 w-11', lg: 'h-16 w-16', xl: 'h-24 w-24' },
    full: { sm: 'h-20', md: 'h-28', lg: 'h-36', xl: 'h-48' },
  };

  const currentSizeClass = heightMap[variant]?.[size] || heightMap.horizontal.md;

  // The DW Monogram Crest (using the user-provided emblem with golden rim ring)
  const CrestImage = ({ sizeClass = 'w-10 h-10', extraClass = '' }) => (
    <div className={`relative shrink-0 rounded-full overflow-hidden p-[2px] bg-gradient-to-tr from-[#D4A346] via-[#FDF0CD] to-[#B38234] shadow-[0_3px_10px_rgba(230,0,103,0.25)] ${sizeClass} ${extraClass}`}>
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

  // Variant B: Horizontal Lockup (Crest + DILLIWASI Wordmark + Pure Veg Badge)
  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center space-x-3 select-none ${className}`} {...props}>
        <div className="shrink-0 transition-transform duration-300 group-hover:scale-105">
          <CrestImage sizeClass="w-9 h-9 sm:w-11 sm:h-11" />
        </div>
        <div className="flex flex-col text-left">
          <div className="flex items-center space-x-1.5">
            <span
              className="font-serif text-2xl sm:text-[26px] font-bold tracking-tight leading-none transition-colors duration-400"
              style={{ color: inkPrimary }}
            >
              DILLIWASI
            </span>
            {/* Pure Veg Green Dot Marker */}
            <span
              className="inline-flex items-center justify-center w-3 h-3 rounded-[3px] border border-[#16A34A] bg-white p-[1px]"
              title="100% Pure Vegetarian"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
            </span>
          </div>
          <span
            className="text-[9px] uppercase tracking-[0.24em] font-semibold transition-colors duration-400 mt-1"
            style={{ color: goldPrimary }}
          >
            Fine Dine &bull; Pure Veg &bull; Est. 2001
          </span>
        </div>
      </div>
    );
  }

  // Variant C: Full Centered Stacked Lockup
  return (
    <div className={`inline-flex flex-col items-center text-center select-none ${className}`} {...props}>
      <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3 drop-shadow-md">
        <CrestImage sizeClass="w-full h-full" />
      </div>
      <div className="flex items-center space-x-2">
        <span
          className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-none"
          style={{ color: inkPrimary }}
        >
          DILLIWASI
        </span>
        <span
          className="inline-flex items-center justify-center w-4 h-4 rounded-[3px] border border-[#16A34A] bg-white p-[2px]"
          title="100% Pure Vegetarian"
        >
          <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
        </span>
      </div>
      <div className="flex items-center space-x-3 my-2.5 w-full max-w-[220px]">
        <div className="flex-1 h-[1px]" style={{ backgroundColor: goldPrimary, opacity: 0.4 }} />
        <span className="text-[10px] sm:text-xs" style={{ color: magentaBrand }}>✦</span>
        <span className="text-[10px] sm:text-xs" style={{ color: goldAccent }}>✦</span>
        <span className="text-[10px] sm:text-xs" style={{ color: magentaBrand }}>✦</span>
        <div className="flex-1 h-[1px]" style={{ backgroundColor: goldPrimary, opacity: 0.4 }} />
      </div>
      <span
        className="text-[10px] sm:text-xs uppercase tracking-[0.24em] font-semibold"
        style={{ color: goldPrimary }}
      >
        Fine Dine &bull; Rooftop Cafe &bull; Since 2001
      </span>
      <span className="text-[9px] sm:text-[10px] text-[#16A34A] font-medium tracking-wider mt-1 uppercase">
        100% Pure Vegetarian &bull; Pure Desi Ghee Delights
      </span>
    </div>
  );
}
