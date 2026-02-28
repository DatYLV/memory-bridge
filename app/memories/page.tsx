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
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-indigo-100 via-white to-blue-100">
      <h1 className="text-3xl font-bold text-center mb-8">
        Your Memories
      </h1>

      <div className="grid gap-6 max-w-3xl mx-auto">
        {memories.length === 0 ? (
          <p className="text-center text-gray-500">
            Chưa có memory nào 😢
          </p>
        ) : (
          memories.map((memory) => (
            <div
              key={memory.id}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <h2 className="text-xl font-semibold mb-2">
                {memory.title}
              </h2>
              <p className="text-gray-600 mb-3">
                {memory.content}
              </p>
              <p className="text-sm text-gray-400">
                {new Date(memory.created_at).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
