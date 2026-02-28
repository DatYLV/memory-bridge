import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "./components/Navbar"
import Providers from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Memory Bridge",
  description: "Lưu giữ những kỷ niệm quan trọng nhất",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={`${inter.className} bg-black text-white`}>
        <Providers>
          <Navbar />
          <div className="pt-20">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
