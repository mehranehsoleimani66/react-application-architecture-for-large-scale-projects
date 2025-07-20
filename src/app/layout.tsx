import { Figtree } from "next/font/google";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import "./globals.css";
import { QueryProvider } from "./provider/react-query-provider";

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
      <body className="min-h-screen grid grid-rows-[80px_1fr_auto] mr-5  dark:bg-base-100 dark:text-base-content">
        <QueryProvider>
          {" "}
          <Header />
          <main>{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
