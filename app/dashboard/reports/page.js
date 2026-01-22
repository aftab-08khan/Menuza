"use client";

import { TrendingUp, ShoppingCart, DollarSign } from "lucide-react";

export default function Reports() {
  // Dummy data (later from backend)
  const summary = {
    totalSales: 1250,
    totalOrders: 48,
    avgOrderValue: 26,
  };

  const topItems = [
    { name: "Chicken Burger", qty: 25, revenue: 625 },
    { name: "French Fries", qty: 18, revenue: 180 },
    { name: "Cola", qty: 30, revenue: 150 },
  ];

  const orders = [
    { id: "ORD-101", total: 65, payment: "Cash" },
    { id: "ORD-102", total: 45, payment: "Card" },
    { id: "ORD-103", total: 30, payment: "Cash" },
  ];

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-amber-900 dark:text-amber-100">
        Reports
      </h1>

      {/* Summary Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ReportCard
          title="Total Sales"
          value={`AED ${summary.totalSales}`}
          icon={<DollarSign />}
        />
        <ReportCard
          title="Total Orders"
          value={summary.totalOrders}
          icon={<ShoppingCart />}
        />
        <ReportCard
          title="Avg Order Value"
          value={`AED ${summary.avgOrderValue}`}
          icon={<TrendingUp />}
        />
      </div>

      {/* Top Selling Items */}
      <div className="rounded-xl border border-amber-200 dark:border-amber-900/30 bg-white dark:bg-zinc-900 p-5">
        <h2 className="font-semibold text-amber-900 dark:text-amber-100 mb-4">
          Top Selling Items
        </h2>

        <table className="w-full text-sm">
          <thead className="text-left text-amber-900 dark:text-amber-100">
            <tr>
              <th className="py-2">Item</th>
              <th className="py-2">Qty Sold</th>
              <th className="py-2">Revenue (AED)</th>
            </tr>
          </thead>
          <tbody>
            {topItems.map((item, i) => (
              <tr
                key={i}
                className="border-t border-amber-200 dark:border-amber-900/30"
              >
                <td className="py-2">{item.name}</td>
                <td className="py-2">{item.qty}</td>
                <td className="py-2">{item.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Recent Orders */}
      <div className="rounded-xl border border-amber-200 dark:border-amber-900/30 bg-white dark:bg-zinc-900 p-5">
        <h2 className="font-semibold text-amber-900 dark:text-amber-100 mb-4">
          Recent Orders
        </h2>

        <ul className="space-y-3">
          {orders.map((order) => (
            <li key={order.id} className="flex justify-between items-center">
              <span className="text-amber-900 dark:text-amber-100">
                {order.id}
              </span>
              <span className="text-sm text-amber-700 dark:text-amber-300">
                AED {order.total} • {order.payment}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ReportCard({ title, value, icon }) {
  return (
    <div className="rounded-xl border border-amber-200 dark:border-amber-900/30 bg-white dark:bg-zinc-900 p-5 flex items-center gap-4">
      <div className="p-3 rounded-lg bg-amber-100 dark:bg-zinc-800 text-amber-700 dark:text-amber-300">
        {icon}
      </div>
      <div>
        <p className="text-sm text-amber-700 dark:text-amber-300">{title}</p>
        <p className="text-xl font-bold text-amber-900 dark:text-amber-100">
          {value}
        </p>
      </div>
    </div>
  );
}
