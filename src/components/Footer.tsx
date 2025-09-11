import clsx from "clsx"
import ExternalLinks from "./ExternalLinks"
import styles from './Footer.module.css'

interface FooterProps {
    useGrid?: boolean
    className?: string
}

function Footer({ useGrid = false, className }: FooterProps) {
    return <footer className={clsx(styles.footer, useGrid && styles.grid, className)}>
        <ExternalLinks className={styles.externalLinks} size="lg" />
        <div className={styles.copyright}>&copy; 2025 steffan harris</div>
    </footer>
}

export default Footer