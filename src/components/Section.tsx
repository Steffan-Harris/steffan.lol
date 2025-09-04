import type { PropsWithChildren } from "react";
import styles from "./Section.module.css";
import clsx from "clsx";

interface SectionProps {
  heading: string;
  className?: string;
}

function Section({ children, className, heading }: PropsWithChildren<SectionProps>) {
  return (
    <section className={clsx(styles.section, className)}>
      <h2 className={styles.heading}>{heading}</h2>

      {children}
    </section>
  );
}

export default Section;
