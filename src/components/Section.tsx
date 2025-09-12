import type { PropsWithChildren } from "react";
import styles from "./Section.module.css";
import clsx from "clsx";
import Heading from "./Heading";

interface SectionProps {
  heading: string;
  className?: string;
}

function Section({ children, className, heading }: PropsWithChildren<SectionProps>) {
  return (
    <section className={clsx(styles.section, className)}>
      <Heading as='h2' size='md'>{heading}</Heading>

      {children}
    </section>
  );
}

export default Section;
