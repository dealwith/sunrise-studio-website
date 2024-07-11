"use client";

import { useState } from "react";
import { cn } from "@utils/cn";
import { globalMetadata } from "data";
import { Header } from "components";
import { BurgerContext } from "context";

import "@radix-ui/themes/styles.css";
import { Analytics } from "@vercel/analytics/react";

import { onest } from "./fonts/onest";
import "./styles/globals.css";

import styles from "./layout.module.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeBurger, setActiveBurger] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>{globalMetadata.title}</title>
        <meta name="description" content={globalMetadata.description} />
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
          activeBurger && "overflow-hidden",
        )}
      >
        <BurgerContext.Provider value={{ activeBurger, setActiveBurger }}>
          <Header />
          {children}
        </BurgerContext.Provider>
        <Analytics />
      </body>
    </html>
  );
}
