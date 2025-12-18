import Link from "next/link";
import ExperienceSection from "@/components/ExperienceSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-10 space-y-6">
        {/* Profile header card */}
        <section className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
          {/* Cover */}
          <div
            className="h-36 sm:h-44 w-full"
            style={{
              backgroundImage: "url(/cover.jpeg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "rgba(255,255,255,0.04)",
            }}
          />

          <div className="px-5 sm:px-6 pb-6">
            <div className="-mt-10 sm:-mt-12 flex items-end justify-between gap-4">
              <div className="flex items-end gap-4">
                <div
                  className="h-20 w-20 sm:h-24 sm:w-24 rounded-full border border-white/10 bg-white/10"
                  style={{
                    backgroundImage: "url(/headshot.jpeg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                <div className="pb-1">
                  <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
                    Anthony Thomas
                  </h1>
                  <p className="mt-1 text-sm sm:text-base opacity-80">
                    Data Scientist I @ Accuray • CS & Data Science @ UW–Madison
                  </p>
                  <p className="mt-1 text-sm opacity-70">
                    Building products + analytics (mobile apps, dashboards, data tools).
                  </p>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-2 pb-2">
                <a
                  className="rounded-full bg-white px-4 py-2 text-sm text-black"
                  href="mailto:anthonyjcthomas@gmail.com"
                >
                  Message
                </a>
                <a
                  className="rounded-full border border-white/10 px-4 py-2 text-sm hover:bg-white/10"
                  href="https://www.linkedin.com/in/anthonyjcthomas/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <Link
                  className="rounded-full border border-white/10 px-4 py-2 text-sm hover:bg-white/10"
                  href="/projects"
                >
                  Projects
                </Link>
              </div>
            </div>

            <div className="sm:hidden mt-4 flex flex-wrap gap-2">
              <a
                className="rounded-full bg-white px-4 py-2 text-sm text-black"
                href="mailto:anthonyjcthomas@gmail.com"
              >
                Message
              </a>
              <a
                className="rounded-full border border-white/10 px-4 py-2 text-sm hover:bg-white/10"
                href="https://www.linkedin.com/in/anthonyjcthomas/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <Link
                className="rounded-full border border-white/10 px-4 py-2 text-sm hover:bg-white/10"
                href="/projects"
              >
                Projects
              </Link>
            </div>
          </div>
        </section>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <section className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 space-y-3">
              <h2 className="text-lg font-semibold">About</h2>
              <p className="opacity-80 leading-relaxed">
              I’m a Data Scientist I at Accuray with Bachelors of Science in Computer Science and Data Science at the University of Wisconsin–Madison.
              I enjoy using data and software to solve real problems and build tools people actually use. I’ve worked on projects in data analysis, app development, and cloud systems. 
              I’m always excited to learn, collaborate, and make an impact through my work.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["React", "TypeScript", "React Native", "Firebase", "Python", "Data Viz"].map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-black/20 px-2 py-0.5 text-xs opacity-90">
                    {t}
                  </span>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-lg font-semibold">Featured</h2>
                <Link className="text-sm opacity-80 hover:opacity-100" href="/projects">
                  View all →
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="/projects/gridiron"
                  className="rounded-2xl border border-white/10 bg-black/20 hover:bg-white/10 transition p-4"
                >
                  <div
                    className="h-28 rounded-xl border border-white/10 bg-white/5"
                    style={{
                      backgroundImage: "url(/gridiron-analytics.png)",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="mt-3">
                    <div className="font-semibold">Gridiron Analytics</div>
                    <div className="text-sm opacity-80">Football analytics dashboards + tendencies.</div>
                    <div className="mt-2 text-sm opacity-70">Open preview →</div>
                  </div>
                </Link>

                <Link
                  href="/projects/saveory"
                  className="rounded-2xl border border-white/10 bg-black/20 hover:bg-white/10 transition p-4"
                >
                  <div
                    className="h-28 rounded-xl border border-white/10 bg-white/5"
                    style={{
                      backgroundImage: "url(/SaveoryLogo.png)",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="mt-3">
                    <div className="font-semibold">Saveory</div>
                    <div className="text-sm opacity-80">Happy hour discovery + bookmarks + maps.</div>
                    <div className="mt-2 text-sm opacity-70">Open preview →</div>
                  </div>
                </Link>
              </div>
            </section>
          </div>
          
          <aside className="space-y-6">
            <section className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 space-y-3">
              <h2 className="text-lg font-semibold">Contact</h2>
              <div className="space-y-2 text-sm opacity-80">
                <a className="hover:opacity-100 block" href="mailto:anthonyjcthomas@gmail.com">
                  anthonyjcthomas@gmail.com
                </a>
                <a className="hover:opacity-100 block" href="https://www.linkedin.com/in/anthonyjcthomas/" target="_blank" rel="noreferrer">
                  linkedin.com/in/anthonyjcthomas
                </a>
                <a className="hover:opacity-100 block" href="https://github.com/anthonyjcthomas" target="_blank" rel="noreferrer">
                  github.com/anthonyjcthomas
                </a>
              </div>
            </section>
          </aside>
        </div>
        <ExperienceSection />
      </div>
    </main>
  );
}
