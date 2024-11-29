"use client";

import { useState } from "react";
import { cn } from "utils/cn";
import { globalMetadata } from "data";
import { Footer, Header } from "components";
import { BurgerContext } from "context";
import { ToastContainer } from "react-toastify";

import "@radix-ui/themes/styles.css";
import { Analytics } from "@vercel/analytics/react";

import { onest } from "./fonts/onest";
import "./styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import styles from "./layout.module.scss";
import Script from "next/script"; // Import Script from next/script

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isActiveBurger, setIsActiveBurger] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>{globalMetadata.title}</title>
        <meta name="description" content={globalMetadata.description} />
        <meta
          name="ahrefs-site-verification"
          content="69f334fd48b8b1793bbd508338ee489fc5d1236b951709fde3524575b14c6f96"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id=GTM-P42N8W6R'+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P42N8W6R');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body
        className={cn(
          styles.component,
          onest.className,
          isActiveBurger && "overflow-hidden",
        )}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P42N8W6R"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <BurgerContext.Provider value={{ isActiveBurger, setIsActiveBurger }}>
          <Header />
          {children}
        </BurgerContext.Provider>
        <Analytics />
        <ToastContainer
          position="bottom-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="light"
        />
        <Footer />
      </body>
    </html>
  );
}
