import React from 'react';

/**
 * Architectural line-drawing of the Great Stupa of Sanchi (3rd Century BCE).
 * Features the hemispherical Anda dome, Harmika balcony, Chhatravali parasols,
 * and stone Vedika railing with crisp, clear linework.
 */
export function StupaElevationDrawing({ className = '', stroke = 'currentColor' }) {
  return (
    <svg
      viewBox="0 0 500 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Base Terrace & Vedika Ground Railing */}
      <line x1="20" y1="340" x2="480" y2="340" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
      <line x1="40" y1="330" x2="460" y2="330" stroke={stroke} strokeWidth="2.2" />
      <line x1="60" y1="320" x2="440" y2="320" stroke={stroke} strokeWidth="2" />
      
      {/* Railing Uprights (Suchi & Thaba pillars) */}
      {[70, 100, 130, 160, 190, 220, 250, 280, 310, 340, 370, 400, 430].map((x) => (
        <line key={x} x1={x} y1="320" x2={x} y2="340" stroke={stroke} strokeWidth="2" strokeDasharray="3 3" />
      ))}

      {/* Main Hemispherical Dome (Anda) */}
      <path
        d="M 60 320 A 190 190 0 0 1 440 320"
        stroke={stroke}
        strokeWidth="3.5"
      />
      {/* Concentric Masonry Contours */}
      <path
        d="M 85 320 A 165 165 0 0 1 415 320"
        stroke={stroke}
        strokeWidth="1.8"
        strokeDasharray="6 6"
      />
      <path
        d="M 120 320 A 130 130 0 0 1 380 320"
        stroke={stroke}
        strokeWidth="1.6"
        strokeDasharray="4 4"
      />

      {/* Medhi Upper Processional Terrace */}
      <line x1="160" y1="130" x2="340" y2="130" stroke={stroke} strokeWidth="2.4" />

      {/* Harmika (Square Balustrade at the Zenith) */}
      <rect x="210" y="85" width="80" height="45" stroke={stroke} strokeWidth="2.6" />
      <line x1="210" y1="100" x2="290" y2="100" stroke={stroke} strokeWidth="1.8" />
      <line x1="210" y1="115" x2="290" y2="115" stroke={stroke} strokeWidth="1.8" />
      <line x1="230" y1="85" x2="230" y2="130" stroke={stroke} strokeWidth="1.4" />
      <line x1="250" y1="85" x2="250" y2="130" stroke={stroke} strokeWidth="1.4" />
      <line x1="270" y1="85" x2="270" y2="130" stroke={stroke} strokeWidth="1.4" />

      {/* Central Axis Spire (Yasti) */}
      <line x1="250" y1="15" x2="250" y2="85" stroke={stroke} strokeWidth="3" />

      {/* Chhatravali (Three Tiered Imperial Parasols of Honor) */}
      {/* Top Parasol */}
      <path d="M 235 32 Q 250 24 265 32" stroke={stroke} strokeWidth="2.5" fill="none" />
      <line x1="235" y1="32" x2="265" y2="32" stroke={stroke} strokeWidth="2.2" />
      
      {/* Middle Parasol */}
      <path d="M 225 48 Q 250 38 275 48" stroke={stroke} strokeWidth="2.6" fill="none" />
      <line x1="225" y1="48" x2="275" y2="48" stroke={stroke} strokeWidth="2.2" />

      {/* Lower Parasol */}
      <path d="M 215 65 Q 250 53 285 65" stroke={stroke} strokeWidth="2.8" fill="none" />
      <line x1="215" y1="65" x2="285" y2="65" stroke={stroke} strokeWidth="2.2" />

      {/* Decorative Ashoka Wheel / Dharmachakra finial atop */}
      <circle cx="250" cy="16" r="7" stroke={stroke} strokeWidth="2" />
      <circle cx="250" cy="16" r="3" fill={stroke} />
      <path d="M 250 9 V 23 M 243 16 H 257" stroke={stroke} strokeWidth="1.4" />

      {/* Auspicious Flying Streamers / Floral Garlands */}
      <path d="M 215 65 Q 185 80 170 120" stroke={stroke} strokeWidth="1.5" strokeDasharray="4 4" />
      <path d="M 285 65 Q 315 80 330 120" stroke={stroke} strokeWidth="1.5" strokeDasharray="4 4" />
    </svg>
  );
}

/**
 * Architectural elevation drawing of the ceremonial Sanchi Torana Gateway.
 * Highlights the twin pillars, capital brackets, three curved architraves with
 * spiral volute scrolls, and decorative vertical balusters.
 */
export function ToranaArchDrawing({ className = '', stroke = 'currentColor' }) {
  return (
    <svg
      viewBox="0 0 460 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Left Main Pillar */}
      <rect x="75" y="160" width="30" height="300" stroke={stroke} strokeWidth="2.6" />
      <line x1="90" y1="160" x2="90" y2="460" stroke={stroke} strokeWidth="1.4" strokeDasharray="6 6" />
      {/* Left Pillar Base Pedestal */}
      <rect x="65" y="440" width="50" height="20" stroke={stroke} strokeWidth="2.2" />
      <rect x="60" y="460" width="60" height="15" stroke={stroke} strokeWidth="2.6" />

      {/* Right Main Pillar */}
      <rect x="355" y="160" width="30" height="300" stroke={stroke} strokeWidth="2.6" />
      <line x1="370" y1="160" x2="370" y2="460" stroke={stroke} strokeWidth="1.4" strokeDasharray="6 6" />
      {/* Right Pillar Base Pedestal */}
      <rect x="345" y="440" width="50" height="20" stroke={stroke} strokeWidth="2.2" />
      <rect x="340" y="460" width="60" height="15" stroke={stroke} strokeWidth="2.6" />

      {/* Left Pillar Capital (Sculpted bracket & abacus) */}
      <rect x="65" y="135" width="50" height="25" stroke={stroke} strokeWidth="2" />
      <path d="M 60 135 C 50 120 50 110 65 110 H 115 C 130 110 130 120 120 135 Z" stroke={stroke} strokeWidth="2.2" />

      {/* Right Pillar Capital */}
      <rect x="345" y="135" width="50" height="25" stroke={stroke} strokeWidth="2" />
      <path d="M 340 135 C 330 120 330 110 345 110 H 395 C 410 110 410 120 400 135 Z" stroke={stroke} strokeWidth="2.2" />

      {/* 3rd (Lowest) Architrave */}
      <path
        d="M 25 110 C 25 100 35 95 50 95 H 410 C 425 95 435 100 435 110 C 435 120 420 125 410 115 H 50 C 40 125 25 120 25 110 Z"
        stroke={stroke}
        strokeWidth="2.6"
      />
      {/* Spiral Volutes on Lowest Architrave */}
      <circle cx="36" cy="107" r="8" stroke={stroke} strokeWidth="2" />
      <circle cx="424" cy="107" r="8" stroke={stroke} strokeWidth="2" />

      {/* Vertical Spacers / Balustrades between Lower and Middle */}
      <line x1="145" y1="65" x2="145" y2="95" stroke={stroke} strokeWidth="1.8" />
      <line x1="165" y1="65" x2="165" y2="95" stroke={stroke} strokeWidth="1.8" />
      <line x1="220" y1="65" x2="220" y2="95" stroke={stroke} strokeWidth="2.2" />
      <line x1="240" y1="65" x2="240" y2="95" stroke={stroke} strokeWidth="2.2" />
      <line x1="295" y1="65" x2="295" y2="95" stroke={stroke} strokeWidth="1.8" />
      <line x1="315" y1="65" x2="315" y2="95" stroke={stroke} strokeWidth="1.8" />

      {/* 2nd (Middle) Architrave */}
      <path
        d="M 35 65 C 35 55 45 50 60 50 H 400 C 415 50 425 55 425 65 C 425 75 410 80 400 70 H 60 C 50 80 35 75 35 65 Z"
        stroke={stroke}
        strokeWidth="2.6"
      />
      <circle cx="46" cy="62" r="7" stroke={stroke} strokeWidth="1.8" />
      <circle cx="414" cy="62" r="7" stroke={stroke} strokeWidth="1.8" />

      {/* Spacers between Middle and Top */}
      <line x1="150" y1="20" x2="150" y2="50" stroke={stroke} strokeWidth="1.8" />
      <line x1="170" y1="20" x2="170" y2="50" stroke={stroke} strokeWidth="1.8" />
      <line x1="220" y1="20" x2="220" y2="50" stroke={stroke} strokeWidth="2.2" />
      <line x1="240" y1="20" x2="240" y2="50" stroke={stroke} strokeWidth="2.2" />
      <line x1="290" y1="20" x2="290" y2="50" stroke={stroke} strokeWidth="1.8" />
      <line x1="310" y1="20" x2="310" y2="50" stroke={stroke} strokeWidth="1.8" />

      {/* 1st (Top) Architrave */}
      <path
        d="M 45 20 C 45 10 55 5 70 5 H 390 C 405 5 415 10 415 20 C 415 30 400 35 390 25 H 70 C 60 35 45 30 45 20 Z"
        stroke={stroke}
        strokeWidth="2.8"
      />
      <circle cx="56" cy="18" r="6" stroke={stroke} strokeWidth="1.8" />
      <circle cx="404" cy="18" r="6" stroke={stroke} strokeWidth="1.8" />

      {/* Top Apex Dharma Wheel (Chakra) Emblem */}
      <circle cx="230" cy="-8" r="14" stroke={stroke} strokeWidth="2.2" />
      <circle cx="230" cy="-8" r="4" stroke={stroke} strokeWidth="1.6" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 230 + Math.cos(rad) * 4;
        const y1 = -8 + Math.sin(rad) * 4;
        const x2 = 230 + Math.cos(rad) * 14;
        const y2 = -8 + Math.sin(rad) * 14;
        return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke={stroke} strokeWidth="1.2" />;
      })}

      {/* Auspicious Triratna Trident Motifs on either side of Top Architrave */}
      <path d="M 120 5 V -10 M 115 -10 Q 120 -15 125 -10" stroke={stroke} strokeWidth="1.8" />
      <path d="M 340 5 V -10 M 335 -10 Q 340 -15 345 -10" stroke={stroke} strokeWidth="1.8" />
    </svg>
  );
}

/**
 * Artisanal drawing of an Awadhi Copper Deg (Handi) simmering over embers,
 * with hand-hammered texture marks, wheat dough dum seal, and aromatic steam curls.
 */
export function CopperDegDrawing({ className = '', stroke = 'currentColor' }) {
  return (
    <svg
      viewBox="0 0 340 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Gentle Rising Steam Tendrils */}
      <path d="M 140 100 C 130 70 155 45 140 15" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
      <path d="M 170 95 C 185 65 160 40 175 10" stroke={stroke} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M 200 100 C 210 75 185 50 205 20" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />

      {/* Deg Pot Lid & Brass Handle Knob */}
      <ellipse cx="170" cy="110" rx="100" ry="24" stroke={stroke} strokeWidth="2.8" />
      <ellipse cx="170" cy="102" rx="18" ry="7" stroke={stroke} strokeWidth="2.2" />
      <circle cx="170" cy="94" r="5" stroke={stroke} strokeWidth="2.2" />

      {/* Baked Atta Dough Dum Seal Ribbon */}
      <path
        d="M 68 114 Q 170 142 272 114 Q 268 126 260 130 Q 170 155 80 130 Q 72 124 68 114 Z"
        stroke={stroke}
        strokeWidth="2.2"
        strokeDasharray="4 4"
      />

      {/* Deg Neck & Rolled Rim */}
      <path d="M 72 120 C 65 145 55 180 65 220 C 80 275 120 300 170 300 C 220 300 260 275 275 220 C 285 180 275 145 268 120" stroke={stroke} strokeWidth="3" />

      {/* Hand-Hammered Dimple / Texture Impressions */}
      {[
        [100, 180], [130, 175], [170, 170], [210, 175], [240, 180],
        [90, 215], [125, 210], [170, 208], [215, 210], [250, 215],
        [110, 250], [145, 248], [170, 245], [195, 248], [230, 250],
        [140, 275], [170, 275], [200, 275]
      ].map(([cx, cy], i) => (
        <path
          key={i}
          d={`M ${cx - 7} ${cy} Q ${cx} ${cy + 4} ${cx + 7} ${cy}`}
          stroke={stroke}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      ))}

      {/* Charcoal Sigri Hearth Embers Base */}
      <path d="M 90 310 Q 170 325 250 310" stroke={stroke} strokeWidth="2.6" strokeLinecap="round" />
      <line x1="70" y1="325" x2="270" y2="325" stroke={stroke} strokeWidth="2.2" />
      
      {/* Ember Sparks */}
      <circle cx="85" cy="295" r="2.5" fill={stroke} />
      <circle cx="255" cy="290" r="3" fill={stroke} />
      <circle cx="280" cy="270" r="2" fill={stroke} />
      <circle cx="60" cy="265" r="2" fill={stroke} />
    </svg>
  );
}

/**
 * Intricate 16-petal carved stone lotus medallion (Padma)
 * inspired by decorative rosettes on Sanchi Torana architraves.
 */
export function LotusMedallionDrawing({ className = '', stroke = 'currentColor' }) {
  return (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="120" cy="120" r="110" stroke={stroke} strokeWidth="2.4" />
      <circle cx="120" cy="120" r="102" stroke={stroke} strokeWidth="1.4" strokeDasharray="4 4" />
      <circle cx="120" cy="120" r="30" stroke={stroke} strokeWidth="2.2" />
      <circle cx="120" cy="120" r="12" stroke={stroke} strokeWidth="1.6" />
      <circle cx="120" cy="120" r="5" fill={stroke} />

      {/* 8 Inner Petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <g key={angle} transform={`rotate(${angle} 120 120)`}>
          <path
            d="M 120 90 C 110 70 110 50 120 35 C 130 50 130 70 120 90 Z"
            stroke={stroke}
            strokeWidth="1.8"
          />
          <line x1="120" y1="90" x2="120" y2="40" stroke={stroke} strokeWidth="1.2" />
        </g>
      ))}

      {/* 8 Outer Interlaced Petals */}
      {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle) => (
        <g key={angle} transform={`rotate(${angle} 120 120)`}>
          <path
            d="M 120 85 C 105 60 105 35 120 22 C 135 35 135 60 120 85 Z"
            stroke={stroke}
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
        </g>
      ))}
    </svg>
  );
}
