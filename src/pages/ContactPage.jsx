import React, { useState } from 'react';
import { Link } from '../router/Router';
import { restaurantInfo } from '../data/mockData';
import { Button } from '../components/common/Button';
import { ToranaDivider } from '../components/common/ToranaDivider';
import { CustomSelect } from '../components/common/CustomSelect';

export function ContactPage({ onOpenReserve }) {
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
    <div className="min-h-screen bg-[#FAF7F2] text-[#241814] pt-28 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-[#6E5D53] mb-6">
          <Link to="/" className="hover:text-[#241814] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#B38234] font-medium">Contact</span>
        </nav>

        {/* Header */}
        <div className="max-w-2xl">
          <span className="label-caps text-[#B38234]">Concierge & Location</span>
          <h1 className="font-serif text-4xl sm:text-6xl font-semibold mt-2 tracking-tight text-[#241814]">
            Connect with Sanchi
          </h1>
          <p className="text-base text-[#6E5D53] mt-3 leading-relaxed">
            For table reservations, private pavilion dining, or bespoke wedding degustation inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">

          {/* Contact Details & Particulars (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-xl bg-[#F4EFE6] border border-[rgba(212,163,70,0.25)] space-y-6">
              <div>
                <span className="label-caps text-[#D4A346] text-xs">Sanctuary Address</span>
                <address className="not-italic text-sm text-[#241814] font-medium mt-1 leading-relaxed">
                  {restaurantInfo.address}
                </address>
                <p className="text-xs text-[#6E5D53] mt-1">
                  Near Old VIP Road &bull; 15 mins from Bhopal Junction Railway Station
                </p>
              </div>

              <div className="border-t border-[rgba(110,93,83,0.15)] pt-4">
                <span className="label-caps text-[#D4A346] text-xs">Direct Concierge</span>
                <p className="text-sm font-semibold text-[#241814] mt-1">
                  <a href={`tel:${restaurantInfo.phone}`} className="hover:text-[#B38234]">
                    {restaurantInfo.phone}
                  </a>
                </p>
                <p className="text-xs text-[#6E5D53]">
                  <a href={`mailto:${restaurantInfo.email}`} className="hover:text-[#B38234]">
                    {restaurantInfo.email}
                  </a>
                </p>
              </div>

              <div className="border-t border-[rgba(110,93,83,0.15)] pt-4">
                <span className="label-caps text-[#D4A346] text-xs">Service Hours</span>
                <p className="text-xs text-[#241814] mt-1">
                  <strong className="block text-sm font-semibold">Afternoon:</strong> {restaurantInfo.hours.lunch}
                </p>
                <p className="text-xs text-[#241814] mt-1">
                  <strong className="block text-sm font-semibold">Evening:</strong> {restaurantInfo.hours.dinner}
                </p>
                <p className="text-[11px] text-[#B38234] mt-2 italic">
                  {restaurantInfo.hours.days}
                </p>
              </div>

              <div className="pt-2">
                <Button variant="primary" size="md" onClick={onOpenReserve} className="w-full text-xs uppercase tracking-widest">
                  Direct Table Booking
                </Button>
              </div>
            </div>
          </div>

          {/* Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-xl bg-white border border-[rgba(212,163,70,0.25)] shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-[#241814]">
                Send a Message to the Maître d'
              </h2>
              <p className="text-xs text-[#6E5D53] mt-1 mb-6">
                We respond to all written inquiries within four hours during dining service days.
              </p>

              {submitted ? (
                <div className="p-8 text-center bg-[#F4EFE6] rounded-xl border border-[rgba(212,163,70,0.3)] space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center">
                    <svg className="w-6 h-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#241814]">Message Dispatched</h3>
                  <p className="text-xs text-[#6E5D53] max-w-sm mx-auto">
                    Thank you, {form.name}. Our concierge will be in touch shortly regarding your inquiry.
                  </p>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
                    }}
                  >
                    Send Another Note
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {error && (
                    <div className="p-3 bg-[#FFEBEE] border border-[#C62828] text-xs text-[#C62828] rounded">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#6E5D53] uppercase tracking-wider mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Maharani Gayatri"
                        className="w-full px-3.5 py-2 text-xs bg-[#F4EFE6] border border-[rgba(212,163,70,0.3)] rounded focus:outline-none focus:border-[#D4A346]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#6E5D53] uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-3.5 py-2 text-xs bg-[#F4EFE6] border border-[rgba(212,163,70,0.3)] rounded focus:outline-none focus:border-[#D4A346]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#6E5D53] uppercase tracking-wider mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 98260 00000"
                        className="w-full px-3.5 py-2 text-xs bg-[#F4EFE6] border border-[rgba(212,163,70,0.3)] rounded focus:outline-none focus:border-[#D4A346]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#6E5D53] uppercase tracking-wider mb-1">
                        Inquiry Nature
                      </label>
                      <CustomSelect
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        options={[
                          { value: 'General Inquiry', label: 'General Dining Inquiry', sublabel: 'Menus, dress code, timings' },
                          { value: 'Private Pavilion', label: 'Private Pavilion Booking (8+ Guests)', sublabel: 'Dedicated steward & bespoke courses' },
                          { value: 'Tasting Event', label: 'Custom Tasting Degustation', sublabel: 'Chef curated pairings' },
                          { value: 'Press / Photography', label: 'Press / Archival Inquiries', sublabel: 'Media kit & editorial visits' },
                        ]}
                        className="py-2 text-xs bg-[#F4EFE6] border-[rgba(212,163,70,0.3)]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#6E5D53] uppercase tracking-wider mb-1">
                      Message *
                    </label>
                    <textarea
                      rows="4"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Share your requirements, guest count, or dietary preferences..."
                      className="w-full px-3.5 py-2 text-xs bg-[#F4EFE6] border border-[rgba(212,163,70,0.3)] rounded focus:outline-none focus:border-[#D4A346]"
                    />
                  </div>

                  <div>
                    <Button type="submit" variant="primary" size="md" className="w-full uppercase tracking-widest text-xs">
                      Send Correspondence
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

        <div className="mt-20">
          <ToranaDivider label="Hospitality" />
        </div>
      </div>
    </div>
  );
}

