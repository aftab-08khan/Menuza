"use client";

import { useEffect, useState } from "react";
import Modal from "@/components/ui/modal";
import { addRestaurant, updateRestaurant } from "@/lib/firebaseActions";
import { useAuth } from "@/context/AuthContext";

export default function RestaurantModal({ open, onClose, editData }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
    phone: "",
    isActive: true,
  });

  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  useEffect(() => {
    if (editData) {
      setForm({
        name: editData.name || "",
        email: editData.email || "",
        password: "",
        location: editData.location || "",
        phone: editData.phone || "",
        isActive: editData.isActive ?? true,
      });
    } else {
      setForm({
        name: "",
        email: "",
        password: "",
        location: "",
        phone: "",
        isActive: true,
      });
    }
  }, [editData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      if (editData) {
        // ✅ UPDATE ONLY FIRESTORE FIELDS
        await updateRestaurant(editData.id, {
          name: form.name,
          location: form.location,
          phone: form.phone,
          isActive: form.isActive,
        });
      } else {
        if (!form.password) {
          alert("Password is required");
          return;
        }

        await addRestaurant({
          ...form,
          createdBy: user.uid, // ✅ FIX HERE
        });
      }

      onClose();
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={editData ? "Edit Restaurant" : "Add Restaurant"}
      footer={
        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 rounded-lg border">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 text-white disabled:opacity-50"
          >
            {loading ? "Saving..." : editData ? "Update" : "Create"}
          </button>
        </div>
      }
    >
      <div className="space-y-1">
        <Input
          label="Restaurant Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        <Input
          label="Admin Email"
          name="email"
          value={form.email}
          disabled={!!editData}
          onChange={handleChange}
        />

        {!editData && (
          <Input
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
          />
        )}

        <Input
          label="Location"
          name="location"
          value={form.location}
          onChange={handleChange}
        />

        <Input
          label="Phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />

        {editData && (
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              name="isActive"
              checked={form.isActive}
              onChange={handleChange}
            />
            Active
          </label>
        )}
      </div>
    </Modal>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input {...props} className="mt-1 w-full rounded-lg border px-3 py-2" />
    </div>
  );
}
