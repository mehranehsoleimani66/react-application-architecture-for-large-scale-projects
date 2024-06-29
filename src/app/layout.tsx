import { Figtree } from "next/font/google";
import { Footer } from "./_components/footer/footer";
import { Header } from "./_components/header/header";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl" className={`dark ${figtree.variable}`}>
      <body className=" min-h-screen grid  grid-rows-[80px_1fr_auto] font-bold uppercase dark:bg-base-100 dark:text-base-content">
        <Header />
        <div className="flex-1 flex  justify-center items-center">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
