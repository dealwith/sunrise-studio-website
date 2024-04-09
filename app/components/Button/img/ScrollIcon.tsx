type Props = {
  isHovered: boolean;
  defaultColor: string;
  hoverColor: string;
};

export const ScrollIcon = ({ isHovered, defaultColor, hoverColor }: Props) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.57191 11.0001H20.4281M20.4281 11.0001L11 1.57202M20.4281 11.0001L11 20.4282"
        stroke={isHovered ? hoverColor : defaultColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
