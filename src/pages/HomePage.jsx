import React, { useState } from 'react';
import { Link } from '../router/Router';
import { Button } from '../components/common/Button';
import { ToranaDivider } from '../components/common/ToranaDivider';
import { StupaElevationDrawing, ToranaArchDrawing, LotusMedallionDrawing } from '../components/common/HeritageDrawings';
import { DietaryMarker } from '../components/common/Badge';
import { ParallaxHero } from '../components/public/ParallaxHero';
import { menuDishes, initialReviews, restaurantInfo } from '../data/mockData';
import { useLanguage } from '../context/LanguageContext';

export function HomePage({ onOpenReserve }) {
  const { t } = useLanguage();
  const signatureDishes = menuDishes.filter((d) => d.isSignature).slice(0, 4);
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  return (
    <div className="min-h-screen">
      {/* 1. EXACT REFERENCE VIDEO HERO SECTION: Floating Spoons, Platter, Garnishes & 3D Tilt */}
      <ParallaxHero onOpenReserve={onOpenReserve} />

      {/* 2. SIGNATURE DISHES (Asymmetric tasting journey, no generic 3 cards in a row) */}
      <section className="py-20 lg:py-28 bg-[#FAF7F2] text-[#241814] relative">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="label-caps text-[#B38234]">{t.sections.repertoireKicker}</span>
              <h2 className="font-serif text-3xl sm:text-5xl font-semibold mt-2 tracking-tight">
                {t.sections.repertoireTitle}
              </h2>
            </div>
            <Link
              to="/menu"
              className="mt-4 md:mt-0 text-xs font-semibold uppercase tracking-[0.16em] text-[#6E5D53] hover:text-[#241814] transition-colors"
            >
              {t.sections.viewFullMenu} ({menuDishes.length} Dishes) &rarr;
            </Link>
          </div>

          {/* Staggered Asymmetric 2-Column Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {signatureDishes.map((dish) => (
              <div
                key={dish.id}
                className="group p-8 rounded-xl bg-[#F4EFE6] border border-[rgba(212,163,70,0.25)] shadow-[0_4px_20px_rgba(42,5,12,0.04)] hover:shadow-[0_12px_32px_rgba(212,163,70,0.15)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[rgba(110,93,83,0.15)]">
                    <div className="flex items-center space-x-2.5">
                      <DietaryMarker isVeg={dish.isVeg} />
                      <span className="text-xs uppercase tracking-wider text-[#6E5D53]">
                        {dish.category}
                      </span>
                    </div>
                    <span className="font-serif text-xl font-semibold text-[#241814]">
                      ₹ {dish.price}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold mt-4 text-[#241814] group-hover:text-[#B38234] transition-colors">
                    {dish.name}
                  </h3>

                  <p className="text-sm text-[#6E5D53] mt-2.5 leading-relaxed">
                    {dish.description}
                  </p>

                  <p className="text-xs text-[#9B897D] italic mt-3">
                    &bull; {dish.accompaniment}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[rgba(110,93,83,0.1)] flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-[#B38234] font-medium">
                    Chef's Heritage Reserve
                  </span>
                  <button
                    onClick={onOpenReserve}
                    className="text-xs font-semibold text-[#241814] hover:text-[#D4A346] transition-colors flex items-center space-x-1 cursor-pointer"
                  >
                    <span>Reserve Dish</span>
                    <span>&rarr;</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SANCHI STUPA STORY (Heritage, craft, and calm warmth) */}
      <section className="py-20 lg:py-28 bg-[#2A050C] text-[#FAF7F2] relative overflow-hidden">
        {/* Background Architectural Heritage Drawings - Refined & Subtle Presence */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
          {/* Great Stupa Elevation Drawing in upper right */}
          <div className="absolute -top-8 -right-12 w-[540px] lg:w-[720px] text-[#E8C066] opacity-[0.16] lg:opacity-[0.18] transform rotate-[-2deg]">
            <StupaElevationDrawing className="w-full h-auto" />
          </div>
          
          {/* Torana Arch Gateway on lower left */}
          <div className="absolute -bottom-12 -left-8 w-[340px] lg:w-[460px] text-[#E8C066] opacity-[0.14] lg:opacity-[0.16] transform rotate-[2deg]">
            <ToranaArchDrawing className="w-full h-auto" />
          </div>

          {/* Carved Lotus Medallion Watermark in center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] text-[#D4A346] opacity-[0.08]">
            <LotusMedallionDrawing className="w-full h-auto" />
          </div>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 relative z-10">
          <ToranaDivider light label="The Heritage of Sanchi" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-12">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight text-[#FAF7F2]">
                An architectural sanctuary where ancient time stands still.
              </h2>
              <p className="text-base text-[#C7B8AA] leading-relaxed">
                Just 46 kilometers from our dining room stands the Great Stupa of Sanchi, erected by Emperor Ashoka in the 3rd Century BCE. Its sandstone Torana gateways are carved with depictions of peacocks, lotus blooms, and celebratory banquets.
              </p>
              <p className="text-base text-[#C7B8AA] leading-relaxed">
                At Sanchi, we channel this meditative poise. We believe true fine dining is neither hurried nor loud &mdash; it is the quiet pleasure of pure unadulterated spice, hand-hammered brass service, and intimate conversation.
              </p>

              <div className="pt-2">
                <Link to="/story">
                  <Button variant="secondary" size="md" className="uppercase tracking-widest text-xs">
                    Read Our Full Provenance &rarr;
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 rounded-xl bg-[#1F0409] border border-[rgba(232,192,102,0.25)] space-y-6 shadow-xl">
                <h3 className="label-caps text-[#D4A346] text-xs">Our 3 Pillars of Discipline</h3>
                
                <div className="space-y-4">
                  <div className="border-l-2 border-[#D4A346] pl-4">
                    <h4 className="font-serif text-lg font-semibold text-[#FAF7F2]">1. Hand-Pounded Spice Ateliers</h4>
                    <p className="text-xs text-[#C7B8AA] mt-1 leading-relaxed">
                      No commercial powders. We hand-pound whole Javitri mace, black stone flower (dagad phool), and saffron in granite mortars every sunrise.
                    </p>
                  </div>

                  <div className="border-l-2 border-[#D4A346] pl-4">
                    <h4 className="font-serif text-lg font-semibold text-[#FAF7F2]">2. Earthen Bhatti Embers</h4>
                    <p className="text-xs text-[#C7B8AA] mt-1 leading-relaxed">
                      Our tandoor is seasoned exclusively with seasoned acacia wood and mustard oil, imparting deep mineral smokiness without harsh carbon.
                    </p>
                  </div>

                  <div className="border-l-2 border-[#D4A346] pl-4">
                    <h4 className="font-serif text-lg font-semibold text-[#FAF7F2]">3. Sealed Copper Dum Pukht</h4>
                    <p className="text-xs text-[#C7B8AA] mt-1 leading-relaxed">
                      Sealed with wholewheat dough, meat and rice breathe in their own aromatic vapor for half a day until the connective tissues dissolve into silk.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW WE COOK: Spices, Tandoor, Slow Dum */}
      <section className="py-20 lg:py-28 bg-[#F4EFE6] text-[#241814]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="label-caps text-[#B38234]">The Craft of Fire</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-semibold mt-2 tracking-tight">
              {t.sections.howWeCookTitle}
            </h2>
            <p className="text-sm text-[#6E5D53] mt-3 leading-relaxed">
              {t.sections.howWeCookDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-[#FAF7F2] border border-[rgba(212,163,70,0.25)] space-y-4 hover:shadow-md transition-shadow">
              <span className="text-2xl font-serif font-bold text-[#D4A346]">01</span>
              <h3 className="font-serif text-xl font-bold text-[#241814]">21-Spice Potli</h3>
              <p className="text-sm text-[#6E5D53] leading-relaxed">
                Muslin satchels of whole spices submerged in lamb broths to release essential oils slowly without overwhelming the palate.
              </p>
              <div className="text-xs font-semibold text-[#D4A346] tracking-wider uppercase pt-2">
                Vetiver &bull; Mace &bull; Pipli
              </div>
            </div>

            <div className="p-8 rounded-xl bg-[#FAF7F2] border border-[rgba(212,163,70,0.25)] space-y-4 hover:shadow-md transition-shadow">
              <span className="text-2xl font-serif font-bold text-[#D4A346]">02</span>
              <h3 className="font-serif text-xl font-bold text-[#241814]">Sunken Clay Tandoor</h3>
              <p className="text-sm text-[#6E5D53] leading-relaxed">
                Hand-built clay urns buried into the earth to maintain a steady 420°C ambient radiating heat for succulent skewers.
              </p>
              <div className="text-xs font-semibold text-[#D4A346] tracking-wider uppercase pt-2">
                Charcoal &bull; Iron Skewers
              </div>
            </div>

            <div className="p-8 rounded-xl bg-[#FAF7F2] border border-[rgba(212,163,70,0.25)] space-y-4 hover:shadow-md transition-shadow">
              <span className="text-2xl font-serif font-bold text-[#D4A346]">03</span>
              <h3 className="font-serif text-xl font-bold text-[#241814]">Overnight Dal Dum</h3>
              <p className="text-sm text-[#6E5D53] leading-relaxed">
                Urad lentils simmered for 16 consecutive hours over extinguished coals, finished with hand-churned white butter and vine tomatoes.
              </p>
              <div className="text-xs font-semibold text-[#D4A346] tracking-wider uppercase pt-2">
                A2 Cultured Butter &bull; Smoke
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PEOPLE-PLEASING TESTIMONIALS (Interactive quote slider with warm human avatars) */}
      <section className="py-20 bg-[#FAF7F2] text-[#241814] border-t border-[rgba(212,163,70,0.2)]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="label-caps text-[#B38234]">Patron Chronicles</span>
            <h2 className="font-serif text-3xl font-bold mt-1">
              Whispers from Our Courtyard
            </h2>
          </div>

          <div className="p-8 sm:p-12 rounded-2xl bg-[#F4EFE6] border border-[rgba(212,163,70,0.3)] shadow-sm max-w-3xl mx-auto text-center space-y-5">
            <div className="text-[#D4A346] text-xl">
              &starf;&starf;&starf;&starf;&starf;
            </div>

            <blockquote className="font-serif text-xl sm:text-2xl font-normal leading-relaxed text-[#241814] italic">
              "{initialReviews[activeReviewIdx].body}"
            </blockquote>

            <div>
              <div className="font-serif font-bold text-base text-[#241814]">
                {initialReviews[activeReviewIdx].guestName}
              </div>
              <div className="text-xs text-[#B38234] mt-0.5">
                {initialReviews[activeReviewIdx].title} &bull; {initialReviews[activeReviewIdx].date}
              </div>
            </div>

            {/* Interactive Carousel Dots */}
            <div className="flex items-center justify-center space-x-2 pt-2">
              {initialReviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveReviewIdx(idx)}
                  className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                    activeReviewIdx === idx ? 'bg-[#D4A346] w-6' : 'bg-[rgba(110,93,83,0.3)]'
                  }`}
                  aria-label={`View Review ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. RESERVATION CALLOUT & VISIT INFORMATION */}
      <section className="py-20 lg:py-28 bg-[#FAF7F2] border-t border-[rgba(212,163,70,0.2)]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
          <div className="rounded-2xl bg-[#2A050C] text-[#FAF7F2] p-8 sm:p-12 lg:p-16 border border-[rgba(212,163,70,0.3)] shadow-[0_20px_50px_rgba(42,5,12,0.2)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <span className="label-caps text-[#D4A346] text-xs">Intimate Courtyard Seating</span>
                <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight text-[#FAF7F2]">
                  {t.sections.visitTitle}
                </h2>
                <p className="text-sm sm:text-base text-[#C7B8AA] max-w-xl leading-relaxed">
                  {t.sections.visitDesc}
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <Link to="/reserve" className="w-full sm:w-auto">
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full sm:w-auto uppercase tracking-widest text-xs px-8"
                    >
                      Reserve Table Online
                    </Button>
                  </Link>
                  <a
                    href={`tel:${restaurantInfo.phone}`}
                    className="text-xs uppercase tracking-widest text-[#E8C066] hover:text-[#FAF7F2] transition-colors py-3"
                  >
                    Concierge: {restaurantInfo.phone}
                  </a>
                </div>
              </div>

              {/* Practical Visit Info */}
              <div className="lg:col-span-4 bg-[#1F0409] p-6 rounded-xl border border-[rgba(232,192,102,0.2)] space-y-4 text-xs">
                <h3 className="font-serif text-base text-[#FAF7F2] font-semibold border-b border-[rgba(212,163,70,0.2)] pb-2">
                  Visit Particulars
                </h3>

                <div className="space-y-2 text-[#C7B8AA]">
                  <div>
                    <span className="text-[#FAF7F2] font-medium block">Valet Parking:</span>
                    <span>Complimentary private courtyard valet on arrival.</span>
                  </div>
                  <div>
                    <span className="text-[#FAF7F2] font-medium block">Dress Code:</span>
                    <span>Smart casual / formal evening attire appreciated.</span>
                  </div>
                  <div>
                    <span className="text-[#FAF7F2] font-medium block">Seating Window:</span>
                    <span>Reservations held for 15 minutes past booking time.</span>
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
