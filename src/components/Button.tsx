import clsx from "clsx";
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  icon?: string;
  onClick: () => void;
  className?: string;
}

export default function Button({
  text,
  icon,
  onClick,
  className,
}: ButtonProps) {
  return (
    <button className={clsx(styles.button, className)} onClick={onClick}>
      {icon && <img src={icon} alt="" className={styles.icon} />}
      <span className={styles.text}>{text}</span>
    </button>
  );
}
