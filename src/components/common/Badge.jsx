import React from 'react';

/**
 * Dietary and Specialty Badges for Dilliwasi (100% Pure Vegetarian)
 * Strict compliance with Indian dining visual conventions.
 */
export function DietaryMarker({ isVeg: _isVeg = true, className = '' } = {}) {
  return (
    <span
      className={`inline-flex items-center justify-center w-4 h-4 border border-[#16A34A] bg-[#FAF7F2] p-[2px] rounded-[2px] shadow-xs ${className}`}
      title="100% Pure Vegetarian"
      aria-label="Pure Vegetarian Dish"
    >
      <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
    </span>
  );
}

export function PureDesiGheeBadge({ className = '' }) {
  return (
    <span className={`inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-50 text-amber-800 border border-amber-200/80 ${className}`}>
      <span className="text-[11px]">🧈</span>
      <span>Pure Desi Ghee</span>
    </span>
  );
}

export function ChefSpecialBadge({ className = '' }) {
  return (
    <span className={`inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-rose-50 text-[#E60067] border border-rose-200/80 ${className}`}>
      <span>★</span>
      <span>Dilliwasi Special</span>
    </span>
  );
}

export function SpiceLevel({ level = 1, className = '' }) {
  if (!level || level <= 0) return null;
  return (
    <span className={`inline-flex items-center space-x-0.5 text-xs text-[#EA580C] ${className}`} title={`Spice Level ${level}/3`}>
      {Array.from({ length: level }).map((_, i) => (
        <span key={i}>🌶️</span>
      ))}
    </span>
  );
}
