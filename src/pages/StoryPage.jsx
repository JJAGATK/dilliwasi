import React from 'react';
import { Link } from '../router/Router';
import { Button } from '../components/common/Button';
import { BrandLogo } from '../components/common/BrandLogo';
import { MehrabDivider } from '../components/common/ToranaDivider';
import {
  DelhiMehrabArchDrawing,
  DesiGheeHandiDrawing,
  RooftopPavilionDrawing,
  RoyalPadmaMandalaDrawing,
  BotanicalSpicesDrawing,
} from '../components/common/DilliwasiHeritageDrawings';
import { ourSixCharms } from '../data/mockData';

export function StoryPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1917] pt-24 sm:pt-28 pb-24 relative overflow-hidden select-none-text">
      
      {/* ========================================================================= */}
      {/* Page-Wide Architectural Line-Art Watermarks (Subtle, regal, non-intrusive) */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        {/* 1. Grand Delhi Mehrab Scalloped Arch behind Hero */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[680px] sm:w-[860px] text-[#C59B27] opacity-[0.08] sm:opacity-[0.11]">
          <DelhiMehrabArchDrawing className="w-full h-auto" />
        </div>

        {/* 2. Haridwar Rooftop Chhatri Pavilion along left margin */}
        <div className="absolute top-[580px] -left-12 sm:-left-8 w-[340px] lg:w-[440px] text-[#C59B27] opacity-[0.09] lg:opacity-[0.12] transform -rotate-3">
          <RooftopPavilionDrawing className="w-full h-auto" />
        </div>

        {/* 3. Simmering Desi Ghee Handi along right margin */}
        <div className="absolute top-[1080px] -right-12 sm:-right-8 w-[320px] lg:w-[420px] text-[#C59B27] opacity-[0.10] lg:opacity-[0.13] transform rotate-3">
          <DesiGheeHandiDrawing className="w-full h-auto" />
        </div>

        {/* 4. Whole Botanical Spices along left margin */}
        <div className="absolute top-[1620px] -left-10 w-[300px] lg:w-[380px] text-[#C59B27] opacity-[0.08] lg:opacity-[0.10]">
          <BotanicalSpicesDrawing className="w-full h-auto" />
        </div>

        {/* 5. Royal Padma Mandala near bottom call-to-action */}
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[560px] text-[#C59B27] opacity-[0.06]">
          <RoyalPadmaMandalaDrawing className="w-full h-auto" />
        </div>
      </div>

      {/* ========================================================================= */}
      {/* Content Container */}
      {/* ========================================================================= */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-[#57534E] mb-6 font-medium">
          <Link to="/" className="hover:text-[#1C1917] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#9F1239] font-semibold">Our Story</span>
        </nav>
        
        {/* Story Hero */}
        <div className="max-w-3xl mx-auto text-center space-y-4 py-6 sm:py-8 relative">
          <span className="text-[10px] uppercase tracking-[0.22em] font-semibold text-[#9F1239] block">
            Haridwar Heritage &bull; Established 2001
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C1917] leading-tight">
            Relish the Tradition with Pure Desi Ghee Delights
          </h1>
          <p className="text-sm sm:text-base text-[#57534E] leading-relaxed max-w-2xl mx-auto font-light">
            Founded over two decades ago at the gateway to the Himalayas, Dilliwasi was built on an uncompromising commitment: 100% pure vegetarian cuisine slow-simmered in pure desi ghee, served with regal warmth and timeless North Indian hospitality.
          </p>
        </div>

        <MehrabDivider label="The Living Heritage" />

        {/* Provenance Chronicles (Three Milestones) */}
        <div className="max-w-4xl mx-auto my-12 sm:my-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[rgba(197,155,39,0.22)] shadow-2xs space-y-2 relative overflow-hidden">
              <span className="font-serif text-2xl font-bold text-[#9F1239]">2001</span>
              <h3 className="font-serif text-sm font-bold text-[#1C1917]">The Sacred Hearth</h3>
              <p className="text-xs text-[#57534E] leading-relaxed font-light">
                Dilliwasi established its first kitchen in Haridwar, taking a permanent vow to never allow meat, artificial coloring, or commercial shortcuts past its threshold.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[rgba(197,155,39,0.22)] shadow-2xs space-y-2 relative overflow-hidden">
              <span className="font-serif text-2xl font-bold text-[#C59B27]">2012</span>
              <h3 className="font-serif text-sm font-bold text-[#1C1917]">Mastery of the Masala</h3>
              <p className="text-xs text-[#57534E] leading-relaxed font-light">
                Perfected our heirloom 24-spice Garam Masala — whole star anise, royal mace, green cardamom, and stone-ground coriander roasted over gentle wood coals.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[rgba(197,155,39,0.22)] shadow-2xs space-y-2 relative overflow-hidden">
              <span className="font-serif text-2xl font-bold text-[#9F1239]">Today</span>
              <h3 className="font-serif text-sm font-bold text-[#1C1917]">Shivalik Nagar Outlet 2</h3>
              <p className="text-xs text-[#57534E] leading-relaxed font-light">
                Expanding to Amar Complex with our dual dining horizons: 3rd-floor AC Fine Dine Salon and 4th-floor Open-Air Rooftop Terrace Cafe under the stars.
              </p>
            </div>
          </div>
        </div>

        {/* Narrative Chapter 1: The Sacred Creed */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center my-12 sm:my-16">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#9F1239] block">
              Chapter I &bull; Purity as Seva
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
              A Heritage Rooted in Vegetarian Integrity
            </h2>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-light">
              To dine at Dilliwasi is to experience North Indian gastronomy in its purest form. In a city holy to millions, we treat culinary preparation not as commercial production, but as a sacred offering of hospitality.
            </p>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-light">
              Every single gravied pot, tandoori bread, and slow-braised dal is prepared exclusively in pure desi ghee. We eschew processed seed oils and chemical tenderizers in favor of slow fire, patient stirring, and rich malai paneer.
            </p>
          </div>

          <div className="relative p-8 sm:p-10 rounded-3xl bg-[#160307] text-[#FAF8F5] border border-[#C59B27]/30 shadow-md space-y-4 text-center flex flex-col items-center overflow-hidden">
            {/* Ambient In-Card Mandala Watermark */}
            <div className="absolute -bottom-10 -right-10 w-52 text-[#C59B27] opacity-15 pointer-events-none">
              <RoyalPadmaMandalaDrawing className="w-full h-auto" />
            </div>

            <BrandLogo
              variant="crest"
              theme="dark"
              size="lg"
              className="w-14 h-14 mx-auto relative z-10"
            />
            <h3 className="font-serif text-xl font-bold text-[#FAF8F5] relative z-10">The Dilliwasi Creed</h3>
            <p className="text-xs text-[#D6CECB] leading-relaxed max-w-sm font-light relative z-10">
              "When food is slow-crafted with pure desi ghee and clean intention, it transforms from ordinary sustenance into soul-nourishing celebration."
            </p>
            <div className="pt-2 relative z-10">
              <span className="block text-[10px] uppercase tracking-widest text-[#C59B27] font-semibold">
                &mdash; Culinary Heritage Since 2001
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#8C827A] mt-0.5 block">
                100% Pure Vegetarian &bull; Haridwar
              </span>
            </div>
          </div>
        </div>

        {/* Narrative Chapter 2: Dual Dining Horizons */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center my-12 sm:my-16">
          <div className="order-2 md:order-1 relative p-8 sm:p-9 rounded-3xl bg-white border border-[rgba(197,155,39,0.25)] shadow-2xs space-y-4 overflow-hidden">
            {/* In-Card Rooftop Pavilion Drawing Accent */}
            <div className="absolute -bottom-6 -right-6 w-44 text-[#C59B27] opacity-10 pointer-events-none">
              <RooftopPavilionDrawing className="w-full h-auto" />
            </div>

            <div className="flex items-center justify-between relative z-10">
              <span className="text-[10px] uppercase tracking-widest text-[#9F1239] font-bold">
                Shivalik Nagar &bull; Outlet 2
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FAF8F5] border border-stone-200 text-[#57534E]">
                Amar Complex
              </span>
            </div>
            
            <h3 className="font-serif text-2xl font-bold text-[#1C1917] relative z-10">
              Two Levels, Two Atmospheres
            </h3>
            
            <div className="space-y-3 text-xs text-[#57534E] leading-relaxed relative z-10">
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-stone-200 hover:border-[#C59B27]/40 transition-colors">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#9F1239]" />
                  <strong className="text-[#1C1917] text-sm font-serif font-bold">3rd Floor &bull; AC Fine Dine Salon</strong>
                </div>
                <p className="font-light pl-4">
                  Plush, quiet family salon bathed in warm amber lighting. Designed for royal thali lunches, family milestones, and peaceful gourmet dining away from city bustle.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[rgba(197,155,39,0.3)] hover:border-[#9F1239]/40 transition-colors shadow-2xs">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#C59B27]" />
                  <strong className="text-[#9F1239] text-sm font-serif font-bold">4th Floor &bull; Open-Air Rooftop Cafe</strong>
                </div>
                <p className="font-light pl-4">
                  Open starlit terrace with panoramic mountain breezes. The vibrant gathering space for sizzling platters, crispy steamed momos, wood-fired snacks, and mocktails.
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#9F1239] block">
              Chapter II &bull; The Horizons
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
              Fine Dine Quietude Meets Starlit Terrace Joy
            </h2>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-light">
              Located at A3 Amar Complex opposite ICICI Bank in Shivalik Nagar, Dilliwasi Outlet 2 was conceived as a vertical sanctuary where two dining moods coexist under one roof.
            </p>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-light">
              Whether you are an elder seeking quiet family celebration over paneer lababdar and fresh garlic naan, or young friends soaking in the evening breeze with tandoori platters on the rooftop terrace, every guest receives honored table care.
            </p>
          </div>
        </div>

        {/* Narrative Chapter 3: Our Six Charms (Displaying the 6 Core Tenets) */}
        <div className="max-w-5xl mx-auto my-16 sm:my-20 p-8 sm:p-12 rounded-3xl bg-[#160307] text-[#FAF8F5] border border-[#C59B27]/30 shadow-md relative overflow-hidden">
          {/* Background Line-Art Accent inside Charms Box */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] text-[#C59B27] opacity-[0.06] pointer-events-none">
            <DelhiMehrabArchDrawing className="w-full h-auto" />
          </div>

          <div className="text-center max-w-2xl mx-auto mb-10 relative z-10">
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C59B27]">
              Heritage Menu &bull; Page 24
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-1 text-[#FAF8F5]">
              Our Six Charms
            </h2>
            <p className="text-xs sm:text-sm text-[#D6CECB] mt-1 font-light">
              The foundational culinary and cultural tenets preserved in our kitchens since 2001.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 relative z-10">
            {ourSixCharms.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#22060F] border border-[#C59B27]/20 space-y-2 hover:border-[#C59B27]/45 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-[#C59B27]">
                    {item.number}
                  </span>
                  <span className="text-[11px] text-[#D6CECB] font-medium tracking-wide">
                    {item.hindi}
                  </span>
                </div>
                <h3 className="font-serif text-base font-bold text-white">
                  {item.charm}
                </h3>
                <p className="text-xs text-[#D6CECB] leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative Chapter 4: Pure Desi Ghee Alchemy */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center my-12 sm:my-16">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#9F1239] block">
              Chapter III &bull; The Fire & The Embers
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
              Sixteen Hours of Slow Charcoal Simmering
            </h2>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-light">
              Our crown jewel &mdash; the Black Dairy Dal Makhani &mdash; simmers for 16 consecutive hours over low embers in heavy copper vessels. Infused with pure desi ghee, ripe tomatoes, and fresh churned cream, it achieves an unmistakable velvety richness that cannot be rushed.
            </p>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-light">
              Our traditional clay tandoors are fueled by natural charcoal coals, imbuing every tandoori roti, stuffed kulcha, and paneer tikka with authentic rustic woodsmoke aroma.
            </p>
          </div>

          <div className="relative p-8 rounded-3xl bg-white border border-[rgba(197,155,39,0.25)] shadow-2xs space-y-4 overflow-hidden">
            {/* Handi Accent in Background */}
            <div className="absolute -bottom-8 -right-8 w-44 text-[#C59B27] opacity-10 pointer-events-none">
              <DesiGheeHandiDrawing className="w-full h-auto" />
            </div>

            <span className="text-[10px] uppercase tracking-widest text-[#C59B27] font-bold block relative z-10">
              The Kitchen Protocol
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#1C1917] relative z-10">
              Uncompromising Standards
            </h3>
            
            <ul className="space-y-2.5 text-xs text-[#57534E] relative z-10">
              <li className="flex items-start space-x-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] mt-1 shrink-0" />
                <span><strong>100% Pure Desi Ghee</strong> for all slow-simmered dals, curries, and tandoori breads</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] mt-1 shrink-0" />
                <span><strong>Farm-Fresh Malai Paneer</strong> sourced fresh each dawn for melting softness</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] mt-1 shrink-0" />
                <span><strong>Whole Spices Ground In-House</strong> in small daily batches for volatile aromatics</span>
              </li>
              <li className="flex items-start space-x-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#15803D] mt-1 shrink-0" />
                <span><strong>Strict Pure Vegetarian Guarantee</strong> &mdash; zero eggs, gelatin, or animal fats</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Experience */}
        <div className="mt-16 sm:mt-20 text-center max-w-xl mx-auto space-y-4 relative z-10">
          <MehrabDivider label="Taste the Tradition" />
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917]">
            Experience Dilliwasi in Person
          </h2>
          <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-light">
            We welcome you and your loved ones to join us at Shivalik Nagar, Haridwar for a memorable meal of pure vegetarian authenticity.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            <Link to="/menu">
              <Button variant="primary" size="lg" className="uppercase tracking-widest text-xs px-8">
                Explore Our 100% Veg Menu &rarr;
              </Button>
            </Link>
            <a
              href="tel:+919058882691"
              className="px-7 py-3 rounded-full bg-white border border-stone-300 text-xs font-semibold uppercase tracking-wider text-[#1C1917] hover:border-[#9F1239] hover:text-[#9F1239] transition-colors shadow-2xs"
            >
              Call: +91 90588 82691
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
