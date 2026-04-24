import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "CVN Kalari Kaduthuruthy | Kalaripayattu Training & Ayurveda",
  description:
    "Experience authentic Kalaripayattu training, Ayurveda treatments, Kalari rejuvenation, and Yoga classes at CVN Kalari Kaduthuruthy, Kerala.",
  openGraph: {
    title: "CVN Kalari Kaduthuruthy | Kalaripayattu Training & Ayurveda",
    description:
      "Experience authentic Kalaripayattu training, Ayurveda treatments, Kalari rejuvenation, and Yoga classes at CVN Kalari Kaduthuruthy, Kerala.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

