"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="block">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur hover:bg-white/10 transition">
        {/* Logo + title row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.logo && (
              <div className="h-10 w-10 overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <Image
                  src={project.logo}
                  alt={`${project.name} logo`}
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            <h3 className="text-lg font-semibold">{project.name}</h3>
          </div>

          {project.status && (
            <span className="rounded-full border border-white/10 px-2 py-0.5 text-xs opacity-80">
              {project.status}
            </span>
          )}
        </div>

        <p className="mt-2 text-sm opacity-80">{project.description}</p>

        <div className="flex flex-wrap gap-2 pt-3">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 px-2 py-0.5 text-xs"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="pt-3 text-sm opacity-70">View project →</div>
      </div>
    </Link>
  );
}
