import { useState, type PropsWithChildren } from "react";
import styles from "./MainLayout.module.css";
import { Link } from "@tanstack/react-router";
import menu from "../assets/menu.png";
import menuClose from "../assets/menu-close.png";

import clsx from "clsx";
import Links from "../components/Links";
import Footer from "../components/Footer";

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
        <div className={styles.menu}>
          {isOpen ? (
            <img
              src={menuClose}
              alt="Hide menu"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <img
              src={menu}
              alt="Show menu"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
        <div className={styles.horizontalNav}>
          <nav>
            <ul>
              <li>
                <Link to="/" onClick={() => setIsOpen(false)}>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setIsOpen(false)}>
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link to="/projects" onClick={() => setIsOpen(false)}>
                  <span>Projects</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {isOpen ? (
        <nav className={styles.verticalNav}>
          <Links>
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={() => setIsOpen(false)}>
                <span>Projects</span>
              </Link>
            </li>
          </Links>
        </nav>
      ) : (
        <>
          <main className={clsx(className, styles.mainContent)}>
            {children}
          </main>
          <div className={clsx(styles.footer, isOpen && styles.hidden)}>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default MainLayout;
