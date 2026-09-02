'use client';

import { useEffect, useRef } from 'react';
import { useSetHeaderTheme } from '@/contexts/HeaderContext';

export default function BlogPage() {
  useSetHeaderTheme('light');
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const resizeIframe = () => {
      const iframe = iframeRef.current;
      if (iframe && iframe.contentWindow) {
        try {
          const height = iframe.contentWindow.document.body.scrollHeight;
          iframe.style.height = height + 'px';
        } catch {
          // Cross-origin restriction - iframe will use min-height
        }
      }
    };

    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('load', resizeIframe);
      return () => iframe.removeEventListener('load', resizeIframe);
    }
  }, []);

  return (
    <div className="bg-white pt-16">
      <div
        className="container mx-auto px-4"
        style={{ textAlign: 'left', marginBottom: '75px' }}
      >
        <iframe
          ref={iframeRef}
          id="blogiframe"
          src="https://www.democracy-deutschland.de/blog/"
          frameBorder={0}
          style={{
            width: '100%',
            minHeight: '150vh',
            border: 'none',
          }}
          title="DEMOCRACY Blog"
        />
      </div>
    </div>
  );
}
