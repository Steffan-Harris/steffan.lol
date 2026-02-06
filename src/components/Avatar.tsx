import clsx from "clsx";
import styles from "./Avatar.module.css";

interface AvatarProps {
  className?: string;
}

function Avatar({ className }: AvatarProps) {
  return (
    <img
      src="avatar.png"
      alt="Photograph of Steffan"
      width="180"
      height="180"
      className={clsx(styles.avatar, className)}
    />
  );
}

export default Avatar;
