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
    <div style={{ padding: 40 }}>
      <h1>Backend Test</h1>
      <button onClick={addMemory}>
        Thêm Memory Test
      </button>
    </div>
  );
}