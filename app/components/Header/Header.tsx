import { Button, MainContainer, Navigation } from "components";

export const Header = () => {
	return (
		<MainContainer>
			<header className="flex justify-between py-30">
				<Navigation />
				<Button className="bg-primary" size="m">
					Contact us
				</Button>
			</header>
		</MainContainer>
	);
};
