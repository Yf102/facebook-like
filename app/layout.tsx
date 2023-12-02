import type { Metadata } from "next";
import "@/src/styles/globals.css";
import "@/src/polyfills/intersectionObserverPolyfill.js";
import { Providers } from "@/src/store/redux/providers";
import { font } from "@/src/const/font";

export const metadata: Metadata = {
  title: "Posts",
  description: "Posts Description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.variable} font-sans`} id="app-main">
        <Providers>{children}</Providers>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
