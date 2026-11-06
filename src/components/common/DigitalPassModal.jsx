import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';

export function DigitalPassModal({ reservation, onClose }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!reservation) return null;

  const smsText = `Sanchi Heritage Dining Pass [${reservation.id}]: Table confirmed for ${reservation.guestName} (${reservation.partySize} Guests) on ${reservation.date} at ${reservation.time}. Location: 42 Heritage Promenade, Civil Lines, Bhopal. Concierge: +91 755 248 9100.`;

  const handleCopySMS = () => {
    navigator.clipboard?.writeText(smsText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppShare = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(smsText)}`;
    window.open(url, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/25 backdrop-blur-md animate-fadeIn overflow-y-auto"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Wallet Pass Card Container */}
      <div className="relative w-full max-w-sm my-auto rounded-3xl bg-gradient-to-b from-[#2E0713] via-[#24050E] to-[#1A030A] text-[#FAF7F2] border-2 border-[#D4A346]/40 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Pass Top Banner */}
        <div className="p-4 sm:p-5 border-b border-[rgba(212,163,70,0.25)] bg-[#380812] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <BrandLogo variant="crest" theme="dark" size="sm" className="w-8 h-8 shrink-0" />
            <div>
              <span className="font-serif text-base sm:text-lg font-bold tracking-tight block text-white">SANCHI</span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#D4A346] -mt-1 block font-bold">
                Digital Dining Pass
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="font-mono text-xs text-[#F5DEB3] font-bold px-2.5 py-0.5 rounded-full bg-[rgba(212,163,70,0.2)] border border-[#D4A346]/40">
              {reservation.id}
            </span>
            <button
              onClick={onClose}
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center text-sm transition-colors cursor-pointer"
              title="Close Pass"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Scrollable Pass Details Body */}
        <div className="p-4 sm:p-5 space-y-4 text-xs overflow-y-auto flex-1 scrollbar-thin">
          
          {/* Guest Name */}
          <div>
            <span className="text-[10px] uppercase tracking-[0.15em] text-[#D4A346] font-bold block mb-0.5">
              Guest Name
            </span>
            <span className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide block">
              {reservation.guestName}
            </span>
          </div>

          {/* 3-Column Schedule & Party Matrix */}
          <div className="grid grid-cols-3 gap-2 border-t border-b border-[rgba(212,163,70,0.2)] py-3 bg-black/15 rounded-xl px-3">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#C7B8AA] block">Date</span>
              <span className="font-semibold text-xs text-white block mt-0.5">{reservation.date}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#C7B8AA] block">Seating Time</span>
              <span className="font-mono font-bold text-xs text-[#F5DEB3] block mt-0.5">{reservation.time} hrs</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#C7B8AA] block">Party Size</span>
              <span className="font-semibold text-xs text-white block mt-0.5">{reservation.partySize} Guests</span>
            </div>
          </div>

          {/* Location & High-Contrast Status Badge */}
          <div className="flex justify-between items-center bg-black/20 p-2.5 rounded-xl border border-white/5">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#C7B8AA] block">Allocated Location</span>
              <span className="font-bold text-xs text-[#F5DEB3]">{reservation.table || 'Courtyard Table'}</span>
            </div>
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#065F46] text-[#34D399] border border-[#059669] text-[10px] font-bold uppercase tracking-wider shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse" />
              <span>{reservation.status || 'Confirmed'}</span>
            </span>
          </div>

          {/* QR Code Vector Simulation Box */}
          <div className="pt-1 flex flex-col items-center justify-center">
            <div className="p-3 bg-white rounded-2xl shadow-lg border-2 border-[#D4A346]/40">
              <svg width="112" height="112" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Top-left marker */}
                <rect x="10" y="10" width="30" height="30" rx="4" fill="#241814" />
                <rect x="15" y="15" width="20" height="20" rx="2" fill="white" />
                <rect x="20" y="20" width="10" height="10" fill="#D4A346" />
                
                {/* Top-right marker */}
                <rect x="80" y="10" width="30" height="30" rx="4" fill="#241814" />
                <rect x="85" y="15" width="20" height="20" rx="2" fill="white" />
                <rect x="90" y="20" width="10" height="10" fill="#D4A346" />

                {/* Bottom-left marker */}
                <rect x="10" y="80" width="30" height="30" rx="4" fill="#241814" />
                <rect x="15" y="85" width="20" height="20" rx="2" fill="white" />
                <rect x="20" y="90" width="10" height="10" fill="#D4A346" />

                {/* QR Matrix Bits */}
                <rect x="48" y="12" width="6" height="6" fill="#241814" />
                <rect x="62" y="12" width="8" height="6" fill="#241814" />
                <rect x="48" y="24" width="10" height="6" fill="#241814" />
                <rect x="64" y="28" width="6" height="6" fill="#241814" />
                <rect x="48" y="44" width="24" height="24" rx="2" fill="#241814" />
                <rect x="52" y="48" width="16" height="16" fill="#FAF7F2" />
                <circle cx="60" cy="56" r="4" fill="#D4A346" />

                <rect x="14" y="48" width="8" height="8" fill="#241814" />
                <rect x="28" y="54" width="8" height="8" fill="#241814" />
                <rect x="84" y="48" width="8" height="8" fill="#241814" />
                <rect x="96" y="58" width="12" height="8" fill="#241814" />

                <rect x="48" y="82" width="8" height="8" fill="#241814" />
                <rect x="62" y="90" width="10" height="8" fill="#241814" />
                <rect x="80" y="84" width="12" height="12" fill="#241814" />
                <rect x="96" y="88" width="8" height="16" fill="#241814" />
              </svg>
            </div>
            <span className="text-[11px] text-[#F5DEB3] mt-2 font-medium">
              Scan at Sanchi Courtyard Entrance
            </span>
          </div>

          {/* Ticket Stub Note */}
          <div className="pt-2 text-center text-[10px] text-[#C7B8AA] border-t border-dashed border-[rgba(212,163,70,0.25)]">
            Tables held for 15 minutes &bull; 42 Heritage Promenade, Bhopal
          </div>

        </div>

        {/* Action Controls Footer (Inside the Modal Container) */}
        <div className="p-3.5 sm:p-4 bg-[#1A030A] border-t border-[rgba(212,163,70,0.25)] flex items-center justify-between gap-2 shrink-0">
          <button
            onClick={handleCopySMS}
            className="flex-1 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-all cursor-pointer text-center border border-white/10"
          >
            {copied ? 'Copied! ✓' : 'Copy SMS'}
          </button>

          <button
            onClick={handleWhatsAppShare}
            className="flex-1 px-3 py-2 rounded-xl bg-gradient-to-r from-[#B38234] via-[#D4A346] to-[#E8C066] text-[#241814] text-xs font-bold transition-all hover:brightness-105 active:scale-98 shadow-sm cursor-pointer text-center flex items-center justify-center space-x-1"
          >
            <span>WhatsApp Pass &rarr;</span>
          </button>
        </div>

      </div>
    </div>
  );
}
