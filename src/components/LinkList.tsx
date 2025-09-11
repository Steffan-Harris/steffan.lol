import styles from './LinkList.module.css'
import React, { type LiHTMLAttributes } from "react";

interface LinkListProps {
    children?: React.ReactNode
}

function LinkList({ children }: LinkListProps) {
    const clones = React.Children.map(children, child => {
        if (!React.isValidElement<LiHTMLAttributes<HTMLLIElement>>(child) || child.type !== 'li') {
            return child
        }

        if (child) {
            return React.cloneElement(child, { className: styles.link });
        }
    });

    return <ul className={styles.linkList}>
        {clones}
    </ul>
}

export default LinkList