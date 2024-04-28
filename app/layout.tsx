import type { Metadata } from "next";
import { cn } from "@utils/cn";

import "@radix-ui/themes/styles.css";
import { onest } from "./fonts/onest";
import "./styles/globals.css";

import styles from "./layout.module.scss";

export const metadata: Metadata = {
  title: "Sunrise studio",
  description: "Shaping future through digital innovation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
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
      <body className={cn(styles.component, onest.className)}>{children}</body>
    </html>
  );
}
