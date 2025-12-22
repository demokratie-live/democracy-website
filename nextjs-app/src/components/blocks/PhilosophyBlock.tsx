'use client';

interface Value {
  icon: string;
  title: string;
  subtitle?: string;
}

interface PhilosophyBlockProps {
  decoratorImage?: string;
  title: string;
  subtitle?: string;
  values: Value[];
  enabled?: boolean;
}

export function PhilosophyBlock({
  decoratorImage,
  title,
  subtitle,
  values,
}: PhilosophyBlockProps) {
  return (
    <div className="container mx-auto px-4">
      {decoratorImage && (
        <div className="flex justify-center">
          <img
            src={decoratorImage}
            alt="Decorator"
            className="w-full max-w-3xl"
            style={{ paddingTop: '75px' }}
          />
        </div>
      )}

      <div className="pt-12 pb-12">
        <h1 className="text-2xl md:text-3xl font-bold text-center">{title}</h1>
        {subtitle && (
          <h4 className="text-lg text-center text-gray-700 mt-6 leading-relaxed whitespace-pre-line">
            {subtitle}
          </h4>
        )}
      </div>

      <div className="flex flex-wrap justify-center pb-8">
        {values.map((value, idx) => (
          <div key={idx} className="w-full md:w-1/3 text-center px-4 mb-8">
            <div className="flex justify-center mb-4">
              <img
                src={value.icon}
                alt={value.title}
                style={{ width: '80px' }}
              />
            </div>
            <h4 className="font-bold text-lg">{value.title}</h4>
            {value.subtitle && (
              <h6 className="text-gray-600 mt-2">{value.subtitle}</h6>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
