"use client";

import { useState } from "react";

const INITIAL_STATE = {
  name: "Menuza Restaurant",
  address: "Dubai, UAE",
  phone: "+971 50 123 4567",
  vatPercentage: 5,
  vatTrn: "",
  autoPrint: true,
  billFooter: "Thank you for dining with us!",
};

export default function Settings() {
  const [settings, setSettings] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = () => {
    console.log("Saved Settings:", settings);
    alert("Settings saved successfully");
  };

  return (
    <div className="max-w-3xl space-y-6">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-amber-900 dark:text-amber-100">
        Settings
      </h1>

      {/* Restaurant Info */}
      <div className="rounded-xl border border-amber-200 dark:border-amber-900/30 bg-white dark:bg-zinc-900 p-6 space-y-4">
        <h2 className="font-semibold text-amber-900 dark:text-amber-100">
          Restaurant Information
        </h2>

        <Input
          label="Restaurant Name"
          name="name"
          value={settings.name}
          onChange={handleChange}
        />

        <Input
          label="Address"
          name="address"
          value={settings.address}
          onChange={handleChange}
        />

        <Input
          label="Phone Number"
          name="phone"
          value={settings.phone}
          onChange={handleChange}
        />
      </div>

      {/* Tax & Billing */}
      <div className="rounded-xl border border-amber-200 dark:border-amber-900/30 bg-white dark:bg-zinc-900 p-6 space-y-4">
        <h2 className="font-semibold text-amber-900 dark:text-amber-100">
          Tax & Billing
        </h2>

        <Input
          label="VAT Percentage (%)"
          name="vatPercentage"
          type="number"
          value={settings.vatPercentage}
          onChange={handleChange}
        />

        <Input
          label="VAT TRN Number"
          name="vatTrn"
          placeholder="Optional"
          value={settings.vatTrn}
          onChange={handleChange}
        />

        <Input
          label="Bill Footer Message"
          name="billFooter"
          value={settings.billFooter}
          onChange={handleChange}
        />

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="autoPrint"
            checked={settings.autoPrint}
            onChange={handleChange}
            className="h-4 w-4 accent-amber-600"
          />
          <span className="text-sm text-amber-900 dark:text-amber-100">
            Auto print bill after order confirmation
          </span>
        </div>
      </div>

      {/* Save */}
      <button
        onClick={handleSave}
        className="px-6 py-2 rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 text-white font-medium hover:scale-105 transition"
      >
        Save Settings
      </button>
    </div>
  );
}

/* Reusable Input Component */
function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-amber-900 dark:text-amber-100 mb-1">
        {label}
      </label>
      <input
        {...props}
        className="w-full rounded-lg border border-amber-200 dark:border-amber-900/30 bg-white dark:bg-zinc-800 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-500"
      />
    </div>
  );
}
