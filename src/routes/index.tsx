import { createFileRoute, Link } from "@tanstack/react-router";
import styles from "./index.module.css";
import LinkList from "../components/LinkList";
import Footer from "../components/Footer";
import Heading from "../components/Heading";

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
        <Heading as='h1' size="xl">
          I am a web developer and UI student creating beautiful and
          functional web apps focusing on the react and javascript ecosystem
        </Heading>
        <nav className={styles.nav}>
          <LinkList style="arrow">
            <li>
              <Link to="/about">
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link to="/projects">
                <span>Projects</span>
              </Link>
            </li>
          </LinkList>
        </nav>
        <Footer style='flex' className={styles.footer} />
      </div>
    </div>
  );
}
