import { InlineWidget } from "react-calendly";

export const CalendlyWidget = () => {
  const LoadingSpinner = () => (
    <div className="text-base font-normal flex justify-center">
      Loading Calendar...
    </div>
  );

  return (
    <>
      <InlineWidget
        url="https://calendly.com/sunrisestudioworkspace?background_color=1c1c1e&text_color=ffffff&primary_color=e95848&display_scheduled_event_end=true&hide_event_type_details=false&hide_gdpr_banner=true"
        styles={{ width: "100%", height: "40vh", margin: "16px 0 16px 0" }}
        LoadingSpinner={LoadingSpinner}
      />
    </>
  );
};
