import React, { useState } from 'react';
import { initialReviews } from '../../data/mockData';
import { Button } from '../../components/common/Button';

export function AdminReviews() {
  const [reviews, setReviews] = useState(initialReviews);
  const [activeReplyId, setActiveReplyId] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [ratingFilter, setRatingFilter] = useState('all'); // 'all' | '5' | '4' | 'needs-reply'
  const [searchQuery, setSearchQuery] = useState('');

  const cardBg = 'bg-white border-[rgba(212,163,70,0.22)] shadow-xs';
  const textColor = 'text-[#1C1917]';
  const mutedText = 'text-[#78716C]';

  const handleSendReply = (reviewId) => {
    if (!replyText.trim()) return;
    setReviews((prev) =>
      prev.map((r) =>
        r.id === reviewId
          ? { ...r, reply: replyText, repliedAt: 'Just now' }
          : r
      )
    );
    setActiveReplyId(null);
    setReplyText('');
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className={`font-serif text-2xl sm:text-3xl font-bold ${textColor}`}>
            Patron Reviews & Guest Feedback
          </h1>
          <p className={`text-xs ${mutedText} mt-1`}>
            Verified dining feedback from guests and direct maître d' correspondence
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm font-serif font-bold text-[#D4A346]">4.8 / 5.0</span>
          <span className="text-xs text-[#2E7D32] bg-[#2E7D32]/10 px-2 py-0.5 rounded font-semibold">
            96% Positive
          </span>
        </div>
      </div>

      {/* Ratings Summary Card */}
      <div className={`p-6 rounded-xl border shadow-sm ${cardBg} grid grid-cols-1 md:grid-cols-3 gap-6 items-center`}>
        <div className="text-center md:text-left border-b md:border-b-0 md:border-r border-[rgba(110,93,83,0.15)] pb-4 md:pb-0 md:pr-6">
          <span className="text-4xl font-serif font-bold text-[#D4A346]">4.8</span>
          <div className="flex items-center justify-center md:justify-start space-x-1 my-1 text-[#D4A346]">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-base">&starf;</span>
            ))}
          </div>
          <p className={`text-xs ${mutedText}`}>Based on 142 verified dining experiences</p>
        </div>

        {/* Rating Bars */}
        <div className="col-span-2 space-y-2 text-xs">
          <div className="flex items-center space-x-3">
            <span className={`w-14 ${mutedText}`}>5 Stars</span>
            <div className="flex-1 h-2 bg-black/10 rounded-full overflow-hidden">
              <div className="h-full bg-[#D4A346] rounded-full" style={{ width: '84%' }} />
            </div>
            <span className="font-mono text-[11px] w-8 text-right">84%</span>
          </div>

          <div className="flex items-center space-x-3">
            <span className={`w-14 ${mutedText}`}>4 Stars</span>
            <div className="flex-1 h-2 bg-black/10 rounded-full overflow-hidden">
              <div className="h-full bg-[#D4A346] rounded-full" style={{ width: '12%' }} />
            </div>
            <span className="font-mono text-[11px] w-8 text-right">12%</span>
          </div>

          <div className="flex items-center space-x-3">
            <span className={`w-14 ${mutedText}`}>3 Stars</span>
            <div className="flex-1 h-2 bg-black/10 rounded-full overflow-hidden">
              <div className="h-full bg-[#D4A346] rounded-full" style={{ width: '4%' }} />
            </div>
            <span className="font-mono text-[11px] w-8 text-right">4%</span>
          </div>
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
            placeholder="Search reviews by guest name, dish mentioned, or keywords..."
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

        {/* Rating Filter Chips */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <span className="text-[11px] text-stone-500 font-medium mr-1">Rating:</span>
          {[
            { id: 'all', label: `All (${reviews.length})` },
            { id: '5', label: `5 Stars (${reviews.filter((r) => r.rating === 5).length})` },
            { id: '4', label: `4 Stars (${reviews.filter((r) => r.rating === 4).length})` },
            { id: 'needs-reply', label: `Needs Reply (${reviews.filter((r) => !r.reply).length})` },
          ].map((rt) => (
            <button
              key={rt.id}
              onClick={() => setRatingFilter(rt.id)}
              className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer whitespace-nowrap border ${
                ratingFilter === rt.id
                  ? 'bg-[#2A050C] text-[#FAF7F2] border-[#2A050C]'
                  : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
              }`}
            >
              {rt.label}
            </button>
          ))}

          {(ratingFilter !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setRatingFilter('all');
                setSearchQuery('');
              }}
              className="ml-2 px-2.5 py-1 rounded-md text-xs font-semibold bg-stone-200/80 hover:bg-stone-300 text-stone-700 cursor-pointer transition-colors"
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews
          .filter((rev) => {
            if (ratingFilter === '5') return rev.rating === 5;
            if (ratingFilter === '4') return rev.rating === 4;
            if (ratingFilter === 'needs-reply') return !rev.reply;
            return true;
          })
          .filter((rev) => {
            if (!searchQuery.trim()) return true;
            const q = searchQuery.toLowerCase();
            return (
              rev.guestName?.toLowerCase().includes(q) ||
              rev.title?.toLowerCase().includes(q) ||
              rev.body?.toLowerCase().includes(q) ||
              rev.id?.toLowerCase().includes(q)
            );
          })
          .map((rev) => (
          <div key={rev.id} className={`p-6 rounded-xl border shadow-sm ${cardBg} space-y-3`}>
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className={`font-semibold text-sm ${textColor}`}>{rev.guestName}</h3>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[rgba(212,163,70,0.15)] text-[#D4A346] font-medium">
                    Verified Dinner Patron
                  </span>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="text-[#D4A346] text-xs">
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <span key={i}>&starf;</span>
                    ))}
                  </div>
                  <span className={`text-[11px] ${mutedText}`}>{rev.date}</span>
                </div>
              </div>

              <span className="font-mono text-[11px] text-gray-400">{rev.id}</span>
            </div>

            <h4 className={`font-serif text-base font-semibold ${textColor}`}>
              "{rev.title}"
            </h4>

            <p className={`text-xs ${mutedText} leading-relaxed`}>
              {rev.body}
            </p>

            {/* Official Reply Box */}
            {rev.reply ? (
              <div className="mt-3 p-3.5 rounded-lg bg-[rgba(212,163,70,0.08)] border-l-2 border-[#D4A346] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#D4A346] uppercase tracking-wider">
                    Sanchi Maître d' Response
                  </span>
                  <span className="text-[10px] text-gray-400">{rev.repliedAt}</span>
                </div>
                <p className={`text-xs ${textColor} leading-relaxed`}>
                  {rev.reply}
                </p>
              </div>
            ) : (
              <div className="pt-2">
                {activeReplyId === rev.id ? (
                  <div className="space-y-2 mt-2">
                    <textarea
                      rows="2"
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      placeholder="Write a graceful response to the guest..."
                      className="w-full px-3 py-1.5 text-xs rounded border focus:outline-none focus:border-[#D4A346] bg-white border-stone-300 text-[#1C1917]"
                    />
                    <div className="flex items-center space-x-2">
                      <Button variant="primary" size="sm" onClick={() => handleSendReply(rev.id)}>
                        Post Response
                      </Button>
                      <Button variant="ghost" size="sm" onClick={() => setActiveReplyId(null)}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setActiveReplyId(rev.id);
                      setReplyText('');
                    }}
                    className="text-xs font-semibold text-[#D4A346] hover:underline"
                  >
                    Reply to Review &rarr;
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

