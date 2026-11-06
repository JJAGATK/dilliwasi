import React, { useState } from 'react';
import { Link } from '../router/Router';
import { Button } from '../components/common/Button';
import { DietaryMarker, PureDesiGheeBadge, ChefSpecialBadge } from '../components/common/Badge';
import { ParallaxHero } from '../components/public/ParallaxHero';
import { menuDishes, initialReviews, ourSixCharms } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

export function HomePage() {
  const { t } = useLanguage();
  const signatureDishes = menuDishes.filter((d) => d.isSignature).slice(0, 4);
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  return (
    <div className="min-h-screen">
      {/* 1. 100% PURE VEG HERO SECTION with 3D Tilt & Royal Thali Platter */}
      <ParallaxHero />

      {/* 2. SIGNATURE REPERTOIRE (Pure Desi Ghee & Chef's Special Delights) */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2] text-[#241814] relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12">
            <div>
              <span className="label-caps text-[#E60067] font-bold">{t.sections.repertoireKicker}</span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 tracking-tight">
                {t.sections.repertoireTitle}
              </h2>
            </div>
            <Link
              to="/menu"
              className="mt-4 md:mt-0 text-xs font-semibold uppercase tracking-[0.16em] text-[#E60067] hover:text-[#2A050C] transition-colors flex items-center space-x-1"
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
                className="group p-6 sm:p-8 rounded-2xl bg-white border border-[#D4A346]/25 shadow-xs hover:shadow-xl hover:border-[#E60067]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                    <div className="flex items-center space-x-2.5">
                      <DietaryMarker isVeg={true} />
                      <span className="text-xs uppercase tracking-wider text-[#9B897D] font-medium">
                        {dish.category}
                      </span>
                    </div>
                    <span className="font-serif text-2xl font-bold text-[#241814]">
                      ₹{dish.price}
                    </span>
                  </div>

                  <div className="mt-4 space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-[#241814] group-hover:text-[#E60067] transition-colors">
                      {dish.name}
                    </h3>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {dish.isPureGhee && <PureDesiGheeBadge />}
                      {dish.isSignature && <ChefSpecialBadge />}
                    </div>

                    <p className="text-sm text-[#6E5D53] pt-1 leading-relaxed">
                      {dish.description}
                    </p>

                    {dish.accompaniment && (
                      <p className="text-xs text-[#9B897D] italic pt-1">
                        &bull; {dish.accompaniment}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#16A34A] flex items-center space-x-1">
                    <span>✓</span>
                    <span>100% Pure Veg</span>
                  </span>
                  <Link
                    to="/menu"
                    className="text-xs font-semibold text-[#E60067] hover:text-[#2A050C] transition-colors flex items-center space-x-1"
                  >
                    <span>Explore in Menu</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR SIX CHARMS (Page 24 of Official Dilliwasi Menu) */}
      <section className="py-16 sm:py-24 bg-[#2A050C] text-[#FAF7F2] relative overflow-hidden">
        {/* Subtle Ambient Discs */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#E60067]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#D4A346]/10 blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="label-caps text-[#E8C066] text-xs">Menu Page 24 &bull; Heritage Values</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 tracking-tight text-white">
              Our Six Charms
            </h2>
            <p className="text-sm sm:text-base text-[#C7B8AA] mt-3 leading-relaxed">
              The foundational principles of Dilliwasi hospitality that have guided our kitchen and rooftop since 2001.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ourSixCharms.map((charm, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#1F0409] border border-[#D4A346]/20 shadow-md hover:border-[#E8C066]/50 transition-all duration-200 space-y-3"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{charm.icon}</span>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-white">
                      {charm.charm}
                    </h3>
                    <span className="text-xs text-[#E8C066] font-medium">
                      {charm.hindi}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-[#C7B8AA] leading-relaxed">
                  {charm.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/story">
              <Button variant="secondary" size="md" className="uppercase tracking-widest text-xs">
                Discover Our Heritage Story &bull; Est. 2001 &rarr;
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. HOW WE COOK: Pure Desi Ghee, Clay Tandoor & Rooftop Experience */}
      <section className="py-16 sm:py-24 bg-[#F4EFE6] text-[#241814]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="label-caps text-[#E60067] font-bold">Uncompromising Quality</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 tracking-tight">
              {t.sections.howWeCookTitle}
            </h2>
            <p className="text-sm text-[#6E5D53] mt-3 leading-relaxed">
              {t.sections.howWeCookDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#D4A346]/25 space-y-4 hover:shadow-lg transition-shadow">
              <span className="text-3xl font-serif font-bold text-[#E60067]">01</span>
              <h3 className="font-serif text-xl font-bold text-[#241814]">Pure Desi Ghee Slow Simmer</h3>
              <p className="text-sm text-[#6E5D53] leading-relaxed">
                Our signature Black Dairy Dal Makhani, Paneer Labaabdaar, and Royal Curries are prepared with rich pure desi ghee for true authentic taste.
              </p>
              <div className="text-xs font-semibold text-[#D97706] tracking-wider uppercase pt-2">
                🧈 Desi Ghee &bull; 16-Hour Simmer
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#D4A346]/25 space-y-4 hover:shadow-lg transition-shadow">
              <span className="text-3xl font-serif font-bold text-[#E60067]">02</span>
              <h3 className="font-serif text-xl font-bold text-[#241814]">Traditional Clay Tandoor</h3>
              <p className="text-sm text-[#6E5D53] leading-relaxed">
                Clay ovens fired with aged charcoal embers impart delicious smoky aroma to Paneer Malai Tikka, Tandoori Momos, and crisp stuffed breads.
              </p>
              <div className="text-xs font-semibold text-[#16A34A] tracking-wider uppercase pt-2">
                🌱 100% Pure Veg Skewers & Breads
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#D4A346]/25 space-y-4 hover:shadow-lg transition-shadow">
              <span className="text-3xl font-serif font-bold text-[#E60067]">03</span>
              <h3 className="font-serif text-xl font-bold text-[#241814]">Rooftop Cafe & Fine Dine</h3>
              <p className="text-sm text-[#6E5D53] leading-relaxed">
                3rd floor air-conditioned fine dining hall combined with a breezy 4th floor open-air rooftop terrace overlooking Shivalik Nagar.
              </p>
              <div className="text-xs font-semibold text-[#E60067] tracking-wider uppercase pt-2">
                ✨ Starry Terrace &bull; Family Suites
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GUEST TESTIMONIALS */}
      <section className="py-16 sm:py-20 bg-[#FAF7F2] text-[#241814] border-t border-[#D4A346]/20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="label-caps text-[#E60067] font-bold">Haridwar Patron Chronicles</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-1">
              Words From Our Diners
            </h2>
          </div>

          <div className="p-6 sm:p-12 rounded-3xl bg-white border border-[#D4A346]/30 shadow-md max-w-3xl mx-auto text-center space-y-5">
            <div className="text-[#D4A346] text-xl tracking-wider">
              ★★★★★
            </div>

            <blockquote className="font-serif text-lg sm:text-2xl font-normal leading-relaxed text-[#241814] italic">
              "{initialReviews[activeReviewIdx].body}"
            </blockquote>

            <div>
              <div className="font-serif font-bold text-base text-[#241814]">
                {initialReviews[activeReviewIdx].guestName}
              </div>
              <div className="text-xs text-[#E60067] mt-0.5 font-semibold">
                {initialReviews[activeReviewIdx].title} &bull; {initialReviews[activeReviewIdx].date}
              </div>
            </div>

            {/* Interactive Carousel Dots */}
            <div className="flex items-center justify-center space-x-2 pt-2">
              {initialReviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveReviewIdx(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    activeReviewIdx === idx ? 'bg-[#E60067] w-6' : 'bg-stone-300 w-2.5'
                  }`}
                  aria-label={`View Review ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. VISIT DILLIWASI: Direct Contact & Location Info */}
      <section className="py-16 sm:py-24 bg-[#FAF7F2] border-t border-[#D4A346]/20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#2A050C] via-[#380812] to-[#2A050C] text-[#FAF7F2] p-6 sm:p-12 lg:p-16 border border-[#D4A346]/30 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <span className="label-caps text-[#E8C066] text-xs">Fine Dine & Rooftop Cafe</span>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold leading-tight text-white">
                  Join us at Dilliwasi for authentic vegetarian delights.
                </h2>
                <p className="text-sm sm:text-base text-[#C7B8AA] max-w-xl leading-relaxed">
                  Located on the 3rd & 4th floors of Amar Complex, Shivalik Nagar, Haridwar. Warm family hospitality, rooftop breeze, and pure desi ghee cuisine.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <Link to="/menu" className="w-full sm:w-auto">
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full sm:w-auto uppercase tracking-widest text-xs px-8"
                    >
                      Explore 100% Veg Menu &rarr;
                    </Button>
                  </Link>
                  <a
                    href="tel:+919058882691"
                    className="text-xs uppercase tracking-widest text-[#E8C066] hover:text-white transition-colors py-3 text-center sm:text-left font-bold"
                  >
                    📞 Call Us: +91 90588 82691
                  </a>
                </div>
              </div>

              {/* Practical Visit Info */}
              <div className="lg:col-span-4 bg-[#1F0409] p-6 rounded-2xl border border-[#D4A346]/25 space-y-3.5 text-xs">
                <h3 className="font-serif text-base text-white font-bold border-b border-[#D4A346]/20 pb-2">
                  Outlet Particulars
                </h3>

                <div className="space-y-2 text-[#C7B8AA]">
                  <div>
                    <span className="text-white font-bold block">Location:</span>
                    <span>Outlet 2: 3rd - 4th Floor, A3 Amar Complex (Opp. ICICI Bank), Shivalik Nagar, Haridwar</span>
                  </div>
                  <div>
                    <span className="text-white font-bold block">Timings:</span>
                    <span>11:00 AM – 11:00 PM (All 7 Days Open)</span>
                  </div>
                  <div>
                    <span className="text-white font-bold block">Hotlines:</span>
                    <span>+91 90588 82691, 92, 93</span>
                  </div>
                  <div>
                    <span className="text-white font-bold block">Email:</span>
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
