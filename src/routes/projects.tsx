import { createFileRoute } from "@tanstack/react-router";
import MainLayout from "../layouts/MainLayout";
import Links from "../components/Links";
import Section from "../components/Section";
import styles from "./projects.module.css";

export const Route = createFileRoute("/projects")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <MainLayout pageTitle="Projects" className={styles.main}>
      <Section heading="GitHub">
        <Links>
          <li>
            <a href="https://github.com/blitz-js/blitzjs.com/pulls?q=is%3Apr+author%3ASteffan-Harris">
              <span>blitzjs.com</span>
            </a>
          </li>
        </Links>
        <Links>
          <li>
            <a href="https://github.com/Steffan-Harris">
              <span>steffan.lol</span>
            </a>
          </li>
        </Links>
      </Section>
      <Section heading="Websites">
        <Links>
          <li>
            <a href="https://blitzjs.com">
              <span>Blitz</span>
            </a>
          </li>
        </Links>
      </Section>
    </MainLayout>
  );
}
