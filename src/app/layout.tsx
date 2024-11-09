import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from './components/navbar'


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "porfolio",
  description: "A next.js Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body

        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full h-screen flex  flex-col `}
      >"
         <NavBar />
      
      {/* Main Content with Centered Flexbox */}
      <main className="flex-grow flex items-center justify-center">
       <div className="w full">{children}</div>
        </main>
      </body>
    </html>
  );
}



   
       
        
    