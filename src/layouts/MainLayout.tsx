import { type PropsWithChildren } from "react";
import styles from "./MainLayout.module.css";

import clsx from "clsx";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useWindowDimensions from "../hooks/useWindowDimensions";
import Heading from "../components/Heading";

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
        <Heading as={'h1'} size='lg' className={styles.heading} transform="lowercase">{pageTitle}</Heading>
        {children}
      </main>
      <Footer className={clsx(styles.footer)} style={width > 600 ? 'grid' : 'flex'} />
    </div>
  );
}

export default MainLayout;
