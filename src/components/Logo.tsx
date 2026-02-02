interface LogoProps {
  className: string;
}

function Logo({ className }: LogoProps) {
  return (
    <img
      src="logo.png"
      alt="Steffan Harris Logo"
      width="80"
      height="80"
      className={className}
    />
  );
}

export default Logo;
