import { useState, type PropsWithChildren } from "react"
import styles from './Header.module.css'
import { Link } from "@tanstack/react-router"
import menu from '../assets/menu.png'
import menuClose from '../assets/menu-close.png'
import useScrollPosition from "../hooks/useScrollPosition"
import clsx from "clsx"
import ExternalLinks from "./ExternalLinks"
import LinkList from "./LinkList"
import useWindowDimensions from "../hooks/useWindowDimensions"

interface HeaderProps {
    pageTitle: string
}

function Header({ pageTitle }: PropsWithChildren<HeaderProps>) {
    const scrollPosition = useScrollPosition()
    const { width } = useWindowDimensions()
    const [isNavOpen, setIsNavOpen] = useState(false)

    return <header className={styles.header}>
        <a className={styles.showNav} onClick={() => setIsNavOpen(true)}>
            <img
                src={menu}
                alt="Show navigation"
            />
        </a>

        <h2 className={clsx(styles.pageTitle, scrollPosition < 60 && styles.hidden)}>{pageTitle}</h2>

        <div className={clsx(styles.nav, isNavOpen && styles.open)}>
            <div className={styles.hideNav}>
                <a onClick={() => setIsNavOpen(false)}>
                    <img
                        src={menuClose}
                        alt="Hide navigation"
                    />
                </a>
            </div>
            <nav className={styles.navLinks}>
                <LinkList style={width > 600 ? 'simple' : 'arrow'}>
                    <li>
                        <Link to="/">
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <span>About</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects">
                            <span>Projects</span>
                        </Link>
                    </li>
                    <ExternalLinks className={styles.externalLinks} />
                </LinkList>
            </nav>
        </div>
    </header>
}

export default Header