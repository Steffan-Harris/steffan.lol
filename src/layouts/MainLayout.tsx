import { type PropsWithChildren } from "react";
import styles from "./MainLayout.module.css";

import clsx from "clsx";
import Header from "../components/Header";
import ExternalLinks from "../components/ExternalLinks";

interface MainLayoutProps {
  pageTitle: string;
  className?: string;
}

function MainLayout({
  children,
  pageTitle,
  className,
}: PropsWithChildren<MainLayoutProps>) {
  return (
    <div className={styles.layout}>
      <Header pageTitle={pageTitle} />
      <main className={clsx(className, styles.mainContent)}>
        {children}
      </main>
      <footer className={styles.footer}>
        <ExternalLinks className={styles.externalLinks} size="lg" />
        <div className={styles.copyright}>&copy; 2025 steffan harris</div>
      </footer>
    </div>
  );
}

export default MainLayout;
