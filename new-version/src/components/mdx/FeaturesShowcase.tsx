"use client";

import { useEffect, useRef, useState } from "react";
import { renderIcon } from "./icons";

type Feature = {
  id: string;
  icon: string;
  title: string;
  description: string;
  videoSrc: string;
  posterSrc: string;
};

const FEATURES: readonly Feature[] = [
  {
    id: "waehle",
    icon: "list",
    title: "Wähle",
    description: "einen aktuellen, vergangenen oder populären Vorgang des Deutschen Bundestages",
    videoSrc: "/videos/DDW-List_croped.mp4",
    posterSrc: "/videos/DDW-List_croped.png",
  },
  {
    id: "informiere",
    icon: "file-text",
    title: "Informiere",
    description: "Dich über den Vorgang mithilfe der offiziellen Parlamentsdokumente",
    videoSrc: "/videos/DDW-info_croped.mp4",
    posterSrc: "/videos/DDW-info_croped.png",
  },
  {
    id: "stimme",
    icon: "vote",
    title: "Stimme",
    description: "selbst über den Vorgang ab, als wärst Du Bundestagsabgeordneter",
    videoSrc: "/videos/DDW-vote_croped.mp4",
    posterSrc: "/videos/DDW-vote_croped.png",
  },
  {
    id: "vergleiche",
    icon: "bar-chart",
    title: "Vergleiche",
    description: "Dein Abstimmungsverhalten mit der Community und dem Bundestag",
    videoSrc: "/videos/DDW-compare_croped.mp4",
    posterSrc: "/videos/DDW-compare_croped.png",
  },
  {
    id: "analysiere",
    icon: "pie-chart",
    title: "Analysiere",
    description: "Deine Übereinstimmung mit dem Bundestag, den Parteien und Kandidaten",
    videoSrc: "/videos/DDW-analyse_croped.mp4",
    posterSrc: "/videos/DDW-analyse_croped.png",
  },
] as const;

export function FeaturesShowcase() {
  const [activeId, setActiveId] = useState<string>(FEATURES[0].id);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  const active = FEATURES.find((f) => f.id === activeId) ?? FEATURES[0];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
    const playResult = video.play();
    if (playResult && typeof playResult.catch === "function") {
      playResult.catch(() => {
        /* play() kann in Safari/iOS ohne User-Gesture abweisen – still ignorieren */
      });
    }
  }, [activeId]);

  const handleSelect = (id: string) => {
    if (id === activeId) return;
    setActiveId(id);
    window.setTimeout(() => {
      videoContainerRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 50);
  };

  return (
    <div className="grid items-start gap-8 md:grid-cols-2">
      <div
        role="tablist"
        aria-label="Funktionen von DEMOCRACY"
        aria-orientation="vertical"
        className="space-y-4"
      >
        {FEATURES.map((feature) => {
          const isActive = feature.id === activeId;
          const buttonClass = isActive
            ? "flex w-full items-start gap-4 rounded-xl bg-primary-500 p-5 text-left text-white shadow-sm transition-colors duration-200"
            : "flex w-full items-start gap-4 rounded-xl bg-white p-5 text-left text-foreground shadow-sm ring-1 ring-border transition-colors duration-200 hover:ring-primary-300";
          const iconBadgeClass = isActive
            ? "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-white"
            : "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-500";
          const descriptionClass = isActive
            ? "mt-1 text-sm text-white/90"
            : "mt-1 text-sm text-muted-foreground";

          return (
            <button
              key={feature.id}
              type="button"
              role="tab"
              id={`tab-${feature.id}`}
              aria-selected={isActive}
              aria-controls="feature-video"
              onClick={() => handleSelect(feature.id)}
              className={buttonClass}
            >
              <span className={iconBadgeClass} aria-hidden="true">
                {renderIcon(feature.icon, "h-5 w-5")}
              </span>
              <span className="flex-1">
                <h3 className="font-semibold">{feature.title}</h3>
                <p className={descriptionClass}>{feature.description}</p>
              </span>
            </button>
          );
        })}
      </div>

      <div
        ref={videoContainerRef}
        id="feature-video"
        role="tabpanel"
        aria-labelledby={`tab-${active.id}`}
        className="flex scroll-mt-24 justify-center"
      >
        <video
          key={active.id}
          ref={videoRef}
          className="max-h-[560px] w-auto rounded-xl drop-shadow-xl"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={active.posterSrc}
        >
          <source src={active.videoSrc} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default FeaturesShowcase;
