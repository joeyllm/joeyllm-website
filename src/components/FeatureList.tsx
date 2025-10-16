import React from 'react';
import ContentSection from './ContentSection';
import FeatureCard from './FeatureCard';

const FeatureList: React.FC<{ features?: any[]; title?: React.ReactNode }> = ({ features, title }) => (
  <ContentSection title={title}>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {features?.map((feature, index) => (
        <div key={index}>
          <FeatureCard 
            icon={feature.icon || '🛠️'}
            title={feature.title || feature.name || `Feature ${index + 1}`} 
            description={feature.description}
          />
        </div>
      )) || <p className="text-gray-300">No features available.</p>}
    </div>
  </ContentSection>
);

export default FeatureList;
