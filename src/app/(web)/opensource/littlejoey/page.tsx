import React from 'react';
import ContentSection from '@/components/ContentSection';
import TextList from '@/components/TextList';
import PageHeader from '@/components/PageHeader';
import GradientButton from '@/components/GradientButton';
import { content } from './content';



export default function LittleJoeyPage() {
  const pageData = content

  return (
    <div className="space-y-8">
      <PageHeader title={pageData.title} subtitle={pageData.subtitle} />

      {pageData.introduction && (
        <ContentSection>
          <p className="text-gray-300 leading-relaxed">{pageData.introduction}</p>
        </ContentSection>
      )}

      {pageData.keyFeatures && <TextList items={pageData.keyFeatures} title="Key Features" />}

      {pageData.technicalSpecs && (
        <ContentSection title="Technical Specifications">
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(pageData.technicalSpecs).map(([key, value]) => (
              <div key={key} className="flex justify-between p-3 bg-white/5 rounded-lg">
                <span className="text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                <span className="text-white font-medium">{value}</span>
              </div>
            ))}
          </div>
        </ContentSection>
      )}

      {pageData.useCases && <TextList items={pageData.useCases} title="Use Cases" />}

      <div className="text-center">
        <GradientButton>Download LittleJoey</GradientButton>
      </div>
    </div>
  );
}
