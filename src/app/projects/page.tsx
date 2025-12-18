import ProjectsGrid from "@/components/ProjectsGrid";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-10 space-y-6">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="opacity-80 max-w-2xl">
          A few things I’ve built (and I’m building).
        </p>

        <ProjectsGrid items={projects} />
      </div>
    </main>
  );
}
