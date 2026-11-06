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

// Minimalist Pure Desi Ghee Micro-Tag
export function PureDesiGheeBadge({ className = '' }) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-[2px] text-[9px] font-semibold uppercase tracking-[0.14em] text-[#A67C1E] bg-[#FAF5EB] border border-[#D4A346]/35 ${className}`}>
      Desi Ghee
    </span>
  );
}

// Minimalist Signature Tag (matching Logo Ruby Accent)
export function ChefSpecialBadge({ className = '' }) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-[2px] text-[9px] font-semibold uppercase tracking-[0.14em] text-[#D81B60] bg-[#FFF0F5] border border-[#D81B60]/30 ${className}`}>
      Signature
    </span>
  );
}

// Minimalist Spice Level (clean geometric indicator)
export function SpiceLevel({ level = 1, className = '' }) {
  if (!level || level <= 0) return null;
  return (
    <span className={`inline-flex items-center space-x-1 text-[10px] text-[#A8A29E] tracking-wider uppercase ${className}`}>
      <span>Spice</span>
      <span className="flex space-x-0.5">
        {[1, 2, 3].map((dot) => (
          <span
            key={dot}
            className={`w-1 h-1 rounded-full ${
              dot <= level ? 'bg-[#D81B60]' : 'bg-stone-300'
            }`}
          />
        ))}
      </span>
    </span>
  );
}
