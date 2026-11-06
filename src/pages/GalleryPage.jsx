import React, { useState } from 'react';
import { Link } from '../router/Router';
import { galleryItems } from '../data/mockData';
import { Button } from '../components/common/Button';
import { DietaryMarker } from '../components/common/Badge';

export function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: `All (${galleryItems.length})` },
    { id: 'Feast', label: `Pure Veg Feasts (${galleryItems.filter((i) => i.category === 'Feast').length})` },
    { id: 'Tandoor', label: `Clay Tandoor (${galleryItems.filter((i) => i.category === 'Tandoor').length})` },
    { id: 'Ambiance', label: `Rooftop & Dining (${galleryItems.filter((i) => i.category === 'Ambiance').length})` },
    { id: 'Craft', label: `Heritage Craft (${galleryItems.filter((i) => i.category === 'Craft').length})` },
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1917] pt-24 sm:pt-28 pb-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-[#78716C] mb-4 sm:mb-6">
          <Link to="/" className="hover:text-[#1C1917] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#D81B60] font-medium">Gallery</span>
        </nav>
        
        {/* Gallery Header */}
        <div className="max-w-2xl">
          <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D81B60] block mb-1">
            Visual Archive
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1C1917]">
            Dilliwasi Gallery
          </h1>
          <p className="text-sm text-[#57534E] mt-2 leading-relaxed font-light">
            Atmospheric chronicles of our 100% pure vegetarian culinary craftsmanship, pure desi ghee slow-simmered gravies, clay tandoor starters, and starlit rooftop cafe in Haridwar.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="mt-8 flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none border-b border-stone-200">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-150 whitespace-nowrap cursor-pointer shrink-0 ${
                activeFilter === cat.id
                  ? 'bg-[#1C1917] text-white shadow-2xs'
                  : 'bg-white text-[#57534E] hover:text-[#1C1917] border border-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer rounded-2xl bg-white border border-stone-200/90 overflow-hidden shadow-2xs hover:border-[#D81B60]/35 transition-all duration-200 flex flex-col justify-between"
            >
              {/* Aspect Container */}
              <div className="relative aspect-[4/3] bg-stone-900 overflow-hidden">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-104"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : null}

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-white bg-black/60 backdrop-blur-xs rounded-full border border-white/20">
                    {item.badge}
                  </span>
                </div>

                {/* Bottom title */}
                <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-xs text-white">
                  <h3 className="font-serif font-bold text-sm text-white line-clamp-1">
                    {item.title}
                  </h3>
                  <span className="text-[10px] uppercase tracking-wider text-stone-300 font-medium shrink-0 ml-2">
                    Inspect &rarr;
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                <p className="text-xs text-[#57534E] leading-relaxed font-light">
                  {item.description}
                </p>
                <div className="pt-2 flex items-center justify-between text-[10px] text-[#A8A29E] border-t border-stone-100">
                  <div className="flex items-center space-x-1.5">
                    <DietaryMarker isVeg={true} />
                    <span className="font-medium text-[#15803D]">Pure Veg</span>
                  </div>
                  <span className="uppercase tracking-widest">{item.category}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modal for detailed inspection */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="bg-[#FAF8F5] rounded-3xl max-w-xl w-full overflow-hidden shadow-xl border border-stone-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] bg-black">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#D81B60] transition-colors"
                  aria-label="Close Preview"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded text-[9px] font-semibold uppercase tracking-wider bg-[#FFF0F5] text-[#D81B60] border border-[#D81B60]/30">
                    {selectedItem.badge}
                  </span>
                  <span className="text-xs text-stone-300">&bull;</span>
                  <span className="text-[10px] text-[#78716C] uppercase tracking-wider font-medium">{selectedItem.category}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1C1917]">
                  {selectedItem.title}
                </h3>
                <p className="text-xs text-[#57534E] leading-relaxed font-light">
                  {selectedItem.description}
                </p>

                <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                  <Link to="/menu" onClick={() => setSelectedItem(null)}>
                    <Button variant="primary" size="sm">
                      View in Menu &rarr;
                    </Button>
                  </Link>
                  <a
                    href="tel:+919058882691"
                    className="text-xs font-medium text-[#D81B60] hover:underline"
                  >
                    +91 90588 82691
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
