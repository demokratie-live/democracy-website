import Image from "next/image";
import { Mail } from "lucide-react";
import type { TeamData } from "@/lib/schemas";

interface TeamGridProps {
  team: TeamData;
}

function MemberCard({ member }: { member: TeamData["core"][number] }) {
  return (
    <div className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-sm ring-1 ring-border">
      <div className="mb-4 flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-primary-100">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            width={96}
            height={96}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-2xl font-bold text-primary-500">
            {member.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        )}
      </div>
      <h3 className="text-lg font-semibold">{member.name}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>
      {member.links?.email && (
        <a
          href={`mailto:${member.links.email}`}
          className="mt-3 inline-flex items-center gap-1.5 text-sm text-primary-500 transition-colors hover:text-primary-600"
          aria-label={`E-Mail an ${member.name}`}
        >
          <Mail className="h-4 w-4" />
          E-Mail
        </a>
      )}
    </div>
  );
}

export function TeamGrid({ team }: TeamGridProps) {
  return (
    <section className="py-12">
      <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">Unser Team</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {team.core.map((member) => (
          <MemberCard key={member.name} member={member} />
        ))}
      </div>
      {team.volunteers.length > 0 && (
        <>
          <h3 className="mb-6 mt-12 text-center text-xl font-semibold">Ehrenamtliche</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.volunteers.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
