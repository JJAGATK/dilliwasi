import React, { useState, useEffect } from 'react';
import { Link, useLocation } from '../../router/Router';
import { BrandLogo } from './BrandLogo';
import { useLanguage } from '../../context/LanguageContext';
import { restaurantInfo } from '../../data/mockData';

export function Navbar({ onOpenReserve: _onOpenReserve } = {}) {
  const { pathname } = useLocation();
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { to: '/', label: t.nav.home },
    { to: '/menu', label: t.nav.menu },
    { to: '/story', label: t.nav.story },
    { to: '/gallery', label: t.nav.gallery },
    { to: '/contact', label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-[#180308]/96 backdrop-blur-md shadow-[0_4px_24px_rgba(24,3,8,0.3)] border-b border-[rgba(212,163,70,0.25)] py-2.5 sm:py-3'
          : 'bg-[#FAF8F5]/96 backdrop-blur-md border-b border-[rgba(212,163,70,0.20)] py-3 sm:py-4'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Wordmark (Dilliwasi Identity) */}
        <Link to="/" className="group flex items-center shrink min-w-0" aria-label="Dilliwasi Fine Dine & Rooftop Cafe Home">
          <BrandLogo
            variant="horizontal"
            theme={isScrolled ? 'dark' : 'light'}
            size="md"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7" aria-label="Primary Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.to;
            const textColor = isScrolled
              ? isActive
                ? 'text-[#D4AF37] font-semibold'
                : 'text-[#FAF8F5]/85 hover:text-[#FAF8F5]'
              : isActive
              ? 'text-[#9F1239] font-bold'
              : 'text-[#57534E] hover:text-[#1C1917]';

            return (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm tracking-wide transition-colors duration-200 relative py-1 ${textColor}`}
              >
                {link.label}
                {isActive && (
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full transition-all duration-200 ${
                      isScrolled ? 'bg-[#D4AF37]' : 'bg-[#9F1239]'
                    }`}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Controls: Language Switcher */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center rounded-full border border-[rgba(197,155,39,0.35)] p-0.5 text-[11px] bg-[rgba(197,155,39,0.06)]">
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-0.5 rounded-full transition-colors duration-200 cursor-pointer ${
                lang === 'en'
                  ? 'bg-[#C59B27] text-[#1C1917] font-bold shadow-xs'
                  : isScrolled
                  ? 'text-[#D6CECB] hover:text-[#FAF8F5]'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('hi')}
              className={`px-2.5 py-0.5 rounded-full transition-colors duration-200 cursor-pointer ${
                lang === 'hi'
                  ? 'bg-[#C59B27] text-[#1C1917] font-bold shadow-xs'
                  : isScrolled
                  ? 'text-[#D6CECB] hover:text-[#FAF8F5]'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              हिन्दी
            </button>
          </div>

          <a
            href={`tel:${restaurantInfo.phone.replace(/[^0-9+]/g, '')}`}
            className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] bg-[#9F1239] hover:bg-[#881337] transition-colors shadow-2xs"
          >
            Call Us
          </a>
        </div>

        {/* Mobile & Tablet Controls (visible on screens < 1024px) */}
        <div className="flex lg:hidden items-center space-x-2 shrink-0">
          {/* Quick Call Icon Button for Mobile Users */}
          <a
            href={`tel:${restaurantInfo.phone.replace(/[^0-9+]/g, '')}`}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-[#9F1239] text-white hover:bg-[#881337] transition-colors shadow-2xs"
            aria-label="Call Restaurant"
            title="Call Dilliwasi"
          >
            <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>

          {/* Hamburger / Close Toggle Button with 44px min tap area */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${
              isScrolled
                ? 'text-[#FAF8F5] border-white/20 bg-white/5 hover:bg-white/10'
                : 'text-[#1C1917] border-stone-300 bg-white hover:bg-stone-50'
            }`}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.2">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu (Accessible below 1024px) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-x-0 top-[56px] sm:top-[64px] bottom-0 bg-[#160307]/98 backdrop-blur-2xl z-50 flex flex-col p-6 lg:hidden border-t border-[rgba(212,163,70,0.25)] overflow-y-auto animate-fadeIn"
          style={{ height: 'calc(100dvh - 56px)' }}
        >
          {/* Mobile Language Switcher: EN / हिन्दी */}
          <div className="flex items-center justify-between pb-4 border-b border-[rgba(212,163,70,0.2)]">
            <span className="text-xs text-[#D6CECB] uppercase tracking-wider font-medium">भाषा / Language:</span>
            <div className="flex items-center rounded-full border border-[rgba(212,163,70,0.35)] p-0.5 bg-black/40">
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                  lang === 'en' ? 'bg-[#C59B27] text-[#1C1917]' : 'text-[#FAF8F5]'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLang('hi')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                  lang === 'hi' ? 'bg-[#C59B27] text-[#1C1917]' : 'text-[#FAF8F5]'
                }`}
              >
                हिन्दी
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-1 mt-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg sm:text-xl font-serif tracking-wide py-3 px-3 rounded-xl border-b border-white/5 transition-colors flex items-center justify-between ${
                    isActive
                      ? 'text-[#C59B27] bg-white/5 font-bold'
                      : 'text-[#FAF8F5] hover:text-[#C59B27] hover:bg-white/5'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Bottom Mobile Action Buttons */}
          <div className="mt-auto pt-6 space-y-3 border-t border-[rgba(212,163,70,0.2)]">
            <a
              href={`tel:${restaurantInfo.phone.replace(/[^0-9+]/g, '')}`}
              className="w-full py-3.5 rounded-full bg-[#9F1239] text-[#FAF8F5] font-semibold text-xs uppercase tracking-widest text-center flex items-center justify-center space-x-2 shadow-md active:scale-98 transition-transform"
            >
              <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call Hotline &bull; {restaurantInfo.phone}</span>
            </a>

            <div className="text-center pt-1 text-[11px] text-[#A8A29E]">
              <span>Amar Complex, Shivalik Nagar, Haridwar</span>
              <span className="block text-[10px] text-[#C59B27] mt-0.5">100% Pure Vegetarian &bull; Pure Desi Ghee</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
