import type { PropsWithChildren } from "react";
import Link from "./Link";

interface ProjectProps {
    href: string;
    heading: string;
    className?: string;
}

function Project({ heading, href, className, children }: PropsWithChildren<ProjectProps>) {
    return <section className={className}>
        <h2><Link><a href={href}><span>{heading}</span></a></Link></h2>
        {children}
    </section>
}

export default Project