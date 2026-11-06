import React, { useState } from 'react';
import { menuDishes, menuCategories } from '../../data/mockData';
import { DietaryMarker } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { CustomSelect } from '../../components/common/CustomSelect';

export function AdminMenuManager() {
  const [dishes, setDishes] = useState(menuDishes);
  const [activeCategory, setActiveCategory] = useState('all');
  const [dietaryFilter, setDietaryFilter] = useState('all'); // 'all' | 'veg' | 'nonveg' | 'signature'
  const [searchQuery, setSearchQuery] = useState('');
  const [editingDish, setEditingDish] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const cardBg = 'bg-white border-[rgba(212,163,70,0.22)] shadow-xs';
  const textColor = 'text-[#1C1917]';
  const mutedText = 'text-[#78716C]';

  const [dishForm, setDishForm] = useState({
    name: '',
    category: 'mains',
    price: 550,
    isVeg: true,
    spiceLevel: 1,
    description: '',
    accompaniment: '',
    isSignature: false,
    available: true,
  });

  const toggleAvailability = (id) => {
    setDishes((prev) =>
      prev.map((d) => (d.id === id ? { ...d, available: !d.available } : d))
    );
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to remove this dish from the active menu?')) {
      setDishes((prev) => prev.filter((d) => d.id !== id));
    }
  };

  const handleSaveDish = (e) => {
    e.preventDefault();
    if (!dishForm.name.trim()) return;

    if (editingDish) {
      setDishes((prev) =>
        prev.map((d) => (d.id === editingDish.id ? { ...d, ...dishForm } : d))
      );
      setEditingDish(null);
    } else {
      const newDish = {
        id: `dish-${Date.now()}`,
        ...dishForm,
        imageAspect: '4/3',
      };
      setDishes([newDish, ...dishes]);
      setIsAddModalOpen(false);
    }

    setDishForm({
      name: '',
      category: 'mains',
      price: 550,
      isVeg: true,
      spiceLevel: 1,
      description: '',
      accompaniment: '',
      isSignature: false,
      available: true,
    });
  };

  const openEdit = (dish) => {
    setEditingDish(dish);
    setDishForm({ ...dish });
  };

  const filteredDishes = dishes.filter((d) => {
    if (activeCategory !== 'all' && d.category !== activeCategory) return false;
    if (dietaryFilter === 'veg' && !d.isVeg) return false;
    if (dietaryFilter === 'nonveg' && d.isVeg) return false;
    if (dietaryFilter === 'signature' && !d.isSignature) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = d.name.toLowerCase().includes(q);
      const matchDesc = d.description?.toLowerCase().includes(q);
      const matchPrice = d.price?.toString().includes(q);
      if (!matchName && !matchDesc && !matchPrice) return false;
    }
    return true;
  });

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header & Primary CTA */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className={`font-serif text-2xl sm:text-3xl font-bold ${textColor}`}>
            Culinary Menu Manager
          </h1>
          <p className={`text-xs ${mutedText} mt-1`}>
            Add, update recipe prices, toggle live kitchen availability, and tune spice indicators
          </p>
        </div>

        <Button
          variant="primary"
          size="sm"
          onClick={() => {
            setEditingDish(null);
            setDishForm({
              name: '',
              category: 'mains',
              price: 550,
              isVeg: true,
              spiceLevel: 1,
              description: '',
              accompaniment: '',
              isSignature: false,
              available: true,
            });
            setIsAddModalOpen(true);
          }}
          className="text-xs uppercase tracking-wider"
        >
          + Add New Dish
        </Button>
      </div>

      {/* Category Tabs */}
      <div className={`p-3 rounded-xl border shadow-sm ${cardBg} flex items-center space-x-2 overflow-x-auto scrollbar-none`}>
        {menuCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3 py-1.5 text-xs rounded transition-colors whitespace-nowrap cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-[#2A050C] text-[#FAF7F2] font-semibold shadow-2xs'
                : 'text-[#6E5D53] hover:bg-[#EDE5D8]'
            }`}
          >
            {cat.label} ({cat.id === 'all' ? dishes.length : dishes.filter((d) => d.category === cat.id).length})
          </button>
        ))}
      </div>

      {/* Secondary Search & Dietary Filter Toolbar */}
      <div className={`p-3.5 rounded-xl border shadow-2xs ${cardBg} flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs`}>
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search dish by name, price, or technique..."
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

        {/* Dietary Filters & Reset */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <span className="text-[11px] text-stone-500 font-medium mr-1">Classification:</span>
          {[
            { id: 'all', label: 'All Items' },
            { id: 'veg', label: '● Pure Veg' },
            { id: 'nonveg', label: '▲ Non-Veg' },
            { id: 'signature', label: '✦ Signature' },
          ].map((d) => (
            <button
              key={d.id}
              onClick={() => setDietaryFilter(d.id)}
              className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer whitespace-nowrap border ${
                dietaryFilter === d.id
                  ? 'bg-[#2A050C] text-[#FAF7F2] border-[#2A050C]'
                  : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
              }`}
            >
              {d.label}
            </button>
          ))}

          {(activeCategory !== 'all' || dietaryFilter !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setActiveCategory('all');
                setDietaryFilter('all');
                setSearchQuery('');
              }}
              className="ml-2 px-2.5 py-1 rounded-md text-xs font-semibold bg-stone-200/80 hover:bg-stone-300 text-stone-700 cursor-pointer transition-colors whitespace-nowrap"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Dishes Table */}
      <div className={`rounded-xl border shadow-sm overflow-hidden ${cardBg}`}>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className={`border-b border-[rgba(110,93,83,0.18)] ${mutedText}`}>
                <th className="py-3 px-4 font-semibold">Dish & Category</th>
                <th className="py-3 px-4 font-semibold">Type</th>
                <th className="py-3 px-4 font-semibold">Price</th>
                <th className="py-3 px-4 font-semibold">Status</th>
                <th className="py-3 px-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[rgba(110,93,83,0.1)]">
              {filteredDishes.map((dish) => (
                <tr key={dish.id} className="hover:bg-[rgba(212,163,70,0.06)] transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="flex items-center space-x-2.5">
                      <DietaryMarker isVeg={dish.isVeg} />
                      <div>
                        <div className={`font-semibold ${textColor} text-sm`}>
                          {dish.name}
                          {dish.isSignature && (
                            <span className="ml-2 text-[9px] px-1.5 py-0.5 rounded bg-[rgba(212,163,70,0.2)] text-[#D4A346] font-bold uppercase">
                              Signature
                            </span>
                          )}
                        </div>
                        <p className={`text-[11px] ${mutedText} max-w-md truncate`}>
                          {dish.description}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className={`py-3.5 px-4 uppercase text-[10px] tracking-wider font-medium ${mutedText}`}>
                    {dish.category}
                  </td>
                  <td className={`py-3.5 px-4 font-mono font-bold text-sm ${textColor}`}>
                    ₹ {dish.price}
                  </td>
                  <td className="py-3.5 px-4">
                    <button
                      onClick={() => toggleAvailability(dish.id)}
                      className={`px-2.5 py-1 rounded text-[10px] font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                        dish.available
                          ? 'bg-[#2E7D32]/15 text-[#2E7D32]'
                          : 'bg-red-500/15 text-red-500'
                      }`}
                    >
                      {dish.available ? 'In Deg / Ready' : 'Sold Out'}
                    </button>
                  </td>
                  <td className="py-3.5 px-4 text-right space-x-2">
                    <button
                      onClick={() => openEdit(dish)}
                      className="px-2.5 py-1 text-xs rounded bg-[rgba(212,163,70,0.15)] text-[#D4A346] hover:bg-[rgba(212,163,70,0.25)] transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(dish.id)}
                      className="px-2.5 py-1 text-xs rounded bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Dish Modal */}
      {(isAddModalOpen || editingDish) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className={`w-full max-w-lg p-6 rounded-xl border shadow-2xl max-h-[90vh] overflow-y-auto ${cardBg}`}>
            <h2 className={`font-serif text-xl font-bold ${textColor}`}>
              {editingDish ? 'Edit Repertoire Dish' : 'Add New Heritage Dish'}
            </h2>
            <p className={`text-xs ${mutedText} mt-1`}>
              Tune recipe description, category, pricing, and spice indicators
            </p>

            <form onSubmit={handleSaveDish} className="mt-4 space-y-3.5">
              <div>
                <label className={`block text-[11px] uppercase tracking-wider font-semibold ${mutedText} mb-1`}>
                  Dish Name *
                </label>
                <input
                  type="text"
                  required
                  value={dishForm.name}
                  onChange={(e) => setDishForm({ ...dishForm, name: e.target.value })}
                  placeholder="e.g. Awadhi Dum Nihari"
                  className="w-full px-3 py-1.5 text-xs rounded border focus:outline-none focus:border-[#D4A346] bg-white border-stone-300 text-[#1C1917]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={`block text-[11px] uppercase tracking-wider font-semibold ${mutedText} mb-1`}>
                    Category
                  </label>
                  <CustomSelect
                    value={dishForm.category}
                    onChange={(e) => setDishForm({ ...dishForm, category: e.target.value })}
                    options={[
                      { value: 'starters', label: 'Small Plates & Chaat' },
                      { value: 'tandoor', label: 'Clay Oven / Tandoor' },
                      { value: 'mains', label: 'Royal Curries & Handis' },
                      { value: 'biryani', label: 'Awadhi Dum & Breads' },
                      { value: 'desserts', label: 'Artisanal Sweetcraft' },
                      { value: 'drinks', label: 'Heritage Elixirs' },
                    ]}
                    theme="light"
                    className="py-1.5 text-xs bg-white border-stone-300 text-[#1C1917]"
                  />
                </div>

                <div>
                  <label className={`block text-[11px] uppercase tracking-wider font-semibold ${mutedText} mb-1`}>
                    Price (₹)
                  </label>
                  <input
                    type="number"
                    min="50"
                    step="10"
                    value={dishForm.price}
                    onChange={(e) => setDishForm({ ...dishForm, price: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-1.5 text-xs rounded border focus:outline-none focus:border-[#D4A346] bg-white border-stone-300 text-[#1C1917]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={`block text-[11px] uppercase tracking-wider font-semibold ${mutedText} mb-1`}>
                    Dietary Classification
                  </label>
                  <div className="flex items-center space-x-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setDishForm({ ...dishForm, isVeg: true })}
                      className={`px-3 py-1 text-xs rounded border ${
                        dishForm.isVeg ? 'bg-[#2E7D32] text-white border-[#2E7D32]' : 'bg-transparent text-[#6E5D53]'
                      }`}
                    >
                      Vegetarian
                    </button>
                    <button
                      type="button"
                      onClick={() => setDishForm({ ...dishForm, isVeg: false })}
                      className={`px-3 py-1 text-xs rounded border ${
                        !dishForm.isVeg ? 'bg-[#C62828] text-white border-[#C62828]' : 'bg-transparent text-[#6E5D53]'
                      }`}
                    >
                      Non-Veg
                    </button>
                  </div>
                </div>

                <div>
                  <label className={`block text-[11px] uppercase tracking-wider font-semibold ${mutedText} mb-1`}>
                    Spice Level (0 to 3)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="3"
                    value={dishForm.spiceLevel}
                    onChange={(e) => setDishForm({ ...dishForm, spiceLevel: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-1.5 text-xs rounded border focus:outline-none focus:border-[#D4A346] bg-white border-stone-300 text-[#1C1917]"
                  />
                </div>
              </div>

              <div>
                <label className={`block text-[11px] uppercase tracking-wider font-semibold ${mutedText} mb-1`}>
                  Sensory Description
                </label>
                <textarea
                  rows="2"
                  value={dishForm.description}
                  onChange={(e) => setDishForm({ ...dishForm, description: e.target.value })}
                  placeholder="Ingredients, preparation technique, herbs..."
                  className="w-full px-3 py-1.5 text-xs rounded border focus:outline-none focus:border-[#D4A346] bg-white border-stone-300 text-[#1C1917]"
                />
              </div>

              <div>
                <label className={`block text-[11px] uppercase tracking-wider font-semibold ${mutedText} mb-1`}>
                  Accompaniment / Serving Note
                </label>
                <input
                  type="text"
                  value={dishForm.accompaniment}
                  onChange={(e) => setDishForm({ ...dishForm, accompaniment: e.target.value })}
                  placeholder="e.g. Served with mint chutney & sheermal"
                  className="w-full px-3 py-1.5 text-xs rounded border focus:outline-none focus:border-[#D4A346] bg-white border-stone-300 text-[#1C1917]"
                />
              </div>

              <div className="flex items-center space-x-6 pt-1">
                <label className="flex items-center space-x-2 text-xs cursor-pointer">
                  <input
                    type="checkbox"
                    checked={dishForm.isSignature}
                    onChange={(e) => setDishForm({ ...dishForm, isSignature: e.target.checked })}
                    className="rounded text-[#D4A346] focus:ring-[#D4A346]"
                  />
                  <span>Chef's Signature Reserve</span>
                </label>

                <label className="flex items-center space-x-2 text-xs cursor-pointer">
                  <input
                    type="checkbox"
                    checked={dishForm.available}
                    onChange={(e) => setDishForm({ ...dishForm, available: e.target.checked })}
                    className="rounded text-[#D4A346] focus:ring-[#D4A346]"
                  />
                  <span>Currently In Stock</span>
                </label>
              </div>

              <div className="pt-3 flex items-center justify-end space-x-3 border-t border-[rgba(110,93,83,0.15)]">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setEditingDish(null);
                    setIsAddModalOpen(false);
                  }}
                >
                  Cancel
                </Button>
                <Button type="submit" variant="primary" size="sm">
                  {editingDish ? 'Save Changes' : 'Create Dish'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

