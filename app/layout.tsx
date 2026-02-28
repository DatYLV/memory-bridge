import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Memory Bridge",
  description: "Lưu giữ những kỷ niệm quan trọng nhất",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={`${inter.className} bg-black text-white`}>
  <Navbar />
  <div className="pt-">
    {children}
  </div>
</body>
    </html>
  );
}
