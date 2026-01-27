"use client";

import { useEffect, useState } from "react";
import { Plus, Pencil } from "lucide-react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import RestaurantModal from "@/components/restaurantModal";

export default function RestaurantsPage() {
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ===============================
     🔄 FETCH RESTAURANTS
     =============================== */
  const fetchRestaurants = async () => {
    try {
      setLoading(true);
      const snapshot = await getDocs(collection(db, "restaurants"));
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRestaurants(data);
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  /* ===============================
     ➕ ADD
     =============================== */
  const handleAdd = () => {
    setEditData(null);
    setOpen(true);
  };

  /* ===============================
     ✏️ EDIT
     =============================== */
  const handleEdit = (restaurant) => {
    setEditData(restaurant);
    setOpen(true);
  };

  /* ===============================
     🔄 AFTER SAVE
     =============================== */
  const handleClose = () => {
    setOpen(false);
    setEditData(null);
    fetchRestaurants(); // refresh list
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-amber-900 dark:text-amber-100">
          Restaurants
        </h1>

        <button
          onClick={handleAdd}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 text-white font-medium hover:scale-105 transition"
        >
          <Plus size={16} />
          Add Restaurant
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <p className="text-sm text-amber-700 dark:text-amber-300">
          Loading restaurants...
        </p>
      )}

      {/* Empty State */}
      {!loading && restaurants.length === 0 && (
        <p className="text-sm text-amber-700 dark:text-amber-300">
          No restaurants found.
        </p>
      )}

      {/* Restaurants Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-amber-200 dark:border-amber-900/30 bg-white dark:bg-zinc-900 p-5 space-y-2"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-amber-900 dark:text-amber-100">
                {item.name}
              </h3>

              <button
                onClick={() => handleEdit(item)}
                className="p-2 rounded-lg hover:bg-amber-100 dark:hover:bg-zinc-800"
              >
                <Pencil size={14} />
              </button>
            </div>

            <p className="text-sm text-amber-700 dark:text-amber-300">
              📧 {item.email}
            </p>

            <p className="text-sm text-amber-700 dark:text-amber-300">
              📍 {item.location || "—"}
            </p>

            <p className="text-sm text-amber-700 dark:text-amber-300">
              📞 {item.phone || "—"}
            </p>

            <span
              className={`inline-block mt-2 text-xs px-2 py-1 rounded-full ${
                item.isActive
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {item.isActive ? "Active" : "Inactive"}
            </span>
          </div>
        ))}
      </div>

      {/* Add / Edit Modal */}
      <RestaurantModal open={open} onClose={handleClose} editData={editData} />
    </div>
  );
}
