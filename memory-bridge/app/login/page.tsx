"use client"

import { useState } from "react"
import { supabase } from "../../lib/supabase";
export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) alert(error.message)
    else alert("Đăng nhập thành công!")
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Login</h1>

      <input
        className="border p-2 block my-2"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="border p-2 block my-2"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={handleLogin}
        className="bg-black text-white px-4 py-2"
      >
        Login
      </button>
    </div>
  )
}