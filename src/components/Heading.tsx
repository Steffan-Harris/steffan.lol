import type { ElementType, HTMLAttributes, PropsWithChildren } from "react";
import styles from './Heading.module.css'
import clsx from "clsx";

interface HeadingProps extends HTMLAttributes<HTMLOrSVGElement> {
    as?: ElementType<any, 'h1' | 'h2'>
    size: 'md' | 'lg' | 'xl'
    className?: string
    transform?: 'lowercase' | 'none'
}

function Heading({ children, as: Tag = 'h1', size = 'lg', className, transform = 'none' }: PropsWithChildren<HeadingProps>) {
    return (
        <Tag className={clsx(className, styles[size], styles.heading, styles[transform])}>
            {children}
        </Tag>
    )
}

export default Heading