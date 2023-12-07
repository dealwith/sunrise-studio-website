import {
	Header,
	SunriseSectionBackground,
	SunriseSectionContent,
	WeAreSunriseSection
} from "components";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<Header />
			<SunriseSectionBackground />
			<SunriseSectionContent />
			<WeAreSunriseSection />
		</main>
	);
}
