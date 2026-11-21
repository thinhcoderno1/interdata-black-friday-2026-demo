import type { Metadata, Viewport } from "next";
import { FloatingContact } from "@/components/layout/floating-contact";
import { Footer } from "@/components/layout/footer";
import { Navigation } from "@/components/layout/navigation";
import "./fonts.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Black Friday 2026 | Demo InterData",
  description: "Bản duyệt thiết kế Black Friday 2026 và các gói Best Plans mẫu.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: "#0043EC" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body id="dau-trang">
        <div id="trang-chu" aria-hidden="true" />
        <Navigation />
        {children}
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
