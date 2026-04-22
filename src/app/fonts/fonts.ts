import localFont from "next/font/local";

// Consolas
export const Consolas = localFont({
  src: [
    {
      path: "../fonts/consolas/Consolas.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/consolas/Consolas-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/consolas/Consolas-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/consolas/Consolas-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-consolas",
});

// Moho-Condensed
export const MohoCondensed = localFont({
  src: [
    {
      path: "../fonts/moho/MohoOTCondensed-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/moho/MohoOTCondensed-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/moho/MohoOTCondensed.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/moho/MohoOTCondensed-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/moho/MohoOTCondensed-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/moho/MohoOTCondensed-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../fonts/moho/MohoOTCondensed-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/moho/MohoOTCondensed-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/moho/MohoOTCondensed-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/moho/MohoOTCondensed-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-moho-condensed",
});
