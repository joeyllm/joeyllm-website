import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'minimal';
}

const variants: Record<string, string> = {
  default: 'bg-white/8 backdrop-blur-sm border border-white/25',
  elevated: 'bg-white/12 backdrop-blur-xl border border-white/25 shadow-2xl shadow-black/40',
  minimal: 'bg-white/6 backdrop-blur-sm border border-white/15'
};

export default function GlassCard({ children, className = '', variant = 'default' }: Props) {
  return (
    <div className={`${variants[variant]} rounded-3xl relative overflow-hidden ${className}`}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      {children}
    </div>
  );
}
