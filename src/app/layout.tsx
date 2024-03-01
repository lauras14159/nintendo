import "./globals.css";
import Footer from "@/components/footer";
import MobileBanner from "@/components/header/MobileBanner";
import Header from "@/components/header/menu";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MobileBanner />
        <Header />
        <main className={`h-full flex-1 `}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
