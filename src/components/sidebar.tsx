"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-xl font-bold">BaseHelpCast</h2>
      <nav>
        <ul>
          <li>
            <Link href="/">Hem</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
