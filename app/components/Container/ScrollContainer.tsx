import { FunctionComponent, ReactNode } from "react";

type TProps = {
  children: ReactNode;
};

export const ScrollContainer: FunctionComponent<TProps> = ({ children }) => {
  return <div className="w-full overflow-x-scroll">{children}</div>;
};
