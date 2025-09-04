import { useState, type PropsWithChildren } from "react";
import styles from "./MainLayout.module.css";
import { Link } from "@tanstack/react-router";
import menu from "../assets/menu.png";
import menuClose from "../assets/menu-close.png";

import clsx from "clsx";
import Links from "../components/Links";
import Copyright from "../components/Copyright";

interface MainLayoutProps {
  pageTitle: string;
  className?: string;
}

function MainLayout({
  children,
  className,
  pageTitle,
}: PropsWithChildren<MainLayoutProps>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <h1 className={clsx(isOpen && styles.hidden, styles.pageTitle)}>
          {pageTitle}
        </h1>
        <div className={styles.topNav}>
          {isOpen ? (
            <img
              src={menuClose}
              alt="Hide menu"
              onClick={() => setIsOpen(false)}
              className={styles.closeMenu}
            />
          ) : (
            <img
              src={menu}
              className={clsx(isOpen && styles.hide)}
              alt="Show menu"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
        <div className={styles.topNavLinks}>
          <nav>
            <ul>
              <li>
                <Link to="/" onClick={() => setIsOpen(false)}>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setIsOpen(false)}>
                  <span>About Me</span>
                </Link>
              </li>
              <li>
                <Link to="/projects" onClick={() => setIsOpen(false)}>
                  <span>Projects</span>
                </Link>
              </li>
              <li>
                <a href="mailto:hello@steffan.lol">
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/steffanharris">
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={styles.content}>
        {isOpen ? (
          <nav>
            <Links>
              <li>
                <Link to="/" onClick={() => setIsOpen(false)}>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setIsOpen(false)}>
                  <span>About Me</span>
                </Link>
              </li>
              <li>
                <Link to="/projects" onClick={() => setIsOpen(false)}>
                  <span>Projects</span>
                </Link>
              </li>
              <li>
                <a href="mailto:hello@steffan.lol">
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/steffanharris">
                  <span>LinkedIn</span>
                </a>
              </li>
            </Links>
          </nav>
        ) : (
          <main className={clsx(className)}>
            {children}
          </main>
        )}
      </div>
      <div className={styles.footer}>
        <Copyright />
      </div>
    </div>
  );
}

export default MainLayout;
