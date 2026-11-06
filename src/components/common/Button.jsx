import React from 'react';

export function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'ghost' | 'dark'
  size = 'md',        // 'sm' | 'md' | 'lg'
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  ...props
}) {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none rounded-[6px] focus-visible:outline-2 focus-visible:outline-offset-2";

  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs tracking-wider uppercase",
    md: "px-6 py-2.5 text-sm tracking-wide",
    lg: "px-8 py-3.5 text-base tracking-wide"
  }[size];

  const variantClasses = {
    primary: "bg-[#D4A346] text-[#241814] hover:bg-[#E8C066] active:bg-[#B38234] shadow-[0_4px_16px_rgba(212,163,70,0.25)] hover:shadow-[0_6px_20px_rgba(212,163,70,0.35)] btn-tactile focus-visible:outline-[#D4A346]",
    secondary: "border border-[#D4A346] text-[#D4A346] bg-transparent hover:bg-[rgba(212,163,70,0.08)] active:bg-[rgba(212,163,70,0.15)] btn-tactile focus-visible:outline-[#D4A346]",
    ghost: "text-[#6E5D53] hover:text-[#241814] hover:bg-[rgba(110,93,83,0.08)] active:bg-[rgba(110,93,83,0.14)] btn-tactile focus-visible:outline-[#6E5D53]",
    dark: "bg-[#2A050C] text-[#FAF7F2] hover:bg-[#380812] active:bg-[#1C0308] border border-[rgba(232,192,102,0.3)] shadow-[0_4px_16px_rgba(42,5,12,0.3)] btn-tactile focus-visible:outline-[#D4A346]"
  }[variant];

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

