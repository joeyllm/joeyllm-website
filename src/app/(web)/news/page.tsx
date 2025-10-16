import React from 'react';
import SITE_CONTENT from '@/content/siteContent';
import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';

export default function NewsArticlesPage() {
   const pageData = SITE_CONTENT.news;
  
  return (
    <div className="space-y-8">
      <PageHeader title={pageData.title} subtitle={pageData.subtitle} />
      
      {pageData.stayInformed && (
        <ContentSection title={pageData.stayInformed.title}>
          <p className="text-gray-300">{pageData.stayInformed.description}</p>
        </ContentSection>
      )}
      
      {pageData.contribute && (
        <ContentSection title={pageData.contribute.title}>
          <p className="text-gray-300">{pageData.contribute.description}</p>
        </ContentSection>
      )}
    </div>
  );
}
