import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../common/Button';
import { DigitalPassModal } from '../common/DigitalPassModal';
import { BrandLogo } from '../common/BrandLogo';
import { CustomSelect } from '../common/CustomSelect';
import confetti from 'canvas-confetti';

export function ReservationModal({ isOpen, onClose, onAddReservation }) {
  const modalRef = useRef(null);
  const [formData, setFormData] = useState({
    guestName: '',
    phone: '',
    email: '',
    date: '2026-11-08',
    time: '20:00',
    partySize: 2,
    dietary: 'Mixed',
    specialRequest: '',
  });

  // Degustation Customizer State (Suggested Improvement 4)
  const [isCustomizingCourses, setIsCustomizingCourses] = useState(false);
  const [customMenu, setCustomMenu] = useState({
    starter: 'Kakori Galawat Kebab',
    main: 'Nalli Nihari Khaas',
    bread: 'Khamiri Roti & Dum Gosht Biryani',
    dessert: 'Shahi Tukda Saffron Cloud',
    beverage: 'Jamun & Kaala Namak Shrub',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);
  const [showDigitalPass, setShowDigitalPass] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen && !showDigitalPass) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, showDigitalPass]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => {
        const firstInput = modalRef.current?.querySelector('input');
        if (firstInput) firstInput.focus();
      }, 50);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    }
  }, [isOpen]);

  const validate = () => {
    const newErrors = {};
    if (!formData.guestName.trim()) {
      newErrors.guestName = 'Please enter your full name.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required for booking confirmation.';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email format.';
    }
    if (!formData.date) {
      newErrors.date = 'Please select a date.';
    }
    if (!formData.time) {
      newErrors.time = 'Please select a preferred seating time.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const newReservation = {
        id: `RES-${Math.floor(100 + Math.random() * 900)}`,
        ...formData,
        customMenu: isCustomizingCourses ? customMenu : null,
        table: formData.partySize > 4 ? 'Royal Alcove Pavilion' : 'Central Stone Courtyard',
        status: 'confirmed',
      };

      if (onAddReservation) {
        onAddReservation(newReservation);
      }

      setConfirmedBooking(newReservation);
      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#D4A346', '#E8C066', '#2A050C', '#FAF7F2']
        });
      } catch {}
    }, 600);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setConfirmedBooking(null);
    setShowDigitalPass(false);
    setIsCustomizingCourses(false);
    setFormData({
      guestName: '',
      phone: '',
      email: '',
      date: '2026-11-08',
      time: '20:00',
      partySize: 2,
      dietary: 'Mixed',
      specialRequest: '',
    });
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/15 backdrop-blur-md animate-fadeIn"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-reservation-title"
        onClick={handleResetAndClose}
      >
        <div
          ref={modalRef}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-lg bg-[#FAF7F2] text-[#241814] rounded-xl border border-[rgba(212,163,70,0.3)] shadow-[0_24px_50px_rgba(0,0,0,0.18)] overflow-hidden transition-all duration-300"
        >
          {/* Modal Header */}
          <div className="bg-[#2A050C] px-6 py-5 text-[#FAF7F2] flex items-center justify-between border-b border-[rgba(212,163,70,0.2)]">
            <div className="flex items-center space-x-3">
              <BrandLogo variant="crest" theme="dark" size="sm" className="w-8 h-8 shrink-0" />
              <div>
                <h2 id="modal-reservation-title" className="font-serif text-xl font-semibold tracking-tight">
                  Reserve Your Dining Table
                </h2>
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#D4A346]">
                  Sanchi Heritage Hospitality
                </p>
              </div>
            </div>
            <button
              onClick={handleResetAndClose}
              className="p-1.5 text-[#C7B8AA] hover:text-[#FAF7F2] rounded focus:outline-none focus:ring-1 focus:ring-[#D4A346]"
              aria-label="Close Reservation Modal"
            >
              <svg className="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 max-h-[82vh] overflow-y-auto">
            {isSuccess && confirmedBooking ? (
              <div className="text-center py-6 space-y-4 animate-scaleUp">
                <div className="w-16 h-16 mx-auto rounded-full bg-[rgba(212,163,70,0.15)] border border-[#D4A346] flex items-center justify-center text-[#D4A346]">
                  <svg className="w-8 h-8 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4A346]">
                    Table Confirmed
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#241814] mt-1">
                    We look forward to welcoming you, {confirmedBooking.guestName}.
                  </h3>
                </div>

                <div className="p-4 bg-[#F4EFE6] rounded-lg border border-[rgba(212,163,70,0.2)] text-left text-xs space-y-2 max-w-sm mx-auto">
                  <div className="flex justify-between border-b border-[rgba(110,93,83,0.15)] pb-1.5">
                    <span className="text-[#6E5D53]">Confirmation Code:</span>
                    <span className="font-mono font-semibold text-[#241814]">{confirmedBooking.id}</span>
                  </div>
                  <div className="flex justify-between border-b border-[rgba(110,93,83,0.15)] pb-1.5">
                    <span className="text-[#6E5D53]">Date & Seating:</span>
                    <span className="font-medium text-[#241814]">{confirmedBooking.date} at {confirmedBooking.time}</span>
                  </div>
                  <div className="flex justify-between border-b border-[rgba(110,93,83,0.15)] pb-1.5">
                    <span className="text-[#6E5D53]">Party Size:</span>
                    <span className="font-medium text-[#241814]">{confirmedBooking.partySize} Guests ({confirmedBooking.table})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6E5D53]">Notification Sent To:</span>
                    <span className="font-medium text-[#241814]">{confirmedBooking.email}</span>
                  </div>
                </div>

                {/* Digital Dining Pass Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => setShowDigitalPass(true)}
                    className="w-full sm:w-auto uppercase tracking-wider text-xs"
                  >
                    View Digital Dining Pass &bull; QR Code
                  </Button>
                  <Button variant="ghost" size="md" onClick={handleResetAndClose}>
                    Close
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#6E5D53] uppercase tracking-wider mb-1">
                    Guest Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.guestName}
                    onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                    placeholder="e.g. Vikramaditya Roy"
                    className={`w-full px-3.5 py-2 text-sm bg-white border rounded-[6px] focus:outline-none ${
                      errors.guestName ? 'border-[#C62828]' : 'border-[rgba(212,163,70,0.3)] focus:border-[#D4A346]'
                    }`}
                  />
                  {errors.guestName && (
                    <p className="text-[11px] text-[#C62828] mt-1">{errors.guestName}</p>
                  )}
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#6E5D53] uppercase tracking-wider mb-1">
                      Mobile Phone *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98260 00000"
                      className={`w-full px-3.5 py-2 text-sm bg-white border rounded-[6px] focus:outline-none ${
                        errors.phone ? 'border-[#C62828]' : 'border-[rgba(212,163,70,0.3)] focus:border-[#D4A346]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-[11px] text-[#C62828] mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#6E5D53] uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="guest@domain.com"
                      className={`w-full px-3.5 py-2 text-sm bg-white border rounded-[6px] focus:outline-none ${
                        errors.email ? 'border-[#C62828]' : 'border-[rgba(212,163,70,0.3)] focus:border-[#D4A346]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-[#C62828] mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Date, Time & Party Size */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#6E5D53] uppercase tracking-wider mb-1">
                      Date *
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white border border-[rgba(212,163,70,0.3)] rounded-[6px] focus:outline-none focus:border-[#D4A346]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#6E5D53] uppercase tracking-wider mb-1">
                      Seating Time *
                    </label>
                    <CustomSelect
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      options={[
                        { value: '12:30', label: '12:30 PM (Lunch)' },
                        { value: '13:30', label: '01:30 PM (Lunch)' },
                        { value: '19:30', label: '07:30 PM (Dinner)' },
                        { value: '20:00', label: '08:00 PM (Dinner)' },
                        { value: '20:30', label: '08:30 PM (Dinner)' },
                        { value: '21:15', label: '09:15 PM (Dinner)' },
                      ]}
                      className="py-1.5 text-xs bg-white border-[rgba(212,163,70,0.3)]"
                      placeholder="Select time"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#6E5D53] uppercase tracking-wider mb-1">
                      Guests *
                    </label>
                    <div className="flex items-center border border-[rgba(212,163,70,0.3)] rounded-[6px] bg-white overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, partySize: Math.max(1, formData.partySize - 1) })}
                        className="px-3 py-2 text-sm hover:bg-[#F4EFE6] focus:outline-none"
                      >
                        -
                      </button>
                      <span className="flex-1 text-center text-xs font-medium">{formData.partySize}</span>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, partySize: Math.min(12, formData.partySize + 1) })}
                        className="px-3 py-2 text-sm hover:bg-[#F4EFE6] focus:outline-none"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Dietary Preference */}
                <div>
                  <label className="block text-xs font-semibold text-[#6E5D53] uppercase tracking-wider mb-1">
                    Dietary Preference
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Veg Only', 'Non-Veg', 'Mixed'].map((diet) => (
                      <button
                        key={diet}
                        type="button"
                        onClick={() => setFormData({ ...formData, dietary: diet })}
                        className={`py-1.5 text-xs rounded border transition-colors ${
                          formData.dietary === diet
                            ? 'bg-[#2A050C] text-[#FAF7F2] border-[#2A050C]'
                            : 'bg-white text-[#6E5D53] border-[rgba(110,93,83,0.25)] hover:border-[#D4A346]'
                        }`}
                      >
                        {diet}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Degustation Course Customizer Accordion (Suggested Improvement 4) */}
                <div className="border border-[rgba(212,163,70,0.25)] rounded-lg p-3.5 bg-[#F4EFE6]/60">
                  <button
                    type="button"
                    onClick={() => setIsCustomizingCourses(!isCustomizingCourses)}
                    className="w-full flex items-center justify-between text-left text-xs font-semibold text-[#B38234]"
                  >
                    <span>&bull; Curate 4-Course Tasting Menu (Optional)</span>
                    <span>{isCustomizingCourses ? '▲' : '▼'}</span>
                  </button>

                  {isCustomizingCourses && (
                    <div className="mt-3 pt-3 border-t border-[rgba(110,93,83,0.15)] space-y-2.5 text-xs">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-[#6E5D53] block mb-1">1. Shuruwaat (Starter)</span>
                        <CustomSelect
                          value={customMenu.starter}
                          onChange={(e) => setCustomMenu({ ...customMenu, starter: e.target.value })}
                          options={[
                            'Kakori Galawat Kebab (Melt-in-mouth Awadhi Goat)',
                            'Subz Shikanja Paneer Tikka (Tandoori Malai)',
                            'Bhatti Murgh Pishori (Charcoal Roasted)',
                          ]}
                          className="py-1 text-xs bg-white border-[rgba(212,163,70,0.3)]"
                        />
                      </div>

                      <div>
                        <span className="text-[10px] uppercase font-bold text-[#6E5D53] block mb-1">2. Dum Deg (Curry & Lentil)</span>
                        <CustomSelect
                          value={customMenu.main}
                          onChange={(e) => setCustomMenu({ ...customMenu, main: e.target.value })}
                          options={[
                            'Nalli Nihari Khaas (12-hour shank in copper deg)',
                            'Dal Sanchi 1928 (Overnight woodsmoke black urad)',
                            'Kashmiri Nadru Yakhni (Lotus root in mint yogurt)',
                          ]}
                          className="py-1 text-xs bg-white border-[rgba(212,163,70,0.3)]"
                        />
                      </div>

                      <div>
                        <span className="text-[10px] uppercase font-bold text-[#6E5D53] block mb-1">3. Meetha (Artisanal Dessert)</span>
                        <CustomSelect
                          value={customMenu.dessert}
                          onChange={(e) => setCustomMenu({ ...customMenu, dessert: e.target.value })}
                          options={[
                            'Shahi Tukda Saffron Cloud (Rabdi & Pistachio)',
                            'Gulab Jamun Flambé (Cardamom Chenna)',
                          ]}
                          className="py-1 text-xs bg-white border-[rgba(212,163,70,0.3)]"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-xs font-semibold text-[#6E5D53] uppercase tracking-wider mb-1">
                    Special Notes & Celebrations
                  </label>
                  <textarea
                    rows="2"
                    value={formData.specialRequest}
                    onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                    placeholder="Anniversary, courtyard seating, dietary allergies..."
                    className="w-full px-3.5 py-2 text-xs bg-white border border-[rgba(212,163,70,0.3)] rounded-[6px] focus:outline-none focus:border-[#D4A346]"
                  />
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={isSubmitting}
                    className="w-full uppercase tracking-widest text-xs"
                  >
                    {isSubmitting ? 'Reserving...' : 'Confirm Reservation & Generate Pass'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Digital Pass Viewer Modal */}
      {showDigitalPass && confirmedBooking && (
        <DigitalPassModal
          reservation={confirmedBooking}
          onClose={() => setShowDigitalPass(false)}
        />
      )}
    </>
  );
}
