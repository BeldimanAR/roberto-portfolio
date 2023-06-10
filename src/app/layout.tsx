import "./globals.css";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "./lib/registry";
import Loader from "../components/Loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Roberto Portfolio",
  description: "Portfolio made with Next.js 13",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Loader />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
