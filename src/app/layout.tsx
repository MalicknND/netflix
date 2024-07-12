import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DM_Serif_Display, Work_Sans, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const dm_serif_display = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
});

const work_sans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "600", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Netflix Clone",
  description: "Netflix Clone built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${dm_serif_display.className} ${work_sans.className} ${poppins.className}`}
      >
        {children}
      </body>
    </html>
  );
}
