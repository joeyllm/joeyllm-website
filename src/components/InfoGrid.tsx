import ContentSection from './ContentSection';

interface InfoGridItem {
  title?: string;
  name?: string;
  description?: string;
  content?: string;
  details?: string | object;
}

const InfoGrid: React.FC<{ items?: InfoGridItem[]; title?: React.ReactNode; columns?: number }> = ({ items, title, columns = 2 }) => (
  <ContentSection title={title}>
    <div className={`grid gap-6 ${columns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
      {items?.map((item, index) => (
        <div key={index} className="p-4 bg-white/5 rounded-xl border border-white/10">
          <h3 className="font-semibold text-white mb-2">{item.title || item.name}</h3>
          <p className="text-gray-300 text-sm">{item.description || item.content}</p>
          {item.details && (
            <div className="mt-3 text-xs text-gray-400">
              {typeof item.details === 'string' ? item.details : JSON.stringify(item.details)}
            </div>
          )}
        </div>
      )) || <p className="text-gray-300">No information available.</p>}
    </div>
  </ContentSection>
);

export default InfoGrid;
