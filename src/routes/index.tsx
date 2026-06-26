import { createFileRoute, Link } from "@tanstack/react-router";
import styles from "./index.module.css";
import Heading from "../components/Heading";
import Summary from "../components/Summary";
import Logo from "../components/Logo";
import SummaryItem from "../components/SummaryItem";
import Avatar from "../components/Avatar";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className={styles.homepage}>
      <Logo className={styles.logo} />
      <Heading className={styles.heading}>
        Software engineer committed to enhancing user experiences
      </Heading>
      <div className={styles.contact}>
        <a href="mailto:hi@steffan.lol" title="Email me" aria-label="Email me">
          <Avatar className={styles.avatar} />
        </a>
        <a
          href="mailto:hi@steffan.lol"
          className={styles.link}
          title="Email me"
        >
          hi@steffan.lol
        </a>
      </div>
      <div className={styles.summaries}>
        <Summary heading="Skills" className={styles.summary}>
          <SummaryItem>ReactJS</SummaryItem>
          <SummaryItem>TypeScript</SummaryItem>
          <SummaryItem>HTML5</SummaryItem>
          <SummaryItem>CSS3</SummaryItem>
          <SummaryItem>Clean Code</SummaryItem>
          <SummaryItem>UI Design</SummaryItem>
        </Summary>
        <Summary heading="Experience" className={styles.summary}>
          <SummaryItem>Sainsbury's</SummaryItem>
          <SummaryItem>Vodafone</SummaryItem>
          <SummaryItem>Red Technology</SummaryItem>
          <SummaryItem>Bee Design Ltd</SummaryItem>
        </Summary>
        <Summary heading="Links" className={styles.summary}>
          <SummaryItem>
            <Link
              to="/work-experience"
              className={styles.link}
              title="View my work experience"
            >
              Work Experience
            </Link>
          </SummaryItem>
          <SummaryItem>
            <a
              href="https://www.github.com/Steffan-Harris"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              title="View my GitHub profile"
            >
              GitHub
            </a>
          </SummaryItem>
          <SummaryItem>
            <a
              href="https://www.linkedin.com/in/steffanharris"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              title="View my LinkedIn profile"
            >
              LinkedIn
            </a>
          </SummaryItem>
        </Summary>
        <Summary heading="Playground" className={styles.summary}>
          <SummaryItem>
            <Link
              to="/playground"
              className={styles.link}
              title="View my particles playground"
            >
              Particles
            </Link>
          </SummaryItem>
        </Summary>
      </div>
    </div>
  );
}
