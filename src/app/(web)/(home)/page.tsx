"use client"

import SITE_CONTENT from "@/content/siteContent";
import PageHeader from '@/components/PageHeader';
import GlassCard from '@/components/GlassCard';
import GradientButton from '@/components/GradientButton';
import ContentSection from '@/components/ContentSection';
import FeatureCard from '@/components/FeatureCard';

export default function HomePage() {
  const homeContent = SITE_CONTENT.home;  
  return (
    <div className="space-y-8">
      <PageHeader 
        title={homeContent.title || "Welcome to JoeyLLM"} 
        subtitle={homeContent.subtitle || "Your gateway to sovereign Australian AI."}
      />
      
      <GlassCard variant="elevated" className="p-8 mb-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">Chat Interface Coming Soon</h2>
          <p className="text-gray-300 mb-6">
            {homeContent.introduction || "Experience JoeyLLM, LittleJoey, and Magpie models in our interactive chat interface."}
          </p>
          <GradientButton disabled>Launch Chat Interface</GradientButton>
        </div>
      </GlassCard>

      {homeContent.instructions && (
        <ContentSection title={homeContent.instructions.title}>
          <div className="space-y-4">
            {homeContent.instructions.steps.map((step, index) => (
              <p key={index} className="text-gray-300 leading-relaxed">{step}</p>
            ))}
          </div>
        </ContentSection>
      )}

      <div className="grid md:grid-cols-3 gap-6">
        {homeContent.features && homeContent.features.length > 0 ? (
          homeContent.features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon || "🔧"} 
              title={feature.title || "Feature"} 
              description={feature.description || "Feature description"} 
            />
          ))
        ) : (
          <>
            <FeatureCard icon="🤖" title="Australian AI Models" description="Purpose-built language models trained with Australian context and values." />
            <FeatureCard icon="🌐" title="Open Source First" description="All our models are open source, transparent, and available for commercial use." />
            <FeatureCard icon="👥" title="Community Driven" description="Built by the community, for the community. Join our Discord and contribute." />
          </>
        )}
      </div>

      <GlassCard className="p-8">
        <h2 className="text-2xl font-bold text-white mb-4">
          {homeContent.mission?.title || "Our Mission"}
        </h2>
        <p className="text-gray-300 leading-relaxed">
          {homeContent.mission?.content || "Our mission at JoeyLLM is to make advanced AI accessible, transparent and community-driven."}
        </p>
      </GlassCard>

      {homeContent.dataCleaningPromo && (
        <ContentSection title={homeContent.dataCleaningPromo.title}>
          <p className="text-gray-300 mb-4">{homeContent.dataCleaningPromo.intro}</p>
          <p className="text-gray-300 mb-6">{homeContent.dataCleaningPromo.approach}</p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {homeContent.dataCleaningPromo.pricing.map((tier, index) => (
              <div key={index} className="p-4 bg-white/5 rounded-xl border border-white/10">
                <h3 className="font-semibold text-white mb-2">{tier.name}</h3>
                <p className="text-2xl font-bold text-cyan-400 mb-3">{tier.price}</p>
                <p className="text-gray-300 text-sm">{tier.description}</p>
              </div>
            ))}
          </div>
          
          <p className="text-gray-300 mb-4">{homeContent.dataCleaningPromo.example}</p>
          <p className="text-gray-300 mb-4">{homeContent.dataCleaningPromo.goal}</p>
          <p className="text-gray-400 text-sm">Contact: {homeContent.dataCleaningPromo.contact}</p>
        </ContentSection>
      )}
    </div>
  );
};

// Enhanced content rendering components
// shared ContentSection, FeatureList, TextList and InfoGrid are imported from components

// Footer is provided globally via shared Footer component (already wired into layout)
