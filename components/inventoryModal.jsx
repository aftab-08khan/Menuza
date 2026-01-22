"use client";

import { useEffect, useState } from "react";
import Modal from "./ui/modal";

const INITIAL_STATE = {
  name: "",
  quantity: "",
  unit: "",
  minStock: "",
};

export default function InventoryModal({ open, onClose, editData }) {
  const [formData, setFormData] = useState(INITIAL_STATE);

  useEffect(() => {
    if (editData) {
      setFormData({
        name: editData.name,
        quantity: editData.quantity,
        unit: editData.unit,
        minStock: editData.minStock,
      });
    } else {
      setFormData(INITIAL_STATE);
    }
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(editData ? "Update Inventory:" : "Add Inventory:", formData);
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={editData ? "Edit Inventory Item" : "Add Inventory Item"}
      footer={
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-amber-200 dark:border-amber-900/30"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 text-white"
          >
            {editData ? "Update" : "Save"}
          </button>
        </div>
      }
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit;
          onClose();
        }}
        className="space-y-4"
      >
        <input
          name="name"
          placeholder="Item Name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-amber-200 dark:border-amber-900/30 bg-white dark:bg-zinc-800 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-500"
        />

        <input
          name="quantity"
          type="number"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-amber-200 dark:border-amber-900/30 bg-white dark:bg-zinc-800 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-500"
        />

        <input
          name="unit"
          placeholder="kg / liters / pcs"
          value={formData.unit}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-amber-200 dark:border-amber-900/30 bg-white dark:bg-zinc-800 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-500"
        />

        <input
          name="minStock"
          type="number"
          placeholder="Minimum Stock"
          value={formData.minStock}
          onChange={handleChange}
          className="mt-1 w-full rounded-lg border border-amber-200 dark:border-amber-900/30 bg-white dark:bg-zinc-800 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-500"
        />
      </form>
    </Modal>
  );
}
