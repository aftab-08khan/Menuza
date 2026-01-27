"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { ArrowLeft } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async () => {
    if (!formData.email || !formData.password) {
      setError("Please enter email and password");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await login(formData.email, formData.password);

      // ✅ Single entry point
      router.push("/dashboard");
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50 dark:bg-zinc-950 px-4 relative">
      {/* 🔙 Back Button */}
      <button
        onClick={handleBack}
        className="absolute top-6 left-6 flex items-center gap-2 text-sm font-medium text-amber-700 dark:text-amber-300 hover:text-amber-900 dark:hover:text-amber-100 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </button>

      <div className="w-full max-w-md rounded-2xl border border-amber-200 dark:border-amber-900/30 bg-white dark:bg-zinc-900 p-8 shadow-lg space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-amber-900 dark:text-amber-100">
            Admin Login
          </h1>
          <p className="text-sm text-amber-700 dark:text-amber-300">
            Authorized access only
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="rounded-lg bg-red-100 text-red-700 text-sm px-4 py-2">
            {error}
          </div>
        )}

        {/* Email */}
        <div>
          <label className="text-sm font-medium text-amber-900 dark:text-amber-100">
            Email
          </label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="admin@restaurant.com"
            className="mt-1 w-full rounded-lg border border-amber-200 dark:border-amber-900/30 bg-white dark:bg-zinc-800 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        {/* Password */}
        <div>
          <label className="text-sm font-medium text-amber-900 dark:text-amber-100">
            Password
          </label>

          <div className="relative mt-1">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full rounded-lg border border-amber-200 dark:border-amber-900/30 bg-white dark:bg-zinc-800 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-amber-700 dark:text-amber-300"
            >
              {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </button>
          </div>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 text-white py-2 font-medium hover:scale-[1.02] transition disabled:opacity-50"
        >
          {loading ? "Signing in..." : "Login"}
        </button>

        {/* Footer */}
        <p className="text-xs text-center text-amber-700 dark:text-amber-300">
          © Restaurant POS • Admin Panel
        </p>
      </div>
    </div>
  );
}
