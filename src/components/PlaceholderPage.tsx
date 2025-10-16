import PageHeader from "./PageHeader";
import GlassCard from "./GlassCard";

export default function PlaceholderPage({ title, subtitle }: { title: React.ReactNode; subtitle?: React.ReactNode }) {
  return (
    <div className="space-y-8">
      <PageHeader title={title} subtitle={subtitle} />
      <GlassCard className="p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
        <p className="text-gray-300">This page is under development and will be available soon.</p>
      </GlassCard>
    </div>
  );
}
