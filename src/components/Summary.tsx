import type { PropsWithChildren } from "react";
import styles from "./Summary.module.css";

interface SummaryProps {
  heading: string;
  className?: string;
}

function Summary({
  children,
  heading,
  className,
}: PropsWithChildren<SummaryProps>) {
  return (
    <section className={className}>
      <h2 className={styles.heading}>{heading}</h2>
      <ul className={styles.items}>{children}</ul>
    </section>
  );
}

export default Summary;
