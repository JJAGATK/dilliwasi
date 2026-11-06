import React, { useState, useEffect, useRef } from 'react';
import { Link } from '../../router/Router';
import { useLanguage } from '../../context/LanguageContext';

export function ParallaxHero() {
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

  // Subtle 3D Mouse Tilt
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
      className="relative min-h-[92dvh] bg-[#FAF7F2] text-[#241814] flex items-center overflow-hidden pt-28 pb-16 lg:py-24 select-none"
    >
      {/* Ambient Radial Discs for Subtle Warmth */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#EDE5D8]/50 blur-3xl pointer-events-none transition-transform duration-700"
        style={{ transform: `translate(${mousePos.x * -15}px, ${scrollY * 0.12}px)` }}
      />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#D4A346]/10 blur-3xl pointer-events-none"
      />

      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-6 space-y-6 text-left pl-0 lg:pl-6 xl:pl-8 relative z-20">
            
            {/* Minimalist Pure Veg Kicker Pill */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1 rounded-full bg-white border border-[#15803D]/25 shadow-2xs">
              <span className="inline-flex items-center justify-center w-3 h-3 rounded-[2px] border border-[#15803D] bg-white p-[1px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#15803D]" />
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#15803D]">
                100% Pure Vegetarian &bull; Pure Desi Ghee
              </span>
            </div>

            {/* Headline with Clean Typographic Harmony */}
            <div className="space-y-1">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#241814] leading-[1.06]">
                {t.hero.line1}
              </h1>
              <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#9F1239] leading-[1.06]">
                {t.hero.line2}
              </h2>
              <p className="font-serif text-2xl sm:text-4xl lg:text-5xl font-medium text-[#B38234] italic pt-1 leading-snug">
                {t.hero.line3}
              </p>
            </div>

            {/* Sensory Description Copy */}
            <p className="text-base text-[#6E5D53] font-normal leading-relaxed max-w-lg">
              {t.hero.desc}
            </p>

            {/* Action Buttons: Appetizing Royal Burgundy & Clean Antique Brass Outline */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Link to="/menu" className="w-full sm:w-auto">
                <button
                  type="button"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#9F1239] text-[#FAF7F2] font-semibold text-xs uppercase tracking-widest border border-[#D4A346]/40 shadow-[0_8px_24px_rgba(74,12,24,0.25)] hover:bg-[#5C1021] hover:border-[#D4A346] transition-all duration-200 cursor-pointer"
                >
                  {t.hero.ctaPrimary}
                </button>
              </Link>
              <Link to="/story" className="w-full sm:w-auto">
                <button
                  type="button"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#F4EFE6] text-[#241814] font-semibold text-xs uppercase tracking-widest border border-[rgba(212,163,70,0.35)] hover:bg-[#EDE5D8] transition-colors duration-200 cursor-pointer text-center"
                >
                  Provenance &bull; Est. 2001
                </button>
              </Link>
            </div>

            {/* Three Pillar Indicators */}
            <div className="pt-6 border-t border-[rgba(110,93,83,0.15)] grid grid-cols-3 gap-4 max-w-md text-xs">
              <div>
                <span className="block text-[#B38234] font-bold text-xs uppercase tracking-wider">Desi Ghee</span>
                <span className="text-[#6E5D53] text-[11px] leading-tight block mt-0.5">{t.hero.copperDum}</span>
              </div>
              <div>
                <span className="block text-[#15803D] font-bold text-xs uppercase tracking-wider">100% Pure Veg</span>
                <span className="text-[#6E5D53] text-[11px] leading-tight block mt-0.5">{t.hero.stoneSpices}</span>
              </div>
              <div>
                <span className="block text-[#9F1239] font-bold text-xs uppercase tracking-wider">Rooftop Cafe</span>
                <span className="text-[#6E5D53] text-[11px] leading-tight block mt-0.5">{t.hero.clayTandoor}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Vegetarian Royal Feast Platter with Subtle 3D Tilt */}
          <div className="lg:col-span-6 relative flex items-center justify-center pt-4 lg:pt-0">
            
            {/* Interactive 3D Platter Wrapper */}
            <div
              className="relative w-full max-w-[340px] sm:max-w-[450px] lg:max-w-[500px] aspect-square transition-transform duration-200 ease-out flex items-center justify-center"
              style={{
                transform: `perspective(1000px) rotateX(${mousePos.y * -10}deg) rotateY(${mousePos.x * 10}deg) translate3d(0, ${scrollY * -0.12}px, 0)`,
              }}
            >
              {/* Soft Ambient Shadow */}
              <div className="absolute inset-6 rounded-full bg-black/15 blur-2xl transform translate-y-6 pointer-events-none" />

              {/* Decorative Gold Rim Ring */}
              <div className="relative w-full h-full p-2 rounded-full bg-gradient-to-tr from-[#C59B27] via-[#FDF0CD] to-[#D4A346] shadow-[0_16px_36px_rgba(74,12,24,0.18)]">
                <img
                  src="/assets/hero-veg-feast.jpg"
                  alt="Dilliwasi Royal Pure Vegetarian Feast Platter"
                  className="w-full h-full object-cover rounded-full select-none"
                  loading="eager"
                />
              </div>

              {/* Minimalist Floating Badge */}
              <div
                className="absolute -bottom-3 left-3 sm:left-6 z-20 px-4 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-[rgba(212,163,70,0.3)] shadow-md text-xs"
                style={{ transform: `translate(${mousePos.x * 8}px, ${mousePos.y * 8}px)` }}
              >
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center justify-center w-3 h-3 rounded-[2px] border border-[#15803D] bg-white p-[1px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#15803D]" />
                  </span>
                  <span className="font-serif font-bold text-sm text-[#241814]">Dilliwasi Royal Thali</span>
                  <span className="text-[9px] uppercase tracking-wider font-semibold text-[#A37424] px-1.5 py-0.5 rounded bg-[#FAF5EB] border border-[#D4A346]/35">
                    Desi Ghee
                  </span>
                </div>
                <span className="text-[11px] text-[#6E5D53] block mt-0.5 font-light">
                  Dal Makhani &bull; Paneer Butter Masala &bull; Gulab Jamun
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
