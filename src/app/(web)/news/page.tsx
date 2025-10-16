import React from 'react';
import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';
import { newsContent } from './content';

export default function NewsArticlesPage() {
   const pageData = newsContent
  
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
