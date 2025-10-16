import ContentSection from "@/components/ContentSection";
import PageHeader from "@/components/PageHeader";

import { magpieContent } from "./content";

export default function MagpiePage() {
  const pageData = magpieContent
  
  return (
    <div className="space-y-8">
      <PageHeader title={pageData.title} subtitle={pageData.subtitle} />
      
      {pageData.introduction && (
        <ContentSection>
          <p className="text-gray-300 leading-relaxed">{pageData.introduction}</p>
        </ContentSection>
      )}
      
      <ContentSection title="Coming Soon">
        <p className="text-gray-300">Detailed specifications, benchmarks, and download information for Magpie will be available soon.</p>
      </ContentSection>
    </div>
  );
};