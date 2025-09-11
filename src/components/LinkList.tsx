import clsx from 'clsx';
import styles from './LinkList.module.css'
import React, { type LiHTMLAttributes } from "react";

interface LinkListProps {
    children?: React.ReactNode
    className?: string
    style: 'simple' | 'arrow'
}

function LinkList({ children, className, style }: LinkListProps) {
    const clones = React.Children.map(children, child => {
        if (!React.isValidElement<LiHTMLAttributes<HTMLLIElement>>(child) || child.type !== 'li') {
            return child
        }

        if (child) {
            return React.cloneElement(child, { className: clsx(styles.link) });
        }
    });

    return <ul className={clsx(styles.linkList, styles[style], className)}>
        {clones}
    </ul>
}

export default LinkList