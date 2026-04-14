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
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
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
};

export function resolveIcon(name: string): LucideIcon | null {
  return iconMap[name] ?? null;
}
