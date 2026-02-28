"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Memory = {
  id: number;
  title: string;
  content: string;
  created_at: string;
};

export default function MemoriesPage() {
  const [memories, setMemories] = useState<Memory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMemories();
  }, []);

  const fetchMemories = async () => {
    const { data, error } = await supabase
      .from("memories")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.log("Error:", error);
    } else {
      setMemories(data || []);
    }

    setLoading(false);
  };

  if (loading) {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-100">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mb-4"></div>
      <p className="text-gray-600 text-lg">Đang tải kỷ niệm...</p>
    </div>
  );
}


  return (
  <main className="min-h-screen px-6 py-16 bg-gradient-to-br from-black via-gray-900 to-indigo-950 text-white">
    <div className="max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
          ✨ Your Memories
        </h1>
        <p className="text-gray-400 mt-4">
          Lưu giữ những khoảnh khắc quan trọng nhất của bạn
        </p>
      </div>

      {/* Empty state */}
      {memories.length === 0 ? (
        <div className="text-center bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-12 shadow-xl">
          <p className="text-gray-400 mb-6 text-lg">
            Bạn chưa có ký niệm nào
          </p>

          <a
            href="/create"
            className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90 transition text-white font-semibold shadow-lg"
          >
            Tạo ký niệm đầu tiên
          </a>
        </div>
      ) : (
        <div className="grid gap-8">
          {memories.map((memory) => (
            <div
              key={memory.id}
              className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition"
            >
              <h2 className="text-2xl font-semibold mb-3 text-purple-300">
                {memory.title}
              </h2>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {memory.content}
              </p>

              <p className="text-sm text-gray-500">
                {new Date(memory.created_at).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  </main>
);



}
