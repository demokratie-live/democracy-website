/**
 * Custom Content Block Component
 * 
 * Rendert freie Inhalte aus dem RichText Editor
 */

import React from 'react';

interface CustomContentBlockProps {
  title?: string;
  content: unknown; // Lexical RichText content
  backgroundColor: string;
}

export function CustomContentBlock({ 
  content, 
  backgroundColor 
}: CustomContentBlockProps) {
  // Einfache Rendering-Logik für Lexical Content
  // In einer vollständigen Implementierung würde hier ein Lexical Renderer verwendet
  const renderContent = () => {
    if (!content) return null;
    
    // Für jetzt: Basic HTML aus Lexical content extrahieren
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const root = (content as any)?.root;
    if (!root?.children) return null;
    
    return root.children.map((node: { type: string; children?: { text: string }[]; tag?: string }, index: number) => {
      if (node.type === 'paragraph') {
        const text = node.children?.map((child: { text: string }) => child.text).join('') || '';
        return <p key={index} className="mb-4">{text}</p>;
      }
      if (node.type === 'heading') {
        const text = node.children?.map((child: { text: string }) => child.text).join('') || '';
        const Tag = (node.tag || 'h2') as keyof JSX.IntrinsicElements;
        return <Tag key={index} className="font-bold mb-4">{text}</Tag>;
      }
      return null;
    });
  };

  return (
    <section style={{ backgroundColor }}>
      <div className="container mx-auto px-4 py-16">
        {renderContent()}
      </div>
    </section>
  );
}
