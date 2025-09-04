import { createFileRoute, Link } from "@tanstack/react-router";
import styles from "./index.module.css";
import Links from "../components/Links";
import Copyright from "../components/Copyright";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className={styles.homepage}>
      <img src="logo.png" alt="Photo of Steffan" className={styles.avatar} />
      <p className={styles.intro}>
        I am a frontend developer and UI designer creating beautiful and
        functional web apps focusing on the react and javascript ecosystem
      </p>
      <nav className={styles.navigation}>
        <Links>
          <li>
            <Link to="/about">
              <span>About me</span>
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <a href="mailto:hello@steffan.lol">
              <span>Email</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/steffanharris">
              <span>LinkedIn</span>
            </a>
          </li>
        </Links>
      </nav>
      <Copyright />
    </div>
  );
}
