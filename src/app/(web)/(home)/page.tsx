import PageHeader from "@/components/PageHeader";
import GlassCard from "@/components/GlassCard";
import GradientButton from "@/components/GradientButton";
import FeatureCard from "@/components/FeatureCard";
import { homeContent as importedHomeContent } from "./content";

export default function HomePage() {
  const homeContent = importedHomeContent || {};
  return (
    <div className="space-y-8">
      <PageHeader
        title={homeContent.title || "Welcome to JoeyLLM"}
        subtitle={
          homeContent.subtitle || "Your gateway to sovereign Australian AI."
        }
      />

      <GlassCard variant="elevated" className="p-8 mb-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            Chat Interface Coming Soon
          </h2>
          <p className="text-gray-300 mb-6">
            {homeContent.introduction ||
              "Experience JoeyLLM, LittleJoey, and Magpie models in our interactive chat interface."}
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
                icon={feature.icon || "🔧"}
                title={feature.title || "Feature"}
                description={feature.description || "Feature description"}
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
          {homeContent.mission?.title || "Our Mission"}
        </h2>
        <p className="text-gray-300 leading-relaxed">
          {homeContent.mission?.content ||
            "Our mission at JoeyLLM is to make advanced AI accessible, transparent and community-driven."}
        </p>
      </GlassCard>

    </div>
  );
}