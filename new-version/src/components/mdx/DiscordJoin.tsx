import { MessagesSquare } from "lucide-react";

interface DiscordJoinProps {
  url?: string;
  label?: string;
}

export function DiscordJoin({
  url = "https://discord.gg/ZWcFrEc",
  label = "Tritt unserem Discord bei",
}: DiscordJoinProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 rounded-lg bg-[#5865F2] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
    >
      <MessagesSquare className="h-5 w-5" />
      {label}
    </a>
  );
}
