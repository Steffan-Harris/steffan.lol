import type { PropsWithChildren } from "react";
import styles from "./Paragraph.module.css";

function Paragraph({ children }: PropsWithChildren) {
  return <p className={styles.paragraph}>{children}</p>;
}

export default Paragraph;
