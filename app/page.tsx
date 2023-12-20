import {
	Header,
	OurProjectsSection,
	OurTeamsExperienceSection,
	SunriseSectionBackground,
	SunriseSectionContent,
	WeAreSunriseSection,
	WhatWeDo
} from "components";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<Header />
			<SunriseSectionBackground />
			<SunriseSectionContent />
			<WeAreSunriseSection />
			<OurTeamsExperienceSection />
			<WhatWeDo />
			<OurProjectsSection />
		</main>
	);
}
