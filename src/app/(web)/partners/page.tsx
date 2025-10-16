import React from 'react';
import PageHeader from '../../../components/PageHeader';
import ContentSection from '../../../components/ContentSection';
import { partnersContent } from './content';

export default function PartnersPage() {
  const pageData = partnersContent
  
  return (
    <div className="space-y-8">
      <PageHeader title={pageData.title} subtitle={pageData.subtitle} />
      
      {pageData.introduction && (
        <ContentSection>
          <p className="text-gray-300">{pageData.introduction.description}</p>
        </ContentSection>
      )}
      
      {pageData.partnershipTypes && (
        <ContentSection title={pageData.partnershipTypes.title}>
          <div className="grid md:grid-cols-2 gap-6">
            {pageData.partnershipTypes.types.map((partnerType, index) => (
              <div key={index} className="p-6 bg-white/5 rounded-xl border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">{partnerType.type}</h3>
                <p className="text-gray-300">{partnerType.description}</p>
              </div>
            ))}
          </div>
        </ContentSection>
      )}
      
      {pageData.becomePartner && (
        <ContentSection title={pageData.becomePartner.title}>
          <p className="text-gray-300 mb-4">{pageData.becomePartner.description}</p>
          <p className="text-gray-300">{pageData.becomePartner.contact}</p>
        </ContentSection>
      )}
    </div>
  );
}
