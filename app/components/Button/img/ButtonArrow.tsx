import { COLORS } from "constants/colors";

type Props = {
  width: string;
  height: string;
  isHovered?: boolean;
};

export const ButtonArrow = ({ width, height, isHovered }: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 11L11 1M11 1H1M11 1V11"
        stroke={isHovered ? COLORS.RED : COLORS.WHITE}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
