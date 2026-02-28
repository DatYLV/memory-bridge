"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
console.log(process.env.NEXT_PUBLIC_SUPABASE_URL);

export default function CreatePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("memories").insert([
      {
        title,
        content,
      },
    ]);

    if (error) {
      alert("Có lỗi xảy ra!");
    } else {
      router.push("/memories");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-6">
      <div className="w-full max-w-xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl">
        
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Create New Memory
        </h1>

        <form onSubmit={handleCreate} className="flex flex-col gap-6">
          
          {/* Title */}
          <div>
            <label className="block mb-2 text-sm text-gray-400">
              Title
            </label>
            <input
              type="text"
              required
              placeholder="Enter memory title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block mb-2 text-sm text-gray-400">
              Content
            </label>
            <textarea
              required
              rows={5}
              placeholder="Write your memory..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-500 hover:opacity-90 transition font-semibold shadow-lg disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Memory"}
          </button>
        </form>
      </div>
    </main>
  );
}
