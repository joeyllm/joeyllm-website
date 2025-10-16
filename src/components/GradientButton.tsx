"use client"
import React from 'react';


interface Props {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  className?: string;
  type?: 'button'|'submit'|'reset';
}

export default function GradientButton({ children, onClick, variant = 'primary', disabled = false, className = '', type = 'button' }: Props) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-[rgb(var(--primary-from))] to-[rgb(var(--primary-to))] hover:opacity-90';
      case 'secondary':
        return 'bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40';
      default:
        return 'bg-gradient-to-r from-[rgb(var(--primary-from))] to-[rgb(var(--primary-to))] hover:opacity-90';
    }
  };

  return (
    <button
      type={type}
      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${getVariantClasses()} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
