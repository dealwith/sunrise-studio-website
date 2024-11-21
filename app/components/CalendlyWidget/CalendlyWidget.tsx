import Script from "next/script";

export const CalendlyWidget = () => {
  return (
    <>
      <div
        className="calendly-inline-widget rounded-b-2xl overflow-hidden"
        data-url="https://calendly.com/sunrisestudioworkspace?background_color=1c1c1e&text_color=ffffff&primary_color=e95848&display_scheduled_event_end=true&hide_event_type_details=false&hide_gdpr_banner=true"
        style={{ width: "100%", height: "40vh", margin: "16px 0 16px 0" }}
      />
      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />
    </>
  );
};
