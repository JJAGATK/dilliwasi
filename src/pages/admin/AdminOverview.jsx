import React, { useState, useMemo } from 'react';
import { initialReservations } from '../../data/mockData';
import { DietaryMarker } from '../../components/common/Badge';

export function AdminOverview() {
  // Operational Filters State
  const [activeShift, setActiveShift] = useState('all'); // 'all' | 'lunch' | 'dinner'
  const [selectedDate, setSelectedDate] = useState('today'); // 'today' | 'yesterday' | 'peak-saturday'
  const [selectedChartMetric, setSelectedChartMetric] = useState('revenue'); // 'revenue' | 'covers' | 'speed'
  const [hoveredHour, setHoveredHour] = useState(null);

  // Section Specific Filters
  const [dishCategoryFilter, setDishCategoryFilter] = useState('all'); // 'all' | 'curries' | 'tandoor' | 'biryani' | 'meetha'
  const [stationLoadFilter, setStationLoadFilter] = useState('all'); // 'all' | 'high' | 'optimal'
  const [zoneOccupancyFilter, setZoneOccupancyFilter] = useState('all'); // 'all' | 'full' | 'available'

  // Guest Stream Filters
  const [reservationFilter, setReservationFilter] = useState('all'); // 'all' | 'seated' | 'vip' | 'upcoming' | 'cancelled'
  const [resSearchQuery, setResSearchQuery] = useState('');
  const [resDietaryFilter, setResDietaryFilter] = useState('all'); // 'all' | 'veg' | 'nonveg'

  // Refined Executive Color System (Pure White Cards, Luxury Cream Accents)
  const cardBg = 'bg-white border-[rgba(212,163,70,0.22)] shadow-[0_4px_20px_rgba(0,0,0,0.03)]';
  const cardElevated = 'bg-gradient-to-br from-[#FCFAF7] to-[#F7F3EB] border-[rgba(212,163,70,0.28)] shadow-xs';
  const textColor = 'text-[#1C1917]';
  const mutedText = 'text-[#78716C]';
  const sublineText = 'text-[#A37424]';
  const tableHeaderBg = 'bg-[#FAF6EE]';

  // 10-Hour Service Velocity Dataset
  const allHourlyServiceData = useMemo(() => [
    { hour: '12:00', label: '12 PM', shift: 'lunch', revenue: 16400, covers: 12, prepTime: 12, peak: false, note: 'Lunch Opening' },
    { hour: '13:00', label: '1 PM', shift: 'lunch', revenue: 38200, covers: 28, prepTime: 14, peak: false, note: 'Executive Lunch' },
    { hour: '14:00', label: '2 PM', shift: 'lunch', revenue: 42400, covers: 32, prepTime: 16, peak: true, note: 'Lunch Peak Rush' },
    { hour: '15:00', label: '3 PM', shift: 'lunch', revenue: 14200, covers: 10, prepTime: 11, peak: false, note: 'Lunch Wind-down' },
    { hour: '18:00', label: '6 PM', shift: 'dinner', revenue: 8600, covers: 6, prepTime: 10, peak: false, note: 'Early Aperitif Wave' },
    { hour: '19:00', label: '7 PM', shift: 'dinner', revenue: 34500, covers: 24, prepTime: 13, peak: false, note: 'First Dinner Seating' },
    { hour: '20:00', label: '8 PM', shift: 'dinner', revenue: 68200, covers: 44, prepTime: 17, peak: true, note: 'Grand Degustation Peak' },
    { hour: '21:00', label: '9 PM', shift: 'dinner', revenue: 58400, covers: 38, prepTime: 15, peak: false, note: 'Second Dinner Seating' },
    { hour: '22:00', label: '10 PM', shift: 'dinner', revenue: 26800, covers: 18, prepTime: 12, peak: false, note: 'Dessert & Digestif Wave' },
    { hour: '23:00', label: '11 PM', shift: 'dinner', revenue: 8900, covers: 6, prepTime: 9, peak: false, note: 'Late Service Close' },
  ], []);

  // Filtered hourly data based on shift filter
  const displayedHourlyData = useMemo(() => {
    if (activeShift === 'lunch') {
      return allHourlyServiceData.filter((d) => d.shift === 'lunch');
    }
    if (activeShift === 'dinner') {
      return allHourlyServiceData.filter((d) => d.shift === 'dinner');
    }
    return allHourlyServiceData;
  }, [allHourlyServiceData, activeShift]);

  // Dynamic Shift Metrics for KPI cards
  const shiftMetrics = useMemo(() => {
    const totalRev = displayedHourlyData.reduce((sum, d) => sum + d.revenue, 0);
    const totalCovers = displayedHourlyData.reduce((sum, d) => sum + d.covers, 0);
    const avgPrep = Math.round(
      displayedHourlyData.reduce((sum, d) => sum + d.prepTime, 0) / (displayedHourlyData.length || 1)
    );
    const peakHour = [...displayedHourlyData].sort((a, b) => b.revenue - a.revenue)[0];

    return {
      revenue: `₹ ${totalRev.toLocaleString('en-IN')}`,
      rawRev: totalRev,
      covers: totalCovers,
      avgPrep: `${avgPrep}m`,
      peakHour: peakHour ? `${peakHour.hour} (${peakHour.note})` : 'None',
      peakRev: peakHour ? `₹ ${peakHour.revenue.toLocaleString('en-IN')}` : '₹ 0',
      avgTicket: totalCovers > 0 ? `₹ ${Math.round(totalRev / totalCovers).toLocaleString('en-IN')}` : '₹ 0',
    };
  }, [displayedHourlyData]);

  // Kitchen Station Live Throughput Telemetry
  const allKitchenStations = useMemo(() => [
    {
      id: 'tandoor',
      name: 'Sigri & Clay Tandoor',
      lead: 'Ustad Karim',
      activeOrders: 4,
      capacityPercent: 78,
      avgTime: '12m',
      status: 'Optimal Flow',
      loadType: 'optimal',
      statusColor: 'text-[#059669] bg-[#059669]/10 border-[#059669]/25',
      accentColor: '#D4A346',
    },
    {
      id: 'deg',
      name: 'Copper Deg & Handi Curries',
      lead: 'Ustad Zubair',
      activeOrders: 6,
      capacityPercent: 92,
      avgTime: '16m',
      status: 'High Load (Pacing)',
      loadType: 'high',
      statusColor: 'text-[#D97706] bg-[#D97706]/10 border-[#D97706]/25',
      accentColor: '#E8C066',
    },
    {
      id: 'dum',
      name: 'Awadhi Dum Pukht & Breads',
      lead: 'Ustad Rashid',
      activeOrders: 3,
      capacityPercent: 52,
      avgTime: '9m',
      status: 'Ready for Surge',
      loadType: 'optimal',
      statusColor: 'text-[#059669] bg-[#059669]/10 border-[#059669]/25',
      accentColor: '#B38234',
    },
    {
      id: 'meetha',
      name: 'Halwai & Artisanal Sweetcraft',
      lead: 'Chef Mehra',
      activeOrders: 2,
      capacityPercent: 34,
      avgTime: '5m',
      status: 'Flambé Prepared',
      loadType: 'optimal',
      statusColor: 'text-[#059669] bg-[#059669]/10 border-[#059669]/25',
      accentColor: '#2E7D32',
    },
  ], []);

  const displayedKitchenStations = useMemo(() => {
    if (stationLoadFilter === 'high') {
      return allKitchenStations.filter((s) => s.loadType === 'high');
    }
    if (stationLoadFilter === 'optimal') {
      return allKitchenStations.filter((s) => s.loadType === 'optimal');
    }
    return allKitchenStations;
  }, [allKitchenStations, stationLoadFilter]);

  // Dining Zones Live Occupancy
  const allDiningZones = useMemo(() => [
    { id: 'stupa', name: 'The Stupa Courtyard', occupied: 7, total: 8, ambience: 'Evening Jasmine & Torana Glow', isFull: false },
    { id: 'haveli', name: 'Haveli Royal Salon', occupied: 8, total: 8, ambience: 'Live Sitar & Santoor Ragas (Full)', isFull: true },
    { id: 'verandah', name: 'The Fragrant Verandah', occupied: 4, total: 5, ambience: 'Water Lily Poolside', isFull: false },
    { id: 'ashokan', name: 'Ashokan Private Dining Room', occupied: 2, total: 2, ambience: 'VIP Diplomatic Degustation', isFull: true },
  ], []);

  const displayedDiningZones = useMemo(() => {
    if (zoneOccupancyFilter === 'full') {
      return allDiningZones.filter((z) => z.isFull);
    }
    if (zoneOccupancyFilter === 'available') {
      return allDiningZones.filter((z) => !z.isFull);
    }
    return allDiningZones;
  }, [allDiningZones, zoneOccupancyFilter]);

  // Category Revenue Share
  const categoryShare = [
    { label: 'Tandoor & Embers', percent: 32, revenue: '₹ 59,080', color: '#D4A346' },
    { label: 'Royal Handi & Curries', percent: 28, revenue: '₹ 51,700', color: '#B38234' },
    { label: 'Awadhi Dum Biryani', percent: 20, revenue: '₹ 36,930', color: '#8C6228' },
    { label: 'Small Plates & Chaat', percent: 12, revenue: '₹ 22,150', color: '#2E7D32' },
    { label: 'Artisanal Sweetcraft', percent: 8, revenue: '₹ 14,790', color: '#E8C066' },
  ];

  // Top Ranked Repertoire Dishes
  const allRankedDishes = useMemo(() => [
    { name: 'Nalli Nihari Khaas', category: 'curries', catLabel: 'Royal Curries', portions: 48, revenue: '₹ 42,720', margin: '74%' },
    { name: 'Dal Sanchi 1928', category: 'curries', catLabel: 'Overnight Deg', portions: 56, revenue: '₹ 29,120', margin: '82%' },
    { name: 'Kakori Galawat Kebab', category: 'tandoor', catLabel: 'Clay Embers', portions: 41, revenue: '₹ 27,880', margin: '68%' },
    { name: 'Dum Pukht Gosht Biryani', category: 'biryani', catLabel: 'Awadhi Basmati', portions: 32, revenue: '₹ 26,240', margin: '71%' },
    { name: 'Shahi Tukda Saffron Cloud', category: 'meetha', catLabel: 'Artisanal Meetha', portions: 28, revenue: '₹ 12,600', margin: '85%' },
  ], []);

  const displayedRankedDishes = useMemo(() => {
    if (dishCategoryFilter !== 'all') {
      return allRankedDishes.filter((d) => d.category === dishCategoryFilter);
    }
    return allRankedDishes;
  }, [allRankedDishes, dishCategoryFilter]);

  // Max value for chart normalization based on currently displayed hourly data
  const maxChartValue = useMemo(() => {
    if (!displayedHourlyData.length) return 100;
    if (selectedChartMetric === 'revenue') {
      return Math.max(...displayedHourlyData.map((d) => d.revenue));
    }
    if (selectedChartMetric === 'covers') {
      return Math.max(...displayedHourlyData.map((d) => d.covers));
    }
    return Math.max(...displayedHourlyData.map((d) => d.prepTime));
  }, [displayedHourlyData, selectedChartMetric]);

  // Extended mock reservations for full rich interactive testing
  const allReservations = useMemo(() => [
    ...initialReservations,
    {
      id: "RES-706",
      guestName: "Maharani Gayatri Rao",
      phone: "+91 98210 33412",
      email: "gayatri.rao@heritage.in",
      date: "2026-11-06",
      time: "20:45",
      partySize: 8,
      table: "Ashokan Private Dining Room",
      status: "seated",
      specialRequest: "Grand 9-course Royal Degustation with saffron pairing.",
      dietary: "Non-Veg",
    },
    {
      id: "RES-707",
      guestName: "Ambassador Henri Dubois",
      phone: "+91 97110 88219",
      email: "h.dubois@embassy.gov.fr",
      date: "2026-11-06",
      time: "21:15",
      partySize: 4,
      table: "Table 21 (Royal Hall)",
      status: "confirmed",
      specialRequest: "French-speaking steward requested.",
      dietary: "Veg",
    },
    {
      id: "RES-708",
      guestName: "Sunita & Arvind Gokhale",
      phone: "+91 94112 77014",
      email: "arvind.g@techcorp.in",
      date: "2026-11-06",
      time: "19:45",
      partySize: 2,
      table: "Table 01 (Courtyard)",
      status: "seated",
      specialRequest: "Window lotus view.",
      dietary: "Veg",
    },
  ], []);

  // Filter reservations based on status, search, and dietary
  const filteredReservations = useMemo(() => {
    return allReservations.filter((res) => {
      // Status tab filter
      if (reservationFilter === 'seated' && res.status !== 'seated') return false;
      if (reservationFilter === 'vip' && !(res.partySize >= 4 || res.table?.toLowerCase().includes('private') || res.table?.toLowerCase().includes('royal'))) return false;
      if (reservationFilter === 'upcoming' && !(res.status === 'confirmed' || res.status === 'pending')) return false;
      if (reservationFilter === 'cancelled' && res.status !== 'cancelled') return false;

      // Dietary filter
      if (resDietaryFilter === 'veg' && !res.dietary?.toLowerCase().includes('veg') && res.dietary !== 'Veg') return false;
      if (resDietaryFilter === 'nonveg' && res.dietary?.toLowerCase().includes('non-veg') === false && res.dietary !== 'Non-Veg') return false;

      // Search query filter
      if (resSearchQuery.trim()) {
        const q = resSearchQuery.toLowerCase();
        const matchName = res.guestName?.toLowerCase().includes(q);
        const matchPhone = res.phone?.toLowerCase().includes(q);
        const matchId = res.id?.toLowerCase().includes(q);
        const matchTable = res.table?.toLowerCase().includes(q);
        if (!matchName && !matchPhone && !matchId && !matchTable) return false;
      }

      return true;
    });
  }, [allReservations, reservationFilter, resDietaryFilter, resSearchQuery]);

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* SECTION 1: Master Console Header & Real-Time Operational Bar with Live Date & Shift Filter */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-2 border-b border-[rgba(212,163,70,0.18)]">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FAF5EB] border border-[rgba(212,163,70,0.3)] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
            <span className="text-[#A37424] text-[11px] font-semibold tracking-wider uppercase">
              Service Operations &bull; Live Console
            </span>
          </div>
          <h1 className={`font-serif text-2xl sm:text-3xl font-bold tracking-tight ${textColor}`}>
            Executive Operations Command
          </h1>
          <p className={`text-xs ${mutedText} mt-1`}>
            Real-time culinary velocity, KDS station pacing, and sanctuary table occupancy
          </p>
        </div>

        {/* Live Filter Controls: Date Selector + Shift Filters */}
        <div className="flex flex-wrap items-center gap-3 text-xs">
          {/* Operational Date Selector */}
          <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border bg-white border-[rgba(212,163,70,0.3)] shadow-2xs">
            <span className="text-[11px] text-[#A37424] font-semibold">Date:</span>
            <select
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="bg-transparent text-xs font-semibold text-[#1C1917] focus:outline-none cursor-pointer"
            >
              <option value="today">Tonight (Fri, Nov 6)</option>
              <option value="yesterday">Yesterday (Thu, Nov 5)</option>
              <option value="peak-saturday">Last Peak (Sat, Nov 1)</option>
            </select>
          </div>

          {/* Shift Filter Controls (Actively filters chart & metrics) */}
          <div className="flex items-center p-1 rounded-lg border bg-white border-[rgba(212,163,70,0.25)] shadow-2xs">
            {[
              { id: 'all', label: 'All Day (10h)' },
              { id: 'lunch', label: 'Lunch (12–3 PM)' },
              { id: 'dinner', label: 'Dinner (6–11 PM)' },
            ].map((shift) => (
              <button
                key={shift.id}
                onClick={() => setActiveShift(shift.id)}
                className={`px-3 py-1 rounded text-xs font-semibold transition-all cursor-pointer ${
                  activeShift === shift.id
                    ? 'bg-[#2A050C] text-[#FAF7F2] shadow-xs'
                    : 'text-[#6E5D53] hover:text-[#1C1917] hover:bg-[#FAF5EB]'
                }`}
              >
                {shift.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Active Filter Notification Pill */}
      {activeShift !== 'all' && (
        <div className="px-4 py-2 rounded-xl bg-[#FAF5EB] border border-[#D4A346]/40 flex items-center justify-between text-xs text-[#A37424]">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#D4A346]" />
            <span>
              Filtering Dashboard by <strong>{activeShift === 'lunch' ? 'Lunch Service Window' : 'Dinner Degustation Window'}</strong>. KPI cards and demand curves are reflecting this shift.
            </span>
          </div>
          <button
            onClick={() => setActiveShift('all')}
            className="font-semibold underline hover:text-[#2A050C] cursor-pointer"
          >
            Reset to All Day
          </button>
        </div>
      )}

      {/* SECTION 2: 4 Executive KPI Metric Cards with Dynamic Shift Data */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        {/* Card 1: Today's Gross Revenue (Dynamically calculates based on shift) */}
        <div className={`p-5 rounded-2xl border transition-all duration-300 hover:shadow-md ${cardBg}`}>
          <div className="flex items-center justify-between">
            <span className={`text-[11px] uppercase tracking-wider font-semibold ${mutedText}`}>
              Gross {activeShift === 'all' ? 'Daily' : activeShift === 'lunch' ? 'Lunch' : 'Dinner'} Revenue
            </span>
            <span className="text-[11px] font-bold text-[#059669] bg-[#059669]/10 border border-[#059669]/20 px-2 py-0.5 rounded-full">
              +18.4% &uarr;
            </span>
          </div>
          
          <div className="mt-2.5 flex items-baseline justify-between">
            <span className={`text-2xl sm:text-3xl font-serif font-bold ${textColor}`}>
              {shiftMetrics.revenue}
            </span>
            <span className="text-[11px] text-[#A37424] font-semibold">
              Goal: {activeShift === 'lunch' ? '₹ 1.2L' : activeShift === 'dinner' ? '₹ 1.8L' : '₹ 3.0L'}
            </span>
          </div>

          {/* Mini Sparkline Area Curve */}
          <div className="mt-3 h-8 w-full">
            <svg viewBox="0 0 120 30" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="sparkGold" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#D4A346" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#D4A346" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M0,24 Q20,18 40,20 T70,8 T95,12 T120,4 L120,30 L0,30 Z"
                fill="url(#sparkGold)"
              />
              <path
                d="M0,24 Q20,18 40,20 T70,8 T95,12 T120,4"
                fill="none"
                stroke="#D4A346"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className={`mt-2 pt-2 border-t border-[rgba(212,163,70,0.12)] flex items-center justify-between text-[11px] ${mutedText}`}>
            <span>Avg Ticket: <strong className={textColor}>{shiftMetrics.avgTicket}</strong></span>
            <span>Peak: <strong className="text-[#059669]">{shiftMetrics.peakRev}</strong></span>
          </div>
        </div>

        {/* Card 2: Dining Covers & Capacity */}
        <div className={`p-5 rounded-2xl border transition-all duration-300 hover:shadow-md ${cardBg}`}>
          <div className="flex items-center justify-between">
            <span className={`text-[11px] uppercase tracking-wider font-semibold ${mutedText}`}>
              Dining Covers
            </span>
            <span className="text-[11px] font-bold text-[#A37424] bg-[#FAF5EB] border border-[#D4A346]/30 px-2 py-0.5 rounded-full">
              {shiftMetrics.covers} Pax
            </span>
          </div>

          <div className="mt-2.5 flex items-baseline justify-between">
            <span className={`text-2xl sm:text-3xl font-serif font-bold ${textColor}`}>
              {shiftMetrics.covers} Guests
            </span>
            <span className={`text-[11px] ${mutedText}`}>
              Capacity: {activeShift === 'all' ? '250 Pax' : '86 Seats'}
            </span>
          </div>

          {/* Mini Sparkline Step Bars */}
          <div className="mt-3 h-8 w-full flex items-end gap-1.5">
            {[35, 50, 75, 40, 25, 60, 95, 85, 70, 30].slice(0, displayedHourlyData.length).map((val, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm transition-all"
                style={{
                  height: `${val}%`,
                  backgroundColor: i === (activeShift === 'lunch' ? 2 : 2) ? '#D4A346' : 'rgba(212, 163, 70, 0.35)',
                }}
              />
            ))}
          </div>

          <div className={`mt-2 pt-2 border-t border-[rgba(212,163,70,0.12)] flex items-center justify-between text-[11px] ${mutedText}`}>
            <span>Table Turns: <strong className={textColor}>{activeShift === 'all' ? '2.5x' : '1.2x'}</strong></span>
            <span>Avg Dwell: <strong className={textColor}>82m</strong></span>
          </div>
        </div>

        {/* Card 3: Kitchen Velocity & Live Degs */}
        <div className={`p-5 rounded-2xl border transition-all duration-300 hover:shadow-md ${cardBg}`}>
          <div className="flex items-center justify-between">
            <span className={`text-[11px] uppercase tracking-wider font-semibold ${mutedText}`}>
              Kitchen Pacing (SLA)
            </span>
            <span className="text-[11px] font-bold text-[#059669] bg-[#059669]/10 border border-[#059669]/20 px-2 py-0.5 rounded-full">
              {shiftMetrics.avgPrep} &bull; On SLA
            </span>
          </div>

          <div className="mt-2.5 flex items-baseline justify-between">
            <span className={`text-2xl sm:text-3xl font-serif font-bold ${textColor}`}>
              5 Live Tickets
            </span>
            <span className="text-[11px] text-[#059669] font-semibold">Target: 18m</span>
          </div>

          {/* Mini Progress Bar Track */}
          <div className="mt-4 w-full">
            <div className="flex justify-between text-[10px] mb-1">
              <span className={mutedText}>Deg Simmer Pace</span>
              <span className="font-semibold text-[#A37424]">76% Optimal</span>
            </div>
            <div className="w-full h-2 rounded-full bg-stone-200/50 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#D4A346] to-[#059669]"
                style={{ width: '76%' }}
              />
            </div>
          </div>

          <div className={`mt-2 pt-2 border-t border-[rgba(212,163,70,0.12)] flex items-center justify-between text-[11px] ${mutedText}`}>
            <span>Plated: <strong className={textColor}>84 Degs</strong></span>
            <span>Overdue: <strong className="text-[#059669]">0</strong></span>
          </div>
        </div>

        {/* Card 4: VIP & Tasting Degustations */}
        <div className={`p-5 rounded-2xl border transition-all duration-300 hover:shadow-md ${cardBg}`}>
          <div className="flex items-center justify-between">
            <span className={`text-[11px] uppercase tracking-wider font-semibold ${mutedText}`}>
              Active Reservations
            </span>
            <span className="text-[11px] font-bold text-[#A37424] bg-[#FAF5EB] border border-[#D4A346]/30 px-2 py-0.5 rounded-full">
              {allReservations.length} Booked
            </span>
          </div>

          <div className="mt-2.5 flex items-baseline justify-between">
            <span className={`text-2xl sm:text-3xl font-serif font-bold ${textColor}`}>
              {allReservations.filter((r) => r.status === 'seated').length} Seated Now
            </span>
            <span className="text-[11px] text-[#A37424] font-semibold">
              {allReservations.filter((r) => r.status === 'confirmed').length} Upcoming
            </span>
          </div>

          {/* Segmented Tier Dots */}
          <div className="mt-4 flex items-center space-x-1.5">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((dot) => (
              <div
                key={dot}
                className="flex-1 h-2 rounded-full"
                style={{
                  backgroundColor: dot <= 6 ? '#D4A346' : 'rgba(212,163,70,0.25)',
                }}
                title={dot <= 6 ? 'Confirmed VIP' : 'Waitlist Slot'}
              />
            ))}
          </div>

          <div className={`mt-2 pt-2 border-t border-[rgba(212,163,70,0.12)] flex items-center justify-between text-[11px] ${mutedText}`}>
            <span>Private Salon: <strong className="text-[#059669]">100% Full</strong></span>
            <span>Waitlist: <strong className={textColor}>4 Parties</strong></span>
          </div>
        </div>

      </div>

      {/* SECTION 3: Main Analytical Visualizations Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Hourly Service Velocity Interactive Graph (8 cols) */}
        <div className={`lg:col-span-8 p-6 sm:p-7 rounded-2xl border shadow-xs ${cardBg}`}>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[rgba(212,163,70,0.15)]">
            <div>
              <div className="flex items-center space-x-2">
                <h2 className={`font-serif text-xl font-bold tracking-tight ${textColor}`}>
                  Service Velocity &amp; Demand Curve
                </h2>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#FAF5EB] text-[#A37424] border border-[#D4A346]/30 uppercase">
                  {activeShift === 'all' ? 'All 10 Hours' : `${activeShift} Shift`}
                </span>
              </div>
              <p className={`text-xs ${mutedText} mt-0.5`}>
                Hover any hour bar to inspect micro-metrics, table throughput, and prep SLA
              </p>
            </div>

            {/* Metric Switcher Tabs */}
            <div className={`flex items-center p-1 rounded-lg border ${cardElevated}`}>
              {[
                { id: 'revenue', label: 'Revenue (₹)' },
                { id: 'covers', label: 'Covers (pax)' },
                { id: 'speed', label: 'Prep SLA (m)' },
              ].map((metric) => (
                <button
                  key={metric.id}
                  onClick={() => setSelectedChartMetric(metric.id)}
                  className={`px-3 py-1 rounded text-xs font-semibold transition-all cursor-pointer ${
                    selectedChartMetric === metric.id
                      ? 'bg-[#2A050C] text-[#FAF7F2] shadow-xs'
                      : `${mutedText} hover:${textColor}`
                  }`}
                >
                  {metric.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Chart Canvas */}
          <div className="mt-6 relative">
            
            {/* Y-Axis Value Labels & Gridlines */}
            <div className="h-64 flex flex-col justify-between absolute inset-0 pointer-events-none text-[10px] text-stone-400 font-mono">
              <div className="border-b border-stone-200/40 pb-1 flex justify-between">
                <span>{selectedChartMetric === 'revenue' ? '₹ 70k' : selectedChartMetric === 'covers' ? '50 pax' : '20 min'}</span>
                <span className="text-[10px] text-[#A37424] opacity-75">Target SLA Threshold</span>
              </div>
              <div className="border-b border-stone-200/30 pb-1">
                <span>{selectedChartMetric === 'revenue' ? '₹ 50k' : selectedChartMetric === 'covers' ? '35 pax' : '15 min'}</span>
              </div>
              <div className="border-b border-stone-200/30 pb-1">
                <span>{selectedChartMetric === 'revenue' ? '₹ 25k' : selectedChartMetric === 'covers' ? '20 pax' : '10 min'}</span>
              </div>
              <div className="border-b border-stone-200/30 pb-1">
                <span>0</span>
              </div>
            </div>

            {/* SVG Bars Dynamically Filtered by activeShift */}
            <div className="h-64 relative pt-4 pb-6 flex items-end justify-between px-6 z-10">
              {displayedHourlyData.map((d) => {
                const val = selectedChartMetric === 'revenue'
                  ? d.revenue
                  : selectedChartMetric === 'covers'
                  ? d.covers
                  : d.prepTime;

                const heightPercent = Math.max(12, (val / maxChartValue) * 85);
                const isHovered = hoveredHour === d.hour;

                return (
                  <div
                    key={d.hour}
                    onMouseEnter={() => setHoveredHour(d.hour)}
                    onMouseLeave={() => setHoveredHour(null)}
                    className="flex-1 flex flex-col items-center h-full justify-end group cursor-pointer relative mx-1"
                  >
                    {/* Tooltip on Hover */}
                    {isHovered && (
                      <div className="absolute -top-12 z-30 px-3 py-1.5 rounded-lg bg-[#2A050C] text-[#FAF7F2] text-[11px] font-sans shadow-xl border border-[#D4A346] whitespace-nowrap animate-page-enter">
                        <div className="font-bold text-[#D4A346]">{d.hour} hrs &bull; {d.note || 'Service Slot'}</div>
                        <div>
                          {selectedChartMetric === 'revenue' && `Revenue: ₹ ${d.revenue.toLocaleString('en-IN')}`}
                          {selectedChartMetric === 'covers' && `Dining Covers: ${d.covers} Guests`}
                          {selectedChartMetric === 'speed' && `Kitchen Prep: ${d.prepTime} mins`}
                        </div>
                      </div>
                    )}

                    {/* Bar with Gradient & Hover Glow */}
                    <div
                      className={`w-full max-w-[42px] rounded-t-lg transition-all duration-300 relative ${
                        d.peak
                          ? 'bg-gradient-to-t from-[#B38234] via-[#D4A346] to-[#E8C066] shadow-[0_0_16px_rgba(212,163,70,0.4)]'
                          : isHovered
                          ? 'bg-gradient-to-t from-[#B38234] to-[#D4A346] shadow-sm'
                          : 'bg-gradient-to-t from-[#D4A346]/40 to-[#D4A346]/80'
                      }`}
                      style={{ height: `${heightPercent}%` }}
                    >
                      {d.peak && (
                        <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[9px] text-[#A37424] font-bold">
                          ✦
                        </span>
                      )}
                    </div>

                    {/* X-Axis Hour Label */}
                    <span className={`text-[11px] font-mono mt-2 transition-colors ${
                      isHovered ? 'text-[#D4A346] font-bold' : mutedText
                    }`}>
                      {d.label}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Operational Insights Summary Footnote */}
          <div className="mt-4 pt-3 border-t border-[rgba(212,163,70,0.15)] flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#D4A346]" />
              <span className={textColor}>
                <strong>Peak Demand:</strong> {shiftMetrics.peakHour}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#059669]" />
              <span className={textColor}>
                <strong>Filtered Shift Revenue:</strong> {shiftMetrics.revenue} ({shiftMetrics.covers} Covers)
              </span>
            </div>
          </div>

        </div>

        {/* Right Column: Culinary Mix & Filterable Top Repertoire Dishes (4 cols) */}
        <div className={`lg:col-span-4 p-6 sm:p-7 rounded-2xl border shadow-xs ${cardBg} flex flex-col justify-between`}>
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-[rgba(212,163,70,0.15)]">
              <div>
                <h2 className={`font-serif text-lg font-bold tracking-tight ${textColor}`}>
                  Category Sales Mix
                </h2>
                <span className={`text-[11px] ${mutedText}`}>Gross culinary contribution</span>
              </div>
              <span className="text-xs font-mono font-bold text-[#A37424]">₹ 1,84,650</span>
            </div>

            {/* Multi-Segment Color Stack Bar */}
            <div className="mt-4">
              <div className="h-3 w-full rounded-full overflow-hidden flex shadow-2xs">
                {categoryShare.map((cat) => (
                  <div
                    key={cat.label}
                    style={{ width: `${cat.percent}%`, backgroundColor: cat.color }}
                    title={`${cat.label}: ${cat.percent}%`}
                  />
                ))}
              </div>

              {/* Legend & Percentages */}
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                {categoryShare.map((cat) => (
                  <div key={cat.label} className="flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: cat.color }} />
                    <span className={`text-[11px] truncate ${mutedText}`}>{cat.label}</span>
                    <span className={`text-[11px] font-mono font-bold ml-auto ${textColor}`}>{cat.percent}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Filterable Top Repertoire Dishes */}
            <div className="mt-6 pt-4 border-t border-[rgba(212,163,70,0.15)]">
              <div className="flex items-center justify-between mb-2">
                <h3 className={`text-xs font-bold uppercase tracking-wider ${sublineText}`}>
                  Top Fired Masterpieces
                </h3>
                <span className="text-[10px] text-stone-500 font-mono">
                  Showing {displayedRankedDishes.length} Dishes
                </span>
              </div>

              {/* Category Filter Chips for Top Dishes */}
              <div className="flex items-center space-x-1 overflow-x-auto pb-2 scrollbar-none mb-3">
                {[
                  { id: 'all', label: 'All' },
                  { id: 'curries', label: 'Curries' },
                  { id: 'tandoor', label: 'Tandoor' },
                  { id: 'biryani', label: 'Biryani' },
                  { id: 'meetha', label: 'Meetha' },
                ].map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setDishCategoryFilter(c.id)}
                    className={`px-2 py-0.5 rounded text-[10px] font-semibold transition-all cursor-pointer whitespace-nowrap ${
                      dishCategoryFilter === c.id
                        ? 'bg-[#2A050C] text-[#FAF7F2]'
                        : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>

              <div className="space-y-2.5">
                {displayedRankedDishes.map((dish, i) => (
                  <div
                    key={dish.name}
                    className="flex items-center justify-between text-xs pb-2 border-b border-stone-200/40 last:border-b-0"
                  >
                    <div className="flex items-center space-x-2.5">
                      <span className="w-5 h-5 rounded-full bg-[#FAF5EB] text-[#A37424] border border-[#D4A346]/30 flex items-center justify-center font-bold text-[10px]">
                        {i + 1}
                      </span>
                      <div>
                        <div className={`font-semibold text-xs ${textColor}`}>{dish.name}</div>
                        <span className={`text-[10px] ${mutedText}`}>{dish.portions} portions &bull; {dish.catLabel}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`font-mono font-bold text-xs ${textColor}`}>{dish.revenue}</div>
                      <span className="text-[10px] text-[#059669] font-medium">{dish.margin} margin</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="pt-4 border-t border-[rgba(212,163,70,0.15)] flex items-center justify-between text-xs">
            <span className="text-[11px] text-[#059669] font-semibold">
              &bull; 100% Spice consistency verified
            </span>
            <span className="text-[11px] font-mono text-[#A37424]">Chef Ustad Team</span>
          </div>

        </div>

      </div>

      {/* SECTION 4: Live Kitchen Station Throughput Telemetry with Load Filter */}
      <div className={`p-6 sm:p-7 rounded-2xl border shadow-xs ${cardBg}`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[rgba(212,163,70,0.15)]">
          <div>
            <h2 className={`font-serif text-xl font-bold tracking-tight ${textColor}`}>
              Live Kitchen Stations &amp; Deg Workload
            </h2>
            <p className={`text-xs ${mutedText} mt-0.5`}>
              Station-level KDS telemetry, thermal deg pacing, and culinary station heads
            </p>
          </div>

          {/* Station Load Filter Chips */}
          <div className="flex items-center space-x-1.5 text-xs">
            <span className="text-[11px] text-stone-500 font-medium mr-1">Filter:</span>
            {[
              { id: 'all', label: 'All (4)' },
              { id: 'high', label: 'High Load (1)' },
              { id: 'optimal', label: 'Optimal Flow (3)' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setStationLoadFilter(f.id)}
                className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
                  stationLoadFilter === f.id
                    ? 'bg-[#2A050C] text-[#FAF7F2] border-[#2A050C]'
                    : 'bg-white text-stone-600 border-stone-200 hover:border-stone-400'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
          {displayedKitchenStations.map((station) => (
            <div
              key={station.id}
              className={`p-4 rounded-xl border transition-all duration-200 hover:shadow-xs ${cardElevated}`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-xs font-bold truncate ${textColor}`}>
                  {station.name}
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${station.statusColor}`}>
                  {station.capacityPercent}% Load
                </span>
              </div>

              <div className="mt-2 text-xs">
                <span className={mutedText}>Head: </span>
                <strong className={textColor}>{station.lead}</strong>
              </div>

              {/* Progress bar */}
              <div className="mt-3 w-full bg-stone-200/60 rounded-full h-1.5 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${station.capacityPercent}%`,
                    backgroundColor: station.capacityPercent > 85 ? '#D97706' : '#059669',
                  }}
                />
              </div>

              <div className="mt-3 flex items-center justify-between text-[11px] pt-2 border-t border-stone-200/40">
                <span className={mutedText}>
                  Active: <strong className={textColor}>{station.activeOrders} tickets</strong>
                </span>
                <span className="font-mono text-[#A37424] font-semibold">
                  Avg SLA: {station.avgTime}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 5: Dining Zones Live Occupancy with Capacity Filter */}
      <div className={`p-6 sm:p-7 rounded-2xl border shadow-xs ${cardBg}`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[rgba(212,163,70,0.15)]">
          <div>
            <h2 className={`font-serif text-xl font-bold tracking-tight ${textColor}`}>
              Dining Zones Live Capacity Heatmap
            </h2>
            <p className={`text-xs ${mutedText} mt-0.5`}>
              Courtyard pavilions, royal salons, and alfresco terrace occupancy
            </p>
          </div>

          {/* Zone Capacity Filter */}
          <div className="flex items-center space-x-1.5 text-xs">
            <span className="text-[11px] text-stone-500 font-medium mr-1">Filter:</span>
            {[
              { id: 'all', label: 'All Zones (4)' },
              { id: 'full', label: '100% Full (2)' },
              { id: 'available', label: 'Available Seats (2)' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setZoneOccupancyFilter(f.id)}
                className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
                  zoneOccupancyFilter === f.id
                    ? 'bg-[#2A050C] text-[#FAF7F2] border-[#2A050C]'
                    : 'bg-white text-stone-600 border-stone-200 hover:border-stone-400'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
          {displayedDiningZones.map((zone) => {
            const percent = Math.round((zone.occupied / zone.total) * 100);
            return (
              <div
                key={zone.name}
                className={`p-4 rounded-xl border transition-all ${
                  zone.isFull ? 'bg-[#FAF5EB] border-[#D4A346]/40' : cardElevated
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-serif font-bold text-sm ${textColor}`}>
                    {zone.name}
                  </span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                      zone.isFull
                        ? 'bg-[#2A050C] text-[#FAF7F2] border-[#D4A346]'
                        : 'bg-[#059669]/10 text-[#059669] border-[#059669]/30'
                    }`}
                  >
                    {percent}% {zone.isFull ? 'Full' : 'Open'}
                  </span>
                </div>

                <div className="mt-2 text-xs">
                  <span className="font-mono font-bold text-sm text-[#A37424]">
                    {zone.occupied}
                  </span>
                  <span className={`text-[11px] ${mutedText}`}> / {zone.total} Tables Seated</span>
                </div>

                <p className={`text-[10px] ${mutedText} mt-1.5 italic truncate`}>
                  {zone.ambience}
                </p>

                {/* Table Mini Dot Grid */}
                <div className="mt-3 flex items-center space-x-1.5 pt-2 border-t border-stone-200/40">
                  {Array.from({ length: zone.total }).map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 h-2 rounded-xs transition-colors"
                      style={{
                        backgroundColor: i < zone.occupied ? '#D4A346' : 'rgba(212,163,70,0.2)',
                      }}
                      title={`Table ${i + 1}: ${i < zone.occupied ? 'Occupied' : 'Open'}`}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 6: Live Reservations Stream with Working Multi-Field Filters */}
      <div className={`p-6 sm:p-7 rounded-2xl border shadow-xs ${cardBg}`}>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-[rgba(212,163,70,0.15)]">
          <div>
            <div className="flex items-center space-x-2">
              <h2 className={`font-serif text-xl font-bold tracking-tight ${textColor}`}>
                Live Guest Reservation Stream
              </h2>
              <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-[#FAF5EB] text-[#A37424] border border-[#D4A346]/30">
                {filteredReservations.length} of {allReservations.length} Bookings
              </span>
            </div>
            <p className={`text-xs ${mutedText} mt-0.5`}>
              Filter by dining state, dietary classification, or search by guest name, phone, or allocated table
            </p>
          </div>

          {/* Status Filter Tabs */}
          <div className={`flex items-center p-1 rounded-lg border overflow-x-auto scrollbar-none ${cardElevated}`}>
            {[
              { id: 'all', label: `All (${allReservations.length})` },
              { id: 'seated', label: `Seated Now (${allReservations.filter((r) => r.status === 'seated').length})` },
              { id: 'vip', label: `VIP (${allReservations.filter((r) => r.partySize >= 4 || r.table?.toLowerCase().includes('private')).length})` },
              { id: 'upcoming', label: `Upcoming (${allReservations.filter((r) => r.status === 'confirmed' || r.status === 'pending').length})` },
              { id: 'cancelled', label: `Cancelled (${allReservations.filter((r) => r.status === 'cancelled').length})` },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setReservationFilter(f.id)}
                className={`px-2.5 py-1 rounded text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  reservationFilter === f.id
                    ? 'bg-[#2A050C] text-[#FAF7F2] shadow-xs'
                    : `${mutedText} hover:${textColor}`
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Secondary Filter & Search Toolbar */}
        <div className="mt-4 p-3 rounded-xl bg-[#FCFAF7] border border-[rgba(212,163,70,0.2)] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              value={resSearchQuery}
              onChange={(e) => setResSearchQuery(e.target.value)}
              placeholder="Search by guest name, pass code (RES-), phone, or table..."
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-stone-300 bg-white text-[#1C1917] focus:outline-none focus:border-[#D4A346] shadow-2xs"
            />
            <svg className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {resSearchQuery && (
              <button
                onClick={() => setResSearchQuery('')}
                className="absolute right-2.5 top-2 text-stone-400 hover:text-stone-700 text-xs cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Dietary Filter & Reset Actions */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1.5 bg-white border border-stone-300 rounded-lg px-2.5 py-1 shadow-2xs">
              <span className="text-stone-500 text-[11px] font-medium">Dietary:</span>
              <select
                value={resDietaryFilter}
                onChange={(e) => setResDietaryFilter(e.target.value)}
                className="bg-transparent text-xs font-semibold text-[#1C1917] focus:outline-none cursor-pointer"
              >
                <option value="all">All Preferences</option>
                <option value="veg">● Vegetarian</option>
                <option value="nonveg">▲ Non-Vegetarian</option>
              </select>
            </div>

            {(reservationFilter !== 'all' || resSearchQuery || resDietaryFilter !== 'all') && (
              <button
                onClick={() => {
                  setReservationFilter('all');
                  setResSearchQuery('');
                  setResDietaryFilter('all');
                }}
                className="px-3 py-1 rounded-lg bg-stone-200/80 hover:bg-stone-300 text-stone-700 text-xs font-semibold transition-colors cursor-pointer"
              >
                Reset All
              </button>
            )}
          </div>
        </div>

        {/* Reservations Table */}
        <div className="mt-4 overflow-x-auto rounded-xl border border-stone-200/80 shadow-2xs">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className={`border-b border-stone-200/60 ${tableHeaderBg} ${mutedText}`}>
                <th className="py-3 px-3.5 font-semibold">Pass Code</th>
                <th className="py-3 px-3.5 font-semibold">Guest Particulars</th>
                <th className="py-3 px-3.5 font-semibold">Seating Time</th>
                <th className="py-3 px-3.5 font-semibold">Covers</th>
                <th className="py-3 px-3.5 font-semibold">Table Location</th>
                <th className="py-3 px-3.5 font-semibold">Dietary Marker</th>
                <th className="py-3 px-3.5 font-semibold">Current State</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200/40 bg-white">
              {filteredReservations.length === 0 ? (
                <tr>
                  <td colSpan="7" className="py-12 text-center">
                    <p className="font-serif text-base font-bold text-[#1C1917]">No reservations match this filter</p>
                    <p className="text-xs text-stone-500 mt-1">Try clearing search terms or selecting "All Bookings"</p>
                    <button
                      onClick={() => {
                        setReservationFilter('all');
                        setResSearchQuery('');
                        setResDietaryFilter('all');
                      }}
                      className="mt-3 px-3 py-1 text-xs rounded bg-[#2A050C] text-[#FAF7F2] font-semibold cursor-pointer"
                    >
                      Clear All Filters
                    </button>
                  </td>
                </tr>
              ) : (
                filteredReservations.map((res) => (
                  <tr
                    key={res.id}
                    className="hover:bg-[rgba(212,163,70,0.06)] transition-colors"
                  >
                    <td className="py-3 px-3.5 font-mono font-bold text-[#A37424]">
                      {res.id}
                    </td>
                    <td className="py-3 px-3.5">
                      <div className={`font-semibold ${textColor}`}>{res.guestName}</div>
                      <span className={`text-[10px] ${mutedText}`}>{res.phone}</span>
                    </td>
                    <td className="py-3 px-3.5 font-mono text-stone-600">
                      {res.time} hrs
                    </td>
                    <td className={`py-3 px-3.5 font-semibold ${textColor}`}>
                      {res.partySize} Guests
                    </td>
                    <td className="py-3 px-3.5">
                      <span className="font-medium text-[#A37424]">{res.table}</span>
                    </td>
                    <td className="py-3 px-3.5">
                      <div className="flex items-center space-x-1.5">
                        <DietaryMarker isVeg={res.dietary?.toLowerCase().includes('veg') || false} />
                        <span className={`text-[11px] ${mutedText}`}>
                          {res.dietary || 'Standard'}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-3.5">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider inline-flex items-center space-x-1 ${
                          res.status === 'confirmed'
                            ? 'bg-[#059669]/10 text-[#059669] border border-[#059669]/25'
                            : res.status === 'seated'
                            ? 'bg-[#D4A346]/20 text-[#A37424] border border-[#D4A346]/40'
                            : res.status === 'cancelled'
                            ? 'bg-rose-50 text-rose-700 border border-rose-200'
                            : 'bg-stone-500/10 text-stone-500 border border-stone-400/25'
                        }`}
                      >
                        <span>●</span>
                        <span>{res.status}</span>
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
}
