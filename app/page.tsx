"use client";

import {
	ContactUsSection,
	Footer,
	Header,
	OurProjectsSection,
	OurTeamsExperienceSection,
	SunriseSectionBackground,
	SunriseSectionContent,
	WeAreSunriseSection,
	WhatWeDoSection,
	WhoWeWorkWithSection
} from "components";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between">
			<Header />
			<SunriseSectionBackground />
			<SunriseSectionContent />
			<WeAreSunriseSection />
			<OurTeamsExperienceSection />
			<WhatWeDoSection />
			<OurProjectsSection />
			<WhoWeWorkWithSection />
			<ContactUsSection />
			<Footer />
		</main>
	);
}
