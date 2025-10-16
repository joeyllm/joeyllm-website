import React from 'react';
import SITE_CONTENT from '@/content/siteContent';
import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';

export default function PrivacyPolicyPage() {
  const pageData = SITE_CONTENT.privacypolicy;
  
  return (
    <div className="space-y-8">
      <PageHeader title={pageData.title} subtitle={pageData.subtitle} />
      
      <ContentSection>
        <p className="text-gray-300">{pageData.introduction}</p>
      </ContentSection>
      
      {pageData.dataCollection && (
        <ContentSection title={pageData.dataCollection.title}>
          <p className="text-gray-300">{pageData.dataCollection.description}</p>
        </ContentSection>
      )}
      
      {pageData.dataUse && (
        <ContentSection title={pageData.dataUse.title}>
          <p className="text-gray-300">{pageData.dataUse.description}</p>
        </ContentSection>
      )}
      
      {pageData.dataRights && (
        <ContentSection title={pageData.dataRights.title}>
          <p className="text-gray-300">{pageData.dataRights.description}</p>
        </ContentSection>
      )}
    </div>
  );
}
