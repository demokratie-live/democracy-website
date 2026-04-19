import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";

import { Hero } from "@/components/blocks/Hero";
import { HeroWithPhone } from "@/components/blocks/HeroWithPhone";
import { VideoPlayer } from "@/components/blocks/VideoPlayer";
import { AppBadges } from "@/components/blocks/AppBadges";

import { Section } from "./Section";
import { Grid } from "./Grid";
import { CTA } from "./CTA";
import { FeatureCard } from "./FeatureCard";
import { InfoCard } from "./InfoCard";
import { PressBar, PressLink } from "./PressBar";
import { Quote } from "./Quote";
import { PhilosophyCard } from "./PhilosophyCard";
import { TeamSection } from "./TeamSection";
import { ComparisonTable, ComparisonRow } from "./ComparisonTable";
import { ValueTable, ValueRow } from "./ValueTable";
import { FAQSection } from "./FAQSection";
import { DonateSection } from "./DonateSection";
import { RoadmapSection } from "./RoadmapSection";
import { ContactForm } from "./ContactForm";
import { MediaGrid } from "./MediaGrid";
import { BlogTeaser } from "./BlogTeaser";
import { BugReportForm } from "./BugReportForm";
import { HelpOutForm } from "./HelpOutForm";
import { DiscordJoin } from "./DiscordJoin";

function isInternalLink(href: string) {
  return href.startsWith("/") || href.startsWith("#");
}

// Non-http(s) protocols that should open in the current tab (mail clients,
// phone dialers, etc.) — `target="_blank"` on these is usually unwanted.
function isSameTabProtocol(href: string) {
  return /^(mailto:|tel:|sms:)/i.test(href);
}

type AnchorProps = ComponentPropsWithoutRef<"a">;

function MdxLink({ href, children, ...props }: AnchorProps) {
  if (!href) {
    return <a {...props}>{children}</a>;
  }
  if (isInternalLink(href)) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }
  if (isSameTabProtocol(href)) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

export const mdxComponents = {
  a: MdxLink,
  Hero,
  HeroWithPhone,
  VideoPlayer,
  AppBadges,
  Section,
  Grid,
  CTA,
  FeatureCard,
  InfoCard,
  PressBar,
  PressLink,
  Quote,
  PhilosophyCard,
  TeamSection,
  ComparisonTable,
  ComparisonRow,
  ValueTable,
  ValueRow,
  FAQSection,
  DonateSection,
  RoadmapSection,
  ContactForm,
  MediaGrid,
  BlogTeaser,
  BugReportForm,
  HelpOutForm,
  DiscordJoin,
};
