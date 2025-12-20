'use client';

import * as React from 'react';

interface AppStoreBadgesProps {
  appStoreUrl?: string;
  playStoreUrl?: string;
  browserVersionUrl?: string;
  aabUrl?: string;
  apkUrl?: string;
  apkVersion?: string;
  theme?: 'light' | 'dark';
  className?: string;
}

export function AppStoreBadges({
  appStoreUrl = 'https://itunes.apple.com/de/app/democracy/id1341311162',
  playStoreUrl = 'https://play.google.com/store/apps/details?id=de.democracydeutschland.app',
  browserVersionUrl = 'https://democracy-app.de',
  aabUrl = '/files/download/democracy-app.aab',
  apkUrl = '/files/download/democracy-app.apk',
  apkVersion = 'v1.5.10',
  theme = 'light',
  className = '',
}: AppStoreBadgesProps) {
  const iconColor = theme === 'dark' ? '#454545' : 'white';
  const textColor = theme === 'dark' ? 'text-gray-800' : 'text-white';
  const linkColor = theme === 'dark' ? 'text-gray-800 hover:opacity-80' : 'text-white hover:opacity-80';

  return (
    <div className={className}>
      {/* App Store Badges */}
      <div className="flex flex-col lg:flex-row gap-4 mb-4 justify-center lg:justify-start">
        <div>
          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`badge-link text-[70px] leading-[70px] inline-block no-underline hover:opacity-80 ${textColor}`}
          >
            <i className="icon-app-store-outline" style={{ color: iconColor }}></i>
          </a>
        </div>
        <div className="lg:pl-6">
          <a
            href={playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`badge-link text-[70px] leading-[70px] inline-block no-underline hover:opacity-80 ${textColor}`}
          >
            <i className="icon-google-play-outline" style={{ color: iconColor }}></i>
          </a>
        </div>
      </div>

      {/* Additional Links */}
      <div className={`flex flex-col lg:flex-row gap-4 justify-center lg:justify-start ${textColor}`}>
        {browserVersionUrl && (
          <div>
            <a
              href={browserVersionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkColor} underline`}
            >
              zur Browserversion
            </a>
          </div>
        )}
        {(aabUrl || apkUrl) && (
          <div>
            {aabUrl && (
              <a
                href={aabUrl}
                target="_blank"
                className={linkColor}
                title="Android App Bundle"
              >
                AAB
              </a>
            )}
            {aabUrl && apkUrl && <span className="text-xl inline"> / </span>}
            {apkUrl && (
              <a
                href={apkUrl}
                target="_blank"
                className={linkColor}
                title="Android Package"
              >
                APK {apkVersion && `(${apkVersion})`}
              </a>
            )}
            <span> laden</span>
          </div>
        )}
      </div>
    </div>
  );
}
