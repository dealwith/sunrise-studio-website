import { ReactNode, FunctionComponent } from "react";
import { Container } from "@radix-ui/themes";

type TProps = {
	children: ReactNode;
};

export const MainContainer: FunctionComponent<TProps> = ({ children }) => {
	return (
		<Container className="px-30 max-w-[1200px] w-full">{children}</Container>
	);
};
