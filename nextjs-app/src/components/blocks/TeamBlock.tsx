'use client';

interface TeamLink {
  icon: string;
  url: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  links?: TeamLink[];
}

interface TeamBlockProps {
  decoratorImage?: string;
  title: string;
  subtitle?: string;
  members: TeamMember[];
  showDiscord?: boolean;
  discordServerId?: string;
  enabled?: boolean;
}

function getIconEmoji(icon: string): string {
  switch (icon) {
    case 'email':
      return '✉️';
    case 'phone':
      return '📞';
    case 'facebook':
      return '📘';
    case 'xing':
    case 'linkedin':
      return '💼';
    case 'twitter':
      return '🐦';
    case 'github':
      return '💻';
    default:
      return '🔗';
  }
}

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="w-full md:w-1/4 px-4" style={{ marginTop: '50px' }}>
      <div>
        <img
          src={member.image}
          alt={member.name}
          className="w-full max-w-[200px] mx-auto"
          style={{ borderRadius: '8px' }}
        />
      </div>
      <div className="team_info text-center mt-4">
        <h4 className="text-lg font-semibold">{member.name}</h4>
        {member.links && member.links.length > 0 && (
          <div className="team_links flex justify-center gap-3 my-2">
            {member.links.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                className="text-gray-600 hover:text-[#4494d3] transition-colors"
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {getIconEmoji(link.icon)}
              </a>
            ))}
          </div>
        )}
        <p className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: member.role }} />
      </div>
    </div>
  );
}

export function TeamBlock({
  decoratorImage,
  title,
  subtitle,
  members,
  showDiscord,
  discordServerId,
}: TeamBlockProps) {
  return (
    <div className="container mx-auto px-4">
      {decoratorImage && (
        <div className="flex justify-center">
          <img
            src={decoratorImage}
            alt="Decorator"
            className="w-full max-w-3xl"
            style={{ paddingTop: '50px' }}
          />
        </div>
      )}

      <div className="pt-12">
        <h1 className="text-2xl md:text-3xl font-bold text-center">{title}</h1>
        {subtitle && (
          <h4 className="text-lg text-center text-gray-700 mt-6">{subtitle}</h4>
        )}
      </div>

      <div className="flex flex-wrap justify-center">
        {members.map((member, idx) => (
          <TeamMemberCard key={idx} member={member} />
        ))}
        {showDiscord && discordServerId && (
          <div className="w-full md:w-1/4 px-4" style={{ marginTop: '50px' }}>
            <iframe
              src={`https://discordapp.com/widget?id=${discordServerId}&theme=light`}
              width="100%"
              height="100%"
              style={{ minHeight: '300px', paddingBottom: '15px' }}
              frameBorder={0}
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}
