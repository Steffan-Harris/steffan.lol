import type { PropsWithChildren } from "react"
import styles from './Heading.module.css'
import clsx from "clsx"

interface HeadingProps {
    className: string;
}

function Heading({ children, className }: PropsWithChildren<HeadingProps>) {
    return <h1 className={clsx(styles.heading, className)}>{children}</h1>
}

export default Heading