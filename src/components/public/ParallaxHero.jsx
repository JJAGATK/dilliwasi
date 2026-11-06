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
      className="relative min-h-[94dvh] bg-[#FAF7F2] text-[#241814] flex items-center overflow-hidden pt-28 pb-16 lg:py-24 select-none"
    >
      {/* Background Ambient Discs */}
      <div
        className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-rose-100/40 blur-3xl pointer-events-none transition-transform duration-700"
        style={{ transform: `translate(${mousePos.x * -20}px, ${scrollY * 0.15}px)` }}
      />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#E8C066]/15 blur-3xl pointer-events-none"
      />

      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-6 space-y-6 text-left pl-0 lg:pl-6 xl:pl-8 relative z-20">
            
            {/* Kicker Pill with 100% Pure Veg marker */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#F4EFE6] border border-[#16A34A]/30 shadow-xs">
              <span className="inline-flex items-center justify-center w-3 h-3 rounded-[2px] border border-[#16A34A] bg-white p-[1px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
              </span>
              <span className="label-caps text-[#16A34A] text-[11px] font-bold">
                100% Pure Vegetarian &bull; Pure Desi Ghee
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-1">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#241814] leading-[1.08]">
                {t.hero.line1}
              </h1>
              <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#E60067] leading-[1.08]">
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

            {/* Call to Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Link to="/menu" className="w-full sm:w-auto">
                <button
                  type="button"
                  className="w-full sm:w-auto px-9 py-4 rounded-full bg-[#2A050C] text-[#FAF7F2] font-semibold text-sm tracking-wide border border-[#D4A346]/40 shadow-[0_8px_24px_rgba(42,5,12,0.22)] hover:bg-[#E60067] hover:border-[#E60067] hover:shadow-[0_12px_28px_rgba(230,0,103,0.35)] transition-all duration-300 cursor-pointer"
                >
                  {t.hero.ctaPrimary}
                </button>
              </Link>
              <Link to="/story" className="w-full sm:w-auto">
                <button
                  type="button"
                  className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#F4EFE6] text-[#241814] font-semibold text-sm tracking-wide border border-[#D4A346]/40 hover:bg-[#EDE5D8] transition-all duration-300 cursor-pointer text-center"
                >
                  Our Heritage &bull; Est. 2001
                </button>
              </Link>
            </div>

            {/* Three Pillar Indicators */}
            <div className="pt-6 border-t border-[rgba(110,93,83,0.15)] grid grid-cols-3 gap-3 max-w-md text-xs">
              <div>
                <span className="block text-[#D97706] font-bold text-sm">🧈 Pure Desi Ghee</span>
                <span className="text-[#6E5D53] text-[11px] leading-tight block mt-0.5">{t.hero.copperDum}</span>
              </div>
              <div>
                <span className="block text-[#16A34A] font-bold text-sm">🌱 100% Pure Veg</span>
                <span className="text-[#6E5D53] text-[11px] leading-tight block mt-0.5">{t.hero.stoneSpices}</span>
              </div>
              <div>
                <span className="block text-[#E60067] font-bold text-sm">✦ Fine Dine & Rooftop</span>
                <span className="text-[#6E5D53] text-[11px] leading-tight block mt-0.5">{t.hero.clayTandoor}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Pure Vegetarian Royal Feast Platter with 3D Tilt */}
          <div className="lg:col-span-6 relative flex items-center justify-center pt-4 lg:pt-0">
            
            {/* Interactive 3D Platter Wrapper */}
            <div
              className="relative w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[520px] aspect-square transition-transform duration-200 ease-out flex items-center justify-center"
              style={{
                transform: `perspective(1000px) rotateX(${mousePos.y * -14}deg) rotateY(${mousePos.x * 14}deg) translate3d(0, ${scrollY * -0.15}px, 0)`,
              }}
            >
              {/* Platter Realistic Drop Shadow */}
              <div className="absolute inset-4 rounded-full bg-black/25 blur-3xl transform scale-95 translate-y-8 pointer-events-none" />

              {/* Decorative Gold Circular Rim Border */}
              <div className="relative w-full h-full p-2.5 sm:p-3 rounded-full bg-gradient-to-tr from-[#B38234] via-[#FDF0CD] to-[#D4A346] shadow-[0_20px_50px_rgba(42,5,12,0.35)]">
                {/* The Pure Veg Feast Image */}
                <img
                  src="/assets/hero-veg-feast.jpg"
                  alt="Dilliwasi Royal Pure Vegetarian Feast Platter with Dal Makhani, Paneer Butter Masala, and Desi Ghee Rotis"
                  className="w-full h-full object-cover rounded-full select-none"
                  loading="eager"
                />
              </div>

              {/* Floating Pure Veg Highlight Badge */}
              <div
                className="absolute -bottom-4 left-2 sm:left-6 z-20 px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#16A34A]/30 shadow-xl text-xs"
                style={{ transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)` }}
              >
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center justify-center w-3 h-3 rounded-[2px] border border-[#16A34A] bg-white p-[1px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                  </span>
                  <span className="font-bold text-[#241814]">Dilliwasi Royal Thali</span>
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">Pure Desi Ghee</span>
                </div>
                <span className="text-[11px] text-[#6E5D53] block mt-0.5">Dal Makhani &bull; Paneer Butter Masala &bull; Gulab Jamun</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
