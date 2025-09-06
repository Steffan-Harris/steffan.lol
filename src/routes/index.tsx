import { createFileRoute, Link } from "@tanstack/react-router";
import styles from "./index.module.css";
import Links from "../components/Links";
import Footer from "../components/Footer";

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
          I am a frontend developer and UI student creating beautiful and
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
          </Links>
        </nav>
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
