"use client"

import { useState } from "react"
import { supabase } from "../../lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    setLoading(false)

    if (error) {
      alert(error.message)
    } else {
      alert("Đăng nhập thành công!")
    }
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      <input
        className="border p-2 block my-2"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="border p-2 block my-2"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 mt-2"
      >
        {loading ? "Đang đăng nhập..." : "Login"}
      </button>
    </div>
  )
}