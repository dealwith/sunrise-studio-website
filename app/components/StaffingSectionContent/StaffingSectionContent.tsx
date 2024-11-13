import { H2, Section, UnderlineText } from "components";
import Script from "next/script";

export const StaffingSectionContent = () => {
  return (
    <Section>
      <div className="flex gap-10 items-center">
        <UnderlineText
          text="Get the best developers, without all the stress"
          isRedText={false}
          imageClassName="mt-6"
        />
        <div className="w-full py-[60px] px-4 flex flex-col items-center gap-[60px] rounded-2xl bg-primary bg-opacity-50">
          <H2>Get Started</H2>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/sunrisestudioworkspace?hide_gdpr_banner=1&primary_color=ff7600"
            style={{ minWidth: "500px", height: "700px" }}
          />
          <Script
            type="text/javascript"
            src="https://assets.calendly.com/assets/external/widget.js"
            async
          />
        </div>
      </div>
    </Section>
  );
};
