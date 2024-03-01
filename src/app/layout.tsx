import TopNavBar from "@/components/header/TopNavBar";
import "./globals.css";
import Footer from "@/components/footer";
import NavBar from "@/components/header/NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopNavBar />
        <NavBar />
        <main className={`h-full flex-1 `}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
