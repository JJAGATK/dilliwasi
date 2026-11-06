import React, { useState } from 'react';
import { Link } from '../router/Router';
import { galleryItems } from '../data/mockData';
import { Button } from '../components/common/Button';
import { DietaryMarker } from '../components/common/Badge';
import {
  RooftopPavilionDrawing,
  DelhiMehrabArchDrawing,
  RoyalPadmaMandalaDrawing,
} from '../components/common/DilliwasiHeritageDrawings';

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
    <div className="min-h-screen bg-[#FAF7F2] text-[#241814] pt-20 sm:pt-28 pb-20 sm:pb-24 relative overflow-x-hidden max-w-full w-full">
      {/* Background Architectural Drawings Watermarks */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none max-w-full" aria-hidden="true">
        <div className="absolute top-12 -right-8 sm:right-10 w-[240px] sm:w-[420px] text-[#C59B27] opacity-[0.06]">
          <RooftopPavilionDrawing className="w-full h-auto" />
        </div>
        <div className="absolute top-[680px] -left-8 sm:-left-16 w-[240px] sm:w-[440px] text-[#C59B27] opacity-[0.05]">
          <DelhiMehrabArchDrawing className="w-full h-auto" />
        </div>
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] text-[#C59B27] opacity-[0.04]">
          <RoyalPadmaMandalaDrawing className="w-full h-auto" />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-[#6E5D53] mb-4 sm:mb-6">
          <Link to="/" className="hover:text-[#241814] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#9F1239] font-semibold">Gallery</span>
        </nav>
        
        {/* Gallery Header */}
        <div className="max-w-2xl">
          <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#9F1239] block mb-1">
            Visual Archive
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#241814]">
            Dilliwasi Gallery
          </h1>
          <p className="text-sm text-[#6E5D53] mt-2 leading-relaxed font-light">
            Atmospheric chronicles of our 100% pure vegetarian culinary craftsmanship, pure desi ghee slow-simmered gravies, clay tandoor starters, and starlit rooftop cafe in Haridwar.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="mt-8 flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none border-b border-[rgba(212,163,70,0.2)]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-150 whitespace-nowrap cursor-pointer shrink-0 ${
                activeFilter === cat.id
                  ? 'bg-[#9F1239] text-[#FAF7F2] shadow-2xs'
                  : 'bg-white text-[#6E5D53] hover:text-[#241814] border border-stone-200'
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
              className="group cursor-pointer rounded-2xl bg-white border border-[rgba(212,163,70,0.22)] overflow-hidden shadow-2xs hover:border-[#9F1239]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
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
                  <span className="px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-widest text-[#FAF7F2] bg-[#2A050C]/85 backdrop-blur-xs rounded-full border border-[#D4A346]/30">
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
                <p className="text-xs text-[#6E5D53] leading-relaxed font-light">
                  {item.description}
                </p>
                <div className="pt-2 flex items-center justify-between text-[10px] text-[#9B897D] border-t border-stone-100">
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
              className="bg-[#FAF7F2] rounded-3xl max-w-xl w-full overflow-hidden shadow-xl border border-[rgba(212,163,70,0.3)]"
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
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#9F1239] transition-colors"
                  aria-label="Close Preview"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded text-[9px] font-semibold uppercase tracking-wider bg-[#FAF0F2] text-[#9F1239] border border-[#9F1239]/30">
                    {selectedItem.badge}
                  </span>
                  <span className="text-xs text-stone-300">&bull;</span>
                  <span className="text-[10px] text-[#6E5D53] uppercase tracking-wider font-semibold">{selectedItem.category}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#241814]">
                  {selectedItem.title}
                </h3>
                <p className="text-xs text-[#6E5D53] leading-relaxed font-light">
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
                    className="text-xs font-semibold text-[#9F1239] hover:underline"
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
