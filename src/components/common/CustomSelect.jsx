import React, { useState, useRef, useEffect, useId } from 'react';

/**
 * Luxury Custom Select Component
 * Features high-responsiveness, rich hover effects on every option,
 * keyboard accessibility (ArrowDown, ArrowUp, Enter, Escape, Space),
 * gold indicator bars, smooth transitions, and optgroup support.
 */
export function CustomSelect({
  value,
  onChange,
  options = [], // [{ value, label, sublabel, group? }] or grouped: [{ label, options: [...] }] or primitive array
  placeholder = 'Select an option...',
  className = '',
  dropdownClassName = '',
  id,
  name,
  disabled = false,
  theme = 'light', // 'light' | 'dark'
  ariaLabel,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const listRef = useRef(null);
  const generatedId = useId();
  const selectId = id || generatedId;

  const isDark = theme === 'dark';

  // Normalize options into a flat array for navigation while preserving group headings
  const normalizedGroups = React.useMemo(() => {
    // Case 1: Array of optgroup objects { label, options: [...] }
    if (options.length > 0 && options[0]?.options && Array.isArray(options[0].options)) {
      return options.map((grp) => ({
        label: grp.label,
        items: grp.options.map((opt) =>
          typeof opt === 'object' ? opt : { value: opt, label: String(opt) }
        ),
      }));
    }

    // Case 2: Array of items with optional `group` field
    const groupsMap = new Map();
    options.forEach((opt) => {
      const item = typeof opt === 'object' ? opt : { value: opt, label: String(opt) };
      const grpName = item.group || '';
      if (!groupsMap.has(grpName)) {
        groupsMap.set(grpName, []);
      }
      groupsMap.get(grpName).push(item);
    });

    return Array.from(groupsMap.entries()).map(([label, items]) => ({
      label,
      items,
    }));
  }, [options]);

  // Flattened items for keyboard indexing
  const flatItems = React.useMemo(() => {
    return normalizedGroups.flatMap((grp) => grp.items);
  }, [normalizedGroups]);

  // Find currently selected item
  const selectedItem = flatItems.find((item) => String(item.value) === String(value));

  // Light dismiss on click outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('touchstart', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [isOpen]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (disabled) return;

    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setIsOpen(true);
        const idx = flatItems.findIndex((item) => String(item.value) === String(value));
        setHighlightedIndex(idx >= 0 ? idx : 0);
      }
      return;
    }

    if (e.key === 'Escape') {
      e.preventDefault();
      setIsOpen(false);
      triggerRef.current?.focus();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev + 1) % flatItems.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev - 1 + flatItems.length) % flatItems.length);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (highlightedIndex >= 0 && highlightedIndex < flatItems.length) {
        handleSelect(flatItems[highlightedIndex].value);
      }
    } else if (e.key === 'Tab') {
      setIsOpen(false);
    }
  };

  const handleSelect = (itemValue) => {
    if (disabled) return;
    if (onChange) {
      // Support both (val) and standard synthetic event format { target: { value, name } }
      onChange({ target: { value: itemValue, name } });
    }
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full text-left font-sans select-none"
      onKeyDown={handleKeyDown}
    >
      {/* Hidden native input for form compatibility & accessibility */}
      <input
        type="hidden"
        id={selectId}
        name={name}
        value={value ?? ''}
      />

      {/* Select Trigger Button */}
      <button
        ref={triggerRef}
        type="button"
        id={`${selectId}-button`}
        disabled={disabled}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={ariaLabel || placeholder}
        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm transition-all duration-200 cursor-pointer text-left border ${
          isDark
            ? 'bg-[#1F0409] text-[#FAF7F2] border-[rgba(212,163,70,0.3)] hover:border-[#D4A346] hover:bg-[#2A050C]'
            : 'bg-[#FAF7F2] text-[#241814] border-[rgba(110,93,83,0.25)] hover:border-[#D4A346] hover:bg-white'
        } ${
          isOpen
            ? 'border-[#D4A346] ring-2 ring-[#D4A346]/25 shadow-md'
            : 'hover:shadow-[0_2px_12px_rgba(212,163,70,0.12)]'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      >
        <span className="truncate pr-2 font-medium">
          {selectedItem ? selectedItem.label : <span className="text-[#9B897D]">{placeholder}</span>}
        </span>

        {/* Animated Chevron */}
        <span
          className={`shrink-0 transition-transform duration-250 ease-out text-[#B38234] ${
            isOpen ? 'rotate-180 text-[#D4A346]' : 'rotate-0'
          }`}
          aria-hidden="true"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {/* Dropdown Options List */}
      {isOpen && (
        <div
          ref={listRef}
          role="listbox"
          tabIndex={-1}
          aria-labelledby={`${selectId}-button`}
          className={`absolute left-0 right-0 mt-1.5 max-h-64 overflow-y-auto rounded-xl border z-50 shadow-2xl backdrop-blur-md animate-page-enter ${
            isDark
              ? 'bg-[#1F0409]/95 border-[rgba(212,163,70,0.4)] text-[#FAF7F2]'
              : 'bg-[#FAF7F2]/98 border-[rgba(212,163,70,0.4)] text-[#241814]'
          } ${dropdownClassName}`}
        >
          {flatItems.length === 0 ? (
            <div className="p-3 text-xs text-center text-[#9B897D] italic">
              No options available
            </div>
          ) : (
            normalizedGroups.map((group, grpIdx) => (
              <div key={grpIdx} className={grpIdx > 0 ? 'border-t border-[rgba(212,163,70,0.15)]' : ''}>
                {group.label && (
                  <div
                    className={`px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider ${
                      isDark ? 'text-[#D4A346] bg-[#2A050C]/60' : 'text-[#B38234] bg-[#F4EFE6]'
                    }`}
                  >
                    {group.label}
                  </div>
                )}

                {group.items.map((item) => {
                  const isSelected = String(item.value) === String(value);
                  const itemFlatIndex = flatItems.indexOf(item);
                  const isHighlighted = highlightedIndex === itemFlatIndex;

                  return (
                    <div
                      key={item.value}
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => handleSelect(item.value)}
                      onMouseEnter={() => setHighlightedIndex(itemFlatIndex)}
                      className={`group relative flex items-center justify-between px-3.5 py-2.5 text-xs sm:text-sm font-medium cursor-pointer transition-all duration-200 select-none ${
                        isSelected
                          ? isDark
                            ? 'bg-[#FAF7F2] text-[#2A050C] font-semibold pl-5'
                            : 'bg-gradient-to-r from-[#FAF3E5] to-[#F5EAD4] text-[#2A050C] font-semibold pl-5'
                          : isHighlighted
                          ? isDark
                            ? 'bg-[#380812] text-[#FAF7F2] pl-5'
                            : 'bg-[#2A050C] text-[#FAF7F2] pl-5'
                          : isDark
                          ? 'hover:bg-[#380812] hover:text-[#FAF7F2] hover:pl-5'
                          : 'hover:bg-[#2A050C] hover:text-[#FAF7F2] hover:pl-5'
                      }`}
                    >
                      {/* Left Gold Accent Indicator on Hover / Selected */}
                      <span
                        className={`absolute left-0 top-0 bottom-0 w-1 bg-[#D4A346] transition-all duration-200 ${
                          isSelected || isHighlighted
                            ? 'opacity-100 w-1.5'
                            : 'opacity-0 group-hover:opacity-100 group-hover:w-1.5'
                        }`}
                        aria-hidden="true"
                      />

                      {/* Option Label & Optional Sublabel */}
                      <div className="flex flex-col flex-1 pr-2">
                        <span className="truncate">{item.label}</span>
                        {item.sublabel && (
                          <span
                            className={`text-[11px] font-normal transition-colors ${
                              isSelected
                                ? isDark ? 'text-[#B38234]' : 'text-[#8C6228]'
                                : isHighlighted
                                ? 'text-[#D4A346]'
                                : isDark
                                ? 'text-[#9B897D] group-hover:text-[#D4A346]'
                                : 'text-[#6E5D53] group-hover:text-[#D4A346]'
                            }`}
                          >
                            {item.sublabel}
                          </span>
                        )}
                      </div>

                      {/* Right Indicator: Gold Checkmark for Selected OR Sparkle ✦ on Hover */}
                      <div className="shrink-0 flex items-center space-x-1">
                        {isSelected ? (
                          <span
                            className={`font-bold text-xs ${isDark && isSelected ? 'text-[#2A050C]' : 'text-[#D4A346]'}`}
                            title="Selected"
                          >
                            ✓
                          </span>
                        ) : (
                          <span
                            className="text-[11px] text-[#D4A346] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                            aria-hidden="true"
                          >
                            ✦
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

