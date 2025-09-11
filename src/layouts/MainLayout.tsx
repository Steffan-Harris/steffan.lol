import { type PropsWithChildren } from "react";
import styles from "./MainLayout.module.css";

import clsx from "clsx";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useWindowDimensions from "../hooks/useWindowDimensions";

interface MainLayoutProps {
  pageTitle: string;
  className?: string;
}

function MainLayout({
  children,
  pageTitle,
  className,
}: PropsWithChildren<MainLayoutProps>) {
  const { width } = useWindowDimensions()
  return (
    <div className={styles.layout}>
      <Header pageTitle={pageTitle} />
      <main className={clsx(className, styles.mainContent)}>
        {children}
      </main>
      <Footer className={clsx(styles.footer, width > 600 && styles.grid)} useGrid={width > 600} />
    </div>
  );
}

export default MainLayout;
