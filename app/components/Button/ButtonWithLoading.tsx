import { FunctionComponent } from "react";

import { Button } from "components";
import { LoadingSpinner } from "components";

type TProps = {
  handleClick?: () => void;
  isLoading: boolean;
  text: string;
  className?: string;
};

export const ButtonWithLoading: FunctionComponent<TProps> = ({
  handleClick,
  isLoading,
  text,
  className: propsClassName,
}) => {
  return (
    <Button
      size="m"
      onClick={handleClick}
      className={propsClassName}
      disabled={isLoading}
    >
      {isLoading ? <LoadingSpinner /> : text}
    </Button>
  );
};
