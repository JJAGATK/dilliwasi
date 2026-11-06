import React, { useState } from 'react';
import { Link } from '../router/Router';
import { DietaryMarker, PureDesiGheeBadge, ChefSpecialBadge } from '../components/common/Badge';
import { ParallaxHero } from '../components/public/ParallaxHero';
import { menuDishes, initialReviews, ourSixCharms } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

export function HomePage() {
  const { t } = useLanguage();
  const signatureDishes = menuDishes.filter((d) => d.isSignature).slice(0, 4);
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* 1. HERO SECTION */}
      <ParallaxHero />

      {/* 2. SIGNATURE REPERTOIRE */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2] text-[#241814] relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#9F1239] block mb-1">
                {t.sections.repertoireKicker}
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
                {t.sections.repertoireTitle}
              </h2>
            </div>
            <Link
              to="/menu"
              className="mt-4 md:mt-0 text-xs font-semibold uppercase tracking-widest text-[#9F1239] hover:text-[#B38234] transition-colors flex items-center space-x-1"
            >
              <span>{t.sections.viewFullMenu} ({menuDishes.length} Dishes)</span>
              <span>&rarr;</span>
            </Link>
          </div>

          {/* 2-Column Responsive Dish Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {signatureDishes.map((dish) => (
              <div
                key={dish.id}
                className="group p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(212,163,70,0.25)] shadow-2xs hover:border-[#9F1239]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                    <div className="flex items-center space-x-2.5">
                      <DietaryMarker isVeg={true} />
                      <span className="text-[10px] uppercase tracking-[0.14em] text-[#9B897D] font-semibold">
                        {dish.category}
                      </span>
                    </div>
                    <span className="font-serif text-xl font-bold text-[#241814]">
                      ₹{dish.price}
                    </span>
                  </div>

                  <div className="mt-4 space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-[#241814] group-hover:text-[#9F1239] transition-colors">
                      {dish.name}
                    </h3>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {dish.isPureGhee && <PureDesiGheeBadge />}
                      {dish.isSignature && <ChefSpecialBadge />}
                    </div>

                    <p className="text-sm text-[#6E5D53] pt-1 leading-relaxed font-light">
                      {dish.description}
                    </p>

                    {dish.accompaniment && (
                      <p className="text-xs text-[#9B897D] italic pt-1">
                        &bull; {dish.accompaniment}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                  <span className="text-[#15803D] font-medium text-[11px]">
                    100% Pure Veg
                  </span>
                  <Link
                    to="/menu"
                    className="font-semibold text-[#9F1239] hover:text-[#B38234] transition-colors flex items-center space-x-1"
                  >
                    <span>View in Menu</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR SIX CHARMS */}
      <section className="py-16 sm:py-24 bg-[#2A050C] text-[#FAF7F2] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#D4A346] font-semibold block mb-1">
              Menu Page 24 &bull; Core Values
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Our Six Charms
            </h2>
            <p className="text-sm text-stone-300 mt-2 leading-relaxed font-light">
              The foundational principles of Dilliwasi hospitality that have guided our kitchen and rooftop since 2001.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ourSixCharms.map((charm, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#1F0409] border border-[#D4A346]/20 hover:border-[#D4A346]/45 transition-colors duration-200 space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-[#D4A346]">
                    {charm.number}
                  </span>
                  <span className="text-[11px] text-[#C7B8AA] font-medium">
                    {charm.hindi}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-white">
                  {charm.charm}
                </h3>
                <p className="text-xs text-[#C7B8AA] leading-relaxed font-light">
                  {charm.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/story">
              <button
                type="button"
                className="px-7 py-3 rounded-full bg-white/10 border border-white/20 text-white font-medium text-xs uppercase tracking-widest hover:bg-white/20 transition-colors cursor-pointer"
              >
                Discover Our Heritage &bull; Est. 2001 &rarr;
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CULINARY CRAFT: Desi Ghee, Clay Tandoor & Rooftop Experience */}
      <section className="py-16 sm:py-24 bg-[#F4EFE6] text-[#241814]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#9F1239] block mb-1">
              Uncompromising Standards
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
              {t.sections.howWeCookTitle}
            </h2>
            <p className="text-sm text-[#6E5D53] mt-2 leading-relaxed">
              {t.sections.howWeCookDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(212,163,70,0.25)] space-y-3">
              <span className="text-2xl font-serif font-bold text-[#9F1239] block">01</span>
              <h3 className="font-serif text-xl font-bold text-[#241814]">Pure Desi Ghee Slow Simmer</h3>
              <p className="text-xs sm:text-sm text-[#6E5D53] leading-relaxed font-light">
                Our signature Black Dairy Dal Makhani, Paneer Labaabdaar, and Royal Curries are prepared with rich pure desi ghee for true authentic depth.
              </p>
              <div className="text-[10px] font-semibold text-[#B38234] tracking-widest uppercase pt-2 border-t border-stone-100">
                Pure Desi Ghee &bull; 16-Hour Simmer
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(212,163,70,0.25)] space-y-3">
              <span className="text-2xl font-serif font-bold text-[#9F1239] block">02</span>
              <h3 className="font-serif text-xl font-bold text-[#241814]">Traditional Clay Tandoor</h3>
              <p className="text-xs sm:text-sm text-[#6E5D53] leading-relaxed font-light">
                Clay ovens fired with natural charcoal embers impart delicate smokiness to Paneer Malai Tikka, Tandoori Momos, and crisp stuffed breads.
              </p>
              <div className="text-[10px] font-semibold text-[#15803D] tracking-widest uppercase pt-2 border-t border-stone-100">
                100% Pure Veg Skewers & Breads
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(212,163,70,0.25)] space-y-3">
              <span className="text-2xl font-serif font-bold text-[#9F1239] block">03</span>
              <h3 className="font-serif text-xl font-bold text-[#241814]">Rooftop Terrace & Fine Dine</h3>
              <p className="text-xs sm:text-sm text-[#6E5D53] leading-relaxed font-light">
                3rd floor air-conditioned dining hall paired with a 4th floor open-air rooftop terrace overlooking the Shivalik foothills.
              </p>
              <div className="text-[10px] font-semibold text-[#9F1239] tracking-widest uppercase pt-2 border-t border-stone-100">
                Open-Air Terrace &bull; Family Suites
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GUEST TESTIMONIALS */}
      <section className="py-16 sm:py-20 bg-[#FAF7F2] text-[#241814] border-t border-[rgba(212,163,70,0.2)]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#9F1239] block mb-1">
              Patron Chronicles
            </span>
            <h2 className="font-serif text-3xl font-bold">
              Words From Our Diners
            </h2>
          </div>

          <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[rgba(212,163,70,0.25)] shadow-2xs max-w-2xl mx-auto text-center space-y-4">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B38234]">
              5.0 Star Verified Dining
            </div>

            <blockquote className="font-serif text-lg sm:text-xl font-normal leading-relaxed text-[#241814] italic">
              "{initialReviews[activeReviewIdx].body}"
            </blockquote>

            <div className="pt-2">
              <div className="font-serif font-bold text-sm text-[#241814]">
                {initialReviews[activeReviewIdx].guestName}
              </div>
              <div className="text-[11px] text-[#B38234] mt-0.5 font-medium">
                {initialReviews[activeReviewIdx].title} &bull; {initialReviews[activeReviewIdx].date}
              </div>
            </div>

            {/* Clean Dots */}
            <div className="flex items-center justify-center space-x-1.5 pt-2">
              {initialReviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveReviewIdx(idx)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    activeReviewIdx === idx ? 'bg-[#9F1239] w-5' : 'bg-stone-200 w-1.5'
                  }`}
                  aria-label={`View Review ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. VISIT DILLIWASI */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[rgba(212,163,70,0.2)]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#2A050C] text-[#FAF7F2] p-6 sm:p-12 lg:p-16 border border-[#D4A346]/30 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D4A346] block">
                  Fine Dine & Rooftop Cafe
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
                  Join us at Dilliwasi for authentic vegetarian delights.
                </h2>
                <p className="text-sm text-[#C7B8AA] max-w-xl leading-relaxed font-light">
                  Located on the 3rd & 4th floors of Amar Complex, Shivalik Nagar, Haridwar. Warm family hospitality, rooftop breeze, and pure desi ghee cuisine.
                </p>

                <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <Link to="/menu" className="w-full sm:w-auto">
                    <button
                      type="button"
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#D4A346] text-[#241814] font-bold text-xs uppercase tracking-widest hover:bg-[#E8C066] transition-colors cursor-pointer"
                    >
                      Explore 100% Veg Menu &rarr;
                    </button>
                  </Link>
                  <a
                    href="tel:+919058882691"
                    className="text-xs uppercase tracking-widest text-[#D4A346] hover:text-white transition-colors py-3 text-center sm:text-left font-semibold"
                  >
                    Hotline: +91 90588 82691
                  </a>
                </div>
              </div>

              {/* Practical Visit Info */}
              <div className="lg:col-span-4 bg-[#1F0409] p-6 rounded-2xl border border-[rgba(232,192,102,0.2)] space-y-3 text-xs">
                <h3 className="font-serif text-base text-white font-bold border-b border-[rgba(212,163,70,0.2)] pb-2">
                  Outlet Particulars
                </h3>

                <div className="space-y-2 text-[#C7B8AA]">
                  <div>
                    <span className="text-white font-medium block">Location:</span>
                    <span>Outlet 2: 3rd - 4th Floor, A3 Amar Complex, Shivalik Nagar, Haridwar</span>
                  </div>
                  <div>
                    <span className="text-white font-medium block">Timings:</span>
                    <span>11:00 AM – 11:00 PM (All 7 Days)</span>
                  </div>
                  <div>
                    <span className="text-white font-medium block">Hotlines:</span>
                    <span>+91 90588 82691, 92, 93</span>
                  </div>
                  <div>
                    <span className="text-white font-medium block">Email:</span>
                    <span>dilliwasiunit2@gmail.com</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
