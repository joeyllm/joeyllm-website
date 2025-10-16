import React from 'react';
import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';
import { ragContent } from './content';

export default function RAGPage() {
  const pageData = ragContent
  return (
    <div className="space-y-8">
      <PageHeader title={pageData.title} subtitle={pageData.subtitle} />
      
      {pageData.whatIsRAG && (
        <ContentSection title={pageData.whatIsRAG.title}>
          <p className="text-gray-300 mb-4">{pageData.whatIsRAG.description}</p>
          <p className="text-gray-300 mb-4">{pageData.whatIsRAG.workflow}</p>
          <p className="text-gray-300">{pageData.whatIsRAG.context}</p>
        </ContentSection>
      )}
      
      {pageData.showroom && (
        <ContentSection title={pageData.showroom.title}>
          <p className="text-gray-300">{pageData.showroom.description}</p>
        </ContentSection>
      )}
      
      {pageData.builder && (
        <ContentSection title={pageData.builder.title}>
          <p className="text-gray-300 mb-4">{pageData.builder.description}</p>
          <p className="text-gray-300 mb-4">{pageData.builder.process}</p>
          <p className="text-gray-300 mb-4">{pageData.builder.freeTier}</p>
          <p className="text-gray-300">{pageData.builder.complexity}</p>
        </ContentSection>
      )}
      
      {pageData.marketplace && (
        <ContentSection title={pageData.marketplace.title}>
          <p className="text-gray-300">{pageData.marketplace.description}</p>
        </ContentSection>
      )}
    </div>
  );
}
