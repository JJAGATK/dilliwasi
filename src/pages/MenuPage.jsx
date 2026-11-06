import React, { useState, useMemo } from 'react';
import { Link } from '../router/Router';
import { menuCategories, menuDishes } from '../data/mockData';
import { DietaryMarker } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { ToranaDivider } from '../components/common/ToranaDivider';
import { BrandLogo } from '../components/common/BrandLogo';

export function MenuPage({ onOpenReserve }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [dietaryFilter, setDietaryFilter] = useState('all'); // 'all' | 'veg' | 'signature'
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDishes = useMemo(() => {
    return menuDishes.filter((dish) => {
      // Category filter
      if (activeCategory !== 'all' && dish.category !== activeCategory) {
        return false;
      }
      // Dietary filter
      if (dietaryFilter === 'veg' && !dish.isVeg) {
        return false;
      }
      if (dietaryFilter === 'signature' && !dish.isSignature) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = dish.name.toLowerCase().includes(query);
        const matchesDesc = dish.description.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc) return false;
      }
      return true;
    });
  }, [activeCategory, dietaryFilter, searchQuery]);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#241814] pt-28 pb-24">
      {/* Menu Header */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-[#6E5D53] mb-6">
          <Link to="/" className="hover:text-[#241814] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#B38234] font-medium">Menu</span>
        </nav>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="label-caps text-[#B38234]">Classical Repertoire</span>
            <h1 className="font-serif text-4xl sm:text-6xl font-semibold mt-2 tracking-tight text-[#241814]">
              The Sanchi Tasting Menu
            </h1>
            <p className="text-base text-[#6E5D53] mt-3 leading-relaxed">
              Every dish is prepared upon order using slow copper deg techniques, aged grains, and single-origin royal spices.
            </p>
          </div>

          <div className="hidden lg:flex items-center space-x-3 px-5 py-3 rounded-2xl bg-[#F4EFE6] border border-[rgba(212,163,70,0.3)] shadow-xs">
            <BrandLogo
              variant="crest"
              theme="light"
              size="md"
              className="w-10 h-10 shrink-0"
            />
            <div className="flex flex-col border-l border-[rgba(212,163,70,0.4)] pl-3">
              <span className="text-[11px] font-serif font-bold text-[#241814]">
                Authentic Repertoire
              </span>
              <span className="text-[10px] text-[#B38234] uppercase tracking-wider font-semibold">
                Heritage Verified
              </span>
            </div>
          </div>
        </div>

        {/* Filter Controls: Category Rails & Dietary Toggles */}
        <div className="mt-10 space-y-4 border-b border-[rgba(212,163,70,0.2)] pb-6">
          {/* Category Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-medium rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#2A050C] text-[#FAF7F2] shadow-sm'
                    : 'bg-[#F4EFE6] text-[#6E5D53] hover:text-[#241814] hover:bg-[#EDE5D8]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Dietary Filters & Search Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold text-[#6E5D53] uppercase tracking-wider mr-1">
                Filter:
              </span>
              <button
                onClick={() => setDietaryFilter('all')}
                className={`px-3 py-1 text-xs rounded border transition-all duration-200 cursor-pointer ${
                  dietaryFilter === 'all'
                    ? 'bg-[#D4A346] text-[#241814] border-[#D4A346] font-semibold shadow-xs'
                    : 'bg-white text-[#6E5D53] border-[rgba(110,93,83,0.25)] hover:border-[#D4A346] hover:bg-[#FAF7F2] hover:shadow-[0_2px_8px_rgba(212,163,70,0.16)] hover:-translate-y-0.5'
                }`}
              >
                All ({menuDishes.length})
              </button>
              <button
                onClick={() => setDietaryFilter('veg')}
                className={`px-3 py-1 text-xs rounded border flex items-center space-x-1.5 transition-all duration-200 cursor-pointer ${
                  dietaryFilter === 'veg'
                    ? 'bg-[#2E7D32] text-white border-[#2E7D32] font-semibold shadow-xs'
                    : 'bg-white text-[#6E5D53] border-[rgba(110,93,83,0.25)] hover:border-[#2E7D32] hover:bg-[#FAF7F2] hover:shadow-[0_2px_8px_rgba(46,125,50,0.16)] hover:-translate-y-0.5'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
                <span>Veg Only</span>
              </button>
              <button
                onClick={() => setDietaryFilter('signature')}
                className={`px-3 py-1 text-xs rounded border transition-all duration-200 cursor-pointer ${
                  dietaryFilter === 'signature'
                    ? 'bg-[#2A050C] text-[#FAF7F2] border-[#2A050C] font-semibold shadow-xs'
                    : 'bg-white text-[#6E5D53] border-[rgba(110,93,83,0.25)] hover:border-[#2A050C] hover:bg-[#FAF7F2] hover:shadow-[0_2px_8px_rgba(42,5,12,0.16)] hover:-translate-y-0.5'
                }`}
              >
                Chef's Reserve
              </button>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dish, spice, or ingredient..."
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-[rgba(212,163,70,0.3)] rounded-full text-[#241814] placeholder-[#9B897D] focus:outline-none focus:border-[#D4A346]"
              />
              <svg
                className="w-3.5 h-3.5 absolute left-3 top-2.5 text-[#9B897D]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Dish Catalog Grid: Fast to Scan & High-Legibility */}
        <div className="mt-10">
          {filteredDishes.length === 0 ? (
            <div className="p-16 text-center bg-[#F4EFE6] rounded-xl border border-[rgba(212,163,70,0.2)] space-y-3">
              <span className="font-serif text-2xl text-[#241814]">No dishes found</span>
              <p className="text-xs text-[#6E5D53]">
                Try adjusting your search query or reset the category filters.
              </p>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  setActiveCategory('all');
                  setDietaryFilter('all');
                  setSearchQuery('');
                }}
              >
                Reset All Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDishes.map((dish) => (
                <article
                  key={dish.id}
                  className="p-6 rounded-xl bg-[#F4EFE6] border border-[rgba(212,163,70,0.2)] shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Diet marker, category, price */}
                    <div className="flex items-center justify-between pb-3 border-b border-[rgba(110,93,83,0.12)]">
                      <div className="flex items-center space-x-2">
                        <DietaryMarker isVeg={dish.isVeg} />
                        <span className="text-[11px] font-medium uppercase tracking-wider text-[#6E5D53]">
                          {dish.category}
                        </span>
                      </div>
                      <span className="font-serif text-lg font-bold text-[#241814]">
                        ₹ {dish.price}
                      </span>
                    </div>

                    {/* Dish Title & Description */}
                    <div className="mt-3.5">
                      <div className="flex items-start justify-between">
                        <h3 className="font-serif text-xl font-bold text-[#241814] leading-snug">
                          {dish.name}
                        </h3>
                        {dish.isSignature && (
                          <span className="ml-2 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-[rgba(212,163,70,0.2)] text-[#B38234] rounded">
                            Reserve
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-[#6E5D53] mt-2 leading-relaxed">
                        {dish.description}
                      </p>

                      <p className="text-[11px] text-[#9B897D] italic mt-2.5">
                        &bull; {dish.accompaniment}
                      </p>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="mt-5 pt-3 border-t border-[rgba(110,93,83,0.08)] flex items-center justify-between">
                    <span className="text-[10px] text-[#6E5D53]">
                      Freshly made to order
                    </span>
                    <button
                      onClick={onOpenReserve}
                      className="text-xs font-semibold text-[#B38234] hover:text-[#241814] transition-colors"
                    >
                      Book Table &rarr;
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Torana Separator & Allergen Disclosure */}
        <div className="mt-16 pt-8 border-t border-[rgba(212,163,70,0.15)] text-center text-xs text-[#6E5D53] max-w-xl mx-auto space-y-2">
          <ToranaDivider label="Culinary Note" />
          <p>
            All our breads and kebabs are prepared in an authentic clay tandoor. Please inform your captain of any nut, dairy, or gluten sensitivities prior to ordering.
          </p>
        </div>
      </div>
    </div>
  );
}

