import React, { useState, useEffect } from 'react';
import { Link, useLocation } from '../../router/Router';
import { Button } from './Button';
import { BrandLogo } from './BrandLogo';
import { useLanguage } from '../../context/LanguageContext';

export function Navbar({ onOpenReserve }) {
  const { pathname } = useLocation();
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
    { to: '/reserve', label: t.nav.reserve },
    { to: '/contact', label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-[#2A050C]/96 backdrop-blur-md shadow-[0_4px_24px_rgba(42,5,12,0.3)] border-b border-[rgba(212,163,70,0.25)] py-3'
          : 'bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[rgba(212,163,70,0.18)] py-4'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Wordmark (Vector-Crisp Sanchi Identity) */}
        <Link to="/" className="group flex items-center" aria-label="Sanchi Restaurant Home">
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
                ? 'text-[#D4A346] font-semibold'
                : 'text-[#FAF7F2]/80 hover:text-[#FAF7F2]'
              : isActive
              ? 'text-[#D4A346] font-semibold'
              : 'text-[#6E5D53] hover:text-[#241814]';

            return (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm tracking-wide transition-colors duration-300 relative py-1 ${textColor}`}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4A346] rounded-full transition-all duration-300"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Controls: Language Switcher + Dashboard + Reserve CTA */}
        <div className="hidden sm:flex items-center space-x-3.5">
          {/* Bilingual Language Selector: EN / हिन्दी */}
          <div className="flex items-center rounded-full border border-[rgba(212,163,70,0.35)] p-0.5 text-[11px] bg-[rgba(212,163,70,0.06)]">
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-0.5 rounded-full transition-colors duration-300 cursor-pointer ${
                lang === 'en'
                  ? 'bg-[#D4A346] text-[#241814] font-bold shadow-xs'
                  : isScrolled
                  ? 'text-[#C7B8AA] hover:text-[#FAF7F2]'
                  : 'text-[#6E5D53] hover:text-[#241814]'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('hi')}
              className={`px-2.5 py-0.5 rounded-full transition-colors duration-300 cursor-pointer ${
                lang === 'hi'
                  ? 'bg-[#D4A346] text-[#241814] font-bold shadow-xs'
                  : isScrolled
                  ? 'text-[#C7B8AA] hover:text-[#FAF7F2]'
                  : 'text-[#6E5D53] hover:text-[#241814]'
              }`}
            >
              हिन्दी
            </button>
          </div>

          <Link
            to="/admin"
            className={`text-xs px-3 py-1.5 rounded border transition-colors duration-400 ${
              isScrolled
                ? 'text-[#E8C066] border-[rgba(232,192,102,0.3)] hover:bg-[#380812]'
                : 'text-[#6E5D53] border-[rgba(110,93,83,0.3)] hover:bg-[#F4EFE6]'
            }`}
            title="Management Dashboard"
          >
            {t.nav.dashboard}
          </Link>

          <Link to="/reserve">
            <Button
              variant="primary"
              size="sm"
              className="tracking-wider text-xs uppercase"
            >
              {t.nav.reserve}
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center space-x-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded focus:outline-none ${
              isScrolled ? 'text-[#FAF7F2]' : 'text-[#241814]'
            }`}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-[#2A050C]/98 backdrop-blur-xl z-50 flex flex-col p-6 sm:hidden border-t border-[rgba(212,163,70,0.2)] animate-fadeIn">
          {/* Mobile Language Switcher: EN / हिन्दी */}
          <div className="flex items-center justify-center space-x-3 pb-4 border-b border-[rgba(212,163,70,0.15)]">
            <span className="text-xs text-[#C7B8AA] uppercase tracking-wider">भाषा / Language:</span>
            <div className="flex items-center rounded-full border border-[rgba(212,163,70,0.3)] p-0.5 bg-black/20">
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                  lang === 'en' ? 'bg-[#D4A346] text-[#241814]' : 'text-[#FAF7F2]'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLang('hi')}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                  lang === 'hi' ? 'bg-[#D4A346] text-[#241814]' : 'text-[#FAF7F2]'
                }`}
              >
                हिन्दी
              </button>
            </div>
          </div>

          <nav className="flex flex-col space-y-4 mt-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xl font-serif tracking-wide py-2 border-b border-[rgba(212,163,70,0.15)] ${
                  pathname === link.to ? 'text-[#D4A346]' : 'text-[#FAF7F2]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base text-[#E8C066] py-2 flex items-center justify-between"
            >
              <span>{t.nav.dashboard}</span>
              <span className="text-xs uppercase px-2 py-0.5 rounded bg-[rgba(212,163,70,0.15)]">Staff</span>
            </Link>
          </nav>

          <div className="mt-8 pt-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReserve();
              }}
              className="w-full uppercase tracking-widest text-sm"
            >
              {t.nav.reserve}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
