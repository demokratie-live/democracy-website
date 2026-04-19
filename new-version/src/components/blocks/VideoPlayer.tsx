interface VideoPlayerProps {
  url: string;
  title: string;
  className?: string;
}

export function VideoPlayer({ url, title, className = "" }: VideoPlayerProps) {
  // Convert YouTube watch URLs to embed URLs
  const embedUrl = url.replace("watch?v=", "embed/").replace("youtu.be/", "www.youtube.com/embed/");

  return (
    <div className={`overflow-hidden rounded-xl ${className}`}>
      <div className="relative aspect-video w-full">
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
    </div>
  );
}
