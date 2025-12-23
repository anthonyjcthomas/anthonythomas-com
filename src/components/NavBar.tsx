import Link from "next/link";

export default function NavBar() {
  return (
    <div className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
        {/* Left: socials */}
        <div className="flex flex-wrap items-center gap-4 text-sm opacity-80">
          <a
            className="hover:opacity-100"
            href="https://github.com/anthonyjcthomas"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="hover:opacity-100"
            href="https://www.linkedin.com/in/anthonyjcthomas"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a className="hover:opacity-100" href="mailto:anthonyjcthomas@gmail.com">
            Email
          </a>
        </div>

        {/* Right: site nav */}
        <div className="flex items-center gap-2 text-sm">
        <Link
          className="rounded-full border border-white/40 bg-white/5 px-3 py-1 text-sm text-white hover:bg-white/15 hover:border-white/70 transition"
          href="/"
        >
          Home
        </Link>

        <Link
          className="rounded-full border border-white/40 bg-white/5 px-3 py-1 text-sm text-white hover:bg-white/15 hover:border-white/70 transition"
          href="/projects"
        >
          Projects
        </Link>
        </div>
      </div>
    </div>
  );
}
