import type { GitHubRepo } from "@/lib/github";

export default function GitHubReposGrid({ repos }: { repos: GitHubRepo[] }) {
  if (!repos.length) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm opacity-80">
        Couldn’t load GitHub repos right now.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {repos.map((r) => (
        <a
          key={r.id}
          href={r.html_url}
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="font-semibold truncate">{r.name}</div>
              <div className="text-sm opacity-80 line-clamp-2 mt-1">
                {r.description ?? "No description yet."}
              </div>
            </div>
            <div className="text-xs opacity-70 whitespace-nowrap">
              ★ {r.stargazers_count}
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-2 text-xs opacity-80">
            {r.language && (
              <span className="rounded-full border border-white/10 px-2 py-0.5">
                {r.language}
              </span>
            )}
            <span className="rounded-full border border-white/10 px-2 py-0.5">
              Forks {r.forks_count}
            </span>
          </div>

          <div className="mt-3 text-sm opacity-70">Open on GitHub →</div>
        </a>
      ))}
    </div>
  );
}
