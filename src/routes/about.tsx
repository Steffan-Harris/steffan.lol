import { createFileRoute } from "@tanstack/react-router";
import MainLayout from "../layouts/MainLayout";
import styles from "./about.module.css";
import macintosh from "../assets/macintosh.art.ts";
import coding from "../assets//coding.art.ts";
import TextArt from "../components/TextArt.tsx";
import Section from "../components/Section.tsx";
import Paragraph from "../components/Paragraph.tsx";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <MainLayout pageTitle="About me" className={styles.main}>
      <Section heading="1988">
        <TextArt label="ASCII art depicting a macintosh computer">
          {macintosh}
        </TextArt>

        <Paragraph>
          I grew up around the Macintosh computer and was fascinated by it
        </Paragraph>
      </Section>

      <Section heading="2000">
        <Paragraph>I taught myself to code HTML, CSS, MySQL and PHP</Paragraph>
      </Section>

      <Section heading="2012">
        <TextArt label="ASCII art depicting a man coding">{coding}</TextArt>
        <Paragraph>
          I graduated with a Geography degree (but didn't like it) so I landed
          my first job as a .NET developer
        </Paragraph>
      </Section>

      <Section heading="2021">
        <Paragraph>
          I switched to frontend development in React and got my first dog, a
          golden retriever
        </Paragraph>
      </Section>
    </MainLayout>
  );
}
