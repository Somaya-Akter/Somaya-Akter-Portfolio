
"use client";

import { useState } from "react";
import Link from "next/link";

import {
  profile,
  projects,
  skillGroups,
  projectImage,
} from "../data/portfolio";

// Navigation links
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

// Reusable section heading
function SectionHeading({
  label,
  title,
  highlight,
  description,
}) {
  return (
    <div className="mb-12">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
        {label}
      </p>

      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        {title}{" "}
        <span className="text-cyan-400">
          {highlight}
        </span>
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl leading-8 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [photoError, setPhotoError] = useState(false);

  const socialLinks = [
    {
      name: "GitHub",
      url: profile.github,
    },
    {
      name: "LinkedIn",
      url: profile.linkedin,
    },
    {
      name: "Facebook",
      url: profile.facebook,
    },
  ].filter((social) => social.url);

  return (
    <div className="min-h-screen bg-[#080f1c] text-white">

      {/* ========== NAVBAR ========== */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080f1c]/95 backdrop-blur-xl">

        <nav
          aria-label="Main Navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12"
        >
          <a
            href="#home"
            className="text-2xl font-extrabold tracking-tight"
          >
            Somaya
            <span className="text-cyan-400">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/20 px-4 py-2 text-sm md:hidden"
          >
            {menuOpen ? "Close ✕" : "Menu ☰"}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="flex flex-col gap-2 border-t border-white/10 bg-[#101c30] px-6 py-5 md:hidden">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-slate-200 transition hover:bg-white/10 hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>

        {/* ========== HERO SECTION ========== */}
        <section
          id="home"
          className="relative scroll-mt-24 overflow-hidden"
        >
          <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="relative mx-auto grid min-h-[85vh] max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-2 lg:px-12">

            {/* Hero Text */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-xs font-semibold text-cyan-300">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                Welcome to My Portfolio
              </span>

              <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                Hi, I&apos;m
                <br />

                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {profile.name}
                </span>
              </h1>

              <h2 className="mt-5 text-xl font-semibold text-slate-200 sm:text-2xl">
                {profile.title}
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
                {profile.intro}
              </p>

              {/* Hero Buttons */}
              <div className="mt-9 flex flex-wrap gap-4">

                <a
                  href="#projects"
                  className="rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  View My Projects ↗
                </a>

                {profile.resume ? (
                  <a
                    href={profile.resume}
                    download
                    className="rounded-xl border border-slate-500 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
                  >
                    Download Resume ↓
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => setResumeOpen(true)}
                    className="rounded-xl border border-slate-500 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
                  >
                    Download Resume ↓
                  </button>
                )}
              </div>

              {/* Social Links */}
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <span className="text-sm text-slate-400">
                  Find me on
                </span>

                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
                  >
                    {social.name} ↗
                  </a>
                ))}
              </div>
            </div>

            {/* Profile Photo */}
            <div className="flex justify-center">

              <div className="relative flex h-72 w-72 items-center justify-center rounded-full border-4 border-cyan-400/40 bg-gradient-to-br from-[#142c48] to-[#0d172a] shadow-[0_0_90px_rgba(34,211,238,0.13)] sm:h-80 sm:w-80">

                <div className="relative flex h-[90%] w-[90%] items-center justify-center overflow-hidden rounded-full border border-white/10 bg-[#0b1528]">

                  <span className="text-7xl font-extrabold text-cyan-400">
                    SA
                  </span>

                  {!photoError && (
                    <img
                      src="/profile.jpg"
                      alt="Somaya Akter professional portrait"
                      onError={() => setPhotoError(true)}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  )}
                </div>

                <div className="absolute -bottom-5 rounded-xl border border-white/10 bg-[#17243b] px-6 py-3 text-sm font-medium text-cyan-300 shadow-xl">
                  Creative Developer ✨
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== ABOUT ME ========== */}
        <section
          id="about"
          className="scroll-mt-20 bg-[#0d1424] px-6 py-24"
        >
          <div className="mx-auto max-w-6xl">

            <SectionHeading
              label="01 / Get To Know Me"
              title="About"
              highlight="Me"
              description="Discover my programming journey, interests, and passion for web development."
            />

            <div className="grid gap-7 md:grid-cols-2">

              <div className="flex flex-col justify-between rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-[#17334b] to-[#122037] p-8">

                <span className="text-7xl font-serif text-cyan-400">
                  “
                </span>

                <h3 className="my-8 text-2xl font-semibold leading-10">
                  I enjoy creating meaningful digital
                  experiences through clean code and
                  thoughtful design.
                </h3>

                <p className="text-sm font-semibold text-cyan-400">
                  — {profile.name}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#131e32] p-8">

                <h3 className="mb-5 text-2xl font-semibold">
                  My Programming Journey
                </h3>

                <p className="leading-8 text-slate-400">
                  {profile.about}
                </p>

                <h4 className="mt-7 text-lg font-semibold text-white">
                  Beyond Programming
                </h4>

                <p className="mt-3 leading-8 text-slate-400">
                  {profile.interests}
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-7">

                  <div>
                    <p className="text-3xl font-bold text-cyan-400">
                      03
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                      Featured Projects
                    </p>
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-cyan-400">
                      React
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                      Frontend Development
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== SKILLS ========== */}
        <section
          id="skills"
          className="scroll-mt-20 px-6 py-24"
        >
          <div className="mx-auto max-w-6xl">

            <SectionHeading
              label="02 / My Expertise"
              title="Technical"
              highlight="Skills"
              description="Technologies and tools I have explored while developing web applications."
            />

            <div className="grid gap-6 md:grid-cols-3">

              {skillGroups.map((group, index) => (
                <article
                  key={group.title}
                  className="rounded-2xl border border-white/10 bg-[#131e32] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50"
                >

                  <div className="flex items-center justify-between">

                    <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-400/10 text-3xl">
                      {group.emoji}
                    </span>

                    <span className="text-sm text-slate-500">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold">
                    {group.title}
                  </h3>

                  <div className="mt-6 flex flex-wrap gap-3">

                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-sm font-medium text-cyan-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ========== EDUCATION ========== */}
        <section
          id="education"
          className="scroll-mt-20 bg-[#0d1424] px-6 py-24"
        >
          <div className="mx-auto max-w-6xl">

            <SectionHeading
              label="03 / Academic Background"
              title="My"
              highlight="Education"
            />

            <div className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-[#131e32] p-8 md:flex-row md:items-start md:p-10">

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-3xl">
                🎓
              </div>

              <div className="flex-1">

                <span className="text-sm font-semibold text-cyan-400">
                  Undergraduate Education
                </span>

                <h3 className="mt-4 text-2xl font-bold">
                  {profile.degree}
                </h3>

                <p className="mt-3 text-lg text-slate-300">
                  {profile.university}
                </p>

                <p className="mt-5 max-w-2xl leading-8 text-slate-400">
                  Building a strong foundation in programming,
                  software engineering, database systems,
                  problem-solving, and web technologies
                  through academic learning and practical projects.
                </p>
              </div>

              <span className="w-fit shrink-0 rounded-lg border border-cyan-400/30 px-4 py-2 text-sm text-cyan-300">
                {profile.educationYears}
              </span>
            </div>

            {/* Optional Experience */}
            {profile.experience.length > 0 && (
              <div className="mt-12">

                <h3 className="mb-6 text-2xl font-bold">
                  Professional Experience
                </h3>

                <div className="grid gap-5">

                  {profile.experience.map((item) => (
                    <article
                      key={`${item.role}-${item.company}`}
                      className="rounded-2xl border border-white/10 bg-[#131e32] p-7"
                    >

                      <p className="text-sm text-cyan-400">
                        {item.years}
                      </p>

                      <h4 className="mt-3 text-xl font-semibold">
                        {item.role}
                      </h4>

                      <p className="mt-2 text-slate-300">
                        {item.company}
                      </p>

                      <p className="mt-4 leading-7 text-slate-400">
                        {item.details}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ========== PROJECTS ========== */}
        <section
          id="projects"
          className="scroll-mt-20 px-6 py-24"
        >
          <div className="mx-auto max-w-6xl">

            <SectionHeading
              label="04 / My Work"
              title="Featured"
              highlight="Projects"
              description="Explore three of my web development projects, featuring different technologies and practical learning experiences."
            />

            <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">

              {projects.map((project) => (
                <article
                  key={project.slug}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-[#131e32] transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
                >

                  {/* Project Image */}
                  <div className="relative overflow-hidden">

                    <img
                      src={projectImage(project)}
                      alt={`${project.name} illustrated project preview`}
                      className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#08101c]/85 px-4 py-2 text-xs font-medium text-white">
                      Project {project.number}
                    </span>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">

                    <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                      {project.category}
                    </p>

                    <h3 className="mt-3 text-2xl font-bold">
                      {project.name}
                    </h3>

                    <p className="mt-4 min-h-28 text-sm leading-7 text-slate-400">
                      {project.summary}
                    </p>

                    {/* Technology Stack */}
                    <div className="mt-4 flex flex-wrap gap-2">

                      {project.stack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-white/5 px-3 py-2 text-xs font-medium text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="mt-7 flex flex-wrap gap-4 border-t border-white/10 pt-6">

                      <Link
                        href={`/projects/${project.slug}`}
                        className="text-sm font-bold text-cyan-400 hover:text-cyan-300"
                      >
                        View Details ↗
                      </Link>

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-slate-200 hover:text-cyan-400"
                      >
                        Live Site ↗
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-slate-200 hover:text-cyan-400"
                      >
                        GitHub ↗
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ========== CONTACT ========== */}
        <section
          id="contact"
          className="scroll-mt-20 bg-[#0d1424] px-6 py-24"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

            <div>
              <SectionHeading
                label="05 / Get In Touch"
                title="Let's"
                highlight="Connect"
                description="Have a question, collaboration idea, or opportunity? Feel free to reach out."
              />

              <div className="flex flex-wrap gap-5">

                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-cyan-400 hover:text-cyan-300"
                  >
                    {social.name} ↗
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Information Card */}
            <div className="rounded-2xl border border-cyan-400/20 bg-[#131e32] p-8">

              <h3 className="text-2xl font-bold">
                Contact Information
              </h3>

              <div className="mt-8 space-y-7">

                {/* Email */}
                <div>
                  <p className="text-sm font-semibold text-cyan-400">
                    Email Address
                  </p>

                  {profile.email ? (
                    <a
                      href={`mailto:${profile.email}`}
                      className="mt-2 block break-all text-slate-300 hover:text-cyan-400"
                    >
                      {profile.email}
                    </a>
                  ) : (
                    <p className="mt-2 text-slate-400">
                      Email address will be added
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <p className="text-sm font-semibold text-cyan-400">
                    Phone Number
                  </p>

                  {profile.phone ? (
                    <a
                      href={`tel:${profile.phone.replace(/\s/g, "")}`}
                      className="mt-2 block text-slate-300 hover:text-cyan-400"
                    >
                      {profile.phone}
                    </a>
                  ) : (
                    <p className="mt-2 text-slate-400">
                      Phone number will be added
                    </p>
                  )}
                </div>

                {/* Optional WhatsApp */}
                {profile.whatsapp && (
                  <div>
                    <p className="text-sm font-semibold text-cyan-400">
                      WhatsApp
                    </p>

                    <a
                      href={`https://wa.me/${profile.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 block text-slate-300 hover:text-cyan-400"
                    >
                      Chat on WhatsApp ↗
                    </a>
                  </div>
                )}
              </div>

              <a
                href={
                  profile.email
                    ? `mailto:${profile.email}`
                    : profile.github
                }
                target={profile.email ? undefined : "_blank"}
                rel={
                  profile.email
                    ? undefined
                    : "noopener noreferrer"
                }
                className="mt-9 inline-flex rounded-xl bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                {profile.email
                  ? "Send an Email ↗"
                  : "Connect on GitHub ↗"}
              </a>
            </div>
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

          <a
            href="#home"
            className="text-sm font-semibold text-cyan-400 hover:text-cyan-300"
          >
            Back to Top ↑
          </a>
        </div>
      </footer>

      {/* ========== RESUME MESSAGE ========== */}
      {resumeOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 px-5"
          onClick={() => setResumeOpen(false)}
        >

          <div
            role="dialog"
            aria-modal="true"
            aria-label="Resume availability"
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-md rounded-2xl border border-cyan-400/25 bg-[#142238] p-8 text-center shadow-2xl"
          >

            <div className="mb-4 text-5xl">
              📄
            </div>

            <h3 className="text-2xl font-bold">
              Resume Coming Soon
            </h3>

            <p className="mt-4 leading-7 text-slate-400">
              My resume will be available for download soon.
              Thank you for your interest!
            </p>

            <button
              type="button"
              onClick={() => setResumeOpen(false)}
              className="mt-7 rounded-xl bg-cyan-400 px-7 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
