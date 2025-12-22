import Link from 'next/link';
import { FAQClient } from './FAQClient';
import { getPayload } from 'payload';
import configPromise from '@payload-config';

// FAQ type from Payload CMS
export interface FAQ {
  id: number;
  question: string;
  answer: unknown; // Lexical rich text format
  category: 'beta' | 'mvp' | 'finanzen' | 'datenschutz' | 'allgemein';
  order: number;
  active: boolean;
}

// Convert Lexical rich text to HTML
function lexicalToHtml(content: unknown): string {
  if (!content || typeof content !== 'object') {
    return '';
  }

  const root = content as { root?: { children?: unknown[] } };
  if (!root.root?.children) {
    return '';
  }

  return processChildren(root.root.children);
}

function processChildren(children: unknown[]): string {
  return children.map((node) => processNode(node)).join('');
}

function processNode(node: unknown): string {
  if (!node || typeof node !== 'object') {
    return '';
  }

  const n = node as {
    type?: string;
    tag?: string;
    text?: string;
    format?: number;
    children?: unknown[];
    listType?: string;
    url?: string;
    fields?: { linkType?: string; url?: string; newTab?: boolean };
  };

  // Text node
  if (n.type === 'text' && n.text !== undefined) {
    let text = n.text;
    // Apply formatting
    if (n.format) {
      if (n.format & 1) text = `<strong>${text}</strong>`; // bold
      if (n.format & 2) text = `<em>${text}</em>`; // italic
      if (n.format & 8) text = `<u>${text}</u>`; // underline
    }
    return text;
  }

  // Line break
  if (n.type === 'linebreak') {
    return '<br>';
  }

  // Link
  if (n.type === 'link') {
    const url = n.fields?.url || n.url || '#';
    const target = n.fields?.newTab ? ' target="_blank" rel="noopener noreferrer"' : '';
    const childContent = n.children ? processChildren(n.children) : '';
    return `<a href="${url}"${target}>${childContent}</a>`;
  }

  // Autolink
  if (n.type === 'autolink') {
    const url = n.url || '#';
    const childContent = n.children ? processChildren(n.children) : url;
    return `<a href="${url}" target="_blank" rel="noopener noreferrer">${childContent}</a>`;
  }

  // Paragraph
  if (n.type === 'paragraph') {
    const childContent = n.children ? processChildren(n.children) : '';
    return `<p>${childContent}</p>`;
  }

  // Heading
  if (n.type === 'heading') {
    const tag = n.tag || 'h2';
    const childContent = n.children ? processChildren(n.children) : '';
    return `<${tag}>${childContent}</${tag}>`;
  }

  // List
  if (n.type === 'list') {
    const tag = n.listType === 'number' ? 'ol' : 'ul';
    const childContent = n.children ? processChildren(n.children) : '';
    return `<${tag}>${childContent}</${tag}>`;
  }

  // List item
  if (n.type === 'listitem') {
    const childContent = n.children ? processChildren(n.children) : '';
    return `<li>${childContent}</li>`;
  }

  // Generic element with children
  if (n.children) {
    return processChildren(n.children);
  }

  return '';
}

async function getFAQs(): Promise<FAQ[]> {
  try {
    const payload = await getPayload({ config: configPromise });
    const result = await payload.find({
      collection: 'faqs',
      where: {
        active: {
          equals: true,
        },
      },
      sort: 'order',
      limit: 100,
    });

    return result.docs as unknown as FAQ[];
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    return [];
  }
}

export default async function FAQPage() {
  const faqs = await getFAQs();

  // Transform FAQs to include HTML answer
  const transformedFaqs = faqs.map((faq) => ({
    id: faq.id,
    question: faq.question,
    answer: lexicalToHtml(faq.answer),
    category: faq.category,
    order: faq.order,
  }));

  return (
    <div className="bg-white pt-16">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
            Häufige Fragen (FAQ)
          </h1>
          <h5 className="text-base text-gray-600 pt-5 pb-12">
            Hier findet Ihr die wichtigsten Fragen &amp; Antworten zu DEMOCRACY.
            <br />
            Du hast auch eine Frage – stell Sie uns{' '}
            <Link href="/contact" className="text-[rgb(68,148,211)] hover:underline">
              hier
            </Link>
            .
          </h5>
        </div>

        {/* FAQ Content */}
        <FAQClient faqs={transformedFaqs} />
      </div>
    </div>
  );
}
