import React from 'react';
import { Link } from '../router/Router';
import { ToranaDivider } from '../components/common/ToranaDivider';
import { Button } from '../components/common/Button';
import { BrandLogo } from '../components/common/BrandLogo';
import {
  StupaElevationDrawing,
  ToranaArchDrawing,
  CopperDegDrawing,
  LotusMedallionDrawing,
} from '../components/common/HeritageDrawings';

export function StoryPage({ onOpenReserve }) {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#241814] pt-28 pb-24 relative overflow-hidden">
      {/* Page-Wide Architectural Line-Art Watermarks - Refined & Balanced */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        {/* Large Great Stupa Elevation behind hero */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] text-[#9E6E28] opacity-[0.10] sm:opacity-[0.12]">
          <StupaElevationDrawing className="w-full h-auto" />
        </div>

        {/* Torana Arch on left margin */}
        <div className="absolute top-[480px] -left-12 w-[380px] lg:w-[480px] text-[#8C5E28] opacity-[0.11] lg:opacity-[0.13] transform rotate-[-3deg]">
          <ToranaArchDrawing className="w-full h-auto" />
        </div>

        {/* Copper Deg simmering pot on right margin */}
        <div className="absolute top-[880px] -right-12 w-[360px] lg:w-[440px] text-[#8C5E28] opacity-[0.11] lg:opacity-[0.13] transform rotate-[3deg]">
          <CopperDegDrawing className="w-full h-auto" />
        </div>

        {/* Lotus Medallions near footer and bottom chapter */}
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[580px] text-[#9E6E28] opacity-[0.06]">
          <LotusMedallionDrawing className="w-full h-auto" />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-[#6E5D53] mb-6">
          <Link to="/" className="hover:text-[#241814] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#B38234] font-medium">Our Story</span>
        </nav>
        
        {/* Story Hero */}
        <div className="max-w-3xl mx-auto text-center space-y-4 relative py-6">
          <span className="label-caps text-[#B38234]">Provenance & Philosophy</span>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold tracking-tight text-[#241814]">
            Born from the Stone & Embers of Sanchi
          </h1>
          <p className="text-base sm:text-lg text-[#6E5D53] leading-relaxed">
            In 3rd Century BCE, on a verdant hill overlooking the Betwa River, Emperor Ashoka built the Great Stupa of Sanchi. Its four carved Torana gateways celebrated serenity, abundance, and the interconnectedness of all living things.
          </p>
        </div>

        <ToranaDivider label="The Great Stupa Inspiration" />

        {/* Narrative Chapter 1: The Gateway Philosophy */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center my-16 relative">
          <div className="space-y-4">
            <span className="label-caps text-[#D4A346] text-xs font-semibold">Chapter I</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#241814]">
              The Torana: Stepping Outside the Noise
            </h2>
            <p className="text-sm text-[#6E5D53] leading-relaxed">
              When you pass through the carved stone toranas at Sanchi, the bustle of the world recedes into deep forest silence. We built our dining pavilion with that exact intent.
            </p>
            <p className="text-sm text-[#6E5D53] leading-relaxed">
              Here, there are no loud screens, no rushing runners, and no engineered turn-times. A table booked at Sanchi belongs to you for the entire evening.
            </p>
          </div>

          <div className="relative p-8 sm:p-10 rounded-2xl bg-[#2A050C] text-[#FAF7F2] border border-[rgba(212,163,70,0.3)] shadow-lg space-y-5 text-center flex flex-col items-center overflow-hidden">
            {/* Ambient Card Drawing Accent */}
            <div className="absolute -bottom-8 -right-8 w-52 text-[#E8C066] opacity-15 pointer-events-none">
              <LotusMedallionDrawing className="w-full h-auto" />
            </div>

            <BrandLogo
              variant="crest"
              theme="dark"
              size="lg"
              className="w-14 h-14 mx-auto relative z-10"
            />
            <h3 className="font-serif text-xl font-bold text-[#FAF7F2] relative z-10">The Architect's Rule</h3>
            <p className="text-xs text-[#C7B8AA] leading-relaxed max-w-sm relative z-10">
              "Fine dining is not theatrical smoke and mirrors. It is geometry, balance, and quiet warmth. When the spice balance is flawless, the mind calms."
            </p>
            <span className="block text-[11px] uppercase tracking-wider text-[#D4A346] font-semibold relative z-10">
              &mdash; Sanchi Culinary Manifesto
            </span>
          </div>
        </div>

        {/* Narrative Chapter 2: The Spice Trade & Botanical Craft */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center my-16 relative">
          <div className="space-y-4">
            <span className="label-caps text-[#D4A346] text-xs font-semibold">Chapter II</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#241814]">
              Ancient Spice Roads & Living Craft
            </h2>
            <p className="text-sm text-[#6E5D53] leading-relaxed">
              Central India was historically the grand crossroads of spice trade routes connecting Malwa, the Deccan plateau, and the royal Awadh courts.
            </p>
            <p className="text-sm text-[#6E5D53] leading-relaxed">
              We source our cloves directly from smallholder farms in Tamil Nadu, our saffron from high saffron terraces in Pampore, and our stone flower lichen (dagad phool) from central Madhya Pradesh forests.
            </p>
          </div>

          <div className="relative p-8 rounded-xl bg-[#F4EFE6] border border-[rgba(212,163,70,0.25)] space-y-4 overflow-hidden">
            <span className="text-[10px] uppercase tracking-widest text-[#B38234] font-bold">Dawn Discipline</span>
            <h3 className="font-serif text-xl font-bold text-[#241814]">Granite Silbatta Pounding</h3>
            <p className="text-xs text-[#6E5D53] leading-relaxed">
              We never use commercial powders or motorized blades that scorch aromatic oils. Every dawn, whole Javitri mace, black cardamom, and vetiver roots are hand-crushed on heavy black granite stone slabs.
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs text-[#B38234] font-medium">
              <span className="bg-[#EDE5D8] px-2.5 py-1 rounded-full text-[11px]">Kashmir Saffron</span>
              <span className="bg-[#EDE5D8] px-2.5 py-1 rounded-full text-[11px]">Wild Dagad Phool</span>
              <span className="bg-[#EDE5D8] px-2.5 py-1 rounded-full text-[11px]">No Commercial Masalas</span>
            </div>
          </div>
        </div>

        {/* Narrative Chapter 3: The Art of Dum Pukht & Hand-Hammered Degs */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center my-16 relative">
          <div className="space-y-4">
            <span className="label-caps text-[#D4A346] text-xs font-semibold">Chapter III</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#241814]">
              Twelve Hours of Fire &amp; Sealed Degs
            </h2>
            <p className="text-sm text-[#6E5D53] leading-relaxed">
              Our degs are made of thick hand-beaten copper lined with tin (kalai). Sealed with wholewheat dough, the contents never boil violently. They breathe in an airtight vapor chamber, melting marrow and extracting natural pectin from bones and vegetables.
            </p>
            <p className="text-sm text-[#6E5D53] leading-relaxed">
              When the dough seal is sliced tableside, the captured steam of saffron, cardamom, and rose petal water fills the room in an ancient ritual of hospitality.
            </p>
          </div>

          <div className="relative p-8 rounded-xl bg-[#F4EFE6] border border-[rgba(212,163,70,0.25)] space-y-4 overflow-hidden">
            {/* Subtle copper deg drawing inside card corner */}
            <div className="absolute -bottom-6 -right-6 w-44 text-[#8C5E28] opacity-15 pointer-events-none">
              <CopperDegDrawing className="w-full h-auto" />
            </div>

            <span className="text-[10px] uppercase tracking-widest text-[#B38234] font-bold">Vessel Craft</span>
            <h3 className="font-serif text-xl font-bold text-[#241814] relative z-10">Hand-Beaten Awadhi Copper</h3>
            <p className="text-xs text-[#6E5D53] leading-relaxed relative z-10">
              Each vessel is hammered by traditional thathera coppersmiths. The heavy bottom diffuses gentle charcoal embers uniformly across the base, guaranteeing silk-like textures without burning.
            </p>
            <div className="pt-2 flex items-center space-x-3 text-xs text-[#B38234] font-medium relative z-10">
              <span>Pure Cow Ghee</span>
              <span>&bull;</span>
              <span>Atta Dough Seal</span>
              <span>&bull;</span>
              <span>Slow Embers</span>
            </div>
          </div>
        </div>

        {/* Call to Table */}
        <div className="mt-20 text-center max-w-xl mx-auto space-y-6">
          <h2 className="font-serif text-3xl font-semibold text-[#241814]">
            Experience the Heritage Firsthand
          </h2>
          <p className="text-sm text-[#6E5D53] leading-relaxed">
            Reserve a table in our central stone courtyard or secluded private dining alcove.
          </p>
          <div>
            <Button variant="primary" size="lg" onClick={onOpenReserve} className="uppercase tracking-widest text-xs">
              Book a Dining Table
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}

