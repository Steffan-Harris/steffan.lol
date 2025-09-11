import { useEffect, useRef, type PropsWithChildren } from "react"
import styles from './header.module.css'
import { Link } from "@tanstack/react-router"
import menu from '../assets/menu.png'
import menuClose from '../assets/menu-close.png'
import githubArt from "../assets/github.art"
import emailArt from "../assets/email.art"
import linkedinArt from "../assets/linkedin.art"
import TextArt from "./TextArt"
import useScrollPosition from "../hooks/useScrollPosition"
import clsx from "clsx"

interface HeaderProps {
    pageTitle: string
}

function Header({ pageTitle }: PropsWithChildren<HeaderProps>) {
    const navRef = useRef<HTMLDivElement>(null)
    const scrollPosition = useScrollPosition()

    return <header className={styles.header}>
        <a className={styles.showNav} href='javascript:void(0)' onClick={() => {
            if (navRef.current) {
                navRef.current.style.width = "100%"
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
                        navRef.current.style.width = "0%"
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
                    <ul className={styles.externalLinks}>
                        <li>
                            <a href='https://github.com/Steffan-Harris'>
                                <TextArt label="ASCII art depicting the Github logo">{githubArt}</TextArt>
                            </a>
                        </li>
                        <li>
                            <a href='mailto:contact@steffan.lol'>
                                <TextArt label="ASCII art depicting an email">{emailArt}</TextArt>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/steffanharris/'>
                                <TextArt label="ASCII art depicting the Linkedin logo">{linkedinArt}</TextArt>
                            </a>
                        </li>
                    </ul>
                </ul>
            </nav>
        </div>
    </header >
}

export default Header