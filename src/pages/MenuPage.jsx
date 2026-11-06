import React, { useState, useMemo, useRef } from 'react';
import { Link } from '../router/Router';
import { menuCategories, menuDishes, restaurantInfo } from '../data/mockData';
import { DietaryMarker, PureDesiGheeBadge, ChefSpecialBadge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { BrandLogo } from '../components/common/BrandLogo';

export function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filterType, setFilterType] = useState('all'); // 'all' | 'ghee' | 'signature' | 'under200'
  const [searchQuery, setSearchQuery] = useState('');
  const categoryScrollRef = useRef(null);

  // Compute item counts per category
  const categoryCounts = useMemo(() => {
    const counts = { all: menuDishes.length };
    menuCategories.forEach((cat) => {
      if (cat.id !== 'all') {
        counts[cat.id] = menuDishes.filter((d) => d.category === cat.id).length;
      }
    });
    return counts;
  }, []);

  const filteredDishes = useMemo(() => {
    return menuDishes.filter((dish) => {
      // Category filter
      if (activeCategory !== 'all' && dish.category !== activeCategory) {
        return false;
      }
      // Special filter
      if (filterType === 'ghee' && !dish.isPureGhee) {
        return false;
      }
      if (filterType === 'signature' && !dish.isSignature) {
        return false;
      }
      if (filterType === 'under200' && dish.price >= 200) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = dish.name.toLowerCase().includes(query);
        const matchesDesc = (dish.description || '').toLowerCase().includes(query);
        const matchesAcc = (dish.accompaniment || '').toLowerCase().includes(query);
        const matchesCat = (dish.category || '').toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesAcc && !matchesCat) return false;
      }
      return true;
    });
  }, [activeCategory, filterType, searchQuery]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1917] pt-24 sm:pt-28 pb-24">
      {/* Menu Header */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-[#78716C] mb-4 sm:mb-6">
          <Link to="/" className="hover:text-[#1C1917] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#D81B60] font-medium">Menu</span>
        </nav>

        {/* Title & Metadata Lockup */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-stone-200">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-[#15803D]/25 text-[#15803D] text-[10px] font-semibold tracking-wider uppercase mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#15803D]" />
              <span>100% Pure Vegetarian &bull; Pure Desi Ghee</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1C1917]">
              The Culinary Repertoire
            </h1>
            <p className="text-sm text-[#57534E] mt-2 leading-relaxed">
              Fine dine restaurant & rooftop cafe serving authentic North Indian cuisine, clay oven tandoori starters, sizzling specialties, and sweetcraft since 2001.
            </p>
          </div>

          <div className="flex items-center space-x-3 px-4 py-3 rounded-2xl bg-white border border-[#C59B27]/25 shadow-2xs self-start md:self-auto">
            <BrandLogo
              variant="crest"
              theme="light"
              size="md"
              className="w-10 h-10 shrink-0"
            />
            <div className="flex flex-col border-l border-stone-200 pl-3">
              <span className="text-xs font-serif font-bold text-[#1C1917]">
                Dilliwasi Heritage
              </span>
              <span className="text-[10px] text-[#C59B27] uppercase tracking-wider font-medium">
                Est. 2001 &bull; Outlet 2
              </span>
            </div>
          </div>
        </div>

        {/* Sticky Minimalist Navigation Rail */}
        <div className="sticky top-16 sm:top-20 z-30 bg-[#FAF8F5]/96 backdrop-blur-md pt-4 pb-3 border-b border-stone-200 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          
          {/* Category Horizontal Scrolling Navigation Bar (Zero emojis) */}
          <div
            ref={categoryScrollRef}
            className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none touch-pan-x"
          >
            {menuCategories.map((cat) => {
              const count = categoryCounts[cat.id] || 0;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-150 whitespace-nowrap cursor-pointer flex items-center space-x-1.5 shrink-0 select-none ${
                    isActive
                      ? 'bg-[#1C1917] text-white shadow-2xs'
                      : 'bg-white text-[#57534E] hover:text-[#1C1917] hover:bg-stone-50 border border-stone-200'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`ml-1 text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Filters & Minimalist Search Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3">
            
            {/* Quick Filter Chips (Minimalist typography) */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
              <button
                onClick={() => setFilterType('all')}
                className={`px-3 py-1 text-xs rounded-full border transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 ${
                  filterType === 'all'
                    ? 'bg-[#D81B60] text-white border-[#D81B60] font-medium'
                    : 'bg-white text-[#57534E] border-stone-200 hover:border-stone-400'
                }`}
              >
                All ({menuDishes.length})
              </button>

              <button
                onClick={() => setFilterType('ghee')}
                className={`px-3 py-1 text-xs rounded-full border transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 ${
                  filterType === 'ghee'
                    ? 'bg-[#C59B27] text-white border-[#C59B27] font-medium'
                    : 'bg-white text-[#78716C] border-stone-200 hover:border-[#C59B27] hover:text-[#C59B27]'
                }`}
              >
                Pure Desi Ghee
              </button>

              <button
                onClick={() => setFilterType('signature')}
                className={`px-3 py-1 text-xs rounded-full border transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 ${
                  filterType === 'signature'
                    ? 'bg-[#1C1917] text-white border-[#1C1917] font-medium'
                    : 'bg-white text-[#78716C] border-stone-200 hover:border-[#D81B60] hover:text-[#D81B60]'
                }`}
              >
                Signature Reserve
              </button>

              <button
                onClick={() => setFilterType('under200')}
                className={`px-3 py-1 text-xs rounded-full border transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 ${
                  filterType === 'under200'
                    ? 'bg-[#15803D] text-white border-[#15803D] font-medium'
                    : 'bg-white text-[#78716C] border-stone-200 hover:border-[#15803D] hover:text-[#15803D]'
                }`}
              >
                Under ₹200
              </button>
            </div>

            {/* Clean SVG Search Input */}
            <div className="relative w-full sm:w-72">
              <svg
                className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-2.5 pointer-events-none"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dish or ingredient..."
                className="w-full pl-9 pr-7 py-1.5 text-xs bg-white border border-stone-200 rounded-full text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:border-[#D81B60] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-2 text-stone-400 hover:text-stone-700"
                  aria-label="Clear Search"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

          </div>

          {/* Results Metadata */}
          <div className="flex items-center justify-between text-[11px] text-[#78716C] pt-2 px-1">
            <span>
              Showing <strong className="text-[#1C1917] font-semibold">{filteredDishes.length}</strong> items
              {activeCategory !== 'all' && (
                <span> in <span className="text-[#D81B60] font-medium">{menuCategories.find(c => c.id === activeCategory)?.label}</span></span>
              )}
            </span>
            {(activeCategory !== 'all' || filterType !== 'all' || searchQuery) && (
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setFilterType('all');
                  setSearchQuery('');
                }}
                className="text-[#D81B60] font-medium hover:underline cursor-pointer"
              >
                Reset filters
              </button>
            )}
          </div>

        </div>

        {/* Dish Catalog Grid: Minimalist, Fast-to-Scan & High-Legibility */}
        <div className="mt-8">
          {filteredDishes.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-2xl border border-stone-200 space-y-3">
              <h2 className="font-serif text-xl font-bold text-[#1C1917]">No dishes match your criteria</h2>
              <p className="text-xs text-[#78716C] max-w-sm mx-auto">
                Try resetting your search query or switching to another category.
              </p>
              <div className="pt-2">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    setActiveCategory('all');
                    setFilterType('all');
                    setSearchQuery('');
                  }}
                >
                  Show Full Collection ({menuDishes.length})
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredDishes.map((dish) => (
                <article
                  key={dish.id}
                  className="p-5 rounded-2xl bg-white border border-stone-200/90 shadow-2xs hover:border-[#D81B60]/35 hover:shadow-xs transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header: Diet marker, category, price */}
                    <div className="flex items-center justify-between pb-2.5 border-b border-stone-100">
                      <div className="flex items-center space-x-2">
                        <DietaryMarker isVeg={true} />
                        <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-[#A8A29E]">
                          {dish.category}
                        </span>
                      </div>
                      <span className="font-serif text-lg font-bold text-[#1C1917]">
                        ₹{dish.price}
                      </span>
                    </div>

                    {/* Dish Title & Minimal Tags */}
                    <div className="mt-3 space-y-1.5">
                      <h3 className="font-serif text-lg font-bold text-[#1C1917] leading-snug group-hover:text-[#D81B60] transition-colors">
                        {dish.name}
                      </h3>

                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {dish.isPureGhee && <PureDesiGheeBadge />}
                        {dish.isSignature && <ChefSpecialBadge />}
                      </div>

                      <p className="text-xs text-[#57534E] leading-relaxed pt-1 font-light">
                        {dish.description}
                      </p>

                      {dish.accompaniment && (
                        <p className="text-[11px] text-[#A8A29E] italic">
                          &bull; {dish.accompaniment}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Footer Info */}
                  <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-[#15803D] font-medium">
                      100% Pure Veg
                    </span>
                    <a
                      href={`tel:${restaurantInfo.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-xs font-medium text-[#D81B60] hover:text-[#1C1917] transition-colors inline-flex items-center space-x-1"
                    >
                      <span>Order</span>
                      <span>&rarr;</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Minimalist Ordering Hotline Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-[#180308] text-white border border-[#C59B27]/25 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#C59B27] font-semibold block">
              Pure Desi Ghee &bull; Fine Dine & Rooftop
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">
              Relish authentic Dilliwasi flavours
            </h2>
            <p className="text-xs text-stone-300 max-w-lg">
              Visit us at Amar Complex, Shivalik Nagar, Haridwar or call ahead for quick dining and pickup inquiries.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="tel:+919058882691"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#D81B60] text-white font-medium text-xs uppercase tracking-widest hover:bg-[#C2185B] transition-colors text-center inline-flex items-center justify-center space-x-2"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 90588 82691</span>
            </a>
            <Link to="/contact" className="w-full sm:w-auto">
              <button
                type="button"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-medium text-xs uppercase tracking-widest hover:bg-white/20 transition-colors cursor-pointer text-center"
              >
                Directions
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
