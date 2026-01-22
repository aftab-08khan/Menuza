import React, { forwardRef } from "react";
import { RESTAURANT_INFO } from "@/config/restaurant";
import { getCurrentDateTime } from "@/utils/dateTime";

const Bill = forwardRef(({ orderItems, subtotal }, ref) => {
  const { date, time } = getCurrentDateTime();

  const vatAmount = (subtotal * RESTAURANT_INFO.vatPercentage) / 100;

  const totalWithVat = subtotal + vatAmount;

  return (
    <div ref={ref} className="p-4 text-xs text-black w-[300px] font-mono">
      {/* Restaurant Info */}
      <div className="text-center mb-2">
        <h2 className="font-bold text-base">{RESTAURANT_INFO.name}</h2>
        <p>{RESTAURANT_INFO.address}</p>
        <p>Tel: {RESTAURANT_INFO.phone}</p>
      </div>

      {/* Date & Time */}
      <div className="flex justify-between text-[11px] mb-2">
        <span>Date: {date}</span>
        <span>Time: {time}</span>
      </div>

      <hr className="my-2" />

      {/* Items */}
      {orderItems.map((item) => (
        <div key={item.id} className="flex justify-between">
          <span>
            {item.name} x{item.qty}
          </span>
          <span>AED {(item.price * item.qty).toFixed(2)}</span>
        </div>
      ))}

      <hr className="my-2" />

      {/* Subtotal */}
      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>AED {subtotal.toFixed(2)}</span>
      </div>

      {/* VAT */}
      <div className="flex justify-between">
        <span>VAT ({RESTAURANT_INFO.vatPercentage}%)</span>
        <span>AED {vatAmount.toFixed(2)}</span>
      </div>

      <hr className="my-2" />

      {/* Total */}
      <div className="flex justify-between font-bold text-sm">
        <span>Total</span>
        <span>AED {totalWithVat.toFixed(2)}</span>
      </div>

      <p className="text-center mt-4">Thank you for dining with us 🙏</p>
    </div>
  );
});

export default Bill;
