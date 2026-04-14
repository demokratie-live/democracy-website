import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";

import { Hero } from "@/components/blocks/Hero";
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

function isInternalLink(href: string) {
  return href.startsWith("/") || href.startsWith("#");
}

type AnchorProps = ComponentPropsWithoutRef<"a">;

function MdxLink({ href, children, ...props }: AnchorProps) {
  if (href && isInternalLink(href)) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
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
};
