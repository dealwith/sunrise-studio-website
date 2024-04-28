import classNames from "classnames";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: Parameters<typeof classNames>) {
  return twMerge(classNames(inputs));
}
