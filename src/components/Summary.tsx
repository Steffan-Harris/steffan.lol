import type { PropsWithChildren } from "react"
import styles from './Summary.module.css'

interface SummaryProps {
    heading: string;
}

function Summary({ children, heading }: PropsWithChildren<SummaryProps>) {
    return <section>
        <h2 className={styles.heading}>{heading}</h2>
        <ul className={styles.items}>{children}</ul>
    </section>
}

export default Summary