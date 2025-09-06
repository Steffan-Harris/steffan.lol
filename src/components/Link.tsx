import type { PropsWithChildren } from "react";

import styles from './Link.module.css'

function Link({ children }: PropsWithChildren) {
    return <div className={styles.link}><span>{children}</span></div>
}

export default Link;