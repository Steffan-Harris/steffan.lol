import type { PropsWithChildren } from "react";
import styles from "./Links.module.css";

function Links({ children }: PropsWithChildren) {
  return <ul className={styles.links}>{children}</ul>;
}

export default Links;
