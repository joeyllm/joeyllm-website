export interface HeroSectionProps {
  mainHeading: string;
  subheading: string;
  accentLine?: boolean;
}

export default function HeroSection({
  mainHeading,
  subheading,
  accentLine = true,
}: HeroSectionProps) {
  return (
    <section className="py-12 px-4 md:px-8 max-w-4xl mx-auto">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          {mainHeading}
        </h1>

        {accentLine && (
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
        )}

        <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl">
          {subheading}
        </p>
      </div>
    </section>
  );
}
