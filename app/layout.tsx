import "@/app/css/style.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Footer from "@/components/ui/footer";

import Header from "@/components/ui/header";
import { ScreenSizeProvider } from "@/components/context/screenSizeContext";
import { Suspense } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const nacelle = localFont({
  src: [
    {
      path: "../public/fonts/nacelle-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/nacelle-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-semibolditalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

export const metadata = {
  title: "Crypto 4 Impact",
  description: "Re-imaging & Touching Lives with Crypto",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${nacelle.variable} bg-gray-950 font-inter text-base text-gray-200 antialiased`}
      >
        {/* <ScreenSizeProvider> */}
          <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
            <Header />
            <main className="relative flex grow flex-col">
              <Suspense fallback={<div>Loading...</div>}>
                {children}
              </Suspense>
            </main> 
            <Footer />
          </div>
        {/* </ScreenSizeProvider> */}
        
      </body>
    </html>
  );
}
