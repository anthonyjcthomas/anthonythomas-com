"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const ALL = "All";

export default function ProjectsGrid({ items }: { items: Project[] }) {
  const tags = useMemo(() => {
    const set = new Set<string>();
    items.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return [ALL, ...Array.from(set).sort()];
  }, [items]);

  const [active, setActive] = useState<string>(ALL);

  const filtered = useMemo(() => {
    if (active === ALL) return items;
    return items.filter((p) => p.tags.includes(active));
  }, [items, active]);

  return (
    <div className="space-y-4">
      {/* Filter pills */}
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => {
          const isOn = t === active;
          return (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`rounded-full px-3 py-1 text-sm border border-white/10 transition ${
                isOn ? "bg-white text-black" : "hover:bg-white/10 text-white"
              }`}
            >
              {t}
            </button>
          );
        })}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
