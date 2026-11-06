import React from 'react';
import { Link } from '../router/Router';
import { Button } from '../components/common/Button';
import { BrandLogo } from '../components/common/BrandLogo';
import { ourSixCharms } from '../data/mockData';

export function StoryPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1917] pt-24 sm:pt-28 pb-24 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-[#78716C] mb-6">
          <Link to="/" className="hover:text-[#1C1917] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#D81B60] font-medium">Our Story</span>
        </nav>
        
        {/* Story Hero */}
        <div className="max-w-3xl mx-auto text-center space-y-3 py-4 sm:py-6">
          <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#D81B60] block">
            Haridwar Heritage Since 2001
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C1917]">
            Relish the Tradition with Pure Desi Ghee Delights
          </h1>
          <p className="text-base text-[#57534E] leading-relaxed max-w-2xl mx-auto font-light">
            From our founding in 2001 to expanding our premier Outlet 2 at Amar Complex, Shivalik Nagar, Dilliwasi has stood for one enduring promise: 100% pure vegetarian culinary excellence prepared with authentic pure desi ghee.
          </p>
        </div>

        {/* Narrative Chapter 1 */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center my-12 sm:my-16">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D81B60] block">
              Chapter I &bull; Est. 2001
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
              A Heritage Rooted in Pure Vegetarian Integrity
            </h2>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-light">
              When Dilliwasi opened its doors over two decades ago, our vision was simple yet uncompromising: to bring the rich, legendary flavours of authentic North Indian dining to Haridwar without taking a single shortcut.
            </p>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-light">
              Every dish that leaves our kitchen is 100% pure vegetarian, prepared in a sacredly maintained kitchen free of non-vegetarian presence, artificial food colors, or chemical seasonings.
            </p>
          </div>

          <div className="relative p-8 rounded-3xl bg-[#180308] text-white border border-[#C59B27]/25 shadow-xs space-y-4 text-center flex flex-col items-center">
            <BrandLogo
              variant="crest"
              theme="dark"
              size="lg"
              className="w-14 h-14 mx-auto"
            />
            <h3 className="font-serif text-xl font-bold text-white">The Dilliwasi Creed</h3>
            <p className="text-xs text-stone-300 leading-relaxed max-w-sm font-light">
              "Cooking is not just a commercial craft; it is a seva. When food is prepared with pure desi ghee and clean intention, it nourishes both body and soul."
            </p>
            <span className="block text-[10px] uppercase tracking-widest text-[#C59B27] font-semibold">
              &mdash; Culinary Heritage Since 2001
            </span>
          </div>
        </div>

        {/* Narrative Chapter 2 */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center my-12 sm:my-16">
          <div className="order-2 md:order-1 relative p-8 rounded-3xl bg-white border border-stone-200 shadow-2xs space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-[#D81B60] font-semibold">
              Shivalik Nagar Outlet 2
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#1C1917]">Dual Dining Horizons</h3>
            <div className="space-y-3 text-xs text-[#57534E] leading-relaxed">
              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200">
                <strong className="block text-[#1C1917] text-sm mb-1 font-serif">3rd Floor &bull; AC Fine Dine Hall</strong>
                Quiet, refined, and plush seating ideal for family celebrations, intimate dinners, and celebratory thali meals.
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-stone-200">
                <strong className="block text-[#D81B60] text-sm mb-1 font-serif">4th Floor &bull; Open-Air Rooftop Cafe</strong>
                Starlit terrace dining with panoramic breezes, specialty sizzlers, crispy momos, and chilled mocktails.
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D81B60] block">
              Chapter II &bull; The Sanctuary
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
              Fine Dine Comfort & Starlit Rooftop Ambiance
            </h2>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-light">
              Perched atop A3 Amar Complex opposite ICICI Bank in Shivalik Nagar, Dilliwasi Outlet 2 was designed as a dual-experience destination for Haridwar residents and pilgrims alike.
            </p>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-light">
              Whether you desire the quiet luxury of our air-conditioned dining salon or the lively energy of our open-air rooftop cafe, every visit is wrapped in warm personal hospitality.
            </p>
          </div>
        </div>

        {/* Narrative Chapter 3: Our Six Charms */}
        <div className="max-w-5xl mx-auto my-16 sm:my-20 p-8 sm:p-12 rounded-3xl bg-[#180308] text-white border border-[#C59B27]/25 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C59B27]">
              Menu Page 24
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-1">
              Our Six Charms
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-1 font-light">
              The core principles that form the foundation of Dilliwasi hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ourSixCharms.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#1F040A] border border-white/10 space-y-2 hover:border-[#C59B27]/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-[#C59B27]">
                    {item.number}
                  </span>
                  <span className="text-[11px] text-[#A8A29E] font-medium">
                    {item.hindi}
                  </span>
                </div>
                <h3 className="font-serif text-base font-bold text-white">
                  {item.charm}
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative Chapter 4: Pure Desi Ghee */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center my-12 sm:my-16">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D81B60] block">
              Chapter III &bull; Pure Desi Ghee
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
              Sixteen Hours of Slow Simmering
            </h2>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-light">
              Our crown jewel &mdash; the Black Dairy Dal Makhani &mdash; simmers for 16 consecutive hours over low embers. Blended with pure desi ghee and fresh farm cream, it achieves a silky, comforting depth that cannot be replicated with modern shortcuts.
            </p>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-light">
              From our crispy Tandoori Rotis brushed with desi ghee to our artisanal stuffed naans and rich shahi paneer curries, purity is our hallmark.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-stone-200 shadow-2xs space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-[#C59B27] font-semibold">
              The Kitchen Protocol
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#1C1917]">Pure Ingredients Only</h3>
            <ul className="space-y-2 text-xs text-[#57534E]">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#15803D]" />
                <span><strong>100% Pure Desi Ghee</strong> for all signature dals, curries & rotis</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#15803D]" />
                <span><strong>Farm-Fresh Malai Paneer</strong> delivered fresh daily</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#15803D]" />
                <span><strong>Authentic Clay Tandoors</strong> fired with natural charcoal embers</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#15803D]" />
                <span><strong>Zero Animal Fat or Gelatin</strong> &mdash; 100% vegetarian guarantee</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Experience */}
        <div className="mt-16 sm:mt-20 text-center max-w-xl mx-auto space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">
            Taste the Dilliwasi Tradition
          </h2>
          <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-light">
            Join us with family and friends for an authentic vegetarian feast at Shivalik Nagar, Haridwar.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link to="/menu">
              <Button variant="primary" size="lg" className="uppercase tracking-widest text-xs px-8">
                Explore Our 100% Veg Menu &rarr;
              </Button>
            </Link>
            <a
              href="tel:+919058882691"
              className="px-7 py-3 rounded-full bg-white border border-stone-300 text-xs font-medium uppercase tracking-wider text-[#1C1917] hover:border-[#D81B60] hover:text-[#D81B60] transition-colors"
            >
              Call: +91 90588 82691
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
