import type { PropsWithChildren } from "react";
import styles from "./TextArt.module.css";
import clsx from "clsx";

interface TextArtProps {
  label: string;
  className?: string;
  size?: 'medium' | 'large';
}

function TextArt({ label, className, size = 'medium', children }: PropsWithChildren<TextArtProps>) {
  return (
    <pre aria-label={label} className={clsx(styles.textArt, styles[size], className)}>
      {children}
    </pre>
  );
}

export default TextArt;
