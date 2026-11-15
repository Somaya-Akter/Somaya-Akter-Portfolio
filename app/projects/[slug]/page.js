
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  projects,
  projectImage,
  profile,
} from "../../../data/portfolio";

// Generate routes for all three projects
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Dynamic SEO metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.name} | Somaya Akter`,
    description: project.summary,
  };
}

// Reusable list for project details
function DetailList({ items, icon = "✓" }) {
  return (
    <ul className="mt-5 space-y-4">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-sm leading-7 text-slate-300 sm:text-base"
        >
          <span className="mt-0.5 shrink-0 font-bold text-cyan-400">
            {icon}
          </span>

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

// Reusable section heading
function DetailHeading({ children }) {
  return (
    <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
      {children}
    </h2>
  );
}

export default async function ProjectDetails({ params }) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  const otherProjects = projects.filter(
    (item) => item.slug !== slug
  );

  return (
    <div className="min-h-screen bg-[#080f1c] text-white">

      {/* ========== NAVBAR ========== */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080f1c]/95 backdrop-blur-xl">

        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">

          <Link
            href="/"
            className="text-2xl font-extrabold tracking-tight"
          >
            Somaya
            <span className="text-cyan-400">.</span>
          </Link>

          <Link
            href="/#projects"
            className="text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            ← Back to Projects
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-24 pt-16">

        {/* ========== PROJECT HERO ========== */}
        <section>

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            Featured Project {project.number} / 03
          </p>

          <div className="mt-6 flex flex-col justify-between gap-7 md:flex-row md:items-end">

            <div>
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
                {project.name}
                <span className="text-cyan-400">.</span>
              </h1>

              <p className="mt-4 text-lg text-slate-400">
                {project.category}
              </p>
            </div>

            {/* Project Links */}
            <div className="flex flex-wrap gap-3">

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Live Website ↗
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-500 px-5 py-3 text-sm font-bold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Client GitHub ↗
              </a>
            </div>
          </div>

          {/* Project Image */}
          <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[#131e32]">

            <img
              src={projectImage(project)}
              alt={`${project.name} illustrated project preview`}
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
        </section>

        {/* ========== DETAILS CONTENT ========== */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1.6fr_1fr]">

          {/* LEFT COLUMN */}
          <div className="space-y-12">

            {/* Overview */}
            <section>
              <DetailHeading>
                Project Overview
              </DetailHeading>

              <p className="mt-5 text-base leading-8 text-slate-400">
                {project.description}
              </p>
            </section>

            {/* Features */}
            <section>
              <DetailHeading>
                Key Features
              </DetailHeading>

              <DetailList
                items={project.features}
                icon="✓"
              />
            </section>

            {/* Challenges */}
            <section>
              <DetailHeading>
                Development Challenges
              </DetailHeading>

              <p className="mt-4 leading-8 text-slate-400">
                Every project provides opportunities to
                learn and solve new problems. Some of the
                challenges involved in this project include:
              </p>

              <DetailList
                items={project.challenges}
                icon="✦"
              />
            </section>

            {/* Future Improvements */}
            <section>
              <DetailHeading>
                Future Improvements
              </DetailHeading>

              <p className="mt-4 leading-8 text-slate-400">
                There are several opportunities to
                improve this project and provide an
                even better user experience.
              </p>

              <DetailList
                items={project.future}
                icon="↗"
              />
            </section>
          </div>

          {/* RIGHT COLUMN */}
          <aside className="h-fit rounded-2xl border border-white/10 bg-[#131e32] p-7 lg:sticky lg:top-28">

            <h2 className="text-xl font-bold">
              Project Information
            </h2>

            {/* Technology Stack */}
            <div className="mt-7 border-t border-white/10 pt-6">

              <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Technology Stack
              </h3>

              <div className="mt-5 flex flex-wrap gap-3">

                {project.stack.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-sm font-medium text-cyan-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* Live Website */}
            <div className="mt-7 border-t border-white/10 pt-6">

              <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                Live Project
              </h3>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-slate-200 hover:text-cyan-400"
              >
                Visit Live Website ↗
              </a>
            </div>

            {/* GitHub Repository */}
            <div className="mt-7 border-t border-white/10 pt-6">

              <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                GitHub Repository
              </h3>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-slate-200 hover:text-cyan-400"
              >
                View Client Repository ↗
              </a>
            </div>
          </aside>
        </div>

        {/* ========== OTHER PROJECTS ========== */}
        <section className="mt-24 border-t border-white/10 pt-14">

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
            Continue Exploring
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            More{" "}
            <span className="text-cyan-400">
              Projects
            </span>
          </h2>

          <div className="mt-9 grid gap-6 sm:grid-cols-2">

            {otherProjects.map((item) => (
              <Link
                key={item.slug}
                href={`/projects/${item.slug}`}
                className="group rounded-2xl border border-white/10 bg-[#131e32] p-7 transition hover:-translate-y-1 hover:border-cyan-400/40"
              >

                <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                  Project {item.number}
                </p>

                <h3 className="mt-4 text-2xl font-bold transition group-hover:text-cyan-400">
                  {item.name} ↗
                </h3>

                <p className="mt-3 text-sm text-slate-400">
                  {item.category}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* ========== FOOTER ========== */}
      <footer className="border-t border-white/10 bg-[#080f1c] px-6 py-8">

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row">

          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} {profile.name}.
            All Rights Reserved.
          </p>

          <Link
            href="/"
            className="text-sm font-semibold text-cyan-400 hover:text-cyan-300"
          >
            Back to Home ↑
          </Link>
        </div>
      </footer>
    </div>
  );
}
