import type { PropsWithChildren } from "react";
import Link from "./Link";
import styles from './Project.module.css'
import clsx from "clsx";

interface ProjectProps {
    href: string;
    heading: string;
    className?: string;
}

function Project({ heading, href, className, children }: PropsWithChildren<ProjectProps>) {
    return <section className={clsx(styles.project, className)}>
        <h2 className={styles.heading}><Link><a href={href}><span>{heading}</span></a></Link></h2>
        {children}
    </section>
}

export default Project