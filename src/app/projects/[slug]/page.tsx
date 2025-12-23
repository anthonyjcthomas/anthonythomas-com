import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug: rawSlug } = await params;

  // normalize slug so it always matches your data
  const slug = decodeURIComponent(rawSlug).trim().toLowerCase();

  const project = projects.find(
    (p) => p.slug.trim().toLowerCase() === slug
  );

  if (!project) {
    return (
      <main className="min-h-screen bg-black text-white">
        <div className="mx-auto max-w-4xl px-6 py-16 space-y-4">
          <p className="opacity-80">Project not found.</p>
          <Link className="underline" href="/projects">
            Back to projects
          </Link>
        </div>
      </main>
    );
  }

  const primaryLink =
    project.externalUrl || project.iosUrl || project.androidUrl;

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-10 space-y-8">
        <div className="flex items-center justify-between">
          <Link href="/projects" className="text-sm opacity-80 hover:opacity-100">
            ← Back to projects
          </Link>
          <Link href="/" className="text-sm opacity-80 hover:opacity-100">
            Home
          </Link>
        </div>

        <header className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.logo && (
                <div className="h-12 w-12 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <Image
                    src={project.logo}
                    alt={`${project.name} logo`}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              <h1 className="text-4xl font-semibold">{project.name}</h1>
            </div>

            {project.status && (
              <span className="rounded-full border border-white/10 px-2 py-0.5 text-xs opacity-80">
                {project.status}
              </span>
            )}
          </div>

          <p className="text-lg opacity-80">{project.description}</p>

          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 px-2 py-0.5 text-xs"
              >
                {t}
              </span>
            ))}
          </div>
        </header>

        {primaryLink && project.previewImage ? (
          <a
            href={primaryLink}
            target="_blank"
            rel="noreferrer"
            className="block group"
          >
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Image
                src={project.previewImage}
                alt={`${project.name} preview`}
                width={1400}
                height={800}
                className="h-auto w-full opacity-95 transition group-hover:opacity-100"
                priority
              />
            </div>
            <p className="mt-2 text-sm opacity-70 group-hover:opacity-90">
              Tap preview to open →
            </p>
          </a>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm opacity-80">
            Preview link coming soon.
          </div>
        )}

        {project.longDescription && (
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="opacity-80 leading-relaxed">{project.longDescription}</p>
          </section>
        )}

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Links</h2>
          <div className="flex flex-wrap gap-3">
            {project.externalUrl && (
              <a
                className="rounded-full bg-white px-4 py-2 text-sm text-black"
                href={project.externalUrl}
                target="_blank"
                rel="noreferrer"
              >
                Visit website
              </a>
            )}
            {project.iosUrl && (
              <a
                className="rounded-full border border-white/10 px-4 py-2 text-sm hover:bg-white/10"
                href={project.iosUrl}
                target="_blank"
                rel="noreferrer"
              >
                iOS
              </a>
            )}
            {project.androidUrl && (
              <a
                className="rounded-full border border-white/10 px-4 py-2 text-sm hover:bg-white/10"
                href={project.androidUrl}
                target="_blank"
                rel="noreferrer"
              >
                Android
              </a>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
