import React from 'react';

/**
 * Dilliwasi Heritage Architectural & Culinary Line Drawings
 * Precision SVG line-art created to evoke the regal heritage of Old Delhi,
 * Haridwar rooftop horizons, and time-honored pure desi ghee cooking traditions.
 */

/**
 * 1. Delhi Mehrab Arch & Jharokha (The iconic scalloped multi-foil arch of Delhi's imperial gateways)
 */
export function DelhiMehrabArchDrawing({ className = '', stroke = 'currentColor' }) {
  return (
    <svg
      viewBox="0 0 460 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer Ground Plinth */}
      <line x1="30" y1="460" x2="430" y2="460" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="50" y1="445" x2="410" y2="445" stroke={stroke} strokeWidth="1.8" />

      {/* Left Pillar */}
      <rect x="70" y="160" width="32" height="285" stroke={stroke} strokeWidth="2.2" />
      <line x1="86" y1="160" x2="86" y2="445" stroke={stroke} strokeWidth="1.2" strokeDasharray="5 5" />
      {/* Left Capital & Bracket */}
      <rect x="60" y="140" width="52" height="20" stroke={stroke} strokeWidth="2" />
      <path d="M 60 140 C 45 125 45 115 65 110 H 115 C 130 115 130 125 120 140 Z" stroke={stroke} strokeWidth="2" />

      {/* Right Pillar */}
      <rect x="358" y="160" width="32" height="285" stroke={stroke} strokeWidth="2.2" />
      <line x1="374" y1="160" x2="374" y2="445" stroke={stroke} strokeWidth="1.2" strokeDasharray="5 5" />
      {/* Right Capital & Bracket */}
      <rect x="348" y="140" width="52" height="20" stroke={stroke} strokeWidth="2" />
      <path d="M 348 140 C 335 125 335 115 350 110 H 400 C 415 115 415 125 400 140 Z" stroke={stroke} strokeWidth="2" />

      {/* Outer Spandrel Frame */}
      <rect x="50" y="40" width="360" height="70" stroke={stroke} strokeWidth="2.4" />
      <rect x="58" y="48" width="344" height="54" stroke={stroke} strokeWidth="1.4" strokeDasharray="4 4" />

      {/* Ornamental Floral Medallion atop arch frame */}
      <circle cx="230" cy="75" r="14" stroke={stroke} strokeWidth="2" />
      <circle cx="230" cy="75" r="5" fill={stroke} />
      <circle cx="140" cy="75" r="8" stroke={stroke} strokeWidth="1.5" />
      <circle cx="320" cy="75" r="8" stroke={stroke} strokeWidth="1.5" />

      {/* Grand 9-Foil Scalloped Mehrab Arch */}
      <path
        d="M 102 240
           C 102 210 118 190 135 185
           C 145 170 160 160 178 152
           C 188 135 208 120 230 108
           C 252 120 272 135 282 152
           C 300 160 315 170 325 185
           C 342 190 358 210 358 240"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Inner Concentric Scallop Foil */}
      <path
        d="M 115 240
           C 115 218 128 200 142 196
           C 152 182 165 174 182 166
           C 192 150 210 138 230 126
           C 250 138 268 150 278 166
           C 295 174 308 182 318 196
           C 332 200 345 218 345 240"
        stroke={stroke}
        strokeWidth="1.8"
        strokeDasharray="5 4"
      />

      {/* Pointed Arch Finial / Kalash */}
      <path d="M 230 108 V 92" stroke={stroke} strokeWidth="2" />
      <circle cx="230" cy="90" r="3.5" fill={stroke} />

      {/* Delicate Jaali Screen Geometry inside upper spandrels */}
      <line x1="102" y1="110" x2="160" y2="160" stroke={stroke} strokeWidth="1" strokeDasharray="3 3" />
      <line x1="358" y1="110" x2="300" y2="160" stroke={stroke} strokeWidth="1" strokeDasharray="3 3" />
    </svg>
  );
}

/**
 * 2. Desi Ghee Copper Deg / Handi (Simmering over sigri embers with wheat dough dum seal)
 */
export function DesiGheeHandiDrawing({ className = '', stroke = 'currentColor' }) {
  return (
    <svg
      viewBox="0 0 340 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Saffron Steam Tendrils */}
      <path d="M 140 95 C 130 65 155 45 138 15" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
      <path d="M 170 90 C 185 60 160 38 175 10" stroke={stroke} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M 200 95 C 210 70 185 48 202 18" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />

      {/* Handi Lid & Crown Handle */}
      <ellipse cx="170" cy="105" rx="95" ry="22" stroke={stroke} strokeWidth="2.6" />
      <ellipse cx="170" cy="98" rx="16" ry="6" stroke={stroke} strokeWidth="2" />
      <circle cx="170" cy="90" r="4.5" stroke={stroke} strokeWidth="2" />

      {/* Baked Atta Dough Dum Seal Ribbon */}
      <path
        d="M 75 108 Q 170 134 265 108 Q 260 120 252 124 Q 170 148 88 124 Q 80 118 75 108 Z"
        stroke={stroke}
        strokeWidth="2"
        strokeDasharray="4 3"
      />

      {/* Bulged Copper Deg Belly */}
      <path
        d="M 78 116 C 68 140 58 175 68 215 C 82 270 120 295 170 295 C 220 295 258 270 272 215 C 282 175 272 140 262 116"
        stroke={stroke}
        strokeWidth="2.8"
      />

      {/* Hand-Hammered Copper Dimples */}
      {[
        [105, 175], [135, 170], [170, 168], [205, 170], [235, 175],
        [95, 208], [130, 205], [170, 202], [210, 205], [245, 208],
        [115, 242], [145, 240], [170, 238], [195, 240], [225, 242],
        [145, 270], [170, 270], [195, 270]
      ].map(([cx, cy], i) => (
        <path
          key={i}
          d={`M ${cx - 6} ${cy} Q ${cx} ${cy + 3} ${cx + 6} ${cy}`}
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      ))}

      {/* Sigri Base & Embers */}
      <path d="M 95 305 Q 170 320 245 305" stroke={stroke} strokeWidth="2.4" strokeLinecap="round" />
      <line x1="75" y1="320" x2="265" y2="320" stroke={stroke} strokeWidth="2" />
      <circle cx="90" cy="290" r="2.5" fill={stroke} />
      <circle cx="250" cy="285" r="2.5" fill={stroke} />
      <circle cx="170" cy="310" r="2" fill={stroke} />
    </svg>
  );
}

/**
 * 3. Haridwar Rooftop Chhatri Pavilion (Dilliwasi 4th Floor Open-Air Terrace Cafe)
 */
export function RooftopPavilionDrawing({ className = '', stroke = 'currentColor' }) {
  return (
    <svg
      viewBox="0 0 380 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Top Kalash & Spire */}
      <line x1="190" y1="20" x2="190" y2="60" stroke={stroke} strokeWidth="2.4" />
      <circle cx="190" cy="20" r="4" fill={stroke} />
      <path d="M 183 45 Q 190 35 197 45" stroke={stroke} strokeWidth="2" />
      <path d="M 180 55 Q 190 45 200 55" stroke={stroke} strokeWidth="2.2" />

      {/* Fluted Umbrella Dome (Chhatri) */}
      <path
        d="M 70 140 C 70 80 130 60 190 60 C 250 60 310 80 310 140 Z"
        stroke={stroke}
        strokeWidth="3"
      />
      {/* Fluting Ribs */}
      <path d="M 100 140 C 100 95 145 70 190 60" stroke={stroke} strokeWidth="1.6" strokeDasharray="4 4" />
      <path d="M 280 140 C 280 95 235 70 190 60" stroke={stroke} strokeWidth="1.6" strokeDasharray="4 4" />
      <path d="M 140 140 C 140 105 165 78 190 60" stroke={stroke} strokeWidth="1.8" />
      <path d="M 240 140 C 240 105 215 78 190 60" stroke={stroke} strokeWidth="1.8" />

      {/* Chhatri Cornice & Eaves (Chhajja) */}
      <path d="M 50 150 Q 190 138 330 150" stroke={stroke} strokeWidth="3" />
      <line x1="60" y1="158" x2="320" y2="158" stroke={stroke} strokeWidth="2" />

      {/* Twin Supporting Arches */}
      <path d="M 90 240 C 90 190 120 165 190 165 C 260 165 290 190 290 240" stroke={stroke} strokeWidth="2.4" />
      <path d="M 105 240 C 105 200 130 178 190 178 C 250 178 275 200 275 240" stroke={stroke} strokeWidth="1.4" strokeDasharray="4 4" />

      {/* Pillars */}
      <line x1="90" y1="165" x2="90" y2="350" stroke={stroke} strokeWidth="3" />
      <line x1="120" y1="165" x2="120" y2="350" stroke={stroke} strokeWidth="2" />
      <line x1="260" y1="165" x2="260" y2="350" stroke={stroke} strokeWidth="2" />
      <line x1="290" y1="165" x2="290" y2="350" stroke={stroke} strokeWidth="3" />

      {/* Jali Balustrade Railing at Base */}
      <line x1="60" y1="350" x2="320" y2="350" stroke={stroke} strokeWidth="2.8" />
      <line x1="60" y1="375" x2="320" y2="375" stroke={stroke} strokeWidth="2.4" />
      {[80, 110, 140, 170, 200, 230, 260, 290].map((x) => (
        <line key={x} x1={x} y1="350" x2={x} y2="375" stroke={stroke} strokeWidth="1.6" strokeDasharray="3 3" />
      ))}
      <line x1="40" y1="385" x2="340" y2="385" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/**
 * 4. Royal Padma & Kalka Floral Mandala (Auspicious Indian Lotus & Paisley Medallion)
 */
export function RoyalPadmaMandalaDrawing({ className = '', stroke = 'currentColor' }) {
  return (
    <svg
      viewBox="0 0 280 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="140" cy="140" r="130" stroke={stroke} strokeWidth="2.2" />
      <circle cx="140" cy="140" r="120" stroke={stroke} strokeWidth="1.2" strokeDasharray="4 4" />
      <circle cx="140" cy="140" r="40" stroke={stroke} strokeWidth="2" />
      <circle cx="140" cy="140" r="16" stroke={stroke} strokeWidth="1.8" />
      <circle cx="140" cy="140" r="6" fill={stroke} />

      {/* 8 Primary Lotus Petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <g key={angle} transform={`rotate(${angle} 140 140)`}>
          <path
            d="M 140 100 C 128 75 128 50 140 32 C 152 50 152 75 140 100 Z"
            stroke={stroke}
            strokeWidth="1.8"
          />
          <line x1="140" y1="100" x2="140" y2="40" stroke={stroke} strokeWidth="1.2" />
        </g>
      ))}

      {/* 8 Interlaced Paisley (Kalka) Petals */}
      {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle) => (
        <g key={angle} transform={`rotate(${angle} 140 140)`}>
          <path
            d="M 140 95 C 122 68 120 40 140 22 C 160 40 158 68 140 95 Z"
            stroke={stroke}
            strokeWidth="1.4"
            strokeDasharray="4 3"
          />
          <circle cx="140" cy="20" r="3" fill={stroke} />
        </g>
      ))}
    </svg>
  );
}

/**
 * 5. Whole Botanical Spices (Star Anise, Saffron Strands, Cardamom, Cloves)
 */
export function BotanicalSpicesDrawing({ className = '', stroke = 'currentColor' }) {
  return (
    <svg
      viewBox="0 0 320 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Star Anise (Chakra Phool) */}
      <g transform="translate(85, 110)">
        <circle cx="0" cy="0" r="10" stroke={stroke} strokeWidth="2" />
        <circle cx="0" cy="0" r="4" fill={stroke} />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <g key={angle} transform={`rotate(${angle})`}>
            <path
              d="M 0 10 C -8 24 -6 44 0 52 C 6 44 8 24 0 10 Z"
              stroke={stroke}
              strokeWidth="1.6"
            />
            <circle cx="0" cy="38" r="2.5" fill={stroke} />
          </g>
        ))}
      </g>

      {/* Green Cardamom Pod (Elaichi) */}
      <g transform="translate(230, 80)">
        <path
          d="M 0 -35 C -18 -15 -18 20 0 40 C 18 20 18 -15 0 -35 Z"
          stroke={stroke}
          strokeWidth="2"
        />
        <line x1="0" y1="-35" x2="0" y2="40" stroke={stroke} strokeWidth="1.4" strokeDasharray="3 3" />
        <path d="M -8 -10 Q 0 0 -8 15" stroke={stroke} strokeWidth="1.2" />
        <path d="M 8 -10 Q 0 0 8 15" stroke={stroke} strokeWidth="1.2" />
        <line x1="0" y1="-35" x2="0" y2="-45" stroke={stroke} strokeWidth="1.8" />
      </g>

      {/* Whole Clove (Laung) */}
      <g transform="translate(250, 160) rotate(-25)">
        <rect x="-3" y="-10" width="6" height="32" rx="2" stroke={stroke} strokeWidth="1.8" />
        <circle cx="0" cy="-14" r="7" stroke={stroke} strokeWidth="2" />
        <circle cx="0" cy="-14" r="3" fill={stroke} />
        <path d="M -8 -16 L 8 -16" stroke={stroke} strokeWidth="1.5" />
      </g>
    </svg>
  );
}

