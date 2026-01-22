"use client";

import { ShoppingCart, DollarSign, Utensils } from "lucide-react";

export default function DashboardPage() {
  // Dummy data (later from Orders state / backend)
  const stats = [
    {
      title: "Today's Orders",
      value: 48,
      icon: ShoppingCart,
    },
    {
      title: "Today's Revenue",
      value: "AED 1,250",
      icon: DollarSign,
    },
    {
      title: "Items Sold",
      value: 132,
      icon: Utensils,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-2xl font-bold text-amber-900 dark:text-amber-100">
        Dashboard Overview
      </h1>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((item, i) => (
          <div
            key={i}
            className="rounded-xl p-5 bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-200 dark:border-amber-900/30 flex items-center gap-4"
          >
            <div className="p-3 rounded-lg bg-amber-100 dark:bg-zinc-800 text-amber-700 dark:text-amber-300">
              <item.icon className="w-6 h-6" />
            </div>

            <div>
              <p className="text-sm text-amber-700 dark:text-amber-300">
                {item.title}
              </p>
              <p className="mt-1 text-2xl font-bold text-amber-900 dark:text-amber-100">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Notes / Future */}
      <div className="rounded-xl border border-amber-200 dark:border-amber-900/30 bg-white dark:bg-zinc-900 p-5">
        <p className="text-sm text-amber-700 dark:text-amber-300">
          💡 Tip: Use the <strong>Orders</strong> page to create new orders and
          print bills instantly.
        </p>
      </div>
    </div>
  );
}
