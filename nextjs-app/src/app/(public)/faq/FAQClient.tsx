'use client';

import { useState } from 'react';
import { useSetHeaderTheme } from '@/contexts/HeaderContext';

export interface TransformedFAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
  order: number;
}

interface FAQClientProps {
  faqs: TransformedFAQ[];
}

const categories = [
  { key: 'all', label: 'ALLE' },
  { key: 'beta', label: 'BETA' },
  { key: 'mvp', label: 'MVP' },
  { key: 'finanzen', label: 'FINANZEN' },
  { key: 'datenschutz', label: 'DATENSCHUTZ' },
];

export function FAQClient({ faqs }: FAQClientProps) {
  useSetHeaderTheme('light');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIndex, setOpenIndex] = useState<number>(0);

  const filteredFaqs =
    activeCategory === 'all'
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  if (faqs.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p>Keine FAQs verfügbar. Bitte im CMS hinzufügen.</p>
      </div>
    );
  }

  return (
    <>
      {/* Content Grid */}
      <div className="flex flex-col lg:flex-row gap-8 pb-24" style={{ textAlign: 'left' }}>
        {/* Category Menu */}
        <div className="lg:w-1/4">
          <ul
            className="rounded-lg overflow-hidden"
            style={{
              background: 'linear-gradient(to bottom, rgb(121,198,235), rgb(68,148,211))',
              padding: 0,
              margin: 0,
              listStyle: 'none',
            }}
          >
            {categories.map((cat) => (
              <li
                key={cat.key}
                className="transition-colors cursor-pointer"
                style={{
                  height: '100px',
                  fontSize: '20px',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'rgb(121,198,235)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                }}
              >
                <button
                  onClick={() => {
                    setActiveCategory(cat.key);
                    setOpenIndex(0);
                  }}
                  className="w-full h-full text-left block"
                  style={{
                    paddingTop: '35px',
                    paddingLeft: '35px',
                    color: activeCategory === cat.key ? '#fff' : '#000',
                    textDecoration: 'none',
                    fontWeight: activeCategory === cat.key ? 'bold' : 'normal',
                  }}
                >
                  {cat.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ Items */}
        <div className="lg:w-3/4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <p>Keine FAQs in dieser Kategorie.</p>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => (
              <div key={faq.id} className="mb-6">
                {/* Panel Heading */}
                <div
                  className="flex items-center justify-between cursor-pointer"
                  style={{
                    backgroundColor: 'rgb(239,239,244)',
                  }}
                  onClick={() => toggleFaq(index)}
                >
                  <h5
                    className="flex-1 m-0"
                    style={{
                      fontSize: '16px',
                    }}
                  >
                    <span
                      className="block"
                      style={{
                        padding: '25px',
                        color: 'rgb(25,29,32)',
                        textDecoration: 'none',
                      }}
                    >
                      {faq.question}
                    </span>
                  </h5>
                  <div
                    className="flex items-center justify-center transition-transform duration-300"
                    style={{
                      marginRight: '15px',
                      color: 'rgb(199,199,204)',
                      fontSize: '40px',
                      transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>

                {/* Panel Body */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div
                    className="mt-6"
                    style={{
                      backgroundColor: 'rgba(239,239,244,0.4)',
                      padding: '15px',
                    }}
                  >
                    <div
                      className="prose prose-sm max-w-none faq-content"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <style jsx global>{`
        .faq-content a {
          color: rgb(68, 148, 211);
          text-decoration: none;
        }
        .faq-content a:hover {
          text-decoration: underline;
        }
        .faq-content ul {
          margin-left: 20px;
          margin-top: 10px;
          margin-bottom: 10px;
          list-style-type: disc;
        }
        .faq-content ol {
          margin-left: 20px;
          margin-top: 10px;
          margin-bottom: 10px;
          list-style-type: decimal;
        }
        .faq-content li {
          margin-bottom: 5px;
        }
        .faq-content p {
          margin-bottom: 8px;
        }
        .faq-content br {
          display: block;
          content: '';
          margin-top: 8px;
        }
      `}</style>
    </>
  );
}
