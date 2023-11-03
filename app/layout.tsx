import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import favicon from "@/app/favicon/favicon.ico";
import Footer from "@/components/Footer";

import Header from "@/components/Header";

import ActiveSectionContextProvider from "@/context/Useactive-section-context";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Fadhil | Portofolio",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${poppins.className} bg-[#551FB2] text-[#ffffff] font-bold  relative pt-28 sm:pt-36 `}
      >
        <div className="bg-[#F1C0EB] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>
        <div className="bg-[#83A6EB] absolute top-[10rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] "></div>
        <div className="bg-[#9C61E2] absolute top-[54rem] -z-10 left-[-35rem] h-[50rem] sm:h-[20.25rem] w-[50rem] rounded-full  sm:w-[25.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] "></div>
        <div className="bg-[#c99cc4] absolute top-[120rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>

        <div className="bg-[#83A6EB] absolute top-[140rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] "></div>
        <ActiveSectionContextProvider>
          <Header />
        </ActiveSectionContextProvider>

        {children}
        <Footer />
      </body>
    </html>
  );
}
