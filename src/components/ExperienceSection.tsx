import Image from "next/image";
import { experience } from "@/data/experience";

function InitialBadge({ text }: { text: string }) {
  const initials = text
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

  return (
    <div className="h-12 w-12 rounded-2xl border border-white/10 bg-white/5 grid place-items-center text-sm font-semibold opacity-90">
      {initials}
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 space-y-4">
      <h2 className="text-lg font-semibold">Experience</h2>

      <div className="space-y-3">
        {experience.map((e) => (
          <div
            key={`${e.company}-${e.role}-${e.dates}`}
            className="rounded-2xl border border-white/10 bg-black/20 p-4"
          >
            <div className="flex gap-4">
              {e.logo ? (
                <div className="h-12 w-12 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <Image
                    src={e.logo}
                    alt={`${e.company} logo`}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <InitialBadge text={e.company} />
              )}

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="min-w-0">
                    <div className="font-semibold">{e.role}</div>
                    <div className="text-sm opacity-80">
                      {e.company}
                      {e.type ? ` • ${e.type}` : ""}
                    </div>
                  </div>

                  <div className="text-sm opacity-70 text-right">
                    <div>{e.dates}</div>
                    {e.location && <div>{e.location}</div>}
                  </div>
                </div>

                <ul className="mt-3 space-y-1 text-sm opacity-80 list-disc pl-5">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
