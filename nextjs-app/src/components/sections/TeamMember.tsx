'use client';

import * as React from 'react';

interface TeamMemberLink {
  icon: 'envelope' | 'phone' | 'facebook' | 'xing' | 'linkedin' | 'twitter' | 'github';
  url: string;
}

interface TeamMemberProps {
  name: string;
  role: string;
  description?: string;
  img: string;
  links?: TeamMemberLink[];
  className?: string;
}

const iconMap: Record<TeamMemberLink['icon'], string> = {
  envelope: '✉️',
  phone: '📞',
  facebook: '📘',
  xing: '💼',
  linkedin: '💼',
  twitter: '🐦',
  github: '💻',
};

export function TeamMember({ 
  name, 
  role, 
  description, 
  img, 
  links = [],
  className = '' 
}: TeamMemberProps) {
  return (
    <div className={`w-full md:w-1/4 px-4 ${className}`} style={{ marginTop: '50px' }}>
      <div>
        <img
          src={img}
          alt={name}
          className="w-full max-w-[200px] mx-auto"
          style={{ borderRadius: '8px' }}
        />
      </div>
      <div className="team_info text-center mt-4">
        <h4 className="text-lg font-semibold">{name}</h4>
        {links.length > 0 && (
          <div className="team_links flex justify-center gap-3 my-2">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                className="text-gray-600 hover:text-[#4494d3] transition-colors"
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {iconMap[link.icon] || '🔗'}
              </a>
            ))}
          </div>
        )}
        <p className="text-sm text-gray-600">
          <strong>{role}</strong>
          {description && (
            <>
              <br />
              {description}
            </>
          )}
        </p>
      </div>
    </div>
  );
}
