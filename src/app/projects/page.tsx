import ProjectsGrid from "@/components/ProjectsGrid";
import GitHubReposGrid from "@/components/GitHubReposGrid";
import { projects } from "@/data/projects";
import { getGitHubRepos } from "@/lib/github";

export default async function ProjectsPage() {
  const repos = await getGitHubRepos();

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-6 py-16 space-y-10">
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold">Projects</h1>
          <p className="opacity-80 max-w-2xl">
            Featured projects + everything public on my GitHub.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Featured</h2>
          <ProjectsGrid items={projects} />
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">GitHub Repositories</h2>
          <GitHubReposGrid repos={repos} />
        </section>
      </div>
    </main>
  );
}
