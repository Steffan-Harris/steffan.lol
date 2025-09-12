import clsx from "clsx"
import ExternalLinks from "./ExternalLinks"
import styles from './Footer.module.css'

interface FooterProps {
    style?: 'grid' | 'flex'
    className?: string
}

function Footer({ style = 'flex', className }: FooterProps) {
    return <footer className={clsx(styles.footer, styles[style], className)}>
        <ExternalLinks className={styles.externalLinks} size="md" />
        <div className={styles.copyright}>&copy; 2025 steffan harris</div>
    </footer>
}

export default Footer