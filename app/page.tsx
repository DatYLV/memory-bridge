"use client";

import { supabase } from "@/lib/supabase";

export default function Home() {
  const addMemory = async () => {
    const { data, error } = await supabase.from("memories").insert([
      {
        title: "Test Title",
        content: "Test Content",
      },
    ]);

    if (error) {
      console.log("Error:", error);
      alert("Lỗi rồi, coi console");
    } else {
      console.log("Inserted:", data);
      alert("Đã lưu vào database!");
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-50">
      <h1 className="text-5xl font-bold mb-4 text-gray-800">
        Memory Bridge
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Lưu giữ những kỷ niệm của bạn
      </p>

      <div className="space-x-4 mb-6">
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

      <button
        onClick={addMemory}
        className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700"
      >
        Test Save To Database
      </button>
    </main>
  );
}
