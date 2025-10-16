'use client';

import { useEffect, useState } from 'react';
import PageHeader from '@/components/PageHeader';
import GlassCard from '@/components/GlassCard';
import GradientButton from '@/components/GradientButton';
import FeatureCard from '@/components/FeatureCard';
import HeroSection from '@/app/(web)/(home)/components/HeroSection';
import GapFlow from '@/app/(web)/(home)/components/GapFlow';
import ActionPaths from '@/app/(web)/(home)/components/ActionPaths';
import EmailSignup from '@/app/(web)/(home)/components/EmailSignup';
import HomeVersionSwitcher from '@/app/(web)/(home)/components/HomeVersionSwitcher';
import { homeContent } from '../content';
import { classicHomeContent } from '../classic-content';

interface HomeContent {
  title?: string;
  subtitle?: string;
  introduction?: string;
  features?: Array<{
    icon?: string;
    title?: string;
    description?: string;
  }>;
  mission?: {
    title: string;
    content: string;
  };
  hero?: {
    mainHeading: string;
    subheading: string;
  };
  gap?: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  actionPaths?: Array<{
    label: string;
    icon: string;
    items: string[];
    ctaText: string;
    ctaHref?: string;
  }>;
  roadmap?: Array<{
    quarter: string;
    title: string;
    description: string;
  }>;
  emailSignup?: {
    heading: string;
    placeholder?: string;
    buttonText?: string;
  };
}



export default function HomePageWrapper(
) {
  const [version, setVersion] = useState<'new' | 'classic'>('new');
  const [mounted, setMounted] = useState(false);

  // Load persisted version preference from localStorage on client mount
  useEffect(() => {
    const saved = localStorage.getItem('homeLayoutVersion') as
      | 'new'
      | 'classic'
      | null;
    if (saved) {
      setVersion(saved);
    }
    setMounted(true);
  }, []);

  // Persist version preference when it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('homeLayoutVersion', version);
    }
  }, [version, mounted]);

  if (!mounted) {
    // Show new layout on first render (server-side)
    return (
      <NewLayout homeContent={homeContent} />
    );
  }

  return (
    <>
      {version === 'new' ? (
        <NewLayout homeContent={homeContent} />
      ) : (
        <ClassicLayout homeContent={classicHomeContent} />
      )}
      <HomeVersionSwitcher
        currentVersion={version}
        onVersionChange={setVersion}
      />
    </>
  );
}

// NEW LAYOUT (Problem Solver - Option 1)
function NewLayout({ homeContent }: { homeContent: HomeContent }) {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <HeroSection
        mainHeading={homeContent.hero?.mainHeading || ''}
        subheading={homeContent.hero?.subheading || ''}
      />

      {/* Gap / Problem Solver Section */}
      <GapFlow items={homeContent.gap || []} />

      {/* Action Paths */}
      <ActionPaths paths={homeContent.actionPaths || []} />

      {/* Email Signup */}
      <div className="py-8 px-4 md:px-8">
        <EmailSignup
          heading={homeContent.emailSignup?.heading || ''}
          placeholder={homeContent.emailSignup?.placeholder}
          buttonText={homeContent.emailSignup?.buttonText}
        />
      </div>

      {/* Mission Section */}
      {homeContent.mission && (
        <GlassCard className="p-8 mx-4 md:mx-8 my-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            {homeContent.mission.title}
          </h2>
          <p className="text-gray-300 leading-relaxed">
            {homeContent.mission.content}
          </p>
        </GlassCard>
      )}
    </div>
  );
}

// CLASSIC LAYOUT (Generic - Original)
function ClassicLayout({ homeContent }: { homeContent: HomeContent }) {
  return (
    <div className="space-y-8">
      <PageHeader
        title={homeContent.title || 'Welcome to JoeyLLM'}
        subtitle={
          homeContent.subtitle || 'Your gateway to sovereign Australian AI.'
        }
      />

      <GlassCard variant="elevated" className="p-8 mb-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            Chat Interface Coming Soon
          </h2>
          <p className="text-gray-300 mb-6">
            {homeContent.introduction ||
              'Experience JoeyLLM, LittleJoey, and Magpie models in our interactive chat interface.'}
          </p>
          <GradientButton disabled>Launch Chat Interface</GradientButton>
        </div>
      </GlassCard>

      <div className="grid md:grid-cols-3 gap-6">
        {homeContent.features && homeContent.features.length > 0 ? (
          homeContent.features.map(
            (
              feature: { icon?: string; title?: string; description?: string },
              index: number
            ) => (
              <FeatureCard
                key={index}
                icon={feature.icon || '🔧'}
                title={feature.title || 'Feature'}
                description={feature.description || 'Feature description'}
              />
            )
          )
        ) : (
          <>
            <FeatureCard
              icon="🤖"
              title="Australian AI Models"
              description="Purpose-built language models trained with Australian context and values."
            />
            <FeatureCard
              icon="🌐"
              title="Open Source First"
              description="All our models are open source, transparent, and available for commercial use."
            />
            <FeatureCard
              icon="👥"
              title="Community Driven"
              description="Built by the community, for the community. Join our Discord and contribute."
            />
          </>
        )}
      </div>

      <GlassCard className="p-8">
        <h2 className="text-2xl font-bold text-white mb-4">
          {homeContent.mission?.title || 'Our Mission'}
        </h2>
        <p className="text-gray-300 leading-relaxed">
          {homeContent.mission?.content ||
            'Our mission at JoeyLLM is to make advanced AI accessible, transparent and community-driven.'}
        </p>
      </GlassCard>
    </div>
  );
}
