import { useRef, type PropsWithChildren } from "react"
import styles from './header.module.css'
import { Link } from "@tanstack/react-router"
import menu from '../assets/menu.png'
import menuClose from '../assets/menu-close.png'
import useScrollPosition from "../hooks/useScrollPosition"
import clsx from "clsx"
import ExternalLinks from "./ExternalLinks"

interface HeaderProps {
    pageTitle: string
}

function Header({ pageTitle }: PropsWithChildren<HeaderProps>) {
    const navRef = useRef<HTMLDivElement>(null)
    const scrollPosition = useScrollPosition()

    return <header className={styles.header}>
        <a className={styles.showNav} href='javascript:void(0)' onClick={() => {
            if (navRef.current) {
                navRef.current.classList.add(styles.open)
            }
        }}>
            <img
                src={menu}
                alt="Show navigation"
            />
        </a>

        <h2 className={clsx(styles.pageTitle, scrollPosition < 60 && styles.hidden)}>{pageTitle}</h2>

        <div className={styles.nav} ref={navRef}>
            <div className={styles.hideNav}>
                <a href="javascript: void(0)" onClick={() => {
                    if (navRef.current) {
                        navRef.current.classList.remove(styles.open)
                    }
                }}>
                    <img
                        src={menuClose}
                        alt="Hide navigation"
                    />
                </a>
            </div>
            <nav>
                <ul className={styles.navLinkList}>
                    <li className={styles.navLink}>
                        <Link to="/">
                            <span>Home</span>
                        </Link>
                    </li>
                    <li className={styles.navLink}>
                        <Link to="/about">
                            <span>About</span>
                        </Link>
                    </li>
                    <li className={styles.navLink}>
                        <Link to="/projects">
                            <span>Public projects</span>
                        </Link>
                    </li>
                    <ExternalLinks className={styles.externalLinks} />
                </ul>
            </nav>
        </div>
    </header >
}

export default Header