import type { PropsWithChildren } from "react";

function SummaryItem({ children }: PropsWithChildren) {
  return <li>{children}</li>;
}

export default SummaryItem;
