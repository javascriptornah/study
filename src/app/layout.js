import "./globals.scss";
import { Inter } from "next/font/google";
import LayoutComponent from "../../public/components/LayoutComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Algonquin Study",
  description:
    "Study app for algonquin college students in computer programming level 1.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutComponent>{children}</LayoutComponent>
      </body>
    </html>
  );
}
