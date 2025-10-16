export interface GapItem {
  icon: string;
  title: string;
  description: string;
}

export interface GapFlowProps {
  items: GapItem[];
}

export default function GapFlow({ items }: GapFlowProps) {
  return (
    <section className="py-8 px-4 md:px-8 max-w-5xl mx-auto">
      <div className="space-y-6">
        {items.map((item, index) => {
          const isLeft = index % 2 === 0;
          const marginClass = isLeft ? "md:ml-0" : "md:ml-auto";
          const maxWidth = "max-w-md";

          return (
            <div key={index} className="relative">
              {/* Connector line (visible on md+) */}
              {index < items.length - 1 && (
                <div
                  className={`hidden md:block absolute w-1 h-8 bg-gradient-to-b from-blue-500 to-transparent ${
                    isLeft ? "left-12" : "right-12"
                  } top-full`}
                  aria-hidden
                ></div>
              )}

              {/* Card */}
              <div
                className={`${marginClass} ${maxWidth} bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-6 hover:border-blue-500 transition-colors`}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
