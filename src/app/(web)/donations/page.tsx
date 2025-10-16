import React from 'react';
import SITE_CONTENT from '@/content/siteContent';
import PageHeader from '@/components/PageHeader';
import ContentSection from '@/components/ContentSection';

export default function DonationsPage() {
  const pageData = SITE_CONTENT.donations;
  
  return (
    <div className="space-y-8">
      <PageHeader title={pageData.title} subtitle={pageData.subtitle} />
      
      {pageData.whyDonate && (
        <ContentSection title={pageData.whyDonate.title}>
          <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl mb-4">
            <p className="text-yellow-200 font-semibold">{pageData.whyDonate.disclaimer}</p>
          </div>
          <p className="text-gray-300 mb-4">{pageData.whyDonate.description}</p>
          <p className="text-gray-300">{pageData.whyDonate.mission}</p>
        </ContentSection>
      )}
      
      {pageData.waysToGive && (
        <ContentSection title={pageData.waysToGive.title}>
          <div className="space-y-6">
            {pageData.waysToGive.methods.map((method, index) => (
              <div key={index} className="p-6 bg-white/5 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">{method.type}</h3>
                <p className="text-gray-300 mb-4">{method.description}</p>
                {method.supportedCoins && (
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-gray-400 mb-2">Supported Cryptocurrencies:</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {method.supportedCoins.map((coin, coinIndex) => (
                        <div key={coinIndex} className="text-sm text-gray-300 bg-white/5 px-3 py-1 rounded">
                          {coin}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </ContentSection>
      )}
      
      {pageData.compliance && (
        <ContentSection title={pageData.compliance.title}>
          <p className="text-gray-300">{pageData.compliance.description}</p>
        </ContentSection>
      )}
    </div>
  );
}
