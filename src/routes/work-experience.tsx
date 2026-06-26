import { createFileRoute, Link } from "@tanstack/react-router";
import styles from "./work-experience.module.css";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/work-experience")({
  component: WorkExperience,
});

type TimelineEntry = {
  title: string;
  date: string;
  meta?: string;
  bullets?: string[];
};

const timelineEntries: TimelineEntry[] = [
  {
    title: "Career break",
    date: "2025 – Present",
  },
  {
    title: "Sainsbury's, London | Frontend Engineer",
    date: "Dec 2022 – Jul 2025",
    meta: "Frontend Engineer on an internal Business-to-Business (B2B) adtech platform, working across a large cross-functional engineering organisation.",
    bullets: [
      "Led a customer ops admin system, cutting support workload by 25%.",
      "Drove adoption of reusable React & TypeScript component libraries.",
      "Migrated complex form state from Redux to React Hook Form.",
      "Achieved full WCAG A/AA compliance via accessibility audit.",
      "Introduced contrast checking as a design system standard.",
      "Cut CI/CD pipeline failures by ~20% through targeted refactoring.",
      "Mentored a 5-person frontend team through reviews and pairing.",
      "Led The Trade Desk integration across a 3-developer team.",
    ],
  },
  {
    title: "Vodafone, Newbury | Frontend Engineer",
    date: "Dec 2021 – Sep 2022",
    meta: "Frontend Engineer building B2B dashboard applications for phone and line rental management.",
    bullets: [
      "Redesigned an enterprise dashboard, cutting task time for thousands of users.",
      "Built dashboard components to Vodafone's internal design system.",
      "Delivered React/TypeScript features integrated with REST APIs.",
      "Built a microservices template with hierarchical Azure config.",
    ],
  },
  {
    title: "Bee Design, USA (Contract) | Full Stack Engineer (Frontend-focused)",
    date: "Dec 2020 – Mar 2021",
    meta: "Contract React & TypeScript Frontend Engineer with additional full-stack exposure via Prisma.",
    bullets: [
      "Shipped a full-stack scheduling feature with React and Prisma.",
      "Refactored shared components, reducing duplication in booking flows.",
    ],
  },
  {
    title: "Red Technology, Eynsham | Full Stack Engineer",
    date: "Sep 2013 – Jun 2020",
    meta: "Frontend-leaning Full-stack Engineer on ASP.NET e-commerce platforms, delivering solutions for a diverse portfolio of retail and wholesale clients including MaxiNutrition, F.Hinds, and Sass & Belle.",
    bullets: [
      "Led end-to-end client site setup with third-party API integrations.",
      "Upgraded the TradeIt platform, documenting reusable upgrade guides.",
      "Managed manual deployments and hand-written database migrations.",
      "Cut page load times by 5–10s via query optimisation and caching.",
      "Resolved client tickets, owning defect fixes and communication.",
    ],
  },
];

function useScrollReveal() {
  const itemRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.2 },
    );

    for (const item of itemRefs.current) {
      observer.observe(item);
    }

    return () => observer.disconnect();
  }, []);

  return (index: number) => (el: HTMLDivElement | null) => {
    if (el) itemRefs.current[index] = el;
  };
}

function WorkExperience() {
  const registerItem = useScrollReveal();
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());

  const toggleEntry = (index: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <main className={styles.page}>
      <Link to="/" className={clsx(styles.link, styles.homeLink)}>
        ← Home
      </Link>

      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>Work Experience</h2>

        <div className={styles.timeline}>
          {timelineEntries.map((entry, index) => {
            const isOpen = openIndices.has(index);
            return (
              <div
                key={`${entry.title}-${entry.date}`}
                ref={registerItem(index)}
                className={styles.timelineItem}
              >
                <span className={styles.timelineDot} />
                <p className={styles.timelineDate}>{entry.date}</p>
                <div className={styles.entry}>
                  {entry.bullets ? (
                    <button
                      type="button"
                      className={clsx(styles.entryTitle, styles.entryToggle)}
                      aria-expanded={isOpen} aria-controls={isOpen ? `entry-bullets-${index}` : undefined}
                      onClick={() => toggleEntry(index)}
                    >
                      <span>{entry.title}</span>
                      <span
                        className={clsx(
                          styles.chevron,
                          isOpen && styles.chevronOpen,
                        )}
                        aria-hidden="true"
                      >
                        ▾
                      </span>
                    </button>
                  ) : (
                    <p className={styles.entryTitle}>{entry.title}</p>
                  )}
                  {entry.meta && (
                    <p className={styles.entryMeta}>{entry.meta}</p>
                  )}
                  {entry.bullets && isOpen && (
                    <ul id={`entry-bullets-${index}`} className={styles.bullets}>
                      {entry.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>Education</h2>
        <div className={styles.entry}>
          <p className={styles.entryTitle}>University of Oxford</p>
          <p className={styles.entryMeta}>BA Geography, Sep 2009 – Jun 2012</p>
        </div>
      </section>
    </main>
  );
}
