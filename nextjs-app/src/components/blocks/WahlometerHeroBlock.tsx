/**
 * Wahlometer Hero Section Block Component
 */

import React from 'react';

interface WahlometerHeroBlockProps {
  title: string;
  subtitle: string;
  heroImage: string;
  backgroundImage: string;
  gradientStart: string;
  gradientEnd: string;
  appStoreUrl: string;
  playStoreUrl: string;
  browserVersionUrl: string;
  aabDownloadUrl: string;
  apkDownloadUrl: string;
  apkVersion: string;
}

export function WahlometerHeroBlock({
  title,
  subtitle,
  heroImage,
  backgroundImage,
  gradientStart,
  gradientEnd,
  appStoreUrl,
  playStoreUrl,
  browserVersionUrl,
  aabDownloadUrl,
  apkDownloadUrl,
  apkVersion,
}: WahlometerHeroBlockProps) {
  return (
    <section
      className="header-wom relative min-h-screen"
      style={{
        background: `linear-gradient(to bottom, ${gradientStart}, ${gradientEnd})`,
      }}
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
                alt="Wahl-O-Meter Screenshot"
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
                  className="text-[12vw] lg:text-[50px] font-bold mb-1"
                  style={{ fontFamily: 'helvetica, sans-serif' }}
                >
                  {title}
                </h1>
                <h1 className="text-[8vw] lg:text-[40px] mb-6">{subtitle}</h1>

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
                      className="text-white hover:opacity-80"
                    >
                      zur Browserversion
                    </a>
                  </div>
                  <div>
                    <a
                      href={aabDownloadUrl}
                      target="_blank"
                      className="text-white hover:opacity-80"
                      title="Android App Bundle"
                    >
                      AAB
                    </a>
                    <span className="text-xl inline"> / </span>
                    <a
                      href={apkDownloadUrl}
                      target="_blank"
                      className="text-white hover:opacity-80"
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
        <a href="#si-panel" className="text-white/20 hover:text-white/40 text-3xl">
          <i className="fa fa-chevron-circle-down"></i>
        </a>
      </div>
    </section>
  );
}
