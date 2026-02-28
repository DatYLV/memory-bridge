"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `relative px-3 py-2 transition font-medium ${
      pathname === path
        ? "text-purple-400"
        : "text-gray-400 hover:text-white"
    } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full ${
      pathname === path ? "after:w-full" : ""
    }`;

  return (
    <nav className="w-full backdrop-blur-xl bg-black/40 border-b border-white/10 px-10 py-4 flex justify-between items-center sticky top-0 z-50">
      
      <h1 className="text-xl font-semibold tracking-wide bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
        Memory Bridge
      </h1>

      <div className="flex items-center gap-8">
        <Link href="/" className={linkClass("/")}>
          Home
        </Link>

        <Link href="/create" className={linkClass("/create")}>
          Create
        </Link>

        <Link href="/memories" className={linkClass("/memories")}>
          Memories
        </Link>

        <Link
          href="/login"
          className="ml-4 px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 transition duration-300 shadow-lg shadow-purple-500/20"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
