import { createFileRoute } from "@tanstack/react-router";
import MainLayout from "../layouts/MainLayout";
import styles from "./about.module.css";
import macintosh from "../assets/macintosh.art.ts";
import network from "../assets/network.art.ts";
import studioDisplay from "../assets/studio-display.art.ts"
import TextArt from "../components/TextArt.tsx";
import Section from "../components/Section.tsx";
import Paragraph from "../components/Paragraph.tsx";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <MainLayout pageTitle="About me" className={styles.main}>

      <Section heading="1988" className={styles.section}>
        <Paragraph>
          I grew up around Macintosh computers. My dad encouraged me to experiment and play games on them.
        </Paragraph>
      </Section>

      <TextArt size="small" label="ASCII art depicting a macintosh computer" className={styles.art}>
        {macintosh}
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

      <TextArt size='small' label="ASCII art depicting a personal computer desk" className={styles.art}>{network}</TextArt>


      <Section heading="2019" className={styles.section}>
        <Paragraph>I moved to frontend development and learnt Javascript and React.</Paragraph>
      </Section>


      <Section heading="2024" className={styles.section}>
        <Paragraph>
          I am currently a student at Shift Nudge learning UI design. I got a golden retriever.
        </Paragraph>
      </Section>

      <TextArt size='small' label="ASCII art depicting an apple studio display" className={styles.art}>{studioDisplay}</TextArt>

    </MainLayout>
  );
}
