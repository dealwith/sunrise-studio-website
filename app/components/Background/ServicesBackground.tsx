import { ReactNode } from "react";

interface ServicesBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

export const ServicesBackground = ({ children }: ServicesBackgroundProps) => {
  return (
    <div className="relative flex flex-col md:min-h-screen items-center bg-accent w-full overflow-hidden">
      {children}
    </div>
  );
};
