import type { ComponentType, SVGProps } from "react";
import {
  List,
  FileText,
  Vote,
  BarChart3,
  PieChart,
  Users,
  Landmark,
  Search,
  Shield,
  Heart,
  ArrowRight,
  Play,
  ExternalLink,
  Mail,
  Check,
  X,
  ChevronDown,
  Server,
  Code,
  Share2,
  Smartphone,
} from "lucide-react";
import { TypeScriptIcon } from "@/components/icons/tech/TypeScriptIcon";
import { ReactIcon } from "@/components/icons/tech/ReactIcon";
import { NodeIcon } from "@/components/icons/tech/NodeIcon";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const iconMap: Record<string, IconComponent> = {
  list: List,
  "file-text": FileText,
  vote: Vote,
  "bar-chart": BarChart3,
  "pie-chart": PieChart,
  users: Users,
  landmark: Landmark,
  search: Search,
  shield: Shield,
  heart: Heart,
  "arrow-right": ArrowRight,
  play: Play,
  "external-link": ExternalLink,
  mail: Mail,
  check: Check,
  x: X,
  "chevron-down": ChevronDown,
  server: Server,
  code: Code,
  "share-2": Share2,
  smartphone: Smartphone,
  "tech-typescript": TypeScriptIcon,
  "tech-react": ReactIcon,
  "tech-node": NodeIcon,
};

export function resolveIcon(name: string): IconComponent | null {
  return iconMap[name] ?? null;
}
