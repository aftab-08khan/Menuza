"use client";

import { useEffect, useState } from "react";
import Modal from "./ui/modal";

const INITIAL_STATE = {
  name: "",
  price: "",
  category: "",
  image: "",
  available: true,
};

export default function KitchenModal({ open, onClose, editData }) {
  const [formData, setFormData] = useState(INITIAL_STATE);

  useEffect(() => {
    if (editData) {
      setFormData({
        name: editData.name || "",
        price: editData.price || "",
        category: editData.category || "",
        image: editData.image || "",
        available: editData.available ?? true,
      });
    } else {
      setFormData(INITIAL_STATE);
    }
  }, [editData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    const payload = {
      ...formData,
      price: Number(formData.price),
    };

    if (editData) {
      console.log("Update Menu Item:", payload);
    } else {
      console.log("Add Menu Item:", payload);
    }

    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={editData ? "Edit Menu Item" : "Add Menu Item"}
      footer={
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-amber-200 dark:border-amber-900/30 text-amber-900 dark:text-amber-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 text-white font-medium"
          >
            {editData ? "Update" : "Save"}
          </button>
        </div>
      }
    >
      <div className="space-y-4">
        {/* Item Name */}
        <div>
          <label className="text-sm font-medium text-amber-900 dark:text-amber-100">
            Item Name
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Chicken Burger"
            className="mt-1 w-full rounded-lg border border-amber-200 dark:border-amber-900/30 bg-white dark:bg-zinc-800 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        {/* Price */}
        <div>
          <label className="text-sm font-medium text-amber-900 dark:text-amber-100">
            Price (AED)
          </label>
          <input
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
            placeholder="25"
            className="mt-1 w-full rounded-lg border border-amber-200 dark:border-amber-900/30 bg-white dark:bg-zinc-800 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        {/* Category */}
        <div>
          <label className="text-sm font-medium text-amber-900 dark:text-amber-100">
            Category
          </label>
          <input
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Burgers / Drinks"
            className="mt-1 w-full rounded-lg border border-amber-200 dark:border-amber-900/30 bg-white dark:bg-zinc-800 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        {/* Image */}
        <div>
          <label className="text-sm font-medium text-amber-900 dark:text-amber-100">
            Image URL
          </label>
          <input
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://..."
            className="mt-1 w-full rounded-lg border border-amber-200 dark:border-amber-900/30 bg-white dark:bg-zinc-800 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        {/* Availability */}
        <div className="flex items-center gap-3">
          <input
            name="available"
            type="checkbox"
            checked={formData.available}
            onChange={handleChange}
            className="h-4 w-4 accent-amber-600"
          />
          <span className="text-sm text-amber-900 dark:text-amber-100">
            Item Available
          </span>
        </div>
      </div>
    </Modal>
  );
}
