import { Button, Navigation } from "components";

export const Header = () => {
	return (
		<header className="flex justify-between py-30 w-full">
			<Navigation />
			<Button className="bg-primary" size="m">
				Contact us
			</Button>
		</header>
	);
};
