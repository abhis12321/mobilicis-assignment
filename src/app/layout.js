import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mobilicis Assignment",
  description: "Assignment by Mobilicis for frontend web development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gray-950 text-white">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
