'use client';

interface StatementBlockProps {
  title: string;
  subtitle?: string;
  additionalText?: string;
  enabled?: boolean;
}

export function StatementBlock({ title, subtitle, additionalText }: StatementBlockProps) {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
        {title}
      </h1>
      {subtitle && (
        <h4 className="text-lg md:text-xl text-center text-gray-700 mt-8 max-w-4xl mx-auto">
          {subtitle}
        </h4>
      )}
      {additionalText && (
        <h4 className="text-lg md:text-xl text-center text-gray-700 mt-4 max-w-4xl mx-auto leading-relaxed">
          {additionalText}
        </h4>
      )}
    </div>
  );
}
