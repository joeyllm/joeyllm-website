import React from 'react';
import SITE_CONTENT from '@/content/siteContent';
import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';

export default function LicensesPage() {
  const pageData = SITE_CONTENT.licenses;
  
  return (
    <div className="space-y-8">
      <PageHeader title={pageData.title} subtitle={pageData.subtitle} />
      
      {pageData.modelLicenses && (
        <ContentSection title={pageData.modelLicenses.title}>
          <p className="text-gray-300">{pageData.modelLicenses.description}</p>
        </ContentSection>
      )}
      
      {pageData.codeLicenses && (
        <ContentSection title={pageData.codeLicenses.title}>
          <p className="text-gray-300">{pageData.codeLicenses.description}</p>
        </ContentSection>
      )}
      
      {pageData.thirdParty && (
        <ContentSection title={pageData.thirdParty.title}>
          <p className="text-gray-300">{pageData.thirdParty.description}</p>
        </ContentSection>
      )}
    </div>
  );
}
