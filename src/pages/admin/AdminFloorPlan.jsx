import React, { useState } from 'react';

export function AdminFloorPlan() {
  const [selectedTable, setSelectedTable] = useState(null);
  const [statusFilter, setStatusFilter] = useState('all'); // 'all' | 'available' | 'seated' | 'reserved' | 'cleaning'
  const [zoneFilter, setZoneFilter] = useState('all'); // 'all' | 'Courtyard' | 'Torana Alcoves' | 'Garden Terroir' | 'Royal Hall'
  const [searchQuery, setSearchQuery] = useState('');

  // Table Inventory (24 tables across 4 zones)
  const [tables, setTables] = useState([
    // Zone 1: Central Stone Courtyard (Tables 1 - 8)
    { id: 1, name: 'Table 01', zone: 'Courtyard', seats: 4, status: 'seated', guest: 'Vikramaditya Roy', covers: 4, time: '19:30', server: 'Cap. Raghav' },
    { id: 2, name: 'Table 02', zone: 'Courtyard', seats: 2, status: 'available', guest: null, covers: 0, time: null, server: 'Cap. Raghav' },
    { id: 3, name: 'Table 03', zone: 'Courtyard', seats: 4, status: 'reserved', guest: 'Ananya Deshmukh', covers: 2, time: '20:30', server: 'Cap. Raghav' },
    { id: 4, name: 'Table 04', zone: 'Courtyard', seats: 4, status: 'seated', guest: 'Dr. Farooq Qureshi', covers: 4, time: '19:45', server: 'Cap. Raghav' },
    { id: 5, name: 'Table 05', zone: 'Courtyard', seats: 4, status: 'available', guest: null, covers: 0, time: null, server: 'Cap. Devraj' },
    { id: 6, name: 'Table 06', zone: 'Courtyard', seats: 2, status: 'seated', guest: 'Meera & Sid Joshi', covers: 2, time: '20:00', server: 'Cap. Devraj' },
    { id: 7, name: 'Table 07', zone: 'Courtyard', seats: 4, status: 'reserved', guest: 'Kavita Rao', covers: 3, time: '21:00', server: 'Cap. Devraj' },
    { id: 8, name: 'Table 08', zone: 'Courtyard', seats: 4, status: 'cleaning', guest: null, covers: 0, time: null, server: 'Cap. Devraj' },

    // Zone 2: Torana Alcove Pavilions (Tables 9 - 14)
    { id: 9, name: 'Alcove 09', zone: 'Torana Alcoves', seats: 2, status: 'seated', guest: 'Arjun Verma', covers: 2, time: '19:15', server: 'Cap. Shafi' },
    { id: 10, name: 'Alcove 10', zone: 'Torana Alcoves', seats: 2, status: 'available', guest: null, covers: 0, time: null, server: 'Cap. Shafi' },
    { id: 11, name: 'Alcove 11', zone: 'Torana Alcoves', seats: 4, status: 'seated', guest: 'Sunita Gokhale', covers: 4, time: '19:50', server: 'Cap. Shafi' },
    { id: 12, name: 'Alcove 12', zone: 'Torana Alcoves', seats: 2, status: 'reserved', guest: 'Col. Rajeshwar', covers: 2, time: '20:15', server: 'Cap. Shafi' },
    { id: 13, name: 'Alcove 13', zone: 'Torana Alcoves', seats: 4, status: 'available', guest: null, covers: 0, time: null, server: 'Cap. Naveen' },
    { id: 14, name: 'Alcove 14', zone: 'Torana Alcoves', seats: 2, status: 'cleaning', guest: null, covers: 0, time: null, server: 'Cap. Naveen' },

    // Zone 3: Garden Terroir (Tables 15 - 20)
    { id: 15, name: 'Garden 15', zone: 'Garden Terroir', seats: 4, status: 'seated', guest: 'Marcus Sterling', covers: 4, time: '19:20', server: 'Cap. Naveen' },
    { id: 16, name: 'Garden 16', zone: 'Garden Terroir', seats: 4, status: 'available', guest: null, covers: 0, time: null, server: 'Cap. Naveen' },
    { id: 17, name: 'Garden 17', zone: 'Garden Terroir', seats: 2, status: 'available', guest: null, covers: 0, time: null, server: 'Cap. Naveen' },
    { id: 18, name: 'Garden 18', zone: 'Garden Terroir', seats: 4, status: 'reserved', guest: 'Pooja Hegde', covers: 4, time: '21:15', server: 'Cap. Tenzin' },
    { id: 19, name: 'Garden 19', zone: 'Garden Terroir', seats: 2, status: 'seated', guest: 'Sameer Khan', covers: 2, time: '20:10', server: 'Cap. Tenzin' },
    { id: 20, name: 'Garden 20', zone: 'Garden Terroir', seats: 4, status: 'available', guest: null, covers: 0, time: null, server: 'Cap. Tenzin' },

    // Zone 4: Heritage Royal Hall (Tables 21 - 24)
    { id: 21, name: 'Royal Hall 21', zone: 'Royal Hall', seats: 8, status: 'seated', guest: 'Nawabzada Family Feast', covers: 8, time: '19:00', server: 'Head Captain Irfan' },
    { id: 22, name: 'Royal Hall 22', zone: 'Royal Hall', seats: 6, status: 'available', guest: null, covers: 0, time: null, server: 'Head Captain Irfan' },
    { id: 23, name: 'Royal Hall 23', zone: 'Royal Hall', seats: 6, status: 'reserved', guest: 'Ambassador Delegation', covers: 6, time: '20:45', server: 'Head Captain Irfan' },
    { id: 24, name: 'Royal Hall 24', zone: 'Royal Hall', seats: 10, status: 'seated', guest: 'Royal Wedding Tasting', covers: 10, time: '18:45', server: 'Head Captain Irfan' },
  ]);

  const updateTableStatus = (tableId, newStatus) => {
    setTables((prev) =>
      prev.map((t) => (t.id === tableId ? { ...t, status: newStatus } : t))
    );
    if (selectedTable && selectedTable.id === tableId) {
      setSelectedTable((prev) => ({ ...prev, status: newStatus }));
    }
  };

  const statusCounts = {
    available: tables.filter((t) => t.status === 'available').length,
    seated: tables.filter((t) => t.status === 'seated').length,
    reserved: tables.filter((t) => t.status === 'reserved').length,
    cleaning: tables.filter((t) => t.status === 'cleaning').length,
  };

  // High-Contrast Status Banner Architecture (Instantly Differentiable & Visually Pleasing)
  const renderTableCard = (table) => {
    const isSelected = selectedTable?.id === table.id;
    const isStatusMatched = statusFilter === 'all' || statusFilter === table.status;
    const isZoneMatched = zoneFilter === 'all' || zoneFilter === table.zone;
    const isSearchMatched = !searchQuery.trim() ||
      table.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (table.guest && table.guest.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (table.server && table.server.toLowerCase().includes(searchQuery.toLowerCase()));

    const isVisible = isStatusMatched && isZoneMatched && isSearchMatched;
    const isDimmed = !isVisible;

    const statusConfig = {
      available: {
        headerBg: 'bg-[#047857]',
        headerText: 'text-white',
        borderClass: 'border-[#047857]/40 hover:border-[#047857]',
        badge: (
          <span className="inline-flex items-center space-x-1 px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-white/20 text-white border border-white/30 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            <span>Open</span>
          </span>
        ),
        bodyBg: 'bg-white',
        primaryContent: (
          <div className="flex items-center space-x-1.5 text-[#047857] font-semibold text-xs">
            <svg className="w-3.5 h-3.5 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span>Ready for Seating</span>
          </div>
        ),
        subBadge: (
          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-[#ECFDF5] text-[#047857] border border-[#A7F3D0]">
            Vacant Table
          </span>
        ),
      },
      seated: {
        headerBg: 'bg-[#2A050C]',
        headerText: 'text-[#FAF7F2]',
        borderClass: 'border-2 border-[#D4A346] shadow-xs',
        badge: (
          <span className="inline-flex items-center space-x-1 px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-[#D4A346]/25 text-[#F5DEB3] border border-[#D4A346]/50 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A346] animate-pulse" />
            <span>Seated</span>
          </span>
        ),
        bodyBg: 'bg-[#FCFAF7]',
        primaryContent: (
          <div className="font-bold text-xs text-[#2A050C] truncate" title={table.guest}>
            {table.guest}
          </div>
        ),
        subBadge: (
          <span className="inline-flex items-center space-x-1 px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#FAF3E5] text-[#8C5D14] border border-[#D4A346]/40">
            <span>⏱</span>
            <span>Since {table.time || '19:30'}</span>
          </span>
        ),
      },
      reserved: {
        headerBg: 'bg-[#D97706]',
        headerText: 'text-white',
        borderClass: 'border-[#D97706]/50 hover:border-[#D97706]',
        badge: (
          <span className="inline-flex items-center space-x-1 px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-white/20 text-white border border-white/30 uppercase tracking-wider">
            <span>⏱</span>
            <span>Reserved</span>
          </span>
        ),
        bodyBg: 'bg-[#FFFDF9]',
        primaryContent: (
          <div className="font-bold text-xs text-stone-900 truncate" title={table.guest}>
            {table.guest}
          </div>
        ),
        subBadge: (
          <span className="inline-flex items-center space-x-1 px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-[#FFFBEB] text-[#B45309] border border-amber-300">
            <span>Arr: {table.time || '20:30'}</span>
          </span>
        ),
      },
      cleaning: {
        headerBg: 'bg-[#64748B]',
        headerText: 'text-white',
        borderClass: 'border-2 border-dashed border-stone-300 hover:border-stone-400',
        badge: (
          <span className="inline-flex items-center space-x-1 px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-white/20 text-white border border-white/30 uppercase tracking-wider">
            <span>✦</span>
            <span>Reset</span>
          </span>
        ),
        bodyBg: 'bg-[#F8FAFC]',
        primaryContent: (
          <div className="text-xs text-stone-600 font-medium italic">
            Sanitizing &amp; Reset
          </div>
        ),
        subBadge: (
          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-stone-100 text-stone-600 border border-stone-200">
            Bussing Cycle
          </span>
        ),
      },
    }[table.status] || {};

    return (
      <button
        key={table.id}
        onClick={() => setSelectedTable(table)}
        className={`group relative flex flex-col rounded-xl border text-left transition-all duration-200 cursor-pointer overflow-hidden shadow-2xs hover:shadow-md ${
          statusConfig.borderClass
        } ${statusConfig.bodyBg} ${
          isSelected ? 'ring-2 ring-[#D4A346] shadow-md scale-102 z-10' : 'hover:-translate-y-0.5'
        } ${isDimmed ? 'opacity-30 grayscale-40 pointer-events-none' : 'opacity-100'}`}
      >
        {/* Prominent High-Contrast Status Top Banner */}
        <div className={`px-3 py-1.5 flex items-center justify-between ${statusConfig.headerBg} ${statusConfig.headerText}`}>
          <div className="flex items-center space-x-2">
            <span className="font-serif font-bold text-xs tracking-wide">
              {table.name}
            </span>
            <span className="text-[10px] font-mono px-1 py-0.2 rounded bg-black/15 text-white/90">
              {table.seats}p
            </span>
          </div>
          {statusConfig.badge}
        </div>

        {/* Card Body */}
        <div className="p-3 flex-1 flex flex-col justify-between space-y-2">
          <div>
            {statusConfig.primaryContent}
          </div>

          <div className="flex items-center justify-between pt-1 border-t border-stone-200/60 text-[10px]">
            {statusConfig.subBadge}
            <span className="text-stone-500 font-sans truncate ml-1">
              {table.server?.replace('Cap. ', '')}
            </span>
          </div>
        </div>
      </button>
    );
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header & Status Summary */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-2 border-b border-[rgba(212,163,70,0.18)]">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FAF5EB] border border-[rgba(212,163,70,0.3)] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#D4A346]" />
            <span className="text-[#A37424] text-[11px] font-semibold tracking-wider uppercase">
              Sanctuary Table Map
            </span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917]">
            Interactive Table Floor Map
          </h1>
          <p className="text-xs text-[#78716C] mt-1">
            Real-time visual seating layout across Courtyard, Torana Alcoves, Garden, and Royal Hall
          </p>
        </div>

        {/* Interactive Status Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <button
            onClick={() => setStatusFilter('all')}
            className={`px-3 py-1.5 rounded-full font-medium transition-all cursor-pointer text-xs border ${
              statusFilter === 'all'
                ? 'bg-[#2A050C] text-[#FAF7F2] border-[#2A050C] shadow-xs'
                : 'bg-white text-stone-600 border-stone-200 hover:border-stone-400'
            }`}
          >
            All Tables ({tables.length})
          </button>

          <button
            onClick={() => setStatusFilter(statusFilter === 'available' ? 'all' : 'available')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full font-semibold transition-all cursor-pointer text-xs border ${
              statusFilter === 'available'
                ? 'bg-[#047857] text-white border-[#047857] shadow-xs'
                : 'bg-white text-[#047857] border-[#047857]/35 hover:bg-[#ECFDF5]'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#047857]" />
            <span>Open ({statusCounts.available})</span>
          </button>

          <button
            onClick={() => setStatusFilter(statusFilter === 'seated' ? 'all' : 'seated')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full font-semibold transition-all cursor-pointer text-xs border ${
              statusFilter === 'seated'
                ? 'bg-[#2A050C] text-[#FAF7F2] border-[#D4A346] shadow-xs'
                : 'bg-white text-[#2A050C] border-[#D4A346]/40 hover:bg-[#FAF5EB]'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#D4A346] animate-pulse" />
            <span>Seated ({statusCounts.seated})</span>
          </button>

          <button
            onClick={() => setStatusFilter(statusFilter === 'reserved' ? 'all' : 'reserved')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full font-semibold transition-all cursor-pointer text-xs border ${
              statusFilter === 'reserved'
                ? 'bg-[#D97706] text-white border-[#D97706] shadow-xs'
                : 'bg-white text-[#D97706] border-amber-400 hover:bg-[#FFFBEB]'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#D97706]" />
            <span>Reserved ({statusCounts.reserved})</span>
          </button>

          <button
            onClick={() => setStatusFilter(statusFilter === 'cleaning' ? 'all' : 'cleaning')}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full font-semibold transition-all cursor-pointer text-xs border ${
              statusFilter === 'cleaning'
                ? 'bg-[#64748B] text-white border-[#64748B] shadow-xs'
                : 'bg-white text-[#64748B] border-stone-300 hover:bg-stone-50'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#64748B]" />
            <span>Resetting ({statusCounts.cleaning})</span>
          </button>
        </div>
      </div>

      {/* Secondary Search & Zone Filter Bar */}
      <div className="p-3.5 rounded-xl bg-white border border-[rgba(212,163,70,0.22)] shadow-2xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs">
        {/* Search Input */}
        <div className="relative flex-1 max-w-sm">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search table (e.g. Table 04), guest, or captain..."
            className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-stone-300 bg-white text-[#1C1917] focus:outline-none focus:border-[#D4A346]"
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

        {/* Zone Filter Chips */}
        <div className="flex items-center space-x-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <span className="text-[11px] text-stone-500 font-medium mr-1">Zone:</span>
          {[
            { id: 'all', label: 'All Zones' },
            { id: 'Courtyard', label: 'Courtyard' },
            { id: 'Torana Alcoves', label: 'Alcoves' },
            { id: 'Garden Terroir', label: 'Garden' },
            { id: 'Royal Hall', label: 'Royal Hall' },
          ].map((z) => (
            <button
              key={z.id}
              onClick={() => setZoneFilter(z.id)}
              className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer whitespace-nowrap border ${
                zoneFilter === z.id
                  ? 'bg-[#2A050C] text-[#FAF7F2] border-[#2A050C]'
                  : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
              }`}
            >
              {z.label}
            </button>
          ))}

          {(statusFilter !== 'all' || zoneFilter !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setStatusFilter('all');
                setZoneFilter('all');
                setSearchQuery('');
              }}
              className="ml-2 px-2.5 py-1 rounded-md text-xs font-semibold bg-stone-200/80 hover:bg-stone-300 text-stone-700 cursor-pointer transition-colors"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Floor Plan Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Interactive Floor Matrix (8 cols) */}
        <div className="lg:col-span-8 p-6 sm:p-7 rounded-2xl border shadow-xs bg-white border-[rgba(212,163,70,0.22)] space-y-6">
          
          {/* Zone 1: Central Stone Courtyard */}
          <div>
            <div className="flex items-center justify-between border-b border-[rgba(212,163,70,0.18)] pb-2 mb-3">
              <span className="text-xs uppercase tracking-wider font-bold text-[#1C1917] flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A346]" />
                <span>1. Central Stone Courtyard (Surrounding Lotus Basin)</span>
              </span>
              <span className="text-[11px] font-mono text-[#78716C]">Tables 01 – 08</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {tables.filter((t) => t.zone === 'Courtyard').map(renderTableCard)}
            </div>
          </div>

          {/* Zone 2: Torana Alcove Pavilions */}
          <div>
            <div className="flex items-center justify-between border-b border-[rgba(212,163,70,0.18)] pb-2 mb-3">
              <span className="text-xs uppercase tracking-wider font-bold text-[#1C1917] flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A346]" />
                <span>2. Torana Alcove Pavilions (Intimate Curtained Nooks)</span>
              </span>
              <span className="text-[11px] font-mono text-[#78716C]">Alcoves 09 – 14</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {tables.filter((t) => t.zone === 'Torana Alcoves').map(renderTableCard)}
            </div>
          </div>

          {/* Zone 3: Garden Terroir & Zone 4: Royal Hall */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div>
              <div className="flex items-center justify-between border-b border-[rgba(212,163,70,0.18)] pb-2 mb-3">
                <span className="text-xs uppercase tracking-wider font-bold text-[#1C1917] flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A346]" />
                  <span>3. Garden Terroir (Alfresco)</span>
                </span>
                <span className="text-[11px] font-mono text-[#78716C]">15 – 20</span>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {tables.filter((t) => t.zone === 'Garden Terroir').map(renderTableCard)}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between border-b border-[rgba(212,163,70,0.18)] pb-2 mb-3">
                <span className="text-xs uppercase tracking-wider font-bold text-[#1C1917] flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A346]" />
                  <span>4. Heritage Royal Hall</span>
                </span>
                <span className="text-[11px] font-mono text-[#78716C]">21 – 24</span>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {tables.filter((t) => t.zone === 'Royal Hall').map(renderTableCard)}
              </div>
            </div>
          </div>

        </div>

        {/* Selected Table Inspector Drawer (4 cols) */}
        <div className="lg:col-span-4 p-6 sm:p-7 rounded-2xl border shadow-xs flex flex-col justify-between bg-white border-[rgba(212,163,70,0.22)]">
          {selectedTable ? (
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[rgba(212,163,70,0.18)]">
                <div>
                  <h2 className="font-serif text-xl font-bold text-[#1C1917]">
                    {selectedTable.name}
                  </h2>
                  <span className="text-xs text-[#78716C]">{selectedTable.zone}</span>
                </div>
                <span
                  className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                    selectedTable.status === 'available'
                      ? 'bg-[#047857] text-white border-[#047857]'
                      : selectedTable.status === 'seated'
                      ? 'bg-[#2A050C] text-[#FAF7F2] border-[#D4A346]'
                      : selectedTable.status === 'reserved'
                      ? 'bg-[#D97706] text-white border-[#D97706]'
                      : 'bg-[#64748B] text-white border-[#64748B]'
                  }`}
                >
                  {selectedTable.status}
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between pb-2 border-b border-stone-200/60">
                  <span className="text-[#78716C]">Capacity:</span>
                  <span className="font-semibold text-[#1C1917]">{selectedTable.seats} Seated Guests</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-stone-200/60">
                  <span className="text-[#78716C]">Current Patron:</span>
                  <span className="font-semibold text-[#1C1917]">{selectedTable.guest || 'None (Vacant Table)'}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-stone-200/60">
                  <span className="text-[#78716C]">Assigned Captain:</span>
                  <span className="font-semibold text-[#1C1917]">{selectedTable.server}</span>
                </div>
                {selectedTable.time && (
                  <div className="flex justify-between pb-2 border-b border-stone-200/60">
                    <span className="text-[#78716C]">
                      {selectedTable.status === 'seated' ? 'Seated Time:' : 'Arrival Time:'}
                    </span>
                    <span className="font-mono text-[#A37424] font-semibold">{selectedTable.time}</span>
                  </div>
                )}
              </div>

              {/* Status Update Actions */}
              <div className="pt-4 space-y-2.5">
                <span className="block text-[11px] uppercase tracking-wider font-semibold text-[#78716C]">
                  Update Table State:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => updateTableStatus(selectedTable.id, 'seated')}
                    className="px-3 py-2 text-xs rounded-lg bg-[#2A050C] text-[#FAF7F2] border border-[#D4A346] hover:bg-[#3D0A14] font-semibold transition-all shadow-2xs cursor-pointer flex items-center justify-center space-x-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4A346] animate-pulse" />
                    <span>Seat Party</span>
                  </button>
                  <button
                    onClick={() => updateTableStatus(selectedTable.id, 'available')}
                    className="px-3 py-2 text-xs rounded-lg bg-[#047857] text-white hover:bg-[#065f46] font-semibold transition-all shadow-2xs cursor-pointer flex items-center justify-center space-x-1"
                  >
                    <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Mark Ready</span>
                  </button>
                  <button
                    onClick={() => updateTableStatus(selectedTable.id, 'reserved')}
                    className="px-3 py-2 text-xs rounded-lg bg-[#D97706] text-white hover:bg-[#b45309] font-semibold transition-all shadow-2xs cursor-pointer flex items-center justify-center space-x-1"
                  >
                    <span>⏱</span>
                    <span>Hold / Reserve</span>
                  </button>
                  <button
                    onClick={() => updateTableStatus(selectedTable.id, 'cleaning')}
                    className="px-3 py-2 text-xs rounded-lg bg-[#64748B] text-white hover:bg-[#475569] font-semibold transition-all shadow-2xs cursor-pointer flex items-center justify-center space-x-1"
                  >
                    <span>✦</span>
                    <span>Sanitize</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="py-20 text-center space-y-3">
              <span className="text-3xl text-[#D4A346]">&bull;&bull;&bull;</span>
              <p className="font-serif text-lg font-bold text-[#1C1917]">Select Any Table</p>
              <p className="text-xs text-[#78716C] max-w-xs mx-auto leading-relaxed">
                Click any table tile on the floor map to inspect seated parties, assigned waitstaff, or update occupancy status.
              </p>
            </div>
          )}

          <div className="pt-6 border-t border-[rgba(212,163,70,0.15)] text-center text-[11px] text-[#A37424]">
            Total Floor Capacity: 24 Tables &bull; 86 Covers
          </div>
        </div>

      </div>
    </div>
  );
}
