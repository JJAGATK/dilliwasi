import React from 'react';
import { Link } from '../../router/Router';
import { BrandLogo } from './BrandLogo';
import { restaurantInfo } from '../../data/mockData';

export function Footer() {
  return (
    <footer className="bg-[#2A050C] text-[#FAF7F2] border-t border-[#D4A346]/25 relative overflow-hidden">
      {/* Decorative Golden Band */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#E60067] to-[#D4A346]" />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Philosophy (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo variant="horizontal" theme="dark" size="lg" />
            <p className="text-sm text-[#C7B8AA] leading-relaxed max-w-md pt-2">
              Dilliwasi is Haridwar's premier 100% pure vegetarian fine dine restaurant & open-air rooftop cafe. Established in 2001, we honor traditional culinary mastery, slow-simmered gravies, and clay tandoor delicacies prepared exclusively with pure desi ghee.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 flex items-center space-x-1.5 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                <span>100% Pure Vegetarian</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-950 text-amber-300 border border-amber-800 flex items-center space-x-1.5 font-medium">
                <span>🧈</span>
                <span>Pure Desi Ghee</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-rose-950 text-rose-300 border border-rose-800 font-medium">
                Since 2001 &bull; Unit 2
              </span>
            </div>
          </div>

          {/* Column 2: Hours & Dining Experience (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="label-caps text-[#E8C066] text-xs font-bold">Restaurant Hours</h3>
            <div className="text-sm text-[#C7B8AA] space-y-2">
              <div>
                <p className="text-[#FAF7F2] font-semibold">Fine Dine & Rooftop Dining</p>
                <p>11:00 AM – 11:00 PM</p>
              </div>
              <div className="pt-1 text-xs text-[#E8C066]">
                <p>Open 7 Days a Week</p>
                <p className="text-[#8C7A6D]">Continuous table & take-away service</p>
              </div>
              <div className="pt-2 text-xs text-[#C7B8AA]">
                <p className="font-semibold text-white">GST Number:</p>
                <p className="font-mono text-[11px] text-[#E8C066]">{restaurantInfo.gstNumber}</p>
              </div>
            </div>
          </div>

          {/* Column 3: Location & Hotlines (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="label-caps text-[#E8C066] text-xs font-bold">Location & Contact</h3>
            <address className="not-italic text-sm text-[#C7B8AA] space-y-2">
              <p className="text-white font-medium">Outlet 2:</p>
              <p>3rd - 4th Floor, A3 Amar Complex</p>
              <p>(Opposite ICICI Bank), Shivalik Nagar</p>
              <p>Haridwar, Uttarakhand &mdash; 249403</p>
              <div className="pt-2 space-y-1">
                <p className="text-white font-semibold">Hotlines:</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <a href="tel:+919058882691" className="text-[#E8C066] hover:underline font-mono">+91 90588 82691</a>
                  <span>&bull;</span>
                  <a href="tel:+919058882692" className="text-[#E8C066] hover:underline font-mono">92</a>
                  <span>&bull;</span>
                  <a href="tel:+919058882693" className="text-[#E8C066] hover:underline font-mono">93</a>
                </div>
                <p className="text-xs text-[#C7B8AA]">Email: <a href="mailto:dilliwasiunit2@gmail.com" className="text-[#E8C066] hover:underline">dilliwasiunit2@gmail.com</a></p>
              </div>
            </address>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Navigation */}
        <div className="mt-12 pt-6 border-t border-[rgba(212,163,70,0.15)] flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C7A6D] space-y-4 sm:space-y-0">
          <p>
            &copy; {new Date().getFullYear()} Dilliwasi Fine Dine Restaurant & Rooftop Cafe. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            <Link to="/" className="hover:text-[#FAF7F2] transition-colors">Home</Link>
            <Link to="/menu" className="hover:text-[#FAF7F2] transition-colors">Menu</Link>
            <Link to="/story" className="hover:text-[#FAF7F2] transition-colors">Our Story</Link>
            <Link to="/gallery" className="hover:text-[#FAF7F2] transition-colors">Gallery</Link>
            <Link to="/contact" className="hover:text-[#FAF7F2] transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
