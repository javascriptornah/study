import "./globals.scss";
import { Inter } from "next/font/google";
import LayoutComponent from "../../public/components/LayoutComponent";

export const metadata = {
  title: "Algonquin Study",
  description:
    "Study app for algonquin college students in computer programming level 1.",
  image: "/images/main.png",
  link: "https://algonquinstudy.vercel.app",
  tags: [
    "study",
    "Algonquin College",
    "Database",
    "linux",
    "linux study notes",
    "study notes",
    "Object Oriented Programming",
    "java",
    "java study notes",
    "learn java",
  ],
  date: "2023-10-06 20:00:00.000",
  type: "website",
  openGraph: {
    title: "Algonquin Study",
    description:
      "Study app for algonquin college students in computer programming level 1.",
    url: "https://algonquinstudy.vercel.app",
    images: [
      {
        url: "/images/main.png",
        width: 800,
        height: 400,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LayoutComponent>{children}</LayoutComponent>
      </body>
    </html>
  );
}
