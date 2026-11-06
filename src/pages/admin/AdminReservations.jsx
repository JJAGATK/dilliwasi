import React, { useState } from 'react';
import { initialReservations } from '../../data/mockData';
import { Button } from '../../components/common/Button';
import { DigitalPassModal } from '../../components/common/DigitalPassModal';
import { Link } from '../../router/Router';

export function AdminReservations({ reservations: initialData }) {
  const [reservations, setReservations] = useState(initialData || initialReservations);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [passReservation, setPassReservation] = useState(null);
  const [newGuest, setNewGuest] = useState({
    guestName: '',
    phone: '',
    email: '',
    time: '20:00',
    partySize: 2,
    table: 'Table 14',
    specialRequest: '',
  });

  const cardBg = 'bg-white border-[rgba(212,163,70,0.22)] shadow-xs';
  const textColor = 'text-[#1C1917]';
  const mutedText = 'text-[#78716C]';

  const updateStatus = (id, newStatus) => {
    setReservations((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
    );
  };

  const handleAddReservation = (e) => {
    e.preventDefault();
    if (!newGuest.guestName.trim()) return;

    const created = {
      id: `RES-${Math.floor(700 + Math.random() * 200)}`,
      ...newGuest,
      date: '2026-11-06',
      status: 'confirmed',
      dietary: 'Mixed',
    };

    setReservations([created, ...reservations]);
    setShowAddModal(false);
    setNewGuest({
      guestName: '',
      phone: '',
      email: '',
      time: '20:00',
      partySize: 2,
      table: 'Table 14',
      specialRequest: '',
    });
  };

  const filteredReservations = reservations.filter((r) => {
    if (statusFilter !== 'all' && r.status !== statusFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = r.guestName.toLowerCase().includes(q);
      const matchPhone = r.phone.toLowerCase().includes(q);
      const matchId = r.id.toLowerCase().includes(q);
      if (!matchName && !matchPhone && !matchId) return false;
    }
    return true;
  });

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header & Primary Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className={`font-serif text-2xl sm:text-3xl font-bold ${textColor}`}>
            Dining Reservations
          </h1>
          <p className={`text-xs ${mutedText} mt-1`}>
            Manage tonight's table seatings, digital QR passes, and guest dietary requirements
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <Link
            to="/admin/floorplan"
            className="px-3 py-1.5 text-xs rounded border border-[#D4A346] text-[#D4A346] hover:bg-[rgba(212,163,70,0.1)] transition-colors"
          >
            &bull; View Table Floor Map &rarr;
          </Link>

          <Button
            variant="primary"
            size="sm"
            onClick={() => setShowAddModal(true)}
            className="text-xs uppercase tracking-wider"
          >
            + Add Reservation
          </Button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className={`p-4 rounded-xl border shadow-sm ${cardBg} flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4`}>
        {/* Status Filters */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {['all', 'confirmed', 'pending', 'seated', 'cancelled'].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-3 py-1.5 rounded text-xs capitalize transition-colors cursor-pointer ${
                statusFilter === status
                  ? 'bg-[#2A050C] text-[#FAF7F2] font-semibold shadow-2xs'
                  : 'text-[#6E5D53] hover:bg-[#EDE5D8]'
              }`}
            >
              {status} ({status === 'all' ? reservations.length : reservations.filter((r) => r.status === status).length})
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search guest or code..."
            className="w-full pl-8 pr-3 py-1.5 text-xs rounded border focus:outline-none focus:border-[#D4A346] bg-white border-[rgba(212,163,70,0.3)] text-[#241814]"
          />
          <svg className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-[#8C7A6D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Reservations Data Table */}
      <div className={`rounded-xl border shadow-sm overflow-hidden ${cardBg}`}>
        {filteredReservations.length === 0 ? (
          <div className="p-16 text-center space-y-2">
            <p className={`font-serif text-lg ${textColor}`}>No reservations match this filter.</p>
            <p className={`text-xs ${mutedText}`}>Try choosing a different status filter or clearing your search.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className={`border-b border-[rgba(110,93,83,0.18)] ${mutedText}`}>
                  <th className="py-3 px-4 font-semibold">Booking ID</th>
                  <th className="py-3 px-4 font-semibold">Guest</th>
                  <th className="py-3 px-4 font-semibold">Contact</th>
                  <th className="py-3 px-4 font-semibold">Time</th>
                  <th className="py-3 px-4 font-semibold">Party</th>
                  <th className="py-3 px-4 font-semibold">Location</th>
                  <th className="py-3 px-4 font-semibold">Status</th>
                  <th className="py-3 px-4 font-semibold text-right">Quick Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgba(110,93,83,0.1)]">
                {filteredReservations.map((res) => (
                  <tr key={res.id} className="hover:bg-[rgba(212,163,70,0.06)] transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-[#D4A346]">
                      <button
                        onClick={() => setPassReservation(res)}
                        className="hover:underline cursor-pointer"
                        title="View Digital QR Pass"
                      >
                        {res.id} &#128241;
                      </button>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className={`font-semibold ${textColor}`}>{res.guestName}</div>
                      {res.specialRequest && (
                        <div className={`text-[10px] ${mutedText} italic max-w-xs truncate`}>
                          Note: {res.specialRequest}
                        </div>
                      )}
                    </td>
                    <td className={`py-3.5 px-4 ${mutedText}`}>{res.phone}</td>
                    <td className={`py-3.5 px-4 font-medium ${textColor}`}>{res.time}</td>
                    <td className={`py-3.5 px-4 ${textColor}`}>{res.partySize} Covers</td>
                    <td className={`py-3.5 px-4 ${mutedText}`}>{res.table}</td>
                    <td className="py-3.5 px-4">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider ${
                          res.status === 'confirmed'
                            ? 'bg-[#2E7D32]/15 text-[#2E7D32]'
                            : res.status === 'seated'
                            ? 'bg-[#D4A346]/20 text-[#D4A346]'
                            : res.status === 'pending'
                            ? 'bg-[#E8C066]/20 text-[#B38234]'
                            : 'bg-gray-500/20 text-gray-400'
                        }`}
                      >
                        {res.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right space-x-1.5">
                      <button
                        onClick={() => setPassReservation(res)}
                        className="px-2 py-1 text-[11px] rounded bg-[rgba(212,163,70,0.15)] text-[#D4A346] hover:bg-[rgba(212,163,70,0.25)] font-medium transition-colors"
                        title="View QR Pass"
                      >
                        Pass
                      </button>

                      {res.status !== 'seated' && res.status !== 'cancelled' && (
                        <button
                          onClick={() => updateStatus(res.id, 'seated')}
                          className="px-2.5 py-1 text-[11px] rounded bg-[#2E7D32]/10 text-[#2E7D32] hover:bg-[#2E7D32]/20 font-medium transition-colors"
                          title="Seat Guest at Table"
                        >
                          Seat
                        </button>
                      )}
                      {res.status === 'pending' && (
                        <button
                          onClick={() => updateStatus(res.id, 'confirmed')}
                          className="px-2.5 py-1 text-[11px] rounded bg-[#D4A346]/20 text-[#D4A346] hover:bg-[#D4A346]/30 font-medium transition-colors"
                          title="Confirm Table Booking"
                        >
                          Confirm
                        </button>
                      )}
                      {res.status !== 'cancelled' && (
                        <button
                          onClick={() => updateStatus(res.id, 'cancelled')}
                          className="px-2 py-1 text-[11px] rounded bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors"
                          title="Cancel Reservation"
                        >
                          &times;
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Add Reservation Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className={`w-full max-w-md p-6 rounded-xl border shadow-2xl ${cardBg}`}>
            <h2 className={`font-serif text-xl font-bold ${textColor}`}>Add Phone / Walk-in Booking</h2>
            <p className={`text-xs ${mutedText} mt-1`}>Direct reservation booked through concierge</p>

            <form onSubmit={handleAddReservation} className="mt-4 space-y-3">
              <div>
                <label className={`block text-[11px] uppercase tracking-wider font-semibold ${mutedText} mb-1`}>
                  Guest Name *
                </label>
                <input
                  type="text"
                  required
                  value={newGuest.guestName}
                  onChange={(e) => setNewGuest({ ...newGuest, guestName: e.target.value })}
                  className="w-full px-3 py-1.5 text-xs rounded border focus:outline-none focus:border-[#D4A346] bg-white border-stone-300 text-[#1C1917]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={`block text-[11px] uppercase tracking-wider font-semibold ${mutedText} mb-1`}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={newGuest.phone}
                    onChange={(e) => setNewGuest({ ...newGuest, phone: e.target.value })}
                    className="w-full px-3 py-1.5 text-xs rounded border focus:outline-none focus:border-[#D4A346] bg-white border-stone-300 text-[#1C1917]"
                  />
                </div>
                <div>
                  <label className={`block text-[11px] uppercase tracking-wider font-semibold ${mutedText} mb-1`}>
                    Seating Time
                  </label>
                  <input
                    type="text"
                    value={newGuest.time}
                    onChange={(e) => setNewGuest({ ...newGuest, time: e.target.value })}
                    className="w-full px-3 py-1.5 text-xs rounded border focus:outline-none focus:border-[#D4A346] bg-white border-stone-300 text-[#1C1917]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={`block text-[11px] uppercase tracking-wider font-semibold ${mutedText} mb-1`}>
                    Party Size
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="16"
                    value={newGuest.partySize}
                    onChange={(e) => setNewGuest({ ...newGuest, partySize: parseInt(e.target.value) || 1 })}
                    className="w-full px-3 py-1.5 text-xs rounded border focus:outline-none focus:border-[#D4A346] bg-white border-stone-300 text-[#1C1917]"
                  />
                </div>
                <div>
                  <label className={`block text-[11px] uppercase tracking-wider font-semibold ${mutedText} mb-1`}>
                    Allocated Table
                  </label>
                  <input
                    type="text"
                    value={newGuest.table}
                    onChange={(e) => setNewGuest({ ...newGuest, table: e.target.value })}
                    className="w-full px-3 py-1.5 text-xs rounded border focus:outline-none focus:border-[#D4A346] bg-white border-stone-300 text-[#1C1917]"
                  />
                </div>
              </div>

              <div className="pt-3 flex items-center justify-end space-x-3">
                <Button variant="ghost" size="sm" onClick={() => setShowAddModal(false)}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary" size="sm">
                  Save Reservation
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Digital Pass Modal */}
      {passReservation && (
        <DigitalPassModal
          reservation={passReservation}
          onClose={() => setPassReservation(null)}
        />
      )}
    </div>
  );
}
