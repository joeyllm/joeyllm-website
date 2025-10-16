import React from 'react';
import SITE_CONTENT from '@/content/siteContent';
import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';

export default function ProjectsPage() {
 const pageData = SITE_CONTENT.projects;
  
  return (
    <div className="space-y-8">
      <PageHeader title={pageData.title} subtitle={pageData.subtitle} />
      
      {pageData.praxis && (
        <ContentSection title={pageData.praxis.title}>
          <p className="text-gray-300 mb-4">{pageData.praxis.description}</p>
          <p className="text-gray-300 mb-4">{pageData.praxis.context}</p>
          <p className="text-gray-300">{pageData.praxis.concept}</p>
        </ContentSection>
      )}
      
      {pageData.grantSearch && (
        <ContentSection title={pageData.grantSearch.title}>
          <p className="text-gray-300">{pageData.grantSearch.description}</p>
        </ContentSection>
      )}
      
      {pageData.otherProjects && (
        <ContentSection title={pageData.otherProjects.title}>
          <p className="text-gray-300 mb-4">{pageData.otherProjects.description}</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            {pageData.otherProjects.examples.map((example, index) => (
              <li key={index} className="text-gray-300">{example}</li>
            ))}
          </ul>
          <p className="text-gray-300">{pageData.otherProjects.propose}</p>
        </ContentSection>
      )}
    </div>
  );
}
