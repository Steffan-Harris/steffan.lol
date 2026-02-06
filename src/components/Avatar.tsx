import clsx from "clsx";
import styles from "./Avatar.module.css";

interface AvatarProps {
  className?: string;
}

function Avatar({ className }: AvatarProps) {
  return (
    <div className={className}>
      <img
        src="avatar.png"
        alt="Photograph of Steffan"
        className={clsx(styles.avatar)}
      />
    </div>
  );
}

export default Avatar;
