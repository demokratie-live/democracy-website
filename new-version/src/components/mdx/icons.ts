import { cloneElement, createElement, type ReactElement, type SVGProps } from "react";
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

type IconElement = ReactElement<SVGProps<SVGSVGElement>>;

const iconMap: Record<string, IconElement> = {
  list: createElement(List),
  "file-text": createElement(FileText),
  vote: createElement(Vote),
  "bar-chart": createElement(BarChart3),
  "pie-chart": createElement(PieChart),
  users: createElement(Users),
  landmark: createElement(Landmark),
  search: createElement(Search),
  shield: createElement(Shield),
  heart: createElement(Heart),
  "arrow-right": createElement(ArrowRight),
  play: createElement(Play),
  "external-link": createElement(ExternalLink),
  mail: createElement(Mail),
  check: createElement(Check),
  x: createElement(X),
  "chevron-down": createElement(ChevronDown),
  server: createElement(Server),
  code: createElement(Code),
  "share-2": createElement(Share2),
  smartphone: createElement(Smartphone),
  "tech-typescript": createElement(TypeScriptIcon),
  "tech-react": createElement(ReactIcon),
  "tech-node": createElement(NodeIcon),
};

export function renderIcon(name: string, className: string): IconElement | null {
  const icon = iconMap[name];

  return icon ? cloneElement(icon, { className }) : null;
}
