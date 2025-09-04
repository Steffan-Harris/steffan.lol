import type { PropsWithChildren } from "react";
import styles from "./TextArt.module.css";

interface TextArtProps {
  label: string;
}

function TextArt({ label, children }: PropsWithChildren<TextArtProps>) {
  return (
    <pre aria-label={label} className={styles.textArt}>
      {children}
    </pre>
  );
}

export default TextArt;
