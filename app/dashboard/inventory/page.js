"use client";

import { useState } from "react";
import { Plus, Pencil, AlertTriangle } from "lucide-react";
import InventoryModal from "@/components/inventoryModal";

export default function Inventory() {
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const inventoryItems = [
    { id: 1, name: "Chicken", quantity: 10, unit: "kg", minStock: 5 },
    { id: 2, name: "Potatoes", quantity: 3, unit: "kg", minStock: 5 },
    { id: 3, name: "Cooking Oil", quantity: 15, unit: "liters", minStock: 10 },
  ];

  const handleAdd = () => {
    setEditData(null);
    setOpen(true);
  };

  const handleEdit = (item) => {
    setEditData(item);
    setOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-amber-900 dark:text-amber-100">
          Inventory
        </h1>

        <button
          onClick={handleAdd}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 text-white font-medium hover:scale-105 transition"
        >
          <Plus size={16} />
          Add Item
        </button>
      </div>

      {/* Inventory Table */}
      <div className="overflow-x-auto rounded-xl border border-amber-200 dark:border-amber-900/30 bg-white dark:bg-zinc-900">
        <table className="w-full text-sm">
          <thead className="bg-amber-50 dark:bg-zinc-800">
            <tr className="text-left text-amber-900 dark:text-amber-100">
              <th className="px-4 py-3">Item</th>
              <th className="px-4 py-3">Quantity</th>
              <th className="px-4 py-3">Unit</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-right">Action</th>
            </tr>
          </thead>

          <tbody>
            {inventoryItems.map((item) => {
              const lowStock = item.quantity <= item.minStock;

              return (
                <tr
                  key={item.id}
                  className="border-t border-amber-200 dark:border-amber-900/30"
                >
                  <td className="px-4 py-3 font-medium text-amber-900 dark:text-amber-100">
                    {item.name}
                  </td>

                  <td className="px-4 py-3">{item.quantity}</td>

                  <td className="px-4 py-3">{item.unit}</td>

                  <td className="px-4 py-3">
                    {lowStock ? (
                      <span className="inline-flex items-center gap-1 text-red-600 text-xs font-medium">
                        <AlertTriangle size={14} />
                        Low Stock
                      </span>
                    ) : (
                      <span className="text-green-600 text-xs font-medium">
                        In Stock
                      </span>
                    )}
                  </td>

                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => handleEdit(item)}
                      className="p-2 rounded-lg hover:bg-amber-100 dark:hover:bg-zinc-800"
                    >
                      <Pencil size={16} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Add / Edit Modal */}
      <InventoryModal
        open={open}
        onClose={() => setOpen(false)}
        editData={editData}
      />
    </div>
  );
}
