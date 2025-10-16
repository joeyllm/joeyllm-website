import React from 'react';
import GlassCard from './GlassCard';

const FeatureCard: React.FC<{ title?: string; description?: string; icon?: React.ReactNode }> = ({ title, description, icon }) => (
  <GlassCard className="p-6 h-full">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-gray-300 leading-relaxed">{description}</p>
  </GlassCard>
);

export default FeatureCard;
