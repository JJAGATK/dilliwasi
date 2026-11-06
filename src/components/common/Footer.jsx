import React from 'react';
import { Link } from '../../router/Router';
import { BrandLogo } from './BrandLogo';
import { restaurantInfo } from '../../data/mockData';
import { DelhiMehrabArchDrawing } from './DilliwasiHeritageDrawings';

export function Footer() {
  return (
    <footer className="bg-[#180308] text-[#FAF8F5] border-t border-[#C59B27]/25 relative overflow-hidden">
      {/* Subtle Nocturnal Scalloped Arch Watermark */}
      <div className="absolute -top-12 -right-16 w-[420px] text-[#C59B27] opacity-[0.04] pointer-events-none select-none" aria-hidden="true">
        <DelhiMehrabArchDrawing className="w-full h-auto" />
      </div>

      {/* Decorative Golden Hairline */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C59B27] to-transparent opacity-40" />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Philosophy (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo variant="horizontal" theme="dark" size="lg" />
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-md pt-1 font-light">
              Dilliwasi is Haridwar's premier 100% pure vegetarian fine dine restaurant & open-air rooftop cafe. Established in 2001, we honor traditional culinary mastery, slow-simmered gravies, and clay tandoor delicacies prepared exclusively with pure desi ghee.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-0.5 rounded text-[9px] uppercase tracking-wider font-semibold text-[#15803D] bg-white/5 border border-[#15803D]/40">
                100% Pure Veg
              </span>
              <span className="px-2.5 py-0.5 rounded text-[9px] uppercase tracking-wider font-semibold text-[#C59B27] bg-white/5 border border-[#C59B27]/40">
                Pure Desi Ghee
              </span>
              <span className="px-2.5 py-0.5 rounded text-[9px] uppercase tracking-wider font-semibold text-[#D4AF37] bg-white/5 border border-[#C59B27]/40">
                Since 2001 &bull; Unit 2
              </span>
            </div>
          </div>

          {/* Column 2: Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#C59B27]">
              Restaurant Hours
            </h3>
            <div className="text-xs text-stone-300 space-y-2 font-light">
              <div>
                <p className="text-white font-medium">Fine Dine & Rooftop Dining</p>
                <p className="text-[#A8A29E]">11:00 AM – 11:00 PM</p>
              </div>
              <div className="pt-1 text-[11px] text-[#C59B27]">
                <p>Open 7 Days a Week</p>
                <p className="text-stone-400">Continuous table & take-away service</p>
              </div>
              <div className="pt-2 text-[11px]">
                <p className="text-white font-medium">GSTIN:</p>
                <p className="font-mono text-[#C59B27]">{restaurantInfo.gstNumber}</p>
              </div>
            </div>
          </div>

          {/* Column 3: Location & Hotlines (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#C59B27]">
              Location & Contact
            </h3>
            <address className="not-italic text-xs text-stone-300 space-y-2 font-light">
              <p className="text-white font-medium">Outlet 2:</p>
              <p>3rd - 4th Floor, A3 Amar Complex</p>
              <p>(Opposite ICICI Bank), Shivalik Nagar</p>
              <p>Haridwar, Uttarakhand &mdash; 249403</p>
              <div className="pt-2 space-y-1">
                <p className="text-white font-medium">Hotlines:</p>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  <a href="tel:+919058882691" className="text-[#C59B27] hover:underline">+91 90588 82691</a>
                  <span>&bull;</span>
                  <a href="tel:+919058882692" className="text-[#C59B27] hover:underline">92</a>
                  <span>&bull;</span>
                  <a href="tel:+919058882693" className="text-[#C59B27] hover:underline">93</a>
                </div>
                <p className="text-[11px] text-stone-400">
                  Email: <a href="mailto:dilliwasiunit2@gmail.com" className="text-[#C59B27] hover:underline">dilliwasiunit2@gmail.com</a>
                </p>
              </div>
            </address>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 space-y-4 sm:space-y-0">
          <p className="text-[11px]">
            &copy; {new Date().getFullYear()} Dilliwasi Fine Dine Restaurant & Rooftop Cafe. All rights reserved.
          </p>

          <div className="flex items-center space-x-6 text-[11px]">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/menu" className="hover:text-white transition-colors">Menu</Link>
            <Link to="/story" className="hover:text-white transition-colors">Our Story</Link>
            <Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
