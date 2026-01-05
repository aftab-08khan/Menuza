"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  UtensilsCrossed,
  ChefHat,
  ReceiptText,
  Package,
  Users,
  BarChart3,
  Clock,
  Shield,
  Sparkles,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white dark:from-zinc-950 dark:to-zinc-900 text-zinc-900 dark:text-zinc-100">
      {/* Navigation - Restaurant Style */}
      <nav className="fixed top-0 w-full bg-white/95 dark:bg-zinc-950/95 backdrop-blur-sm z-50 border-b border-amber-200 dark:border-amber-900/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center">
              <UtensilsCrossed className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-amber-900 dark:text-amber-100">
                Menuza
              </span>
              <div className="text-xs text-amber-700 dark:text-amber-300">
                Restaurant OS
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm font-medium hover:text-amber-700 dark:hover:text-amber-300 transition"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium hover:text-amber-700 dark:hover:text-amber-300 transition"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium hover:text-amber-700 dark:hover:text-amber-300 transition"
            >
              Customers
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-amber-700 dark:hover:text-amber-300 transition"
            >
              Support
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium hover:text-amber-700 dark:hover:text-amber-300 transition"
            >
              Sign In
            </Link>
            {/* <Link
              href="/register"
              className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-5 py-2.5 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all shadow-sm"
            >
              Get Started Free
            </Link> */}
          </div>
        </div>
      </nav>

      {/* Hero Section - Restaurant Theme */}
      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-sm font-medium border border-amber-200 dark:border-amber-800">
              <Sparkles className="w-4 h-4" />
              Serving 15,000+ Restaurants Nationwide
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="text-transparent bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text">
                Smarter Restaurant
              </span>
              <span className="block text-zinc-800 dark:text-zinc-200">
                Management Made Simple
              </span>
            </h1>

            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Everything you need to run your restaurant smoothly. From taking
              orders to tracking inventory, we handle the tech so you can focus
              on great food.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              {/* <Link
                href="/register"
                className="group bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-md"
              >
                <ChefHat className="w-5 h-5" />
                Start Free 30-Day Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link> */}
              <Link
                href="#demo"
                className="px-8 py-4 rounded-xl font-semibold border-2 border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-300 hover:bg-amber-50 dark:hover:bg-amber-950/30 transition"
              >
                <Clock className="w-5 h-5 inline mr-2" />
                Watch 3-Min Demo
              </Link>
            </div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {[
              { value: "₹2.5Cr+", label: "Monthly Revenue Processed" },
              { value: "15K+", label: "Happy Restaurants" },
              { value: "40%", label: "Average Efficiency Gain" },
              { value: "24/7", label: "Dedicated Support" },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white dark:bg-zinc-900 border border-amber-200 dark:border-amber-900/30 hover:shadow-lg transition"
              >
                <div className="text-2xl font-bold text-amber-700 dark:text-amber-300 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Features Grid - Restaurant Specific */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-zinc-800 dark:text-zinc-200">
            Everything You Need In One Platform
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ReceiptText,
                title: "Smart POS",
                desc: "Fast billing with GST compliance",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: ChefHat,
                title: "Kitchen Display",
                desc: "Live order tracking for chefs",
                color: "from-emerald-500 to-green-500",
              },
              {
                icon: Package,
                title: "Inventory Management",
                desc: "Auto-stock alerts & wastage tracking",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Users,
                title: "Staff Management",
                desc: "Shift scheduling & performance",
                color: "from-orange-500 to-red-500",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 hover:shadow-2xl transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}
                >
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Live Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative mb-20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-red-500/10 rounded-3xl blur-3xl" />
          <div className="relative rounded-2xl border border-amber-200 dark:border-amber-900/30 bg-gradient-to-b from-amber-50/50 to-white dark:from-zinc-900 dark:to-zinc-950 overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-amber-200 dark:border-amber-900/30 bg-gradient-to-r from-amber-600 to-orange-600">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <UtensilsCrossed className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      Restaurant Live Dashboard
                    </div>
                    <div className="text-sm text-amber-100">
                      Real-time updates • Peak hours
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-white">
                  <div className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                  <span>Live • 12 orders in queue</span>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {[
                  {
                    title: "Today's Revenue",
                    value: "₹68,420",
                    change: "+18%",
                    icon: "₹",
                  },
                  {
                    title: "Active Tables",
                    value: "14/18",
                    change: "78% Full",
                    icon: "🪑",
                  },
                  {
                    title: "Order Accuracy",
                    value: "99.2%",
                    change: "+0.8%",
                    icon: "🎯",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-xl border border-amber-200 dark:border-amber-900/30 bg-white/50 dark:bg-zinc-900/50"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-sm text-zinc-500 mb-2">
                          {stat.title}
                        </div>
                        <div className="text-2xl font-bold mb-1">
                          {stat.value}
                        </div>
                        <div className="text-sm text-emerald-600 dark:text-emerald-400">
                          {stat.change}
                        </div>
                      </div>
                      <div className="text-2xl">{stat.icon}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mini Order Queue */}
              <div className="rounded-xl border border-amber-200 dark:border-amber-900/30 bg-white/50 dark:bg-zinc-900/50 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold">Live Order Queue</h4>
                  <div className="text-sm text-amber-700 dark:text-amber-300">
                    Updated just now
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    "Table 5 • 4 items",
                    "Table 12 • 2 items",
                    "Delivery • 3 items",
                  ].map((order, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 rounded-lg bg-amber-50 dark:bg-amber-950/20"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                          <span className="text-sm font-medium">T{i + 1}</span>
                        </div>
                        <span className="font-medium">{order}</span>
                      </div>
                      <div className="text-sm text-zinc-500">12 mins</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Section */}
        <div className="text-center mb-20">
          <div className="text-sm text-zinc-500 mb-6">
            TRUSTED BY RESTAURANTS OF ALL SIZES
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {[
              "Fine Dining",
              "QSR Chains",
              "Cloud Kitchens",
              "Cafes",
              "Food Trucks",
              "Caterers",
            ].map((type, i) => (
              <div
                key={i}
                className="px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 font-medium"
              >
                {type}
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 mb-8">
            <div className="bg-white dark:bg-zinc-950 rounded-xl p-8 md:p-12">
              <Shield className="w-12 h-12 mx-auto mb-6 text-amber-600" />
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Restaurant?
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
                Join thousands of restaurants serving better with Menuza
              </p>
              {/* <Link
                href="/register"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all"
              >
                <ChefHat className="w-5 h-5" />
                Get Started - No Credit Card Required
                <ArrowRight className="w-5 h-5" />
              </Link> */}
              <div className="mt-4 text-sm text-zinc-500">
                Free 30-day trial • Cancel anytime • No setup fees
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-amber-200 dark:border-amber-900/30 bg-amber-50/30 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-orange-600 flex items-center justify-center">
                <UtensilsCrossed className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-amber-900 dark:text-amber-100">
                  Menuza
                </div>
                <div className="text-sm text-amber-700 dark:text-amber-300">
                  Restaurant Management System
                </div>
              </div>
            </div>
            <div className="flex gap-8 text-sm">
              <a
                href="#"
                className="hover:text-amber-700 dark:hover:text-amber-300"
              >
                Privacy
              </a>
              <a
                href="#"
                className="hover:text-amber-700 dark:hover:text-amber-300"
              >
                Terms
              </a>
              <a
                href="#"
                className="hover:text-amber-700 dark:hover:text-amber-300"
              >
                Support
              </a>
              <a
                href="#"
                className="hover:text-amber-700 dark:hover:text-amber-300"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="text-center text-sm text-zinc-500 pt-8 border-t border-amber-200 dark:border-amber-900/30">
            © {new Date().getFullYear()} Menuza. Made with ❤️ for restaurants
            worldwide.
          </div>
        </div>
      </footer>
    </div>
  );
}
