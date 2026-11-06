import React from 'react';

/**
 * ToranaDivider: Subtle architectural line-art inspired by the ceremonial architraves
 * and gateways of the Great Stupa of Sanchi (3rd Century BCE).
 * Used with discipline as a section mark or narrative separator.
 */
export function ToranaDivider({ className = '', light = false, label = '' }) {
  const strokeColor = light ? 'rgba(232, 192, 102, 0.45)' : 'rgba(212, 163, 70, 0.35)';
  const textColor = light ? '#E8C066' : '#D4A346';

  return (
    <div className={`flex flex-col items-center justify-center my-12 ${className}`} role="separator" aria-label="Decorative Torana Arch Separator">
      <div className="flex items-center w-full max-w-md px-4 space-x-3">
        <div className="h-[1px] flex-1" style={{ backgroundColor: strokeColor }} />
        
        {/* Torana Arch Vector Symbol */}
        <div className="flex items-center space-x-2 text-center">
          <svg
            width="44"
            height="22"
            viewBox="0 0 44 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block transition-transform duration-300 hover:scale-105"
            aria-hidden="true"
          >
            {/* Top Triple Architrave Beams */}
            <path d="M2 3H42" stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" />
            <path d="M5 7H39" stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" />
            <path d="M8 11H36" stroke={strokeColor} strokeWidth="1.2" strokeLinecap="round" />
            
            {/* Curved Gate Wings & Spiral Terminals */}
            <path d="M14 11V21M30 11V21" stroke={strokeColor} strokeWidth="1.2" />
            <circle cx="22" cy="16" r="2.5" fill={strokeColor} />
            <circle cx="14" cy="20" r="1.5" fill={strokeColor} />
            <circle cx="30" cy="20" r="1.5" fill={strokeColor} />
          </svg>
        </div>

        <div className="h-[1px] flex-1" style={{ backgroundColor: strokeColor }} />
      </div>

      {label && (
        <span
          className="mt-2 text-xs font-semibold uppercase tracking-[0.18em]"
          style={{ color: textColor }}
        >
          {label}
        </span>
      )}
    </div>
  );
}

