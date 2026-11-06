import React from 'react';
import { Button } from '../common/Button';

export function KitchenChitModal({ order, onClose }) {
  if (!order) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-sm flex flex-col items-center">
        {/* Authentic Thermal POS Chit */}
        <div className="w-full thermal-receipt p-6 rounded-t-sm space-y-4 text-xs">
          
          {/* Header */}
          <div className="text-center border-b border-dashed border-gray-400 pb-3 flex flex-col items-center">
            <img
              src="/assets/logo-crest-light.png"
              alt="Sanchi Crest"
              className="h-7 w-auto object-contain mb-1.5 grayscale contrast-125"
            />
            <h2 className="font-serif text-lg font-bold tracking-wider text-black">
              SANCHI HERITAGE DINING
            </h2>
            <p className="text-[10px] text-gray-600 uppercase tracking-widest">
              Kitchen Display Chit &bull; Bhopal
            </p>
            <p className="text-[10px] text-gray-500 mt-1">
              {new Date().toLocaleDateString('en-IN', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })}
            </p>
          </div>

          {/* Ticket Metadata */}
          <div className="flex justify-between border-b border-dashed border-gray-400 pb-2 text-[11px] font-semibold">
            <div>
              <span>TICKET: </span>
              <span className="font-mono">{order.id}</span>
            </div>
            <div>
              <span>TABLE: </span>
              <span className="text-base font-bold underline">{order.table}</span>
            </div>
          </div>

          <div className="flex justify-between text-[11px]">
            <span>Guest: {order.guest}</span>
            <span>Time: {order.timestamp}</span>
          </div>

          {/* Itemized Dish List */}
          <div className="border-t border-b border-dashed border-gray-400 py-3 space-y-2">
            {order.items.map((item, idx) => (
              <div key={idx} className="flex justify-between items-start">
                <span className="font-bold text-sm">
                  {item.quantity} &times; {item.name}
                </span>
                <span className="font-mono text-xs">
                  ₹{item.price * item.quantity}
                </span>
              </div>
            ))}
          </div>

          {order.notes && (
            <div className="bg-gray-100 p-2 border border-dashed border-gray-400 text-[11px] font-bold text-red-700">
              SPECIAL INSTRUCTION: {order.notes}
            </div>
          )}

          {/* Total & Signature */}
          <div className="flex justify-between font-bold text-sm pt-1">
            <span>TOTAL VALUE:</span>
            <span className="font-mono">₹ {order.total}</span>
          </div>

          <div className="border-t border-dashed border-gray-400 pt-3 text-[10px] text-center text-gray-500">
            <span>Ustad Chef Signature: __________________</span>
            <p className="mt-1">KDS Station: Awadhi Dum & Tandoor Embers</p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="w-full mt-6 flex items-center justify-between space-x-3 px-2">
          <Button variant="ghost" size="sm" onClick={onClose} className="text-white hover:text-white hover:bg-white/10">
            Close
          </Button>
          <Button variant="primary" size="sm" onClick={handlePrint}>
            ↓ Print Thermal Chit
          </Button>
        </div>
      </div>
    </div>
  );
}

