import Script from "next/script";
import { useState } from "react";

export const CalendlyWidget = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <p className="lg:text-2xl md:text-xl text-base font-normal mt-4">
          Loading Calendar Widget...
        </p>
      )}
      <div
        className="calendly-inline-widget rounded-b-2xl overflow-hidden"
        data-url="https://calendly.com/sunrisestudioworkspace?background_color=1c1c1e&text_color=ffffff&primary_color=e95848&display_scheduled_event_end=true&hide_event_type_details=false&hide_gdpr_banner=true"
        style={{ width: "100%", height: "40vh", margin: "16px 0 16px 0" }}
      />
      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
};
