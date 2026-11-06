import React from 'react';
import { Link, useLocation } from '../../router/Router';
import { BrandLogo } from '../../components/common/BrandLogo';

export function AdminLayout({ children }) {
  const { pathname } = useLocation();

  const navItems = [
    { to: '/admin', label: 'Overview', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { to: '/admin/floorplan', label: 'Floor Map', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
    { to: '/admin/reservations', label: 'Reservations', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { to: '/admin/menu', label: 'Menu Manager', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
    { to: '/admin/orders', label: 'Live Orders', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' },
    { to: '/admin/reviews', label: 'Reviews', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
    { to: '/admin/settings', label: 'Settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
  ];

  return (
    <div className="min-h-screen bg-[#F9F7F4] text-[#1C1917] transition-colors duration-200">
      {/* Top Bar Navigation */}
      <header className="sticky top-0 z-40 border-b px-6 py-3 flex items-center justify-between backdrop-blur-md bg-white/95 border-[rgba(212,163,70,0.22)] shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
        <div className="flex items-center space-x-6">
          <Link to="/admin" className="flex items-center space-x-3 group">
            <BrandLogo
              variant="crest"
              theme="light"
              size="sm"
              className="w-9 h-9 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-tight text-[#1C1917]">SANCHI</span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#A37424] -mt-1 font-bold">
                Maître d' Console
              </span>
            </div>
          </Link>

          {/* Desktop Nav Pills */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Admin Navigation">
            {navItems.map((item) => {
              const isActive = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-3 py-1.5 rounded text-xs font-medium tracking-wide flex items-center space-x-1.5 transition-colors ${
                    isActive
                      ? 'bg-[#2A050C] text-[#FAF7F2] font-semibold shadow-2xs'
                      : 'text-[#6E5D53] hover:text-[#241814] hover:bg-[#EDE5D8]'
                  }`}
                >
                  <svg className="w-3.5 h-3.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Controls: Public Site Link */}
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="text-xs px-3.5 py-1.5 rounded-lg border border-[rgba(212,163,70,0.3)] bg-white text-[#6E5D53] hover:text-[#2A050C] hover:border-[#D4A346] transition-all flex items-center space-x-1.5 shadow-2xs"
          >
            <span>&larr;</span>
            <span className="font-medium">Public Site</span>
          </Link>
        </div>
      </header>

      {/* Mobile Nav Sub-Bar */}
      <div className="lg:hidden border-b px-4 py-2 flex items-center space-x-2 overflow-x-auto scrollbar-none bg-[#FAF7F2] border-[rgba(212,163,70,0.2)]">
        {navItems.map((item) => {
          const isActive = pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`px-3 py-1 rounded text-xs whitespace-nowrap flex items-center space-x-1.5 ${
                isActive
                  ? 'bg-[#2A050C] text-[#FAF7F2] font-semibold'
                  : 'text-[#6E5D53]'
              }`}
            >
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>

      {/* Main Content Area */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
