"use client";

import { UtensilsCrossed, Menu } from "lucide-react";
import Link from "next/link";

export default function Topbar({ onMenuClick }) {
  return (
    <header className="fixed top-0 left-0 w-full h-[72px] z-50 border-b border-amber-200 dark:border-amber-900/30 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-sm">
      <div className="h-full max-w-full px-6 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 rounded-lg hover:bg-amber-100 dark:hover:bg-zinc-800 transition"
          >
            <Menu className="w-6 h-6 text-amber-900 dark:text-amber-100" />
          </button>

          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center">
            <UtensilsCrossed className="w-5 h-5 text-white" />
          </div>

          <div>
            <p className="text-lg font-bold text-amber-900 dark:text-amber-100">
              Menuza
            </p>
            <span className="text-xs text-amber-700 dark:text-amber-300">
              Dashboard
            </span>
          </div>
        </div>

        {/* Right */}
        <Link href="/dashboard/profile" className="flex items-center gap-4">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 text-white flex items-center justify-center font-semibold">
            A
          </div>
        </Link>
      </div>
    </header>
  );
}
