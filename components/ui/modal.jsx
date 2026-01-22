"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { X } from "lucide-react";

export default function Modal({ open, onClose, title, children, footer }) {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      {/* Overlay */}
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity
        data-[closed]:opacity-0
        data-[enter]:duration-300 data-[leave]:duration-200"
      />

      {/* Wrapper */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel
          transition
          className="
            w-full max-w-lg transform overflow-hidden rounded-2xl
            bg-white dark:bg-zinc-900
            border border-amber-200 dark:border-amber-900/30
            shadow-xl transition-all
            data-[closed]:translate-y-6 data-[closed]:opacity-0
            data-[enter]:duration-300 data-[leave]:duration-200
          "
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-amber-200 dark:border-amber-900/30">
            <DialogTitle className="text-lg font-bold text-amber-900 dark:text-amber-100">
              {title}
            </DialogTitle>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-amber-100 dark:hover:bg-zinc-800 transition"
            >
              <X className="w-5 h-5 text-amber-900 dark:text-amber-100" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6">{children}</div>

          {/* Footer */}
          {footer && (
            <div className="px-6 py-4 border-t border-amber-200 dark:border-amber-900/30">
              {footer}
            </div>
          )}
        </DialogPanel>
      </div>
    </Dialog>
  );
}
