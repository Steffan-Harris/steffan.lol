import { createFileRoute } from "@tanstack/react-router";
import MainLayout from "../layouts/MainLayout";
import styles from "./about.module.css";
import macintoshArt from "../assets/macintosh.art.ts";
import networkArt from "../assets/network.art.ts";
import studioDisplayArt from "../assets/studio-display.art.ts"
import TextArt from "../components/TextArt.tsx";
import Section from "../components/Section.tsx";
import Paragraph from "../components/Paragraph.tsx";
import cloudArt from "../assets/cloud.art.ts";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <MainLayout pageTitle="About" className={styles.about}>
      <Section heading="1988" className={styles.section}>
        <Paragraph>
          I grew up around Macintosh computers. My dad encouraged me to experiment and play games on them.
        </Paragraph>
      </Section>

      <TextArt label="ASCII art depicting a macintosh computer" className={styles.macintoshArt}>
        {macintoshArt}
      </TextArt>

      <Section heading="2000" className={styles.section}>
        <Paragraph>I taught myself to code and started creating websites. One of them grew to 50,000 members.</Paragraph>
      </Section>

      <Section heading="2006" className={styles.section}>
        <Paragraph>I took a break from coding to study Geography at Oxford University. After graduating I returned to coding.</Paragraph>
      </Section>


      <Section heading="2012" className={styles.section}>
        <Paragraph>
          I landed my first job as a .NET developer in a web agency.
        </Paragraph>
      </Section>

      <TextArt label="ASCII art depicting a personal computer desk" className={styles.networkArt}>{networkArt}</TextArt>


      <Section heading="2020" className={styles.section}>
        <Paragraph>I switched to frontend development and learnt Javascript and React.</Paragraph>
      </Section>

      <Section heading="2022" className={styles.section}>
        <Paragraph>I worked in agile environments on large applications, focusing on simplifying and modernising the frontend stack.</Paragraph>
      </Section>

      <Section heading="2023" className={styles.section}>
        <Paragraph>
          I enrolled onto Shift Nudge to learn UI design.
        </Paragraph>
      </Section>

      <TextArt label="ASCII art depicting an apple studio display" className={styles.studioDisplayArt}>{studioDisplayArt}</TextArt>

      <Section heading="2024" className={styles.section}>
        <Paragraph>
          I got Jesse - my golden retriever and companion :)
        </Paragraph>
      </Section>

      <Section heading="2025" className={styles.section}>
        <Paragraph>
          I started working full stack, building node APIs and AWS lambda functions.
        </Paragraph>
      </Section>

      <TextArt label="ASCII art depicting a cloud" className={styles.cloudArt}>{cloudArt}</TextArt>

    </MainLayout>
  );
}
