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
    <div className="min-h-screen bg-[#FAF7F2] text-[#241814] pt-24 sm:pt-28 pb-24">
      {/* Menu Header */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-[#6E5D53] mb-4 sm:mb-6">
          <Link to="/" className="hover:text-[#241814] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#E60067] font-semibold">100% Pure Veg Menu</span>
        </nav>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#D4A346]/20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold mb-2">
              <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
              <span>100% PURE VEG &bull; PURE DESI GHEE DELIGHTS</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#241814]">
              The Dilliwasi Menu
            </h1>
            <p className="text-sm sm:text-base text-[#6E5D53] mt-2 leading-relaxed">
              Fine dine restaurant & rooftop cafe serving authentic North Indian cuisine, clay oven tandoori starters, sizzling specialties, and sweetcraft since 2001.
            </p>
          </div>

          <div className="flex items-center space-x-3 px-4 py-3 rounded-2xl bg-[#F4EFE6] border border-[#D4A346]/30 shadow-xs self-start md:self-auto">
            <BrandLogo
              variant="crest"
              theme="light"
              size="md"
              className="w-11 h-11 shrink-0"
            />
            <div className="flex flex-col border-l border-[#D4A346]/30 pl-3">
              <span className="text-xs font-serif font-bold text-[#241814]">
                Pure Desi Ghee
              </span>
              <span className="text-[10px] text-[#E60067] uppercase tracking-wider font-semibold">
                Est. 2001 &bull; Outlet 2
              </span>
            </div>
          </div>
        </div>

        {/* Sticky Filter Bar on Scroll */}
        <div className="sticky top-16 sm:top-20 z-30 bg-[#FAF7F2]/95 backdrop-blur-md pt-4 pb-3 border-b border-[#D4A346]/20 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          
          {/* Category Horizontal Scrolling Navigation Bar */}
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
                  onClick={() => {
                    setActiveCategory(cat.id);
                  }}
                  className={`px-3.5 py-2 text-xs font-medium rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center space-x-1.5 shrink-0 select-none ${
                    isActive
                      ? 'bg-[#2A050C] text-[#FAF7F2] shadow-md ring-2 ring-[#E60067]/40'
                      : 'bg-white text-[#6E5D53] hover:text-[#241814] hover:bg-[#F4EFE6] border border-[#D4A346]/20'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                  <span
                    className={`ml-1 text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-[#E60067] text-white' : 'bg-[#EDE5D8] text-[#6E5D53]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Filters & Live Search Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3">
            
            {/* Quick Filter Chips */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
              <button
                onClick={() => setFilterType('all')}
                className={`px-3 py-1.5 text-xs rounded-full border transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                  filterType === 'all'
                    ? 'bg-[#D4A346] text-[#241814] border-[#D4A346] font-bold shadow-xs'
                    : 'bg-white text-[#6E5D53] border-stone-200 hover:border-[#D4A346]'
                }`}
              >
                All Delights ({menuDishes.length})
              </button>

              <button
                onClick={() => setFilterType('ghee')}
                className={`px-3 py-1.5 text-xs rounded-full border transition-all duration-200 cursor-pointer flex items-center space-x-1 whitespace-nowrap shrink-0 ${
                  filterType === 'ghee'
                    ? 'bg-amber-600 text-white border-amber-600 font-bold shadow-xs'
                    : 'bg-white text-amber-800 border-amber-200 hover:bg-amber-50'
                }`}
              >
                <span>🧈</span>
                <span>Pure Desi Ghee</span>
              </button>

              <button
                onClick={() => setFilterType('signature')}
                className={`px-3 py-1.5 text-xs rounded-full border transition-all duration-200 cursor-pointer flex items-center space-x-1 whitespace-nowrap shrink-0 ${
                  filterType === 'signature'
                    ? 'bg-[#E60067] text-white border-[#E60067] font-bold shadow-xs'
                    : 'bg-white text-[#E60067] border-rose-200 hover:bg-rose-50'
                }`}
              >
                <span>★</span>
                <span>Dilliwasi Special</span>
              </button>

              <button
                onClick={() => setFilterType('under200')}
                className={`px-3 py-1.5 text-xs rounded-full border transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                  filterType === 'under200'
                    ? 'bg-emerald-700 text-white border-emerald-700 font-bold shadow-xs'
                    : 'bg-white text-emerald-800 border-emerald-200 hover:bg-emerald-50'
                }`}
              >
                Under ₹200
              </button>
            </div>

            {/* Instant Search Bar */}
            <div className="relative w-full sm:w-80">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Paneer, Dal Makhani, Momos..."
                className="w-full pl-9 pr-8 py-2 text-xs bg-white border border-[#D4A346]/40 rounded-full text-[#241814] placeholder-[#9B897D] focus:outline-none focus:border-[#E60067] shadow-xs"
              />
              <span className="absolute left-3 top-2.5 text-sm text-[#9B897D]">🔍</span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2 text-xs text-stone-400 hover:text-stone-700 w-5 h-5 flex items-center justify-center rounded-full bg-stone-100"
                >
                  ✕
                </button>
              )}
            </div>

          </div>

          {/* Results Count Banner */}
          <div className="flex items-center justify-between text-xs text-[#6E5D53] pt-2 px-1">
            <span>
              Showing <strong className="text-[#241814]">{filteredDishes.length}</strong> 100% pure veg dishes
              {activeCategory !== 'all' && (
                <span> in <strong className="text-[#E60067]">{menuCategories.find(c => c.id === activeCategory)?.label}</strong></span>
              )}
            </span>
            {(activeCategory !== 'all' || filterType !== 'all' || searchQuery) && (
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setFilterType('all');
                  setSearchQuery('');
                }}
                className="text-[11px] text-[#E60067] font-semibold hover:underline"
              >
                Reset filters
              </button>
            )}
          </div>

        </div>

        {/* Dish Catalog Grid: Fast to Scan & Mobile-Optimized */}
        <div className="mt-8">
          {filteredDishes.length === 0 ? (
            <div className="p-12 sm:p-16 text-center bg-[#F4EFE6] rounded-2xl border border-[#D4A346]/30 space-y-4">
              <span className="text-4xl block">🍲</span>
              <h2 className="font-serif text-2xl font-bold text-[#241814]">No dishes found</h2>
              <p className="text-xs sm:text-sm text-[#6E5D53] max-w-md mx-auto">
                No matching dishes found for your search. Try resetting filters or searching for another pure veg favorite.
              </p>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  setActiveCategory('all');
                  setFilterType('all');
                  setSearchQuery('');
                }}
              >
                Show All Dishes ({menuDishes.length})
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredDishes.map((dish) => (
                <article
                  key={dish.id}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-[#D4A346]/25 shadow-xs hover:shadow-lg hover:border-[#E60067]/40 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header: Diet marker, category, price */}
                    <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                      <div className="flex items-center space-x-2">
                        <DietaryMarker isVeg={true} />
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#9B897D]">
                          {dish.category}
                        </span>
                      </div>
                      <span className="font-serif text-xl font-bold text-[#241814]">
                        ₹{dish.price}
                      </span>
                    </div>

                    {/* Dish Title & Badges */}
                    <div className="mt-3.5 space-y-2">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-[#241814] leading-snug group-hover:text-[#E60067] transition-colors">
                          {dish.name}
                        </h3>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {dish.isPureGhee && <PureDesiGheeBadge />}
                        {dish.isSignature && <ChefSpecialBadge />}
                      </div>

                      <p className="text-xs text-[#6E5D53] leading-relaxed pt-1">
                        {dish.description}
                      </p>

                      {dish.accompaniment && (
                        <p className="text-[11px] text-[#9B897D] italic">
                          &bull; {dish.accompaniment}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Footer Info */}
                  <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-[#16A34A] font-medium flex items-center space-x-1">
                      <span>✓</span>
                      <span>100% Pure Veg</span>
                    </span>
                    <a
                      href={`tel:${restaurantInfo.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-xs font-semibold text-[#E60067] hover:text-[#2A050C] transition-colors inline-flex items-center space-x-1"
                    >
                      <span>Order Call</span>
                      <span>&rarr;</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Footer Ordering Hotline Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#2A050C] via-[#3D0914] to-[#2A050C] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-[#E8C066] text-xs font-semibold">
              <span>🧈</span>
              <span>Pure Desi Ghee Fine Dine & Rooftop Experience</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">
              Ready to relish traditional Dilliwasi flavours?
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
              Visit us at Amar Complex, Shivalik Nagar, Haridwar or call ahead for quick pickup and dining inquiries.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="tel:+919058882691"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#E60067] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-[#C2185B] transition-colors text-center"
            >
              📞 Call: +91 90588 82691
            </a>
            <Link to="/contact" className="w-full sm:w-auto">
              <button
                type="button"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/10 border border-white/20 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/20 transition-colors cursor-pointer text-center"
              >
                Get Directions
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
