export type GitHubRepo = {
    id: number;
    name: string;
    full_name: string;
    html_url: string;
    description: string | null;
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    archived: boolean;
    fork: boolean;
    updated_at: string;
    homepage: string | null;
  };
  
  const USERNAME = "anthonyjcthomas";
  
  export async function getGitHubRepos(): Promise<GitHubRepo[]> {
    const url = `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`;
  
    const res = await fetch(url, {
      // revalidate so it stays fresh but not on every request
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/vnd.github+json",
        // Optional: add a token to avoid rate limits
        ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
      },
    });
  
    if (!res.ok) {
      // fail gracefully
      return [];
    }
  
    const repos = (await res.json()) as GitHubRepo[];
  
    return repos
      .filter((r) => !r.fork)       // hide forks (optional)
      .filter((r) => !r.archived)   // hide archived (optional)
      .sort((a, b) => (a.updated_at < b.updated_at ? 1 : -1));
  }
  