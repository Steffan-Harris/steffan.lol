import clsx from "clsx";
import styles from "./Logo.module.css";

interface LogoProps {
  className?: string;
}

function Logo({ className }: LogoProps) {
  return (
    <img
      src="logo.png"
      alt="Steffan Harris Logo"
      className={clsx(className, styles.logo)}
    />
  );
}

export default Logo;
