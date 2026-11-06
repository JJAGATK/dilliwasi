import React from 'react';

/**
 * Minimalist Dietary and Specialty Badges for Dilliwasi (100% Pure Vegetarian)
 * Strictly zero emojis. High-clarity typography & geometric markers.
 */

// Universal Indian Vegetarian Dot-in-Square Emblem
export function DietaryMarker({ isVeg: _isVeg = true, className = '' } = {}) {
  return (
    <span
      className={`inline-flex items-center justify-center w-3.5 h-3.5 border border-[#15803D] bg-white p-[2px] rounded-[2px] shrink-0 ${className}`}
      title="100% Pure Vegetarian"
      aria-label="Pure Vegetarian"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#15803D]" />
    </span>
  );
}

// Minimalist Pure Desi Ghee Micro-Tag (Warm Saffron Gold)
export function PureDesiGheeBadge({ className = '' }) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-[2px] text-[9px] font-semibold uppercase tracking-[0.14em] text-[#A37424] bg-[#FAF5EB] border border-[#D4A346]/40 ${className}`}>
      Desi Ghee
    </span>
  );
}

// Minimalist Signature Tag (Royal Ruby Rose)
export function ChefSpecialBadge({ className = '' }) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-[2px] text-[9px] font-semibold uppercase tracking-[0.14em] text-[#9F1239] bg-[#FFF1F2] border border-[#9F1239]/30 ${className}`}>
      Signature
    </span>
  );
}

// Minimalist Spice Level (clean geometric dots)
export function SpiceLevel({ level = 1, className = '' }) {
  if (!level || level <= 0) return null;
  return (
    <span className={`inline-flex items-center space-x-1 text-[10px] text-[#8C7A6D] tracking-wider uppercase ${className}`}>
      <span>Spice</span>
      <span className="flex space-x-0.5">
        {[1, 2, 3].map((dot) => (
          <span
            key={dot}
            className={`w-1 h-1 rounded-full ${
              dot <= level ? 'bg-[#9F1239]' : 'bg-stone-300'
            }`}
          />
        ))}
      </span>
    </span>
  );
}
