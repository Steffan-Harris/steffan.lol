import type { PropsWithChildren } from "react";

interface LogoProps {
    className: string;
}

function Logo({ className }: PropsWithChildren<LogoProps>) {
    return <img src='logo.png' alt='Logo' width='80' height='80' className={className} />
}

export default Logo