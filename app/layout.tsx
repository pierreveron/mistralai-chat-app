import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AppProvider from "./providers/AppProvider";
import classNames from "classnames";
import Sidebar from "./components/Sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pierre Véron's CV Assistant",
  description: "Ask me anything about Pierre's skills and experience!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={classNames(
          `${geistSans.variable} ${geistMono.variable} antialiased`,
          "tw-bg-white dark:tw-bg-gray-950 tw-transition-colors tw-duration-300"
        )}
      >
        <AppProvider>
          <div className="tw-flex tw-flex-row tw-h-screen tw-w-full">
            <Sidebar />
            <div className="tw-flex tw-flex-col tw-flex-grow tw-h-screen tw-overflow-hidden">
              {children}
            </div>
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
