"use client";
import { injectContentsquareScript } from "@contentsquare/tag-sdk";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import { Footer, Header } from "components";
import { BurgerContext } from "context";
import { globalMetadata } from "data";
import { cn } from "utils/cn";

import "@radix-ui/themes/styles.css";

import "./styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import { onest } from "./fonts/onest";
import styles from "./layout.module.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isActiveBurger, setIsActiveBurger] = useState(false);
  const isProduction = process.env.NODE_ENV === "production";

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      injectContentsquareScript({
        siteId: "5250777",
        async: true, // Optional: Set to false to wait for script execution until after document parsing.
        defer: false, // Optional: Set to true to defer script execution after document parsing.
      });
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <title>{globalMetadata.title}</title>
        {isProduction && (
          <>
            <Script
              src={"https://www.googletagmanager.com/gtag/js?id=G-FN1MWWZZ0Y"}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FN1MWWZZ0Y');`}
            </Script>
          </>
        )}
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
      </head>
      <body
        className={cn(
          styles.component,
          onest.className,
          isActiveBurger && "overflow-hidden",
        )}
      >
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
