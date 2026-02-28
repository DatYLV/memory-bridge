"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#0f0f14] to-black text-gray-200 px-6 py-24 flex flex-col items-center overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px]"></div>

      <div className="relative max-w-4xl text-center">

        {/* Badge */}
        <p className="text-purple-400 text-sm mb-4 tracking-widest uppercase">
          Lưu trữ ký ức thông minh
        </p>

        <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6">
          Lưu giữ những{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            kỷ niệm quan trọng nhất
          </span>
        </h1>

        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Memory Bridge giúp bạn lưu lại những khoảnh khắc đáng nhớ
          một cách đơn giản, hiện đại và an toàn.
        </p>

        <div className="flex justify-center gap-6 mb-24">
          <a
            href="/create"
            className="px-8 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:scale-105 transition duration-300 shadow-lg shadow-purple-500/20"
          >
            Bắt đầu ngay
          </a>

          <a
            href="/memories"
            className="px-8 py-3 rounded-2xl border border-white/20 hover:bg-white/10 transition duration-300"
          >
            Xem kỷ niệm
          </a>
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl w-full">

        {[
          {
            title: "Lưu trữ an toàn",
            desc: "Dữ liệu được bảo mật và lưu trữ an toàn với Supabase.",
          },
          {
            title: "Dễ sử dụng",
            desc: "Giao diện trực quan, ai cũng có thể sử dụng.",
          },
          {
            title: "Truy cập mọi lúc",
            desc: "Xem lại những kỷ niệm của bạn bất cứ khi nào.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-400/40 transition duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-500/10"
          >
            <h3 className="text-lg font-medium mb-3 text-white">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}

      </div>

      {/* Tech stack */}
      <div className="mt-24 text-center">
        <h2 className="text-2xl font-semibold mb-6">Tech Stack</h2>
        <p className="text-gray-400">
          Next.js • Supabase • TailwindCSS • Framer Motion
        </p>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-white/10 pt-8 text-center text-gray-500 text-sm w-full">
        Built by Bảo Duy • 2026 • Memory Bridge
      </footer>

    </main>
  );
}
