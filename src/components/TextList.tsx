import React, { JSX } from 'react';
import ContentSection from './ContentSection';

const TextList: React.FC<{ items?: string[]; title?: React.ReactNode; ordered?: boolean }> = ({ items, title, ordered = false }) => {
  if (!items || items.length === 0) return null;

  const ListComponent: keyof JSX.IntrinsicElements = ordered ? 'ol' : 'ul';
  const listClass = ordered ? 'list-decimal list-inside space-y-2' : 'list-disc list-inside space-y-2';

  return (
    <ContentSection title={title}>
      <ListComponent className={listClass}>
        {items.map((item, index) => (
          <li key={index} className="text-gray-300">{item}</li>
        ))}
      </ListComponent>
    </ContentSection>
  );
};

export default TextList;
