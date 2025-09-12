import { createFileRoute } from "@tanstack/react-router";
import MainLayout from "../layouts/MainLayout";
import styles from "./projects.module.css";
import LinkList from "../components/LinkList";
import Paragraph from "../components/Paragraph";

export const Route = createFileRoute("/projects")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <MainLayout className={styles.projects} pageTitle="Projects">
      <LinkList style="arrow" className={styles.linkList}>
        <li>
          <a href="https://github.com/Steffan-Harris/steffan.lol" title="Github repository for steffan.lol">
            <span>steffan.lol</span>
          </a>
          <Paragraph>The Github repo for this site.
            Vite + React.</Paragraph>
        </li>
        <li>
          <a href="https://blitzjs.com" title="Homepage of BlitzJS">
            <span>blitzjs.com</span>
          </a>
          <Paragraph>The frontpage of Blitz. NextJS + Tailwind.</Paragraph>
        </li>
      </LinkList>
    </MainLayout>
  );
}
