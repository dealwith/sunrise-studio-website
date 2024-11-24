import Script from "next/script";

export const GoogleAnalyticsScript = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-FN1MWWZZ0Y"
      ></Script>
      <Script src="./script.js" />
    </>
  );
};
