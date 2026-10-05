"use client";

import { useEffect } from "react";
import { CheckCircle2, X } from "lucide-react";

interface NotificationToastProps {
  message: string | null;
  onClose: () => void;
}

export default function NotificationToast({
  message,
  onClose,
}: NotificationToastProps) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4500);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-slate-900 border border-sky-500/40 text-white p-4 rounded-2xl shadow-2xl shadow-black/80 backdrop-blur-xl animate-in slide-in-from-bottom-5 duration-300 flex items-start gap-3"
    >
      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
      <div className="flex-1 text-xs text-slate-200 leading-relaxed font-medium">
        {message}
      </div>
      <button
        onClick={onClose}
        className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        aria-label="Cerrar notificación"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
