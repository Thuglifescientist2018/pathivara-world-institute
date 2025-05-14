import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pathibhara World Institute | Computer, Science, Tuition, Language & IELTS Training Kathmandu",
  description:
    "Pathibhara World Institute, Narayanatar, Jorpati, Kathmandu. Computer training, Science bridge course, tuition for all levels, language classes (Japanese, Korean, German), IELTS/PTE preparation, and more. Call 9851403323.",
  keywords: [
    "Pathibhara World Institute",
    "Computer Training Kathmandu",
    "Science Bridge Course",
    "Tuition Kathmandu",
    "Language Classes Kathmandu",
    "IELTS Preparation Kathmandu",
    "PTE Kathmandu",
    "SEE Computer Training",
    "Jorpati Institute",
    "Education Kathmandu"
  ],
  openGraph: {
    title: "Pathibhara World Institute | Kathmandu",
    description:
      "Computer, Science, Tuition, Language & IELTS Training in Kathmandu. Join Pathibhara World Institute for quality education and training.",
    url: "https://pathibharaworldinstitute.com/",
    siteName: "Pathibhara World Institute",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Pathibhara World Institute | Kathmandu",
    description:
      "Computer, Science, Tuition, Language & IELTS Training in Kathmandu. Join Pathibhara World Institute for quality education and training."
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
