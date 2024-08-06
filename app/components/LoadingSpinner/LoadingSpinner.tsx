import { RotatingLines } from "react-loader-spinner";

export const LoadingSpinner = () => {
  return (
    <RotatingLines
      visible={true}
      strokeColor="white"
      width="24"
      strokeWidth="4"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
    />
  );
};
