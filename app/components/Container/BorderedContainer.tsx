import { ReactNode } from "react";

export const BorderedContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative self-stretch flex justify-between items-center border-solid border rounded-2xl border-gray-500 lg:p-8 md:p-6 py-6 px-4 gap-4 md:flex-row flex-col">
      {children}
    </div>
  );
};
