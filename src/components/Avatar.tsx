interface AvatarProps {
  className?: string;
}

function Avatar({ className }: AvatarProps) {
  return (
    <img
      src="avatar.png"
      alt="Photograph of Steffan"
      width="200"
      height="200"
      className={className}
    />
  );
}

export default Avatar;
