import { createFileRoute, Link } from "@tanstack/react-router";
import MainLayout from "../layouts/MainLayout";
import styles from "./projects.module.css";
import Heading from "../components/Heading";
import LinkList from "../components/LinkList";

export const Route = createFileRoute("/projects")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <MainLayout className={styles.projects} pageTitle="Projects">
      <Heading>Projects</Heading>

      <LinkList style="arrow" className={styles.linkList}>
        <li className={styles.link}>
          <a href="https://github.com/Steffan-Harris/steffan.lol">
            <span>steffan.lol</span>
          </a>
          <p>The Github repo for this site.
            Vite + React.</p>
        </li>
        <li className={styles.link}>
          <a href="https://blitzjs.com">
            <span>blitzjs.com</span>
          </a>
          <p>The frontpage of Blitz. NextJS + Tailwind.</p>
        </li>
      </LinkList>
    </MainLayout>
  );
}
