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
    <div className="min-h-screen bg-[#FAF7F2] text-[#241814] pt-24 sm:pt-28 pb-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-[#6E5D53] mb-4 sm:mb-6">
          <Link to="/" className="hover:text-[#241814] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#E60067] font-semibold">Contact & Location</span>
        </nav>

        {/* Header */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-[#E60067] text-[11px] font-bold mb-2">
            <span>📍</span>
            <span>SHIVALIK NAGAR &bull; HARIDWAR</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#241814]">
            Connect with Dilliwasi
          </h1>
          <p className="text-sm sm:text-base text-[#6E5D53] mt-2 leading-relaxed">
            For catering inquiries, party celebrations, rooftop dining, or take-away orders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 mt-8 sm:mt-12">

          {/* Contact Details & Particulars (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#D4A346]/25 shadow-md space-y-6">
              <div>
                <span className="label-caps text-[#E60067] text-xs font-bold">Restaurant Address</span>
                <address className="not-italic text-sm text-[#241814] font-medium mt-1.5 leading-relaxed">
                  <strong>Outlet 2:</strong> 3rd - 4th Floor, A3 Amar Complex (Opposite ICICI Bank), Shivalik Nagar, Haridwar, Uttarakhand &mdash; 249403
                </address>
                <p className="text-xs text-[#6E5D53] mt-1.5">
                  Opposite ICICI Bank &bull; Easy parking available
                </p>
              </div>

              <div className="border-t border-stone-100 pt-4">
                <span className="label-caps text-[#E60067] text-xs font-bold">Direct Phone Hotlines</span>
                <div className="flex flex-col space-y-1.5 mt-2">
                  <a href="tel:+919058882691" className="text-sm font-bold text-[#241814] hover:text-[#E60067] flex items-center space-x-2">
                    <span>📞</span>
                    <span>+91 90588 82691</span>
                  </a>
                  <a href="tel:+919058882692" className="text-sm font-bold text-[#241814] hover:text-[#E60067] flex items-center space-x-2">
                    <span>📞</span>
                    <span>+91 90588 82692</span>
                  </a>
                  <a href="tel:+919058882693" className="text-sm font-bold text-[#241814] hover:text-[#E60067] flex items-center space-x-2">
                    <span>📞</span>
                    <span>+91 90588 82693</span>
                  </a>
                </div>
                <p className="text-xs text-[#6E5D53] mt-2">
                  Email: <a href="mailto:dilliwasiunit2@gmail.com" className="text-[#E60067] font-medium hover:underline">dilliwasiunit2@gmail.com</a>
                </p>
                <p className="text-[11px] text-[#9B897D] mt-1 font-mono">
                  GSTIN: {restaurantInfo.gstNumber}
                </p>
              </div>

              <div className="border-t border-stone-100 pt-4">
                <span className="label-caps text-[#E60067] text-xs font-bold">Dining Hours</span>
                <p className="text-xs text-[#241814] mt-1.5">
                  <strong className="block text-sm font-semibold">Fine Dine & Rooftop Cafe:</strong> 11:00 AM – 11:00 PM
                </p>
                <p className="text-[11px] text-[#16A34A] mt-1 font-semibold">
                  Open All 7 Days a Week
                </p>
              </div>

              <div className="pt-2">
                <a
                  href="tel:+919058882691"
                  className="w-full py-3.5 rounded-full bg-[#E60067] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#C2185B] transition-colors flex items-center justify-center space-x-2"
                >
                  <span>📞 Call Restaurant Direct</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#D4A346]/25 shadow-md">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#241814]">
                Send an Inquiry or Feedback
              </h2>
              <p className="text-xs sm:text-sm text-[#6E5D53] mt-1 mb-6">
                Have a question about our menu, private celebrations, or bulk party orders? Leave us a message.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <span className="text-3xl block">🙏</span>
                  <h3 className="font-serif text-xl font-bold text-emerald-900">Thank you for writing to us!</h3>
                  <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                    We have received your message. Our team at Amar Complex, Shivalik Nagar will get in touch with you shortly.
                  </p>
                  <Button variant="secondary" size="sm" onClick={() => setSubmitted(false)}>
                    Send Another Note
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {error && (
                    <div className="p-3 text-xs rounded-xl bg-rose-50 border border-rose-200 text-[#E60067]">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#6E5D53] uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-4 py-2.5 text-xs bg-[#FAF7F2] border border-stone-300 rounded-xl text-[#241814] focus:outline-none focus:border-[#E60067]"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#6E5D53] uppercase tracking-wider mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 text-xs bg-[#FAF7F2] border border-stone-300 rounded-xl text-[#241814] focus:outline-none focus:border-[#E60067]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#6E5D53] uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-2.5 text-xs bg-[#FAF7F2] border border-stone-300 rounded-xl text-[#241814] focus:outline-none focus:border-[#E60067]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#6E5D53] uppercase tracking-wider mb-1">
                      Inquiry Topic
                    </label>
                    <CustomSelect
                      value={form.subject}
                      onChange={(val) => setForm({ ...form, subject: val })}
                      options={[
                        { value: 'General Inquiry', label: 'General Inquiry' },
                        { value: 'Party & Catering', label: 'Party, Birthday & Bulk Catering' },
                        { value: 'Rooftop Cafe Booking', label: 'Rooftop Cafe Group Booking' },
                        { value: 'Feedback & Compliments', label: 'Feedback & Compliments' },
                      ]}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#6E5D53] uppercase tracking-wider mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="How may our team assist you?"
                      className="w-full px-4 py-2.5 text-xs bg-[#FAF7F2] border border-stone-300 rounded-xl text-[#241814] focus:outline-none focus:border-[#E60067] resize-none"
                      required
                    />
                  </div>

                  <div className="pt-2">
                    <Button type="submit" variant="primary" size="md" className="w-full uppercase tracking-wider text-xs">
                      Submit Message
                    </Button>
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
