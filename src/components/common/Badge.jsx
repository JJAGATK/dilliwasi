import React from 'react';

/**
 * Dietary and Spice Level Badges
 * Strict compliance with Indian dining visual conventions.
 */
export function DietaryMarker({ isVeg, className = '' }) {
  if (isVeg) {
    return (
      <span
        className={`inline-flex items-center justify-center w-4 h-4 border border-[#2E7D32] bg-[#FAF7F2] p-[2px] rounded-[2px] ${className}`}
        title="Vegetarian"
        aria-label="Vegetarian Dish"
      >
        <span className="w-2 h-2 rounded-full bg-[#2E7D32]" />
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center justify-center w-4 h-4 border border-[#C62828] bg-[#FAF7F2] p-[2px] rounded-[2px] ${className}`}
      title="Non-Vegetarian"
      aria-label="Non-Vegetarian Dish"
    >
      <span
        className="w-0 h-0 border-l-[3.5px] border-l-transparent border-r-[3.5px] border-r-transparent border-b-[7px] border-b-[#C62828]"
      />
    </span>
  );
}

export function SpiceLevel() {
  return null;
}

