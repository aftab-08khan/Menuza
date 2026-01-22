"use client";

import { useState } from "react";
import MobileSidebar from "@/components/mobileSidebar";
import Topbar from "@/components/topBar";
import Sidebar from "@/components/sidebar";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const currentPage = pathname.split("/").pop();

  return (
    <div className="min-h-screen bg-amber-50 dark:bg-zinc-950">
      <Topbar onMenuClick={() => setMobileMenuOpen(true)} />

      <MobileSidebar
        currentPage={currentPage}
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      <div className="flex pt-[72px]">
        {/* Desktop Sidebar */}
        <Sidebar currentPage={currentPage} />

        {/* Content */}
        <main className="flex-1 px-6 py-6">
          <div className="rounded-2xl border border-amber-200/60 dark:border-amber-900/30 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-sm p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
