import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HotBites | Fresh & Tasty Fast Food",
  description:
    "Fresh fast food including burgers, pizzas, shawarmas, pasta, Chinese dishes, and grill wraps—hot, tasty, and satisfying.",
   icons: { icon: '/img/fastfoodic.svg' },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
