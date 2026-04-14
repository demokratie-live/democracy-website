import { ExternalLink, FileText, Image as ImageIcon, Video, Download } from "lucide-react";
import type { PressEntry } from "@/lib/schemas";

const TYPE_ICONS: Record<string, typeof ExternalLink> = {
  article: ExternalLink,
  video: Video,
  document: FileText,
  logo: ImageIcon,
  screenshot: ImageIcon,
};

const TYPE_ACTION: Record<string, string> = {
  article: "Artikel lesen",
  video: "Video ansehen",
  document: "Herunterladen",
  logo: "Herunterladen",
  screenshot: "Ansehen",
};

function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString("de-DE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

interface PressCardItemProps {
  entry: PressEntry;
}

export function PressCardItem({ entry }: PressCardItemProps) {
  const Icon = TYPE_ICONS[entry.type] ?? ExternalLink;
  const actionLabel = TYPE_ACTION[entry.type] ?? "Öffnen";
  const isDownload = ["document", "logo", "screenshot"].includes(entry.type);

  return (
    <div className="flex flex-col rounded-xl bg-white p-5 shadow-sm ring-1 ring-border">
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-500">
          <Icon className="h-5 w-5" />
        </div>
        {entry.source && (
          <span className="text-xs font-medium text-muted-foreground">{entry.source}</span>
        )}
        {entry.date && (
          <span className="ml-auto text-xs text-muted-foreground">{formatDate(entry.date)}</span>
        )}
      </div>
      <h3 className="font-bold text-foreground">{entry.title}</h3>
      {entry.description && (
        <p className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground">
          {entry.description}
        </p>
      )}
      <a
        href={entry.url}
        target={isDownload ? undefined : "_blank"}
        rel={isDownload ? undefined : "noopener noreferrer"}
        download={isDownload || undefined}
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-500 hover:text-primary-600"
      >
        {isDownload ? <Download className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
        {actionLabel}
      </a>
    </div>
  );
}
