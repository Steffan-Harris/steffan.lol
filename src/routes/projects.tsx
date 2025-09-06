import { createFileRoute } from "@tanstack/react-router";
import MainLayout from "../layouts/MainLayout";
import styles from "./projects.module.css";
import Project from "../components/Project";

export const Route = createFileRoute("/projects")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <MainLayout pageTitle="Projects" className={styles.projects}>
      <Project className={styles.project} heading="steffan.lol" href='https://github.com/Steffan-Harris/steffan.lol'>The Github repo for this site.
        Vite + React.</Project>
    </MainLayout>
  );
}
