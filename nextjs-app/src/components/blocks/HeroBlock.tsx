/**
 * Hero Section Block Component
 * 
 * Rendert die Hero Sektion der Startseite mit App Store Links und Download Optionen
 */

import React from 'react';

interface HeroBlockProps {
  title: string;
  version: string;
  subtitle: string;
  heroImage: string;
  backgroundImage: string;
  appStoreUrl: string;
  playStoreUrl: string;
  browserVersionUrl: string;
  aabDownloadUrl: string;
  apkDownloadUrl: string;
  apkVersion: string;
}

export function HeroBlock({
  title,
  version,
  subtitle,
  heroImage,
  backgroundImage,
  appStoreUrl,
  playStoreUrl,
  browserVersionUrl,
  aabDownloadUrl,
  apkDownloadUrl,
  apkVersion,
}: HeroBlockProps) {
  // Parse version für die spezielle Darstellung
  const versionParts = version.split('.');
  const majorVersion = versionParts[0] || '1';
  const minorVersion = versionParts[1] || '0';

  return (
    <section 
      className="header-home relative min-h-screen" 
      style={{ background: 'linear-gradient(to bottom, rgb(121, 198, 235), rgb(68, 148, 211))' }}
    >
      {/* Background Logo */}
      <div className="background-logo hidden lg:block overflow-hidden absolute w-full h-screen left-0">
        <img 
          src={backgroundImage} 
          alt="" 
          className="h-[80vh] absolute right-[-30vh] top-[20vh]" 
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row min-h-screen">
          {/* Left Side - Phone */}
          <div className="lg:w-5/12 order-2 lg:order-1 flex justify-center items-end lg:items-start">
            <div className="device-container max-w-[350px] mb-12 lg:mb-0 lg:mt-[150px]">
              <img 
                src={heroImage} 
                alt="DEMOCRACY App Screenshot"
                className="w-full"
              />
            </div>
          </div>
          
          <div className="lg:w-1/12 order-3 lg:order-2"></div>
          
          {/* Right Side - Content */}
          <div className="lg:w-6/12 order-1 lg:order-3 flex items-center">
            <div className="header-content text-center lg:text-left pt-32 lg:pt-0 w-full">
              <div className="header-content-inner text-white">
                <h1 
                  className="text-5xl lg:text-[50px] font-bold mb-1 italic" 
                  style={{ fontFamily: 'helvetica, sans-serif' }}
                >
                  {title}
                </h1>
                <div className="mb-1 flex items-baseline justify-center lg:justify-start">
                  <span 
                    className="text-[80px] font-black leading-none" 
                    style={{ 
                      background: 'linear-gradient(0.5turn, #4494d3, #336daf)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontFamily: 'system-ui, -apple-system, sans-serif'
                    }}
                  >
                    {majorVersion}
                  </span>
                  <span 
                    className="text-[90px] font-black leading-none" 
                    style={{ 
                      background: 'linear-gradient(0.5turn, #4494d3, #336daf)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      marginLeft: '-6px'
                    }}
                  >
                    .
                  </span>
                  <span 
                    className="text-[80px] font-black leading-none" 
                    style={{ 
                      background: 'linear-gradient(0.5turn, #4494d3, #336daf)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      marginLeft: '-5px'
                    }}
                  >
                    {minorVersion}
                  </span>
                </div>
                <h1 className="text-3xl lg:text-[40px] mb-6 italic">{subtitle}</h1>
                
                {/* App Store Badges */}
                <div className="flex flex-col lg:flex-row gap-4 mb-4 justify-center lg:justify-start">
                  <div>
                    <a 
                      href={appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="badge-link text-white text-[70px] leading-[70px] inline-block no-underline hover:opacity-80"
                    >
                      <i className="icon-app-store-outline"></i>
                    </a>
                  </div>
                  <div className="lg:pl-6">
                    <a 
                      href={playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="badge-link text-white text-[70px] leading-[70px] inline-block no-underline hover:opacity-80"
                    >
                      <i className="icon-google-play-outline"></i>
                    </a>
                  </div>
                </div>
                
                {/* Links */}
                <div className="flex flex-col lg:flex-row gap-4 text-white justify-center lg:justify-start">
                  <div>
                    <a 
                      href={browserVersionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:opacity-80 underline"
                    >
                      zur Browserversion
                    </a>
                  </div>
                  <div>
                    <a 
                      href={aabDownloadUrl}
                      target="_blank"
                      className="text-white hover:opacity-80 underline"
                      title="Android App Bundle"
                    >
                      AAB
                    </a>
                    <span className="text-xl inline"> / </span>
                    <a 
                      href={apkDownloadUrl}
                      target="_blank"
                      className="text-white hover:opacity-80 underline"
                      title="Android Package"
                    >
                      APK ({apkVersion})
                    </a>
                    <span> laden</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Icon */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
        <a href="#video-box" className="text-white/20 hover:text-white/40 text-3xl">
          <i className="fa fa-chevron-circle-down"></i>
        </a>
      </div>
    </section>
  );
}
