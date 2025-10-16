import React from 'react';  

import InfoGrid from '@/components/InfoGrid';
import GradientButton from '@/components/GradientButton';
import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';
import SITE_CONTENT from '@/content/siteContent';


export default function OpenSourcePage() {
  const pageData = SITE_CONTENT.opensource;

  return (
    <div className="space-y-8">
      <PageHeader title={pageData.title} subtitle={pageData.subtitle} />

      {pageData.models && <InfoGrid items={pageData.models} title="Available Models" columns={1} />}

      {pageData.customModels && (
        <ContentSection title={pageData.customModels.title}>
          <p className="text-gray-300">{pageData.customModels.description}</p>
        </ContentSection>
      )}

      {pageData.contributing && (
        <ContentSection title={pageData.contributing.title}>
          <p className="text-gray-300">{pageData.contributing.description}</p>
        </ContentSection>
      )}

      <div className="text-center">
        <div className="space-x-4">
          <GradientButton>Download Models</GradientButton>
          <GradientButton variant="secondary">View Documentation</GradientButton>
        </div>
      </div>
    </div>
  );
}
