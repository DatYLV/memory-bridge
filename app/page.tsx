import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-black via-gray-900 to-black">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Lưu giữ câu chuyện cuộc đời
        </h1>
        <p className="text-gray-400 max-w-2xl mb-10 text-lg">
          Memory Bridge giúp bạn ghi lại ký ức, câu chuyện và di sản
          của người thân một cách trang trọng và bền vững.
        </p>

        <div className="flex gap-6">
          <Link
            href="/create-profile"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 transition duration-300 shadow-lg"
          >
            Bắt đầu kể chuyện
          </Link>

          <Link
            href="/dashboard"
            className="px-8 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition duration-300"
          >
            Xem hồ sơ mẫu
          </Link>
        </div>
      </section>

      {/* VẤN ĐỀ */}
      <section className="py-24 px-6 text-center bg-black">
        <h2 className="text-3xl font-semibold mb-6">
          Ký ức dần phai theo thời gian
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Những câu chuyện quý giá của cha mẹ, ông bà có thể mất đi nếu
          chúng ta không ghi lại. Thế hệ sau sẽ không còn cơ hội hiểu
          rõ về nguồn gốc và hành trình của gia đình mình.
        </p>
      </section>

      {/* GIẢI PHÁP */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-900 to-black text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Một cây cầu nối giữa các thế hệ
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Memory Bridge tạo ra không gian số để lưu giữ và chia sẻ
          câu chuyện cá nhân một cách có cấu trúc và lâu dài.
        </p>
      </section>

      {/* 4 BƯỚC HOẠT ĐỘNG */}
      <section className="py-24 px-6 bg-black">
        <h2 className="text-3xl font-semibold text-center mb-16">
          Cách hoạt động
        </h2>

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto text-center">
          {[
            "Tạo hồ sơ",
            "Thực hiện phỏng vấn",
            "Lưu trữ câu chuyện",
            "Chia sẻ cho gia đình",
          ].map((step, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
            >
              <div className="text-4xl font-bold text-indigo-400 mb-4">
                {index + 1}
              </div>
              <p className="text-gray-300">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center bg-gradient-to-br from-indigo-900/40 to-purple-900/40">
        <h2 className="text-4xl font-bold mb-6">
          Bắt đầu lưu giữ di sản hôm nay
        </h2>
        <Link
          href="/create-profile"
          className="px-10 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 transition duration-300 shadow-lg text-lg"
        >
          Tạo hồ sơ đầu tiên
        </Link>
      </section>

    </main>
  );
}
