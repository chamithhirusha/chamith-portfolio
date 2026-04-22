import type { Metadata } from "next";
import "./globals.css";
import { Consolas, MohoCondensed } from "./fonts/fonts";
import Header from "./components/header/Header";

export const metadata: Metadata = {
  title: "Chamith Hirusha — Portfolio",
  description:
    "A portfolio website showcasing the projects and skills of Chamith Hirusha, a software developer specializing in web development and design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Consolas.variable} ${MohoCondensed.variable} h-full antialiased`}
      >
        <Header />

        <main>{children}</main>

        {/* <Footer /> */}
      </body>
    </html>
  );
}
