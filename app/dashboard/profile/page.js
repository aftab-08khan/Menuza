"use client";

import { useState } from "react";
import { User, Mail, Shield } from "lucide-react";

const INITIAL_STATE = {
  name: "Aftab Khan",
  email: "aftab@menuza.com",
  role: "Owner",
};

export default function Profile() {
  const [profile, setProfile] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Profile updated:", profile);
    alert("Profile updated successfully");
  };

  return (
    <div className="max-w-3xl space-y-6">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-amber-900 dark:text-amber-100">
        Profile
      </h1>

      {/* Profile Card */}
      <div className="rounded-xl border border-amber-200 dark:border-amber-900/30 bg-white dark:bg-zinc-900 p-6 flex items-center gap-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center text-white text-3xl font-bold">
          {profile.name.charAt(0)}
        </div>

        <div>
          <p className="text-lg font-semibold text-amber-900 dark:text-amber-100">
            {profile.name}
          </p>
          <p className="text-sm text-amber-700 dark:text-amber-300">
            {profile.role}
          </p>
        </div>
      </div>

      {/* Profile Form */}
      <div className="rounded-xl border border-amber-200 dark:border-amber-900/30 bg-white dark:bg-zinc-900 p-6 space-y-4">
        <h2 className="font-semibold text-amber-900 dark:text-amber-100">
          Profile Details
        </h2>

        <Input
          label="Full Name"
          name="name"
          value={profile.name}
          onChange={handleChange}
          icon={<User size={16} />}
        />

        <Input
          label="Email Address"
          name="email"
          value={profile.email}
          onChange={handleChange}
          icon={<Mail size={16} />}
        />

        <Input
          label="Role"
          name="role"
          value={profile.role}
          disabled
          icon={<Shield size={16} />}
        />
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="px-6 py-2 rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 text-white font-medium hover:scale-105 transition"
      >
        Save Changes
      </button>

      {/* Security (Future Ready) */}
      <div className="rounded-xl border border-amber-200 dark:border-amber-900/30 bg-amber-50 dark:bg-zinc-800 p-5">
        <p className="text-sm text-amber-700 dark:text-amber-300">
          🔒 Password change & security settings will be available soon.
        </p>
      </div>
    </div>
  );
}

/* Reusable Input Component */
function Input({ label, icon, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium text-amber-900 dark:text-amber-100 mb-1">
        {label}
      </label>
      <div className="flex items-center gap-2 rounded-lg border border-amber-200 dark:border-amber-900/30 bg-white dark:bg-zinc-800 px-3 py-2">
        <span className="text-amber-600 dark:text-amber-400">{icon}</span>
        <input
          {...props}
          className="w-full bg-transparent text-sm outline-none text-amber-900 dark:text-amber-100"
        />
      </div>
    </div>
  );
}
