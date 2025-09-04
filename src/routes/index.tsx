import { createFileRoute, Link } from "@tanstack/react-router";
import styles from "./index.module.css";
import Links from "../components/Links";
import Copyright from "../components/Copyright";
import mailbox from '../assets/mailbox.art'
import TextArt from "../components/TextArt";

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
        <p className={styles.intro}>
          I am a frontend developer and UI engineer creating beautiful and
          functional web apps focusing on the react and javascript ecosystem
        </p>
        <nav className={styles.nav}>
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
        <div className={styles.footer}>
          <TextArt size='large' label='ASCII art depicting a computer mailbox' className={styles.mailboxArt}>
            {mailbox}
          </TextArt>
          <Copyright />
        </div>
      </div>
    </div>
  );
}
