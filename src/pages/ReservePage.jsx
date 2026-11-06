import React, { useState } from 'react';
import { Link } from '../router/Router';
import { Button } from '../components/common/Button';
import { ToranaDivider } from '../components/common/ToranaDivider';
import { DigitalPassModal } from '../components/common/DigitalPassModal';
import { BrandLogo } from '../components/common/BrandLogo';
import { CustomSelect } from '../components/common/CustomSelect';
import { restaurantInfo } from '../data/mockData';

export function ReservePage({ onAddReservation }) {
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('19:30');
  const [guests, setGuests] = useState('2');
  const [seatingZone, setSeatingZone] = useState('The Stupa Courtyard');
  const [tastingMenu, setTastingMenu] = useState('Royal Awadhi Shahi Degustation');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [dietary, setDietary] = useState('None');
  const [occasion, setOccasion] = useState('Fine Dining');
  const [notes, setNotes] = useState('');

  const [confirmedReservation, setConfirmedReservation] = useState(null);
  const [isPassModalOpen, setIsPassModalOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const timeSlotOptions = [
    {
      label: 'Afternoon Lunch',
      options: ['12:00', '12:30', '13:00', '13:30', '14:00'].map((tVal) => ({
        value: tVal,
        label: `${tVal} hrs (Lunch)`,
      })),
    },
    {
      label: 'Evening Degustation',
      options: ['19:00', '19:30', '20:00', '20:30', '21:00', '21:30'].map((tVal) => ({
        value: tVal,
        label: `${tVal} hrs (Dinner)`,
      })),
    },
  ];

  const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((num) => ({
    value: String(num),
    label: `${num} ${num === 1 ? 'Guest' : 'Guests'}`,
  }));

  const occasionOptions = [
    { value: 'Fine Dining', label: 'Quiet Evening Dining', sublabel: 'Ambient candlelit heritage setting' },
    { value: 'Anniversary', label: 'Anniversary Celebration', sublabel: 'Complimentary rose petal setup' },
    { value: 'Birthday', label: 'Birthday Gathering', sublabel: 'Chef special dessert greeting' },
    { value: 'Business', label: 'Executive / Diplomatic Dining', sublabel: 'Discreet service & secluded table' },
  ];

  const dietaryOptions = [
    { value: 'None', label: 'No Dietary Restrictions' },
    { value: 'Vegetarian', label: 'Pure Vegetarian (Green Dot)' },
    { value: 'Sattvik / Jain', label: 'Sattvik / Jain (No Onion/Garlic)' },
    { value: 'Halal', label: 'Halal Certified Meats' },
    { value: 'Gluten-Free', label: 'Gluten-Free Grains' },
  ];

  const zones = [
    { id: 'courtyard', name: 'The Stupa Courtyard', desc: 'Open-air sandstone pavilion with evening jasmine breeze' },
    { id: 'salon', name: 'Haveli Royal Salon', desc: 'Teakwood ceilings, hand-hammered brass lanterns' },
    { id: 'verandah', name: 'The Fragrant Verandah', desc: 'Overlooking tranquil water lily pools' },
    { id: 'private', name: 'Ashokan Private Dining Room', desc: 'Secluded 8–12 guest sanctuary with dedicated steward' },
  ];

  const menus = [
    { id: 'shahi', name: 'Royal Awadhi Shahi Degustation', price: '₹ 2,400 per guest', badge: 'Signature' },
    { id: 'sattvik', name: 'Sattvik Heritage Degustation (Veg)', price: '₹ 1,950 per guest', badge: 'Pure Vegetarian' },
    { id: 'emperor', name: 'Emperor Ashoka Grand Repertoire', price: '₹ 3,200 per guest', badge: 'Prestige' },
    { id: 'alacarte', name: 'A La Carte Selection on Arrival', price: 'Order from Menu', badge: 'Flexible' },
  ];

  const handleBooking = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!name.trim()) newErrors.name = 'Full name is required';
    if (!phone.trim()) newErrors.phone = 'Valid phone number is required';
    if (!email.trim() || !email.includes('@')) newErrors.email = 'Valid email address is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    const resId = `SAN-${Math.floor(1000 + Math.random() * 9000)}`;
    const newRes = {
      id: resId,
      guestName: name,
      guestPhone: phone,
      guestEmail: email,
      date,
      time,
      guests: Number(guests),
      tableNumber: 12,
      status: 'confirmed',
      dietary,
      occasion,
      specialRequests: notes,
      tastingMenu,
      seatingZone,
    };

    if (onAddReservation) {
      onAddReservation(newRes);
    }

    setConfirmedReservation(newRes);
    setIsPassModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#241814] pt-28 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-[#6E5D53] mb-6">
          <Link to="/" className="hover:text-[#241814] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#A37424] font-medium">Reserve a Table</span>
        </nav>

        {/* Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FAF5EB] border border-[rgba(212,163,70,0.3)] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A346]" />
            <span className="label-caps text-[#A37424] text-[11px] font-semibold">
              Sacred Hospitality
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold mt-1 tracking-tight text-[#241814]">
            Reserve Your Sanctuary
          </h1>
          <p className="text-base text-[#6E5D53] mt-3 leading-relaxed">
            We host only 24 tables each evening to ensure every copper deg receives the unhurried craft of our master ustads.
          </p>
        </div>

        <ToranaDivider label="Sanctuary Table Reservation" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          
          {/* Main Booking Form (7 cols) */}
          <div className="lg:col-span-7">
            <form onSubmit={handleBooking} className="p-8 sm:p-10 rounded-2xl bg-white border border-[rgba(212,163,70,0.32)] shadow-[0_16px_48px_rgba(180,140,80,0.07)] space-y-8">
              
              {/* Step 1: Date, Time & Party */}
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FAF5EB] border border-[rgba(212,163,70,0.3)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A346]" />
                  <span className="label-caps text-[#A37424] text-[11px] font-semibold">
                    Step 1 &bull; Date, Time &amp; Party
                  </span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#241814] uppercase tracking-wider mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF7F2]/70 border border-[#E2D8CC] text-sm focus:bg-white focus:border-[#D4A346] focus:outline-none transition-colors shadow-2xs"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#241814] uppercase tracking-wider mb-2">
                      Time Slot
                    </label>
                    <CustomSelect
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      options={timeSlotOptions}
                      placeholder="Select time slot"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#241814] uppercase tracking-wider mb-2">
                      Guests
                    </label>
                    <CustomSelect
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      options={guestOptions}
                      placeholder="Select guest count"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Seating Zone */}
              <div className="space-y-4 pt-4 border-t border-[rgba(110,93,83,0.12)]">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FAF5EB] border border-[rgba(212,163,70,0.3)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A346]" />
                  <span className="label-caps text-[#A37424] text-[11px] font-semibold">
                    Step 2 &bull; Preferred Ambience
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {zones.map((zone) => {
                    const isSelected = seatingZone === zone.name;
                    return (
                      <button
                        key={zone.id}
                        type="button"
                        onClick={() => setSeatingZone(zone.name)}
                        className={`group relative p-4 rounded-xl text-left border transition-all duration-300 cursor-pointer overflow-hidden ${
                          isSelected
                            ? 'bg-gradient-to-br from-[#FAF3E5] to-[#F5EAD4] border-2 border-[#D4A346] shadow-md ring-2 ring-[#D4A346]/20'
                            : 'bg-[#FAF7F2]/70 border border-[#E8DFD3] hover:border-[#D4A346] hover:bg-[#FAF5EC] hover:shadow-[0_4px_16px_rgba(212,163,70,0.12)] hover:-translate-y-0.5'
                        }`}
                      >
                        <span className={`absolute left-0 top-0 bottom-0 w-1.5 bg-[#D4A346] transition-opacity duration-200 ${
                          isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        }`} />
                        <div className="flex items-center justify-between">
                          <div className={`font-serif font-bold text-sm ${isSelected ? 'text-[#2A050C]' : 'text-[#241814]'}`}>
                            {zone.name}
                          </div>
                          {isSelected && (
                            <span className="text-[10px] font-bold text-[#A37424] bg-[#D4A346]/15 px-2 py-0.5 rounded-full border border-[#D4A346]/30">
                              Selected
                            </span>
                          )}
                        </div>
                        <div className={`text-xs mt-1.5 leading-snug ${isSelected ? 'text-[#6B5034] font-medium' : 'text-[#6E5D53]'}`}>
                          {zone.desc}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Degustation Selection */}
              <div className="space-y-4 pt-4 border-t border-[rgba(110,93,83,0.12)]">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FAF5EB] border border-[rgba(212,163,70,0.3)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A346]" />
                  <span className="label-caps text-[#A37424] text-[11px] font-semibold">
                    Step 3 &bull; Tasting Journey
                  </span>
                </div>

                <div className="space-y-2.5">
                  {menus.map((m) => {
                    const isSelected = tastingMenu === m.name;
                    return (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setTastingMenu(m.name)}
                        className={`group relative w-full p-4 rounded-xl flex items-center justify-between border transition-all duration-300 cursor-pointer text-left overflow-hidden ${
                          isSelected
                            ? 'bg-gradient-to-r from-[#FAF3E5] to-[#F5EAD4] border-2 border-[#D4A346] shadow-md ring-2 ring-[#D4A346]/20'
                            : 'bg-[#FAF7F2]/70 border border-[#E8DFD3] hover:border-[#D4A346] hover:bg-[#FAF5EC] hover:shadow-[0_4px_16px_rgba(212,163,70,0.12)] hover:-translate-y-0.5'
                        }`}
                      >
                        <span className={`absolute left-0 top-0 bottom-0 w-1.5 bg-[#D4A346] transition-opacity duration-200 ${
                          isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        }`} />
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className={`font-serif font-bold text-sm ${isSelected ? 'text-[#2A050C]' : 'text-[#241814]'}`}>
                              {m.name}
                            </span>
                            <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded font-semibold ${
                              isSelected
                                ? 'bg-[#2A050C] text-[#FAF7F2]'
                                : 'bg-[#EFE7D8] text-[#6E5D53]'
                            }`}>
                              {m.badge}
                            </span>
                          </div>
                          <span className={`text-xs block mt-1 ${isSelected ? 'text-[#6B5034] font-medium' : 'text-[#6E5D53]'}`}>
                            {m.price}
                          </span>
                        </div>
                        <span className={`text-lg font-serif transition-colors ${isSelected ? 'text-[#D4A346] font-bold' : 'text-[#B8A89A] group-hover:text-[#D4A346]'}`}>
                          {isSelected ? '●' : '○'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 4: Contact Particulars */}
              <div className="space-y-4 pt-4 border-t border-[rgba(110,93,83,0.12)]">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FAF5EB] border border-[rgba(212,163,70,0.3)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A346]" />
                  <span className="label-caps text-[#A37424] text-[11px] font-semibold">
                    Step 4 &bull; Guest Contact
                  </span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#241814] uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Maharani Gayatri Devi"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#FAF7F2]/70 border text-sm focus:bg-white focus:outline-none transition-colors shadow-2xs ${
                        errors.name ? 'border-[#C62828]' : 'border-[#E2D8CC] focus:border-[#D4A346]'
                      }`}
                    />
                    {errors.name && <span className="text-xs text-[#C62828] mt-1 block">{errors.name}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#241814] uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98260 12345"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#FAF7F2]/70 border text-sm focus:bg-white focus:outline-none transition-colors shadow-2xs ${
                        errors.phone ? 'border-[#C62828]' : 'border-[#E2D8CC] focus:border-[#D4A346]'
                      }`}
                    />
                    {errors.phone && <span className="text-xs text-[#C62828] mt-1 block">{errors.phone}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#241814] uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="patron@sanchi.dining"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#FAF7F2]/70 border text-sm focus:bg-white focus:outline-none transition-colors shadow-2xs ${
                        errors.email ? 'border-[#C62828]' : 'border-[#E2D8CC] focus:border-[#D4A346]'
                      }`}
                    />
                    {errors.email && <span className="text-xs text-[#C62828] mt-1 block">{errors.email}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#241814] uppercase tracking-wider mb-1.5">
                      Dining Occasion
                    </label>
                    <CustomSelect
                      value={occasion}
                      onChange={(e) => setOccasion(e.target.value)}
                      options={occasionOptions}
                      placeholder="Select occasion"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#241814] uppercase tracking-wider mb-1.5">
                    Dietary Preference
                  </label>
                  <CustomSelect
                    value={dietary}
                    onChange={(e) => setDietary(e.target.value)}
                    options={dietaryOptions}
                    placeholder="Select dietary preference"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#241814] uppercase tracking-wider mb-1.5">
                    Dietary Requirements or Culinary Notes
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. No onion/garlic (Jain), nut allergy, preference for mild spice..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF7F2]/70 border border-[#E2D8CC] text-sm focus:bg-white focus:border-[#D4A346] focus:outline-none transition-colors shadow-2xs"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full uppercase tracking-widest text-xs py-4 font-bold shadow-[0_8px_25px_rgba(42,5,12,0.2)] hover:shadow-[0_10px_30px_rgba(212,163,70,0.3)] transition-all"
                >
                  Confirm Table Reservation &bull; Instant Pass
                </Button>
                <p className="text-center text-xs text-[#7A6B60] mt-2.5">
                  No advance deposit required. We hold tables for 15 minutes past reserved time.
                </p>
              </div>

            </form>
          </div>

          {/* Right Column: Experience Details & Guarantee (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Sanctuary Promise Card */}
            <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-[#662836] via-[#541F2B] to-[#421521] text-[#FAF7F2] border border-[rgba(212,163,70,0.24)] shadow-[0_8px_28px_rgba(66,21,33,0.1)] space-y-5 relative overflow-hidden">
              {/* Subtle Ambient Gold Sheen */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-[#D4A346]/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-[rgba(212,163,70,0.18)] pb-4 relative z-10">
                <span className="label-caps text-[#D4A346] text-xs font-semibold tracking-wider">The Sanchi Table Promise</span>
                <BrandLogo
                  variant="crest"
                  theme="gold"
                  size="sm"
                  className="w-8 h-8 opacity-90 drop-shadow-xs"
                />
              </div>
              
              <h3 className="font-serif text-2xl font-semibold leading-snug text-[#FAF7F2] relative z-10">
                Your table is reserved for the entire evening.
              </h3>

              <p className="text-xs text-[#E5DCD3] leading-relaxed relative z-10">
                At Sanchi, we never double-seat or rush your degustation. Whether you linger over saffron kahwa for three hours or savor quiet silence, your table remains exclusively yours.
              </p>

              <div className="border-t border-[rgba(212,163,70,0.18)] pt-4 space-y-3 text-xs text-[#FAF7F2] relative z-10">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-[#D4A346] shrink-0" />
                  <span>Complimentary Private Courtyard Valet Parking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-[#D4A346] shrink-0" />
                  <span>Hand-hammered Kansa &amp; Copper Tableware</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 rounded-full bg-[#D4A346] shrink-0" />
                  <span>Live Sitar &amp; Santoor Ragas from 8:00 PM</span>
                </div>
              </div>
            </div>

            {/* Visit Details Card */}
            <div className="p-6 rounded-2xl bg-white border border-[rgba(212,163,70,0.28)] shadow-[0_4px_20px_rgba(180,140,80,0.06)] space-y-3 text-xs">
              <h4 className="font-serif text-base font-bold text-[#241814]">
                Concierge Inquiries
              </h4>
              <p className="text-[#6E5D53] leading-relaxed">
                For parties of 8 or more, or bespoke palace wedding catering, please contact our Maître d' directly:
              </p>
              <div className="pt-2 text-sm font-semibold text-[#A37424]">
                <a href={`tel:${restaurantInfo.phone}`} className="hover:underline">
                  {restaurantInfo.phone}
                </a>
              </div>
              <div className="text-xs text-[#6E5D53]">
                {restaurantInfo.email}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Confirmed Apple Wallet Pass Modal */}
      {confirmedReservation && (
        <DigitalPassModal
          isOpen={isPassModalOpen}
          onClose={() => setIsPassModalOpen(false)}
          reservation={confirmedReservation}
        />
      )}
    </div>
  );
}