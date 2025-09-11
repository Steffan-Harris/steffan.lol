import { createFileRoute, Link } from "@tanstack/react-router";
import styles from "./index.module.css";
import TextArt from "../components/TextArt";
import githubArt from "../assets/github.art";
import emailArt from "../assets/email.art";
import linkedinArt from "../assets/linkedin.art";
import LinkList from "../components/LinkList";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className={styles.homepage}>
      <div className={styles.avatar}>
        <img src="logo.png" alt="Photo of Steffan" />
      </div>
      <div className={styles.content}>
        <h1 className={styles.intro}>
          I am a web developer and UI student creating beautiful and
          functional web apps focusing on the react and javascript ecosystem
        </h1>
        <nav className={styles.nav}>
          <LinkList>
            <li>
              <Link to="/about">
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link to="/projects">
                <span>Public projects</span>
              </Link>
            </li>
          </LinkList>
        </nav>
        <footer className={styles.footer}>
          <ul className={styles.externalLinks}>
            <li><a href='https://github.com/Steffan-Harris'><TextArt label="ASCII art depicting the Github logo">{githubArt}</TextArt></a></li>
            <li><a href='mailto:contact@steffan.lol'><TextArt label="ASCII art depicting an email">{emailArt}</TextArt></a></li>
            <li><a href='https://www.linkedin.com/in/steffanharris/'><TextArt label="ASCII art depicting the Linkedin logo">{linkedinArt}</TextArt></a></li>
          </ul>
          <div className={styles.copyright}>&copy; 2025 steffan harris</div>
        </footer>
      </div>
    </div>
  );
}
