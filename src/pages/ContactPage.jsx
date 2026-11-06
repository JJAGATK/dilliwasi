import React, { useState } from 'react';
import { Link } from '../router/Router';
import { restaurantInfo } from '../data/mockData';
import { Button } from '../components/common/Button';
import { CustomSelect } from '../components/common/CustomSelect';

export function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in your name, email, and message.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1917] pt-24 sm:pt-28 pb-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-[#78716C] mb-4 sm:mb-6">
          <Link to="/" className="hover:text-[#1C1917] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#D81B60] font-medium">Contact</span>
        </nav>

        {/* Header */}
        <div className="max-w-2xl">
          <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#D81B60] block mb-1">
            Location & Concierge
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#1C1917]">
            Connect with Dilliwasi
          </h1>
          <p className="text-sm text-[#57534E] mt-2 leading-relaxed font-light">
            For group reservations, catering inquiries, party celebrations, or take-away orders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 mt-8 sm:mt-12">

          {/* Contact Details & Particulars (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-stone-200/90 shadow-2xs space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.16em] font-semibold text-[#D81B60] block mb-1">
                  Restaurant Address
                </span>
                <address className="not-italic text-sm text-[#1C1917] font-medium leading-relaxed">
                  <strong>Outlet 2:</strong> 3rd - 4th Floor, A3 Amar Complex (Opposite ICICI Bank), Shivalik Nagar, Haridwar, Uttarakhand &mdash; 249403
                </address>
                <p className="text-xs text-[#78716C] mt-1 font-light">
                  Opposite ICICI Bank &bull; Elevator access to 3rd & 4th floors
                </p>
              </div>

              <div className="border-t border-stone-100 pt-4 space-y-2">
                <span className="text-[10px] uppercase tracking-[0.16em] font-semibold text-[#D81B60] block">
                  Direct Phone Hotlines
                </span>
                <div className="flex flex-col space-y-1 mt-1 font-mono text-xs">
                  <a href="tel:+919058882691" className="text-[#1C1917] hover:text-[#D81B60] transition-colors py-0.5">
                    +91 90588 82691
                  </a>
                  <a href="tel:+919058882692" className="text-[#1C1917] hover:text-[#D81B60] transition-colors py-0.5">
                    +91 90588 82692
                  </a>
                  <a href="tel:+919058882693" className="text-[#1C1917] hover:text-[#D81B60] transition-colors py-0.5">
                    +91 90588 82693
                  </a>
                </div>
                <p className="text-xs text-[#78716C] pt-1">
                  Email: <a href="mailto:dilliwasiunit2@gmail.com" className="text-[#D81B60] hover:underline">dilliwasiunit2@gmail.com</a>
                </p>
                <p className="text-[11px] text-[#A8A29E] font-mono">
                  GSTIN: {restaurantInfo.gstNumber}
                </p>
              </div>

              <div className="border-t border-stone-100 pt-4">
                <span className="text-[10px] uppercase tracking-[0.16em] font-semibold text-[#D81B60] block mb-1">
                  Dining Hours
                </span>
                <p className="text-xs text-[#1C1917]">
                  <strong className="block text-sm font-semibold">Fine Dine & Rooftop:</strong> 11:00 AM – 11:00 PM
                </p>
                <p className="text-[11px] text-[#15803D] mt-1 font-medium">
                  Open All 7 Days a Week
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="tel:+919058882691"
                  className="w-full py-3 rounded-full bg-[#D81B60] text-white font-medium text-xs uppercase tracking-widest hover:bg-[#C2185B] transition-colors flex items-center justify-center space-x-2"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call Restaurant Direct</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-2xs">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
                Inquiry & Feedback
              </h2>
              <p className="text-xs sm:text-sm text-[#78716C] mt-1 mb-6 font-light">
                Have a question about our menu, private celebrations, or bulk party orders? Leave us a note.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-stone-200 text-center space-y-3">
                  <h3 className="font-serif text-xl font-bold text-[#1C1917]">Thank you for writing to us</h3>
                  <p className="text-xs text-[#57534E] leading-relaxed max-w-sm mx-auto font-light">
                    We have received your message. Our team at Amar Complex, Shivalik Nagar will get in touch with you shortly.
                  </p>
                  <div className="pt-2">
                    <Button variant="secondary" size="sm" onClick={() => setSubmitted(false)}>
                      Send Another Note
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {error && (
                    <div className="p-3 text-xs rounded-xl bg-rose-50 border border-rose-200 text-[#D81B60]">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-semibold text-[#78716C] uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Ramesh Kumar"
                        className="w-full px-3.5 py-2 text-xs bg-[#FAF8F5] border border-stone-200 rounded-xl text-[#1C1917] focus:outline-none focus:border-[#D81B60]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-semibold text-[#78716C] uppercase tracking-wider mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2 text-xs bg-[#FAF8F5] border border-stone-200 rounded-xl text-[#1C1917] focus:outline-none focus:border-[#D81B60]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold text-[#78716C] uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2 text-xs bg-[#FAF8F5] border border-stone-200 rounded-xl text-[#1C1917] focus:outline-none focus:border-[#D81B60]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold text-[#78716C] uppercase tracking-wider mb-1">
                      Inquiry Topic
                    </label>
                    <CustomSelect
                      value={form.subject}
                      onChange={(val) => setForm({ ...form, subject: val })}
                      options={[
                        { value: 'General Inquiry', label: 'General Inquiry' },
                        { value: 'Party & Catering', label: 'Party & Catering' },
                        { value: 'Rooftop Cafe Booking', label: 'Rooftop Cafe Group Booking' },
                        { value: 'Feedback', label: 'Feedback' },
                      ]}
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold text-[#78716C] uppercase tracking-wider mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="How may our team assist you?"
                      className="w-full px-3.5 py-2 text-xs bg-[#FAF8F5] border border-stone-200 rounded-xl text-[#1C1917] focus:outline-none focus:border-[#D81B60] resize-none"
                      required
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-full bg-[#1C1917] text-white font-medium text-xs uppercase tracking-widest hover:bg-[#D81B60] transition-colors cursor-pointer"
                    >
                      Submit Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
