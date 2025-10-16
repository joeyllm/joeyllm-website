import React from 'react';

const PageHeader: React.FC<{ title?: React.ReactNode; subtitle?: React.ReactNode }> = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[rgb(var(--text-from))] via-[rgb(var(--text-via))] to-[rgb(var(--text-to))] bg-clip-text text-transparent leading-tight">
      {title}
    </h1>
    {subtitle && (
      <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

export default PageHeader;
