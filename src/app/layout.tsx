import { Inter } from "next/font/google";
import "./globals.css";
import { PropsWithChildren } from "react";
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@/components/Header/Header'));
const Footer = dynamic(() => import('@/components/Footer/Footer'));

const inter = Inter({ subsets: ["latin"] });


type RootLayoutProps = PropsWithChildren<{}>;

export default function RootLayout({ children}: RootLayoutProps) {
  return (
    <html lang="en">
     <body className={inter.className}>
     <Header/>
        {children}
    <Footer/>
      </body>
    </html>
  );
}
