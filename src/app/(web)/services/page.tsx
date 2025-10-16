import React from "react";
import SITE_CONTENT from "@/content/siteContent";
import PageHeader from "@/components/PageHeader";
import ContentSection from "@/components/ContentSection";
export default function ServicesPage() {
  const pageData = SITE_CONTENT.services;

  return (
    <div className="space-y-8">
      <PageHeader title={pageData.title} subtitle={pageData.subtitle} />

      {pageData.dataCleaningService && (
        <ContentSection title={pageData.dataCleaningService.title}>
          <p className="text-gray-300 mb-4">
            {pageData.dataCleaningService.intro}
          </p>
          <p className="text-gray-300 mb-6">
            {pageData.dataCleaningService.approach}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {pageData.dataCleaningService.pricing.map((tier, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 rounded-xl border border-white/10"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {tier.name}
                </h3>
                <p className="text-3xl font-bold text-cyan-400 mb-4">
                  {tier.price}
                </p>
                <p className="text-gray-300 text-sm">{tier.description}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-300 mb-4">
            {pageData.dataCleaningService.example}
          </p>
          <p className="text-gray-300 mb-4">
            {pageData.dataCleaningService.goal}
          </p>
          <p className="text-gray-400 text-sm">
            Contact: {pageData.dataCleaningService.contact}
          </p>
        </ContentSection>
      )}

      {pageData.aiHosting && (
        <ContentSection title={pageData.aiHosting.title}>
          <p className="text-gray-300">{pageData.aiHosting.description}</p>
        </ContentSection>
      )}

      {pageData.customAI && (
        <ContentSection title={pageData.customAI.title}>
          <p className="text-gray-300 mb-4">{pageData.customAI.description}</p>
          <p className="text-gray-400 text-sm">
            Contact: {pageData.customAI.contact}
          </p>
        </ContentSection>
      )}
    </div>
  );
}
