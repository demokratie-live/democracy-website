'use client';

import * as React from 'react';

interface MediaArticleProps {
  title: string;
  img: string;
  link: string;
  baseUrl?: string;
}

export function MediaArticle({ 
  title, 
  img, 
  link, 
  baseUrl = 'https://democracy-deutschland.de/files/medien/' 
}: MediaArticleProps) {
  const imgSrc = img.startsWith('http') ? img : `${baseUrl}${img}`;

  return (
    <div className="w-full md:w-1/3 px-4" style={{ paddingBottom: '30px' }}>
      <div
        style={{
          border: 'rgb(151,151,151) solid 1px',
          background: 'rgb(216,216,216)',
          minHeight: '200px',
          maxHeight: '200px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
          <img
            src={imgSrc}
            alt={title}
            className="w-full object-cover"
            style={{ minHeight: '200px' }}
          />
          <div
            className="overlay absolute inset-0 flex items-end justify-center"
            style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)',
            }}
          >
            <div className="p-4 text-center">
              <h5 className="text-white text-sm font-medium leading-tight">{title}</h5>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
