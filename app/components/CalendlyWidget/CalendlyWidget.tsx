import Script from "next/script";

export const CalendlyWidget = () => {
  return (
    <>
      <div
        className="calendly-inline-widget rounded-b-2xl overflow-hidden h-[780px] md:h-[40vh] w-full mt-4 md:mb-4 mb-0"
        data-url="https://calendly.com/sunrisestudioworkspace?background_color=1c1c1e&text_color=ffffff&primary_color=e95848&display_scheduled_event_end=true&hide_event_type_details=false&hide_gdpr_banner=true"
      />
      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />
    </>
  );
};
