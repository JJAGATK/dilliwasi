import React, { useState } from 'react';
import { Link } from '../router/Router';
import { galleryItems } from '../data/mockData';
import { ToranaDivider } from '../components/common/ToranaDivider';
import { Button } from '../components/common/Button';

export function GalleryPage({ onOpenReserve }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'Cuisine' | 'Craft' | 'Ambiance'

  const filteredItems = galleryItems.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#241814] pt-28 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-[#6E5D53] mb-6">
          <Link to="/" className="hover:text-[#241814] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#B38234] font-medium">Gallery</span>
        </nav>
        
        {/* Gallery Header */}
        <div className="max-w-2xl">
          <span className="label-caps text-[#B38234]">Visual Archive</span>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold mt-2 tracking-tight text-[#241814]">
            Craft & Sanctuary Gallery
          </h1>
          <p className="text-base text-[#6E5D53] mt-3 leading-relaxed">
            Atmospheric chronicles of our copper deg braises, stone-ground masalas, and the sandstone courtyard of Sanchi.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="mt-8 flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none border-b border-[rgba(212,163,70,0.2)]">
          {[
            { id: 'all', label: `All Chronicles (${galleryItems.length})` },
            { id: 'Cuisine', label: `Cuisine & Degustation (${galleryItems.filter((i) => i.category === 'Cuisine').length})` },
            { id: 'Craft', label: `Culinary Craft (${galleryItems.filter((i) => i.category === 'Craft').length})` },
            { id: 'Ambiance', label: `Sanctuary Ambiance (${galleryItems.filter((i) => i.category === 'Ambiance').length})` },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-full transition-all duration-200 whitespace-nowrap cursor-pointer ${
                activeFilter === cat.id
                  ? 'bg-[#2A050C] text-[#FAF7F2] shadow-sm'
                  : 'bg-[#F4EFE6] text-[#6E5D53] hover:text-[#241814] hover:bg-[#EDE5D8]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer rounded-xl bg-[#F4EFE6] border border-[rgba(212,163,70,0.25)] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Aspect Ratio Container with High-Resolution Image */}
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

                {/* Subtle gradient overlay to enhance legibility of title and badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F0409]/90 via-transparent to-black/20 pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#FAF7F2] bg-[#2A050C]/85 backdrop-blur-sm rounded-full border border-[rgba(212,163,70,0.35)] shadow-sm">
                    {item.badge}
                  </span>
                </div>

                {/* Bottom Info bar */}
                <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-[11px] text-[#FAF7F2]">
                  <h3 className="font-serif font-medium text-sm text-[#FAF7F2] drop-shadow-sm line-clamp-1">
                    {item.title}
                  </h3>
                  <span className="text-[10px] uppercase tracking-wider text-[#D4A346] bg-black/60 backdrop-blur-xs px-2 py-0.5 rounded font-medium border border-[rgba(212,163,70,0.2)]">
                    Inspect ↗
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-5">
                <span className="text-[10px] uppercase tracking-widest text-[#B38234] font-semibold">
                  {item.category}
                </span>
                <p className="text-xs text-[#6E5D53] mt-1.5 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Modal Lightbox */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-md animate-fadeIn"
            role="dialog"
            aria-modal="true"
            onClick={() => setSelectedItem(null)}
          >
            <div 
              className="bg-[#FAF7F2] max-w-2xl w-full rounded-xl border border-[rgba(212,163,70,0.4)] shadow-2xl overflow-hidden p-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 text-[#6E5D53] hover:text-[#241814] rounded-full hover:bg-[rgba(212,163,70,0.15)] transition-colors focus:outline-none z-20"
                aria-label="Close Lightbox"
              >
                <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative aspect-[16/10] bg-[#1E0408] rounded-lg overflow-hidden border border-[rgba(212,163,70,0.3)] shadow-inner flex items-center justify-center">
                {selectedItem.image ? (
                  <img 
                    src={selectedItem.image} 
                    alt={selectedItem.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center p-8 text-[#FAF7F2]">
                    <img src="/assets/favicon.png" alt="Sanchi Crest" className="w-12 h-12 mb-3" />
                    <span className="text-xs uppercase tracking-widest text-[#D4A346] font-semibold">
                      {selectedItem.badge} &bull; Sanchi Curatorial Archive
                    </span>
                    <h2 className="font-serif text-2xl font-bold mt-2">{selectedItem.title}</h2>
                  </div>
                )}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-3 py-1 text-[11px] uppercase tracking-widest text-[#FAF7F2] font-semibold bg-[#2A050C]/90 backdrop-blur-sm rounded-full border border-[rgba(212,163,70,0.4)] shadow-sm">
                    {selectedItem.badge} &bull; Curatorial Archive
                  </span>
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="label-caps text-[#B38234] text-xs font-semibold">{selectedItem.category}</span>
                  <span className="text-xs text-[#6E5D53]">Shot at Sanchi Dining Room &bull; Bhopal</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#241814]">{selectedItem.title}</h3>
                <p className="text-sm text-[#6E5D53] leading-relaxed">{selectedItem.description}</p>
                <div className="pt-4 flex items-center justify-end border-t border-[rgba(110,93,83,0.15)]">
                  <Button variant="primary" size="sm" onClick={() => { setSelectedItem(null); onOpenReserve(); }}>
                    Reserve This Table Experience
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-20">
          <ToranaDivider label="Sanctuary Architecture" />
        </div>
      </div>
    </div>
  );
}

