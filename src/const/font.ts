import localFont from "next/font/local";

export const font = localFont({
  src: [
    {
      path: "../../public/fonts/Neusa/Neusa-Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Neusa/Neusa-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-neusa",
});
