'use client';

interface FounderQuoteBlockProps {
  quoteIcon?: string;
  quoteText: string;
  authorName: string;
  authorRole?: string;
  enabled?: boolean;
}

export function FounderQuoteBlock({
  quoteIcon,
  quoteText,
  authorName,
  authorRole,
}: FounderQuoteBlockProps) {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center pb-24">
        <div className="hidden md:block md:w-1/6"></div>
        {quoteIcon && (
          <div className="w-auto px-4">
            <img
              src={quoteIcon}
              alt="Quote"
              style={{ width: '60px', paddingTop: '25px' }}
            />
          </div>
        )}
        <div className="w-full md:w-7/12 px-4" style={{ paddingTop: '25px' }}>
          <span className="text-gray-700 leading-relaxed">
            {quoteText}
          </span>
          <div className="mt-4">
            <span className="font-bold">{authorName},</span>{' '}
            {authorRole && <span className="text-[#4494d3]">{authorRole}</span>}
          </div>
        </div>
        <div className="hidden md:block md:w-1/6"></div>
      </div>
    </div>
  );
}
