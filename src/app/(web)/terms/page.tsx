import React from 'react';
import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';
import { termsContent } from './content';

export default function TermsPage() {
   const pageData = termsContent;

  
  return (
    <div className="space-y-8">
      <PageHeader title={pageData.title} subtitle={pageData.subtitle} />
      
      {pageData.acceptance && (
        <ContentSection title={pageData.acceptance.title}>
          <p className="text-gray-300">{pageData.acceptance.description}</p>
        </ContentSection>
      )}
      
      {pageData.userResponsibilities && (
        <ContentSection title={pageData.userResponsibilities.title}>
          <ul className="list-disc list-inside space-y-2">
            {pageData.userResponsibilities.items.map((item, index) => (
              <li key={index} className="text-gray-300">{item}</li>
            ))}
          </ul>
        </ContentSection>
      )}
      
      {pageData.limitations && (
        <ContentSection title={pageData.limitations.title}>
          <p className="text-gray-300">{pageData.limitations.description}</p>
        </ContentSection>
      )}
    </div>
  );
}
