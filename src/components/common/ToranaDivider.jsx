import React from 'react';

/**
 * MehrabDivider: Architectural line-art separator inspired by the multi-foil scalloped
 * arches of Old Delhi and royal North Indian dining courts.
 */
export function MehrabDivider({ className = '', light = false, label = '' }) {
  const strokeColor = light ? 'rgba(232, 192, 102, 0.45)' : 'rgba(197, 155, 39, 0.35)';
  const textColor = light ? '#E8C066' : '#C59B27';

  return (
    <div className={`flex flex-col items-center justify-center my-12 ${className}`} role="separator" aria-label="Decorative Heritage Separator">
      <div className="flex items-center w-full max-w-lg px-4 space-x-3">
        <div className="h-[1px] flex-1" style={{ backgroundColor: strokeColor }} />
        
        {/* Scalloped Arch & Diamond Vector */}
        <div className="flex items-center space-x-2 text-center shrink-0">
          <svg
            width="48"
            height="20"
            viewBox="0 0 48 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block"
            aria-hidden="true"
          >
            {/* Scalloped Crest */}
            <path
              d="M4 18 C10 18 12 12 16 10 C20 8 22 2 24 2 C26 2 28 8 32 10 C36 12 38 18 44 18"
              stroke={strokeColor}
              strokeWidth="1.3"
              strokeLinecap="round"
            />
            <circle cx="24" cy="2" r="2" fill={strokeColor} />
            <circle cx="16" cy="10" r="1.5" fill={strokeColor} />
            <circle cx="32" cy="10" r="1.5" fill={strokeColor} />
          </svg>
        </div>

        <div className="h-[1px] flex-1" style={{ backgroundColor: strokeColor }} />
      </div>

      {label && (
        <span
          className="mt-2.5 text-[10px] font-semibold uppercase tracking-[0.22em]"
          style={{ color: textColor }}
        >
          {label}
        </span>
      )}
    </div>
  );
}

// Backward compatibility alias
export const ToranaDivider = MehrabDivider;
