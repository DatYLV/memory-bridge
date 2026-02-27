export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-50">
      <h1 className="text-5xl font-bold mb-4 text-gray-800">
        Memory Bridge
      </h1>

      <p className="text-lg text-gray-600 mb-8">
        Lưu giữ những kỷ niệm của bạn
      </p>

      <div className="space-x-4">
        <a
          href="/create"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        >
          Create Memory
        </a>

        <a
          href="/memories"
          className="px-6 py-3 border border-gray-400 rounded-xl hover:bg-gray-200"
        >
          View Memories
        </a>
      </div>
    </main>
  );
}
