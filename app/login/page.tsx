"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = async (e: any) => {
    e.preventDefault()

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false
    })

    if (!res?.error) {
      router.push("/dashboard")
    } else {
      alert("Sai email hoặc mật khẩu")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form
        onSubmit={handleLogin}
        className="bg-white/5 p-8 rounded-2xl border border-white/10 w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Đăng nhập</h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 rounded-lg bg-black border border-white/20"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password + Eye */}
        <div className="relative mb-6">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-black border border-white/20 pr-12"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
          >
            {showPassword ? "🙈" : "👁"}
          </button>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500"
        >
          Đăng nhập
        </button>
      </form>
    </div>
  )
}
