"use client";

import { useRef, useState } from "react";
import { Plus, Minus, Trash2, Printer } from "lucide-react";
import { useReactToPrint } from "react-to-print";
import Bill from "@/components/bill";

export default function Orders() {
  const menuItems = [
    { id: 1, name: "Chicken Burger", price: 25 },
    { id: 2, name: "French Fries", price: 10 },
    { id: 3, name: "Cola", price: 5 },
  ];

  const [orderItems, setOrderItems] = useState([]);
  const billRef = useRef();
  console.log(billRef, "refff");

  const addItem = (item) => {
    setOrderItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      return existing
        ? prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i))
        : [...prev, { ...item, qty: 1 }];
    });
  };

  const updateQty = (id, type) => {
    setOrderItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, qty: type === "inc" ? item.qty + 1 : item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id) => {
    setOrderItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = orderItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handlePrint = useReactToPrint({
    contentRef: billRef,
  });

  return (
    <>
      {/* HIDDEN BILL FOR PRINT */}
      <div className="hidden">
        <Bill ref={billRef} orderItems={orderItems} subtotal={subtotal} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* MENU */}
        <div className="lg:col-span-2">
          <h1 className="text-xl font-bold mb-4">Menu</h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => addItem(item)}
                className="p-4 border rounded-xl"
              >
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm">AED {item.price}</p>
              </button>
            ))}
          </div>
        </div>

        {/* ORDER SUMMARY */}
        <div className="border rounded-xl p-5 flex flex-col">
          <h2 className="font-bold text-lg">Current Order</h2>

          <div className="flex-1 mt-4 space-y-3">
            {orderItems.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>
                  {item.name} x{item.qty}
                </span>
                <div className="flex gap-2">
                  <button onClick={() => updateQty(item.id, "dec")}>
                    <Minus size={14} />
                  </button>
                  <button onClick={() => updateQty(item.id, "inc")}>
                    <Plus size={14} />
                  </button>
                  <button onClick={() => removeItem(item.id)}>
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>AED {subtotal}</span>
            </div>

            <button
              onClick={handlePrint}
              disabled={!orderItems.length}
              className="mt-3 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white py-2 rounded-lg"
            >
              <Printer size={16} />
              Print Bill
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
