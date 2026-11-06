import React, { useState, useEffect, useRef } from 'react';
import { Link } from '../../router/Router';
import { useLanguage } from '../../context/LanguageContext';

export function ParallaxHero({ onOpenReserve: _onOpenReserve } = {}) {
  const { t } = useLanguage();
  const heroRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 60fps Scroll Parallax
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Interactive 3D Mouse Tilt
  const handleMouseMove = (e) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[96dvh] bg-[#FAF7F2] text-[#241814] flex items-center overflow-hidden pt-28 pb-16 lg:py-24 select-none"
    >
      {/* Background Ambient Discs (Exact match to reference video's subtle circular floating bokeh) */}
      <div
        className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-[#EDE5D8]/60 blur-2xl pointer-events-none transition-transform duration-700"
        style={{ transform: `translate(${mousePos.x * -20}px, ${scrollY * 0.15}px)` }}
      />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#E8C066]/10 blur-3xl pointer-events-none"
      />

      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-6 space-y-6 text-left pl-0 lg:pl-6 xl:pl-8 relative z-20">
            
            {/* Kicker Pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#F4EFE6] border border-[rgba(212,163,70,0.3)] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#D4A346] animate-pulse" />
              <span className="label-caps text-[#B38234] text-[11px]">
                {t.hero.kicker}
              </span>
            </div>

            {/* Exact Three-Line Serif Headline from Reference Video */}
            <div className="space-y-1">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#241814] leading-[1.08]">
                {t.hero.line1}
              </h1>
              <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#241814] leading-[1.08]">
                {t.hero.line2}
              </h2>
              <p className="font-serif text-2xl sm:text-4xl lg:text-5xl font-medium text-[#B38234] italic pt-2 leading-snug">
                {t.hero.line3}
              </p>
            </div>

            {/* Sensory Description Copy */}
            <p className="text-base sm:text-lg text-[#6E5D53] font-normal leading-relaxed max-w-lg">
              {t.hero.desc}
            </p>

            {/* Refined Royal Color Combos: Deep Imperial Burgundy & Antique Brass */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Link to="/menu" className="w-full sm:w-auto">
                <button
                  type="button"
                  className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#2A050C] text-[#FAF7F2] font-semibold text-sm tracking-wide border border-[rgba(212,163,70,0.35)] shadow-[0_8px_24px_rgba(42,5,12,0.22)] hover:bg-[#3D0914] hover:shadow-[0_12px_28px_rgba(42,5,12,0.32)] hover:border-[#D4A346] transition-all duration-300 btn-tactile cursor-pointer"
                >
                  {t.hero.ctaPrimary}
                </button>
              </Link>

              <Link to="/reserve" className="w-full sm:w-auto">
                <button
                  type="button"
                  className="w-full sm:w-auto px-8 py-4 rounded-full border border-[rgba(212,163,70,0.6)] text-[#241814] bg-[#F4EFE6]/80 hover:bg-[#FAF7F2] hover:border-[#B38234] font-semibold text-sm tracking-wide transition-all duration-300 btn-tactile cursor-pointer shadow-xs"
                >
                  {t.hero.ctaSecondary}
                </button>
              </Link>
            </div>

            {/* Three Pillar Indicators */}
            <div className="pt-6 border-t border-[rgba(110,93,83,0.15)] grid grid-cols-3 gap-3 max-w-md text-xs">
              <div>
                <span className="block text-[#B38234] font-bold text-sm">12-Hour</span>
                <span className="text-[#6E5D53] text-[11px]">{t.hero.copperDum}</span>
              </div>
              <div>
                <span className="block text-[#B38234] font-bold text-sm">Stone-Ground</span>
                <span className="text-[#6E5D53] text-[11px]">{t.hero.stoneSpices}</span>
              </div>
              <div>
                <span className="block text-[#B38234] font-bold text-sm">Live Clay</span>
                <span className="text-[#6E5D53] text-[11px]">{t.hero.clayTandoor}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Exact Reference Video Big Feast Platter with 3D Tilt */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* Interactive 3D Platter Wrapper */}
            <div
              className="relative w-full max-w-[540px] aspect-square transition-transform duration-200 ease-out flex items-center justify-center"
              style={{
                transform: `perspective(1000px) rotateX(${mousePos.y * -14}deg) rotateY(${mousePos.x * 14}deg) translate3d(0, ${scrollY * -0.15}px, 0)`,
              }}
            >
              {/* Platter Realistic Drop Shadow */}
              <div className="absolute inset-4 rounded-full bg-black/15 blur-2xl transform scale-95 translate-y-8 pointer-events-none" />

              {/* The Platter Image */}
              <img
                src="/assets/hero-feast-plate.png"
                alt="Sanchi Authentic Royal Feast: Saffron Biryani, Kebabs, Chutneys"
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_20px_40px_rgba(42,5,12,0.22)] transition-transform duration-500 hover:scale-102"
              />

              {/* Dipping Sauce Highlight Badge */}
              <div
                className="absolute -bottom-3 left-4 sm:left-10 z-20 px-4 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-[rgba(212,163,70,0.3)] shadow-lg text-xs"
                style={{ transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)` }}
              >
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2E7D32]" />
                  <span className="font-semibold text-[#241814]">Awadhi Galawat & Dum Biryani</span>
                </div>
                <span className="text-[10px] text-[#6E5D53]">Mint chutney & saffron jus</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
