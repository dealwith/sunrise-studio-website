import { ReactNode } from "react";

interface ServicesBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

export const OrangeBackground = ({ children }: ServicesBackgroundProps) => {
  return <div className="bg-secondary w-full">{children}</div>;
};
