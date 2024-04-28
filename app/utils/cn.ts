import classnames from "classnames";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: Parameters<typeof classnames>) {
  return twMerge(classnames(inputs));
}
