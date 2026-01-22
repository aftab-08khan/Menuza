"use client";

import { X, LayoutDashboard, Store, Users, Settings } from "lucide-react";
import Link from "next/link";

const menu = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Kitchen", icon: Store, href: "/dashboard/kitchen" },
  { name: "Orders", icon: Users, href: "/dashboard/orders" },
  { name: "Reports", icon: Users, href: "/dashboard/reports" },
  { name: "Inventory", icon: Users, href: "/dashboard/inventory" },
  { name: "Settings", icon: Settings, href: "/dashboard/settings" },
];
export default function MobileSidebar({ open, onClose, currentPage }) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-white dark:bg-zinc-900 border-r border-amber-200 dark:border-amber-900/30 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="h-[72px] px-5 flex items-center justify-between border-b border-amber-200 dark:border-amber-900/30">
          <p className="font-bold text-amber-900 dark:text-amber-100">Menu</p>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-amber-900 dark:text-amber-100" />
          </button>
        </div>

        {/* Menu */}
        <div className="p-4 space-y-2">
          {menu.map((item, i) => {
            const isActive = item.href.endsWith(currentPage);
            return (
              <Link
                key={i}
                href={item.href}
                onClick={onClose}
                className={`group flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all
                ${
                  isActive
                    ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md"
                    : "text-amber-900 dark:text-amber-100 hover:bg-gradient-to-r hover:from-amber-600 hover:to-orange-600 hover:text-white"
                }
              `}
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </Link>
            );
          })}
        </div>
      </aside>
    </>
  );
}
