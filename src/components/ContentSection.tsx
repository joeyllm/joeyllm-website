import React from 'react';
import GlassCard from './GlassCard';

const ContentSection: React.FC<{ title?: React.ReactNode; children?: React.ReactNode; className?: string }> = ({ title, children, className = '' }) => (
  <GlassCard className={`p-8 ${className}`}>
    {title && <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>}
    {children}
  </GlassCard>
);

export default ContentSection;
