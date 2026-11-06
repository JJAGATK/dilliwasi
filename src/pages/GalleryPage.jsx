import React, { useState } from 'react';
import { Link } from '../router/Router';
import { galleryItems } from '../data/mockData';
import { Button } from '../components/common/Button';

export function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: `All Moments (${galleryItems.length})` },
    { id: 'Feast', label: `Pure Veg Feasts (${galleryItems.filter((i) => i.category === 'Feast').length})` },
    { id: 'Tandoor', label: `Clay Tandoor (${galleryItems.filter((i) => i.category === 'Tandoor').length})` },
    { id: 'Ambiance', label: `Rooftop & Fine Dine (${galleryItems.filter((i) => i.category === 'Ambiance').length})` },
    { id: 'Craft', label: `Heritage Craft (${galleryItems.filter((i) => i.category === 'Craft').length})` },
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#241814] pt-24 sm:pt-28 pb-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-[#6E5D53] mb-4 sm:mb-6">
          <Link to="/" className="hover:text-[#241814] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#E60067] font-semibold">Gallery</span>
        </nav>
        
        {/* Gallery Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold mb-2">
            <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
            <span>100% PURE VEG &bull; HARIDWAR SINCE 2001</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#241814]">
            Dilliwasi Visual Archive
          </h1>
          <p className="text-sm sm:text-base text-[#6E5D53] mt-2 leading-relaxed">
            Atmospheric chronicles of our 100% pure vegetarian culinary craftsmanship, pure desi ghee slow-simmered gravies, clay tandoor starters, and starlit rooftop cafe in Haridwar.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="mt-8 flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#D4A346]/20">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer shrink-0 ${
                activeFilter === cat.id
                  ? 'bg-[#2A050C] text-[#FAF7F2] shadow-sm ring-2 ring-[#E60067]/40'
                  : 'bg-white text-[#6E5D53] hover:text-[#241814] hover:bg-[#EDE5D8] border border-[#D4A346]/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer rounded-2xl bg-white border border-[#D4A346]/25 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Aspect Container */}
              <div className="relative aspect-[4/3] bg-[#1E0408] overflow-hidden">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : null}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F0409]/90 via-transparent to-black/20 pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-[#2A050C]/90 backdrop-blur-sm rounded-full border border-[#D4A346]/40 shadow-sm">
                    {item.badge}
                  </span>
                </div>

                {/* Bottom title */}
                <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-xs text-white">
                  <h3 className="font-serif font-bold text-base text-white drop-shadow-sm line-clamp-1">
                    {item.title}
                  </h3>
                  <span className="text-[10px] uppercase tracking-wider text-[#E8C066] bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-full font-bold border border-[#D4A346]/30 shrink-0 ml-2">
                    View ↗
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-2">
                <p className="text-xs text-[#6E5D53] leading-relaxed">
                  {item.description}
                </p>
                <div className="pt-2 flex items-center justify-between text-[11px] text-[#9B897D] border-t border-stone-100">
                  <span className="font-semibold text-[#16A34A]">✓ 100% Pure Veg</span>
                  <span className="uppercase tracking-wider">{item.category}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modal for detailed inspection */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="bg-[#FAF7F2] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#D4A346]/40"
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
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-[#E60067] transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-3">
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-[#E60067] border border-rose-200">
                    {selectedItem.badge}
                  </span>
                  <span className="text-xs text-[#9B897D]">&bull;</span>
                  <span className="text-xs text-[#6E5D53] uppercase font-semibold">{selectedItem.category}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#241814]">
                  {selectedItem.title}
                </h3>
                <p className="text-sm text-[#6E5D53] leading-relaxed">
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
                    className="text-xs font-bold text-[#E60067] hover:underline"
                  >
                    Inquiries: +91 90588 82691
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
