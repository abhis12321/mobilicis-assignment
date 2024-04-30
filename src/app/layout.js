import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mobilicis Assignment",
  description: "Assignment by Mobilicis for frontend web development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gray-950/95 text-white">
      <body className={inter.className}>
        <NavBar />
        <div className="" style={{ minHeight: "calc(100vh - 4rem" }}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
