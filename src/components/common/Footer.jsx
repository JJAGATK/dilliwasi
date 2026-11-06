import React, { useState } from 'react';
import { Link } from '../../router/Router';
import { ToranaDivider } from './ToranaDivider';
import { Button } from './Button';
import { BrandLogo } from './BrandLogo';

export function Footer({ onOpenReserve: _onOpenReserve } = {}) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please provide a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-[#2A050C] text-[#FAF7F2] border-t border-[rgba(212,163,70,0.25)] relative overflow-hidden">
      {/* Subtle Torana Gateway divider at top of footer */}
      <div className="pt-12">
        <ToranaDivider light label="Sanchi Heritage" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Column 1: Brand & Philosophy (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo variant="horizontal" theme="dark" size="lg" />
            <p className="text-sm text-[#C7B8AA] leading-relaxed max-w-md pt-2">
              Named after the Great Stupa of Sanchi, our culinary sanctuary honors the architectural balance, earthen handi crafts, and slow Awadhi dum cooking of classical India. Every dish is a meditation on time and fire.
            </p>
            <div className="pt-2">
              <Link to="/reserve">
                <Button
                  variant="secondary"
                  size="sm"
                  className="text-xs uppercase tracking-widest"
                >
                  Book a Tasting Table
                </Button>
              </Link>
            </div>
          </div>

          {/* Column 2: Hours & Dining Etiquette (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="label-caps text-[#D4A346] text-xs">Sanctuary Hours</h3>
            <div className="text-sm text-[#C7B8AA] space-y-2">
              <div>
                <p className="text-[#FAF7F2] font-medium">Afternoon Lunch</p>
                <p>12:00 PM – 3:30 PM</p>
              </div>
              <div className="pt-1">
                <p className="text-[#FAF7F2] font-medium">Evening Degustation</p>
                <p>7:00 PM – 11:30 PM</p>
              </div>
              <div className="pt-2 text-xs text-[#E8C066]">
                <p>Tuesday through Sunday</p>
                <p className="text-[#8C7A6D]">Mondays closed for spice curation</p>
              </div>
            </div>
          </div>

          {/* Column 3: Location & Private Inquiries (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="label-caps text-[#D4A346] text-xs">Location</h3>
            <address className="not-italic text-sm text-[#C7B8AA] space-y-2">
              <p>42 Heritage Promenade</p>
              <p>Civil Lines, Bhopal</p>
              <p>MP 462001, India</p>
              <p className="pt-2 text-[#FAF7F2] font-medium">+91 755 248 9100</p>
            </address>
          </div>

          {/* Column 4: Newsletter & Dispatch (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="label-caps text-[#D4A346] text-xs">Cuisine Letters</h3>
            <p className="text-xs text-[#C7B8AA] leading-relaxed">
              Seasonal tasting menus, rare spice harvests, and festival chronicles.
            </p>
            {subscribed ? (
              <div className="p-3 rounded bg-[rgba(212,163,70,0.15)] border border-[#D4A346] text-xs text-[#FAF7F2]">
                Thank you for joining our private correspondence.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2" noValidate>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                  }}
                  placeholder="Your email address"
                  className="w-full px-3 py-2 text-xs bg-[#1F0409] border border-[rgba(212,163,70,0.3)] rounded text-[#FAF7F2] placeholder-[#8C7A6D] focus:outline-none focus:border-[#D4A346]"
                  aria-label="Email for Sanchi Newsletter"
                />
                {error && <p className="text-[11px] text-[#FF8A80]">{error}</p>}
                <Button type="submit" variant="primary" size="sm" className="w-full text-xs">
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Navigation */}
        <div className="mt-14 pt-6 border-t border-[rgba(212,163,70,0.15)] flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C7A6D] space-y-4 sm:space-y-0">
          <p>&copy; {new Date().getFullYear()} Sanchi Heritage Gastronomy. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link to="/" className="hover:text-[#FAF7F2] transition-colors duration-300">Home</Link>
            <Link to="/menu" className="hover:text-[#FAF7F2] transition-colors duration-300">Menu</Link>
            <Link to="/story" className="hover:text-[#FAF7F2] transition-colors duration-300">Our Story</Link>
            <Link to="/gallery" className="hover:text-[#FAF7F2] transition-colors duration-300">Gallery</Link>
            <Link to="/reserve" className="hover:text-[#FAF7F2] transition-colors duration-300">Reserve</Link>
            <Link to="/contact" className="hover:text-[#FAF7F2] transition-colors duration-300">Contact</Link>
            <Link to="/admin" className="text-[#E8C066] hover:text-[#FAF7F2] transition-colors duration-300">Admin Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

