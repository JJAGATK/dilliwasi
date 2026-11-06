import React from 'react';
import { Link } from '../router/Router';
import { Button } from '../components/common/Button';
import { BrandLogo } from '../components/common/BrandLogo';
import { ourSixCharms } from '../data/mockData';

export function StoryPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#241814] pt-24 sm:pt-28 pb-24 relative overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-[#E60067]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-96 h-96 rounded-full bg-[#D4A346]/10 blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-[#6E5D53] mb-6">
          <Link to="/" className="hover:text-[#241814] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#E60067] font-semibold">Our Story</span>
        </nav>
        
        {/* Story Hero */}
        <div className="max-w-3xl mx-auto text-center space-y-4 py-4 sm:py-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-[#E60067] text-xs font-bold">
            <span>✨</span>
            <span>SERVING HARIDWAR SINCE 2001</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#241814]">
            Relish the Tradition with Pure Desi Ghee Delights
          </h1>
          <p className="text-base sm:text-lg text-[#6E5D53] leading-relaxed max-w-2xl mx-auto">
            From our founding in 2001 to expanding our premier Outlet 2 at Amar Complex, Shivalik Nagar, Dilliwasi has stood for one enduring promise: 100% pure vegetarian culinary excellence prepared with authentic pure desi ghee.
          </p>
        </div>

        {/* Narrative Chapter 1: The Inception */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center my-12 sm:my-16">
          <div className="space-y-4">
            <span className="label-caps text-[#E60067] text-xs font-bold">Chapter I &bull; Est. 2001</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#241814]">
              A Heritage Rooted in Pure Vegetarian Integrity
            </h2>
            <p className="text-sm text-[#6E5D53] leading-relaxed">
              When Dilliwasi opened its doors over two decades ago, our vision was simple yet uncompromising: to bring the rich, legendary flavours of authentic North Indian dining to Haridwar without taking a single shortcut.
            </p>
            <p className="text-sm text-[#6E5D53] leading-relaxed">
              Every dish that leaves our kitchen is 100% pure vegetarian, prepared in a sacredly maintained kitchen free of non-vegetarian presence, artificial food colors, or chemical seasonings.
            </p>
          </div>

          <div className="relative p-8 rounded-3xl bg-[#2A050C] text-[#FAF7F2] border border-[#D4A346]/30 shadow-xl space-y-5 text-center flex flex-col items-center">
            <BrandLogo
              variant="crest"
              theme="dark"
              size="lg"
              className="w-16 h-16 mx-auto relative z-10"
            />
            <h3 className="font-serif text-2xl font-bold text-white">The Dilliwasi Creed</h3>
            <p className="text-xs text-[#C7B8AA] leading-relaxed max-w-sm">
              "Cooking is not just a commercial craft; it is a seva. When food is prepared with pure desi ghee and clean intention, it nourishes both body and soul."
            </p>
            <span className="block text-[11px] uppercase tracking-wider text-[#E8C066] font-bold">
              &mdash; Dilliwasi Culinary Heritage Since 2001
            </span>
          </div>
        </div>

        {/* Narrative Chapter 2: The Two-Tier Experience */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center my-12 sm:my-16">
          <div className="order-2 md:order-1 relative p-8 rounded-3xl bg-white border border-[#D4A346]/30 shadow-md space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#E60067] font-bold">Shivalik Nagar Outlet 2</span>
            <h3 className="font-serif text-2xl font-bold text-[#241814]">Dual Dining Horizons</h3>
            <div className="space-y-3 text-xs text-[#6E5D53] leading-relaxed">
              <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-stone-200">
                <strong className="block text-[#241814] text-sm mb-1">3rd Floor &bull; Luxury AC Fine Dine Hall</strong>
                Quiet, refined, and plush seating ideal for family celebrations, intimate dinners, and celebratory thali meals.
              </div>
              <div className="p-3.5 rounded-xl bg-rose-50/50 border border-rose-200">
                <strong className="block text-[#E60067] text-sm mb-1">4th Floor &bull; Open-Air Rooftop Cafe</strong>
                Starlit terrace dining with panoramic breezes, specialty sizzlers, crispy momos, and chilled mocktails.
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-4">
            <span className="label-caps text-[#E60067] text-xs font-bold">Chapter II &bull; The Sanctuary</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#241814]">
              Fine Dine Comfort & Starlit Rooftop Ambiance
            </h2>
            <p className="text-sm text-[#6E5D53] leading-relaxed">
              Perched atop A3 Amar Complex opposite ICICI Bank in Shivalik Nagar, Dilliwasi Outlet 2 was designed as a dual-experience destination for Haridwar residents and pilgrims alike.
            </p>
            <p className="text-sm text-[#6E5D53] leading-relaxed">
              Whether you desire the quiet luxury of our air-conditioned dining salon or the lively energy of our open-air rooftop cafe, every visit is wrapped in warm personal hospitality.
            </p>
          </div>
        </div>

        {/* Narrative Chapter 3: Our Six Charms */}
        <div className="max-w-5xl mx-auto my-16 sm:my-20 p-8 sm:p-12 rounded-3xl bg-[#2A050C] text-white border border-[#D4A346]/30 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E8C066]">
              From Page 24 of Our Official Menu
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-2">
              Our Six Charms
            </h2>
            <p className="text-xs sm:text-sm text-[#C7B8AA] mt-2">
              The core pillars that form the soul of Dilliwasi dining.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ourSixCharms.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#1F0409] border border-[#D4A346]/20 space-y-2 hover:border-[#E8C066]/50 transition-colors"
              >
                <div className="flex items-center space-x-2.5">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="font-serif text-base font-bold text-white">{item.charm}</h3>
                    <span className="text-[11px] text-[#E8C066] font-medium">{item.hindi}</span>
                  </div>
                </div>
                <p className="text-xs text-[#C7B8AA] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative Chapter 4: Pure Desi Ghee & Hand-Pounded Spices */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center my-12 sm:my-16">
          <div className="space-y-4">
            <span className="label-caps text-[#E60067] text-xs font-bold">Chapter III &bull; Pure Desi Ghee</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#241814]">
              Sixteen Hours of Slow Simmering
            </h2>
            <p className="text-sm text-[#6E5D53] leading-relaxed">
              Our crown jewel &mdash; the Black Dairy Dal Makhani &mdash; simmers for 16 consecutive hours over low embers. Blended with pure desi ghee and fresh farm cream, it achieves a silky, comforting depth that cannot be replicated with modern shortcuts.
            </p>
            <p className="text-sm text-[#6E5D53] leading-relaxed">
              From our crispy Tandoori Rotis brushed with desi ghee to our artisanal stuffed naans and rich shahi paneer curries, purity is our hallmark.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#D4A346]/30 shadow-md space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#D97706] font-bold">The Kitchen Protocol</span>
            <h3 className="font-serif text-2xl font-bold text-[#241814]">Pure Ingredients Only</h3>
            <ul className="space-y-2.5 text-xs text-[#6E5D53]">
              <li className="flex items-center space-x-2">
                <span className="text-[#16A34A] font-bold">✓</span>
                <span><strong>100% Pure Desi Ghee</strong> for all signature dals, curries & rotis</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-[#16A34A] font-bold">✓</span>
                <span><strong>Farm-Fresh Malai Paneer</strong> delivered fresh daily</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-[#16A34A] font-bold">✓</span>
                <span><strong>Authentic Clay Tandoors</strong> fired with natural charcoal embers</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-[#16A34A] font-bold">✓</span>
                <span><strong>Zero Animal Fat or Gelatin</strong> &mdash; 100% vegetarian guarantee</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Experience */}
        <div className="mt-16 sm:mt-20 text-center max-w-xl mx-auto space-y-5">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#241814]">
            Taste the Dilliwasi Tradition
          </h2>
          <p className="text-sm text-[#6E5D53] leading-relaxed">
            Join us with family and friends for an unforgettable vegetarian feast at Shivalik Nagar, Haridwar.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/menu">
              <Button variant="primary" size="lg" className="uppercase tracking-widest text-xs px-8">
                Explore Our 100% Veg Menu &rarr;
              </Button>
            </Link>
            <a
              href="tel:+919058882691"
              className="px-7 py-3 rounded-full bg-[#FAF7F2] border border-[#D4A346]/40 text-xs font-bold uppercase tracking-wider text-[#241814] hover:bg-[#EDE5D8] transition-colors"
            >
              📞 Call: +91 90588 82691
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
