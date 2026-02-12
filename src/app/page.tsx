"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type Job = {
  company: string;
  title: string;
  range: string;
  bullets: string[];
};

type Project = {
  title: string;
  description: string;
  bullets: string[];
  tech: string[];
};

const navLinks = [
  { name: "About", url: "#about" },
  { name: "Experience", url: "#jobs" },
  { name: "Projects", url: "#projects" },
  { name: "Certifications", url: "#certifications" },
  { name: "Contact", url: "#contact" },
];

const socialLinks = [
  { name: "GitHub", url: "https://github.com/Rushi2410" },
  { name: "LinkedIn", url: "https://linkedin.com/in/rushikesh-andhale-4535182a7" },
];

const jobs: Job[] = [
  {
    company: "DPU Center of Online Learning",
    title: "IT Intern",
    range: "Nov 2024 - May 2025",
    bullets: [
      "Designed and developed responsive LMS interfaces tailored to faculty and student workflows.",
      "Built interactive course pages and content modules using HTML5, CSS3, and JavaScript.",
      "Implemented UI features for quizzes, file uploads, discussion forums, and attendance tracking.",
    ],
  },
];

const projects: Project[] = [
  {
    title: "E-Commerce Website · Clothing Store",
    description:
      "Developed a fully responsive e-commerce website with product listings and shopping cart functionality.",
    bullets: [
      "Built the UI with HTML, CSS, Bootstrap, and JavaScript for clean, responsive layouts.",
      "Implemented product listing and cart features with Node.js integration.",
      "Created separate user and admin login pages for secure access.",
    ],
    tech: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "Node.js"],
  },
  {
    title: "Employee Management System (React.js)",
    description:
      "Developed a full-featured employee management web app with role-based dashboards for admin and employees.",
    bullets: [
      "Implemented role-based login and session handling using LocalStorage.",
      "Created reusable components and managed app state using Context API.",
      "Enabled task assignment, user data handling, and logout functionality.",
    ],
    tech: ["React.js", "Context API", "LocalStorage", "JavaScript"],
  },
];

const skillGroups = [
  {
    label: "Programming Languages",
    items: ["JavaScript", "Python", "SQL"],
  },
  {
    label: "Web Technologies",
    items: ["HTML5", "CSS3", "React.js", "Node.js", "Bootstrap"],
  },
  { label: "Databases", items: ["MongoDB", "MySQL"] },
  { label: "Tools & Platforms", items: ["GitHub", "Postman"] },
  { label: "Concepts", items: ["OOP", "REST APIs", "Network Fundamentals"] },
];

const certifications = [
  "Web Development · Internshala",
  "MERN Stack · SPRK Technology",
];

const languages = ["English", "Hindi", "Marathi"];
const interests = ["Gaming", "Outdoor sports"];
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://rushikesh-andhale.vercel.app";
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rushikesh Vitthal Andhale",
  alternateName: "Rushikesh Andhale",
  jobTitle: "Full Stack Web Developer",
  url: siteUrl,
  image: `${siteUrl}/profile.jpeg`,
  email: "mailto:rushikeshandhale1010@gmail.com",
  sameAs: [
    "https://github.com/Rushi2410",
    "https://linkedin.com/in/rushikesh-andhale-4535182a7",
  ],
  knowsAbout: ["MERN Stack", "React.js", "Node.js", "MongoDB", "REST APIs", "JavaScript"],
};

function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 84 96"
      role="img"
      aria-label="Logo"
    >
      <polygon
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        points="42 3 5 24 5 71 42 93 79 71 79 24"
        fill="none"
      />
      <text
        x="42"
        y="60"
        textAnchor="middle"
        fontSize="38"
        fontWeight="700"
        fill="currentColor"
        fontFamily="Inter, sans-serif"
      >
        R
      </text>
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.5 1.1 3.1.8.1-.7.4-1.1.6-1.3-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0C16.3 4 17.3 4.3 17.3 4.3c.6 1.6.2 2.9.1 3.2.8.9 1.2 2 1.2 3.3 0 4.6-2.7 5.6-5.3 5.9.4.3.7 1 .7 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4zm4.6 6.2V19H6V9.2h2.6zM7.3 5.8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM18 19h-2.6v-5.1c0-1.2 0-2.7-1.6-2.7-1.6 0-1.8 1.3-1.8 2.6V19H9.4V9.2h2.5v1.3h.1c.3-.6 1.2-1.4 2.6-1.4 2.8 0 3.4 1.9 3.4 4.3V19z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeJob, setActiveJob] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const [hasProfileImage, setHasProfileImage] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsNavScrolled(currentScroll > 10);

      if (currentScroll > lastScrollY.current && currentScroll > 100) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!items.length) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add("is-visible");
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach(item => {
      const delay = item.dataset.delay;
      if (delay) {
        item.style.transitionDelay = `${delay}ms`;
      }
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const activeJobData = useMemo(() => jobs[activeJob], [activeJob]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <a className="skip-to-content" href="#content">
        Skip to content
      </a>

      {isLoading && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-dark-navy">
          <Logo className="w-20 h-24 text-green" />
        </div>
      )}

      <header
        className={`site-header ${isNavScrolled ? "scrolled" : ""} ${
          isNavVisible ? "shown" : "hidden"
        }`}
      >
        <nav className="nav-inner">
          <a href="#" className="logo" aria-label="Home">
            <Logo className="h-11 w-10 text-green" />
          </a>
          <ol className="nav-links">
            {navLinks.map((link, index) => (
              <li key={link.name}>
                <a href={link.url}>
                  <span className="nav-number">0{index + 1}.</span> {link.name}
                </a>
              </li>
            ))}
          </ol>
          <a className="btn btn-sm" href="/resume.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
          <button
            className="menu-button"
            aria-label="Menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(prev => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <nav>
            <ol>
              {navLinks.map((link, index) => (
                <li key={link.name}>
                  <a href={link.url} onClick={() => setIsMenuOpen(false)}>
                    <span>0{index + 1}.</span> {link.name}
                  </a>
                </li>
              ))}
            </ol>
            <a className="btn" href="/resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
          </nav>
        </div>
      </header>

      <div className="side left">
        <ul className="social-list">
          {socialLinks.map(link => (
            <li key={link.name}>
              <a href={link.url} aria-label={link.name} target="_blank" rel="noreferrer">
                {link.name === "GitHub" ? <IconGitHub /> : <IconLinkedIn />}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="side right">
        <div className="email-link">
          <a href="mailto:rushikeshandhale1010@gmail.com">rushikeshandhale1010@gmail.com</a>
        </div>
      </div>

      <main id="content">
        <section className="min-h-[70vh] flex items-center" id="hero">
          <div className="hero-wrap">
            <div>
              <p className="overline reveal" data-reveal data-delay="100">
                Hi, my name is
              </p>
              <h1 className="big-heading text-lightest-slate reveal" data-reveal data-delay="200">
                Rushikesh Vitthal Andhale.
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate reveal" data-reveal data-delay="300">
                I build responsive web applications.
              </h2>
              <p className="mt-6 max-w-2xl text-light-slate reveal" data-reveal data-delay="400">
                Full Stack Web Developer (MERN) with hands-on experience building dynamic, responsive
                web applications. Proficient in RESTful APIs, database management, and creating
                interactive user interfaces for fast-paced development environments.
              </p>
              <div className="mt-10 reveal" data-reveal data-delay="500">
                <a className="btn" href="mailto:rushikeshandhale1010@gmail.com">
                  Get In Touch
                </a>
              </div>
            </div>

            <div className="hero-image-wrap floaty reveal" data-reveal data-delay="300">
              {hasProfileImage ? (
                <Image
                  src="/profile.jpeg"
                  alt="Rushikesh Andhale"
                  width={320}
                  height={320}
                  sizes="(max-width: 768px) 70vw, 280px"
                  className="hero-image"
                  onError={() => setHasProfileImage(false)}
                />
              ) : (
                <div className="hero-image-placeholder">RA</div>
              )}
            </div>
          </div>
        </section>

        <section id="about" data-reveal className="reveal">
          <h2 className="numbered-heading">About Me</h2>
          <div className="grid md:grid-cols-[3fr,2fr] gap-12">
            <div>
              <p>
                Full-stack web developer with hands-on experience in building dynamic and responsive web
                applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Proficient in
                developing RESTful APIs, managing databases, and creating interactive front-end interfaces.
                Quick learner with a strong ability to adapt to new technologies and contribute effectively in
                fast-paced development environments.
              </p>
            </div>
            <div>
              <ul className="fancy-list">
                {skillGroups.map(group => (
                  <li key={group.label}>
                    <span className="text-lightest-slate">{group.label}:</span> {group.items.join(", ")}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="jobs" data-reveal className="reveal">
          <h2 className="numbered-heading">Where I&apos;ve Worked</h2>
          <div className="jobs-inner">
            <div className="job-tabs" role="tablist" aria-label="Job tabs">
              {jobs.map((job, index) => (
                <button
                  key={job.company}
                  className={`job-tab ${activeJob === index ? "active" : ""}`}
                  onClick={() => setActiveJob(index)}
                  role="tab"
                  aria-selected={activeJob === index}
                >
                  {job.company}
                </button>
              ))}
              <span
                className="job-highlight"
                style={{ transform: `translateY(${activeJob * 42}px)` }}
              />
            </div>
            <div className="job-panel" role="tabpanel">
              <h3>
                {activeJobData.title}{" "}
                <span className="text-green">@ {activeJobData.company}</span>
              </h3>
              <p className="job-range">{activeJobData.range}</p>
              <ul className="fancy-list">
                {activeJobData.bullets.map(bullet => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" data-reveal className="reveal">
          <h2 className="numbered-heading">Some Things I&apos;ve Built</h2>
          <ul className="project-grid">
            {projects.map((project, index) => (
              <li className="project" key={project.title}>
                <div className="project-content">
                  <p className="project-overline">Featured Project</p>
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-description">
                    <p>{project.description}</p>
                    <ul className="fancy-list">
                      {project.bullets.map(item => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <ul className="project-tech">
                    {project.tech.map(tech => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-image">
                  <div className="project-image-inner">
                    <span>0{index + 1}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="certifications" data-reveal className="reveal">
          <h2 className="numbered-heading">Certifications &amp; Languages</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lightest-slate text-2xl mb-4">Certifications</h3>
              <ul className="fancy-list">
                {certifications.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lightest-slate text-2xl mb-4">Languages & Interests</h3>
              <p className="mb-4">
                <span className="text-lightest-slate">Languages:</span> {languages.join(", ")}
              </p>
              <p>
                <span className="text-lightest-slate">Interests:</span> {interests.join(", ")}
              </p>
            </div>
          </div>
        </section>

        <section id="contact" data-reveal className="reveal">
          <h2 className="numbered-heading">What&apos;s Next?</h2>
          <h3 className="text-lightest-slate text-4xl md:text-5xl mb-4">Get In Touch</h3>
          <p className="max-w-xl mb-8">
            I&apos;m currently open to internships and full-time roles in full stack or front-end
            development. If you have an opportunity or want to connect, feel free to reach out.
          </p>
          <a className="btn" href="mailto:rushikeshandhale1010@gmail.com">
            Say Hello
          </a>
        </section>
      </main>

      <footer className="py-10 text-center text-light-slate text-sm">
        <p>Built by Rushikesh Andhale</p>
      </footer>
    </>
  );
}
