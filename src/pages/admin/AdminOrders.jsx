import React, { useState } from 'react';
import { initialOrders } from '../../data/mockData';
import { KitchenChitModal } from '../../components/admin/KitchenChitModal';

export function AdminOrders() {
  const [orders, setOrders] = useState(initialOrders);
  const [chitOrder, setChitOrder] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all'); // 'all' | 'new' | 'preparing' | 'ready' | 'delivered'

  const cardBg = 'bg-white border-[rgba(212,163,70,0.22)] shadow-xs';
  const textColor = 'text-[#1C1917]';
  const mutedText = 'text-[#78716C]';

  const advanceOrderStatus = (orderId) => {
    setOrders((prev) =>
      prev.map((ord) => {
        if (ord.id !== orderId) return ord;
        const nextStatus = {
          new: 'preparing',
          preparing: 'ready',
          ready: 'delivered',
          delivered: 'delivered',
        }[ord.status];
        return { ...ord, status: nextStatus };
      })
    );
  };

  const columns = [
    {
      id: 'new',
      label: '1. New Orders',
      icon: '●',
      sla: 'SLA < 5m',
      badgeColor: 'bg-[#FAF5EB] text-[#A37424] border border-[#D4A346]/40',
      actionLabel: 'Fire to Deg →',
      actionClass: 'bg-[#2A050C] hover:bg-[#3D0A14] text-[#FAF7F2] border border-[#D4A346]/40',
    },
    {
      id: 'preparing',
      label: '2. In Tandoor / Deg',
      icon: '🔥',
      sla: 'SLA 12–15m',
      badgeColor: 'bg-[#D97706]/10 text-[#D97706] border border-[#D97706]/30',
      actionLabel: 'Mark Plated →',
      actionClass: 'bg-[#D97706] hover:bg-[#B45309] text-white',
    },
    {
      id: 'ready',
      label: '3. Plated & Ready',
      icon: '🔔',
      sla: 'SLA < 3m',
      badgeColor: 'bg-[#047857]/10 text-[#047857] border border-[#047857]/30',
      actionLabel: 'Mark Served ✓',
      actionClass: 'bg-[#047857] hover:bg-[#065F46] text-white',
    },
    {
      id: 'delivered',
      label: '4. Delivered to Table',
      icon: '✓',
      sla: 'Complete',
      badgeColor: 'bg-stone-100 text-stone-600 border border-stone-200',
      actionLabel: null,
      actionClass: '',
    },
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[rgba(212,163,70,0.18)]">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FAF5EB] border border-[rgba(212,163,70,0.3)] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
            <span className="text-[#A37424] text-[11px] font-semibold tracking-wider uppercase">
              KDS Kitchen Operations
            </span>
          </div>
          <h1 className={`font-serif text-2xl sm:text-3xl font-bold tracking-tight ${textColor}`}>
            Live Kitchen Display &amp; POS Order Flow
          </h1>
          <p className={`text-xs ${mutedText} mt-1`}>
            Real-time status progression from order receipt to copper deg firing, thermal chit printing, and tableside service
          </p>
        </div>

        <div className="flex items-center space-x-3 text-xs">
          <span className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#059669]/10 text-[#059669] font-semibold border border-[#059669]/25 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
            <span>KDS &amp; Thermal Printer: Online</span>
          </span>
          <span className="text-[#A37424] font-semibold bg-[#FAF5EB] px-2.5 py-1 rounded-lg border border-[#D4A346]/30">
            4 Kitchen Stations
          </span>
        </div>
      </div>

      {/* Filter and Search Toolbar */}
      <div className="p-3.5 rounded-xl bg-white border border-[rgba(212,163,70,0.22)] shadow-2xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search order ID (ORD-), table (Table 04), guest, or dish name..."
            className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-stone-300 bg-white text-[#1C1917] focus:outline-none focus:border-[#D4A346] shadow-2xs"
          />
          <svg className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-2 text-stone-400 hover:text-stone-700 cursor-pointer text-xs"
            >
              ✕
            </button>
          )}
        </div>

        {/* Stage Filter Chips */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <span className="text-[11px] text-stone-500 font-medium mr-1">Stage:</span>
          {[
            { id: 'all', label: `All (${orders.length})` },
            { id: 'new', label: `New (${orders.filter((o) => o.status === 'new').length})` },
            { id: 'preparing', label: `In Deg (${orders.filter((o) => o.status === 'preparing').length})` },
            { id: 'ready', label: `Ready (${orders.filter((o) => o.status === 'ready').length})` },
            { id: 'delivered', label: `Delivered (${orders.filter((o) => o.status === 'delivered').length})` },
          ].map((st) => (
            <button
              key={st.id}
              onClick={() => setSelectedStatus(st.id)}
              className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer whitespace-nowrap border ${
                selectedStatus === st.id
                  ? 'bg-[#2A050C] text-[#FAF7F2] border-[#2A050C] shadow-2xs'
                  : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
              }`}
            >
              {st.label}
            </button>
          ))}

          {(selectedStatus !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedStatus('all');
                setSearchQuery('');
              }}
              className="ml-2 px-2.5 py-1 rounded-md text-xs font-semibold bg-stone-200/80 hover:bg-stone-300 text-stone-700 cursor-pointer transition-colors"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {/* 4 Swimlane Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
        {columns.map((col) => {
          const isColumnDimmed = selectedStatus !== 'all' && selectedStatus !== col.id;
          const colOrders = orders
            .filter((o) => o.status === col.id)
            .filter((o) => {
              if (!searchQuery.trim()) return true;
              const q = searchQuery.toLowerCase();
              const matchId = o.id.toLowerCase().includes(q);
              const matchTable = o.table.toLowerCase().includes(q);
              const matchGuest = o.guest?.toLowerCase().includes(q);
              const matchItems = o.items.some((it) => it.name.toLowerCase().includes(q));
              return matchId || matchTable || matchGuest || matchItems;
            });

          return (
            <div
              key={col.id}
              className={`p-4 rounded-2xl border transition-all bg-[#FCFAF7] border-[rgba(212,163,70,0.2)] shadow-2xs flex flex-col ${
                isColumnDimmed ? 'opacity-30 grayscale-40 pointer-events-none' : 'opacity-100'
              }`}
            >
              {/* Column Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[rgba(212,163,70,0.18)]">
                <div className="flex items-center space-x-1.5">
                  <span className="text-sm">{col.icon}</span>
                  <span className={`text-xs font-bold tracking-wider uppercase ${textColor}`}>
                    {col.label}
                  </span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="text-[10px] text-stone-400 font-mono">
                    {col.sla}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${col.badgeColor}`}>
                    {colOrders.length}
                  </span>
                </div>
              </div>

              {/* Orders in Column */}
              <div className="mt-3.5 space-y-3">
                {colOrders.length === 0 ? (
                  <div className="py-12 px-4 text-center rounded-xl border border-dashed border-stone-200 bg-white/50 text-xs text-stone-400 italic">
                    No active tickets in this stage
                  </div>
                ) : (
                  colOrders.map((ord) => (
                    <div
                      key={ord.id}
                      className={`p-4 rounded-xl border shadow-2xs space-y-3 transition-all hover:shadow-xs ${cardBg}`}
                    >
                      {/* Ticket Header: ID + Table Badge */}
                      <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                        <span className="font-mono font-bold text-xs text-[#A37424] bg-[#FAF5EB] px-2 py-0.5 rounded border border-[#D4A346]/30">
                          {ord.id}
                        </span>
                        <span className="font-bold text-xs px-2.5 py-0.5 rounded-md bg-[#2A050C] text-white tracking-wide">
                          {ord.table}
                        </span>
                      </div>

                      {/* Guest & Time Row */}
                      <div className="flex items-center justify-between text-xs">
                        <div className={`font-semibold text-xs ${textColor}`}>
                          {ord.guest}
                        </div>
                        <span className={`text-[10px] ${mutedText} flex items-center space-x-1`}>
                          <span>⏱</span>
                          <span>{ord.timestamp}</span>
                        </span>
                      </div>

                      {/* Itemized Dishes List */}
                      <div className="border-t border-b border-stone-100 py-2.5 space-y-1.5 text-xs">
                        {ord.items.map((it, idx) => (
                          <div key={idx} className="flex justify-between items-center text-[11px]">
                            <span className={textColor}>
                              <strong className="text-[#A37424] font-bold mr-1">{it.quantity}×</strong>
                              <span>{it.name}</span>
                            </span>
                            <span className="font-mono text-[11px] text-stone-500 font-medium">
                              ₹{(it.price * it.quantity).toLocaleString('en-IN')}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Special Chef Instructions Callout */}
                      {ord.notes && (
                        <div className="p-2 rounded-lg bg-amber-50/90 border border-amber-200/80 text-[11px] text-amber-900 flex items-start space-x-1.5">
                          <span className="text-amber-700 font-bold shrink-0">Chef Note:</span>
                          <span className="italic leading-snug">{ord.notes}</span>
                        </div>
                      )}

                      {/* Total Order Amount */}
                      <div className="flex justify-between items-center pt-1 text-xs">
                        <span className="text-[11px] text-stone-500 font-medium">Total Bill:</span>
                        <span className="font-mono font-bold text-xs text-[#1C1917]">
                          ₹{ord.total ? ord.total.toLocaleString('en-IN') : ord.items.reduce((sum, it) => sum + (it.price * it.quantity), 0).toLocaleString('en-IN')}
                        </span>
                      </div>

                      {/* Card Actions: Print Slip & Advance State */}
                      <div className="pt-2 flex items-center justify-between gap-2 border-t border-stone-100">
                        {/* Print Chit Button with Clean SVG Printer Icon */}
                        <button
                          onClick={() => setChitOrder(ord)}
                          className="px-2.5 py-1.5 rounded-lg border border-stone-200 bg-white hover:bg-stone-50 text-stone-700 text-[11px] font-medium flex items-center space-x-1.5 shadow-2xs transition-colors cursor-pointer"
                          title="Print Thermal POS Kitchen Chit"
                        >
                          <svg className="w-3.5 h-3.5 stroke-current fill-none text-stone-500" viewBox="0 0 24 24" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                          </svg>
                          <span>Print Slip</span>
                        </button>

                        {/* Advance State Primary Button */}
                        {col.actionLabel && (
                          <button
                            onClick={() => advanceOrderStatus(ord.id)}
                            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all shadow-2xs cursor-pointer flex items-center space-x-1 ${col.actionClass}`}
                          >
                            <span>{col.actionLabel}</span>
                          </button>
                        )}

                        {ord.status === 'delivered' && (
                          <span className="text-[11px] font-semibold text-[#047857] bg-[#ECFDF5] border border-[#A7F3D0] px-2.5 py-1 rounded-lg">
                            ✓ Served to Table
                          </span>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* POS Thermal Kitchen Chit Modal */}
      {chitOrder && (
        <KitchenChitModal
          order={chitOrder}
          onClose={() => setChitOrder(null)}
        />
      )}
    </div>
  );
}
