import type { PropsWithChildren } from "react";
import styles from "./Section.module.css";

interface SectionProps {
  heading: string;
}

function Section({ children, heading }: PropsWithChildren<SectionProps>) {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>{heading}</h2>

      {children}
    </section>
  );
}

export default Section;
