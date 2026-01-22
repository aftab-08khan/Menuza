"use client";

import { useState } from "react";
import { Plus, Pencil, Upload, Download } from "lucide-react";
import KitchenModal from "@/components/kitchenModal";
import * as XLSX from "xlsx";

export default function Kitchen() {
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  const handleAdd = () => {
    setEditData(null);
    setOpen(true);
  };

  const handleEdit = (item) => {
    setEditData(item);
    setOpen(true);
  };

  /* ===============================
     📥 DOWNLOAD SAMPLE CSV
     =============================== */
  const downloadSampleFile = () => {
    const sampleData = [
      ["name", "price", "category", "image", "available"],
      [
        "Chicken Burger",
        "25",
        "Burgers",
        "https://via.placeholder.com/300",
        "true",
      ],
      [
        "French Fries",
        "10",
        "Sides",
        "https://via.placeholder.com/300",
        "true",
      ],
      ["Veg Pizza", "30", "Pizza", "https://via.placeholder.com/300", "false"],
    ];

    const worksheet = XLSX.utils.aoa_to_sheet(sampleData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Menu");

    XLSX.writeFile(workbook, "menu-upload-sample.xlsx");
  };

  /* ===============================
     📤 BULK UPLOAD HANDLER
     =============================== */
  const handleBulkUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (evt) => {
      const data = new Uint8Array(evt.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);

      const formattedMenu = jsonData.map((item, index) => ({
        id: Date.now() + index,
        name: item.name,
        price: Number(item.price),
        category: item.category,
        image: item.image || "https://via.placeholder.com/300",
        available: String(item.available).toLowerCase() === "true",
      }));

      setMenuItems((prev) => [...prev, ...formattedMenu]);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-amber-900 dark:text-amber-100">
          Menu Items
        </h1>

        <div className="flex flex-wrap gap-2">
          {/* 📥 Download Sample */}
          <button
            onClick={downloadSampleFile}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-amber-200 dark:border-amber-900/30 bg-white dark:bg-zinc-900 text-sm font-medium hover:bg-amber-50 dark:hover:bg-zinc-800"
          >
            <Download className="w-4 h-4" />
            Download Sample
          </button>

          {/* 📤 Bulk Upload */}
          <label className="cursor-pointer flex items-center gap-2 px-4 py-2 rounded-lg border border-amber-200 dark:border-amber-900/30 bg-white dark:bg-zinc-900 text-sm font-medium hover:bg-amber-50 dark:hover:bg-zinc-800">
            <Upload className="w-4 h-4" />
            Bulk Upload
            <input
              type="file"
              accept=".xlsx,.xls,.csv"
              onChange={handleBulkUpload}
              className="hidden"
            />
          </label>

          {/* ➕ Add Item */}
          <button
            onClick={handleAdd}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 text-white font-medium hover:scale-105 transition"
          >
            <Plus className="w-4 h-4" />
            Add Item
          </button>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-amber-200 dark:border-amber-900/30 bg-white/80 dark:bg-zinc-900/80 overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-40 w-full object-cover"
            />

            <div className="p-4 space-y-1">
              <p className="font-semibold text-amber-900 dark:text-amber-100">
                {item.name}
              </p>

              <p className="text-sm text-amber-700 dark:text-amber-300">
                AED {item.price}
              </p>

              <span
                className={`inline-block text-xs px-2 py-1 rounded-full ${
                  item.available
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {item.available ? "Available" : "Out of stock"}
              </span>

              <div className="mt-3 flex justify-end">
                <button
                  onClick={() => handleEdit(item)}
                  className="p-2 rounded-lg hover:bg-amber-100 dark:hover:bg-zinc-800"
                >
                  <Pencil className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <KitchenModal
        open={open}
        onClose={() => setOpen(false)}
        editData={editData}
      />
    </div>
  );
}
