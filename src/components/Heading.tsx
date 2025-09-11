import type { PropsWithChildren } from "react";
import styles from './heading.module.css'

function Heading({ children }: PropsWithChildren) {
    return <h1 className={styles.heading}>{children}</h1>
}

export default Heading