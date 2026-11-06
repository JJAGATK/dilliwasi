import React, { useState } from 'react';
import { restaurantInfo } from '../../data/mockData';
import { Button } from '../../components/common/Button';

export function AdminSettings() {
  const [settings, setSettings] = useState({
    name: restaurantInfo.name,
    tagline: restaurantInfo.tagline,
    phone: restaurantInfo.phone,
    email: restaurantInfo.email,
    address: restaurantInfo.address,
    lunchHours: restaurantInfo.hours.lunch,
    dinnerHours: restaurantInfo.hours.dinner,
    operatingDays: restaurantInfo.hours.days,
    tableCount: restaurantInfo.tables,
    seatingCapacity: restaurantInfo.seatingCapacity,
  });

  const [savedToast, setSavedToast] = useState(false);

  const cardBg = 'bg-white border-[rgba(212,163,70,0.22)] shadow-xs';
  const textColor = 'text-[#1C1917]';
  const mutedText = 'text-[#78716C]';

  const handleSave = (e) => {
    e.preventDefault();
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 3000);
  };

  return (
    <div className="space-y-6 animate-fadeIn max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className={`font-serif text-2xl sm:text-3xl font-bold ${textColor}`}>
            Sanctuary & Operations Settings
          </h1>
          <p className={`text-xs ${mutedText} mt-1`}>
            Configure public dining hours, table inventory, and concierge routing
          </p>
        </div>

        {savedToast && (
          <div className="px-3 py-1.5 rounded bg-[#2E7D32]/15 text-[#2E7D32] border border-[#2E7D32]/30 text-xs font-semibold flex items-center space-x-1.5 animate-fadeIn">
            <span>&check;</span>
            <span>Settings Saved Successfully</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Section 1: General Brand & Particulars */}
        <div className={`p-6 rounded-xl border shadow-sm ${cardBg} space-y-4`}>
          <h2 className={`font-serif text-lg font-bold border-b border-[rgba(110,93,83,0.15)] pb-2 ${textColor}`}>
            Sanctuary Particulars
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={`block text-[11px] uppercase tracking-wider font-semibold ${mutedText} mb-1`}>
                Restaurant Name
              </label>
              <input
                type="text"
                value={settings.name}
                onChange={(e) => setSettings({ ...settings, name: e.target.value })}
                className="w-full px-3 py-1.5 text-xs rounded border focus:outline-none focus:border-[#D4A346] bg-white border-stone-300 text-[#1C1917]"
              />
            </div>

            <div>
              <label className={`block text-[11px] uppercase tracking-wider font-semibold ${mutedText} mb-1`}>
                Brand Tagline
              </label>
              <input
                type="text"
                value={settings.tagline}
                onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
                className="w-full px-3 py-1.5 text-xs rounded border focus:outline-none focus:border-[#D4A346] bg-white border-stone-300 text-[#1C1917]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={`block text-[11px] uppercase tracking-wider font-semibold ${mutedText} mb-1`}>
                Concierge Hotline
              </label>
              <input
                type="text"
                value={settings.phone}
                onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                className="w-full px-3 py-1.5 text-xs rounded border focus:outline-none focus:border-[#D4A346] bg-white border-stone-300 text-[#1C1917]"
              />
            </div>

            <div>
              <label className={`block text-[11px] uppercase tracking-wider font-semibold ${mutedText} mb-1`}>
                Official Email
              </label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                className="w-full px-3 py-1.5 text-xs rounded border focus:outline-none focus:border-[#D4A346] bg-white border-stone-300 text-[#1C1917]"
              />
            </div>
          </div>

          <div>
            <label className={`block text-[11px] uppercase tracking-wider font-semibold ${mutedText} mb-1`}>
              Physical Promenade Address
            </label>
            <input
              type="text"
              value={settings.address}
              onChange={(e) => setSettings({ ...settings, address: e.target.value })}
              className="w-full px-3 py-1.5 text-xs rounded border focus:outline-none focus:border-[#D4A346] bg-white border-stone-300 text-[#1C1917]"
            />
          </div>
        </div>

        {/* Section 2: Operating Schedule & Capacity */}
        <div className={`p-6 rounded-xl border shadow-sm ${cardBg} space-y-4`}>
          <h2 className={`font-serif text-lg font-bold border-b border-[rgba(110,93,83,0.15)] pb-2 ${textColor}`}>
            Service Timings & Floor Capacity
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={`block text-[11px] uppercase tracking-wider font-semibold ${mutedText} mb-1`}>
                Lunch Window
              </label>
              <input
                type="text"
                value={settings.lunchHours}
                onChange={(e) => setSettings({ ...settings, lunchHours: e.target.value })}
                className="w-full px-3 py-1.5 text-xs rounded border focus:outline-none focus:border-[#D4A346] bg-white border-stone-300 text-[#1C1917]"
              />
            </div>

            <div>
              <label className={`block text-[11px] uppercase tracking-wider font-semibold ${mutedText} mb-1`}>
                Dinner Degustation Window
              </label>
              <input
                type="text"
                value={settings.dinnerHours}
                onChange={(e) => setSettings({ ...settings, dinnerHours: e.target.value })}
                className="w-full px-3 py-1.5 text-xs rounded border focus:outline-none focus:border-[#D4A346] bg-white border-stone-300 text-[#1C1917]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className={`block text-[11px] uppercase tracking-wider font-semibold ${mutedText} mb-1`}>
                Active Table Count
              </label>
              <input
                type="number"
                value={settings.tableCount}
                onChange={(e) => setSettings({ ...settings, tableCount: parseInt(e.target.value) || 0 })}
                className="w-full px-3 py-1.5 text-xs rounded border focus:outline-none focus:border-[#D4A346] bg-white border-stone-300 text-[#1C1917]"
              />
            </div>

            <div>
              <label className={`block text-[11px] uppercase tracking-wider font-semibold ${mutedText} mb-1`}>
                Total Guest Capacity
              </label>
              <input
                type="number"
                value={settings.seatingCapacity}
                onChange={(e) => setSettings({ ...settings, seatingCapacity: parseInt(e.target.value) || 0 })}
                className="w-full px-3 py-1.5 text-xs rounded border focus:outline-none focus:border-[#D4A346] bg-white border-stone-300 text-[#1C1917]"
              />
            </div>

            <div>
              <label className={`block text-[11px] uppercase tracking-wider font-semibold ${mutedText} mb-1`}>
                Weekly Days
              </label>
              <input
                type="text"
                value={settings.operatingDays}
                onChange={(e) => setSettings({ ...settings, operatingDays: e.target.value })}
                className="w-full px-3 py-1.5 text-xs rounded border focus:outline-none focus:border-[#D4A346] bg-white border-stone-300 text-[#1C1917]"
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end">
          <Button type="submit" variant="primary" size="md">
            Save Operational Parameters
          </Button>
        </div>
      </form>
    </div>
  );
}

