'use client';

export interface ActionPath {
  label: string;
  icon: string;
  items: string[];
  ctaText: string;
  ctaHref?: string;
}

export interface ActionPathsProps {
  paths: ActionPath[];
}

export default function ActionPaths({ paths }: ActionPathsProps) {
  return (
    <section className="py-8 px-4 md:px-8 bg-gradient-to-b from-transparent to-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          What You Can Do Now
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {paths.map((path, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition-colors"
            >
              <div className="text-4xl mb-3">{path.icon}</div>
              <h3 className="text-lg font-bold text-white mb-3">{path.label}</h3>

              <ul className="space-y-2 mb-4">
                {path.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-gray-300 text-xs flex items-start"
                  >
                    <span className="text-blue-400 mr-2 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={path.ctaHref || "#"}
                className="inline-block text-blue-400 hover:text-blue-300 font-semibold text-sm transition-colors"
              >
                {path.ctaText} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
