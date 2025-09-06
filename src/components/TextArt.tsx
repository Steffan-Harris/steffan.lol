import type { PropsWithChildren } from "react";
import styles from "./TextArt.module.css";
import clsx from "clsx";

interface TextArtProps {
  label: string;
  className?: string;
}

function TextArt({ label, className, children }: PropsWithChildren<TextArtProps>) {
  return (
    <pre aria-label={label} className={clsx(styles.textArt, className, 'textart')}>
      {children}
    </pre>
  );
}

export default TextArt;
