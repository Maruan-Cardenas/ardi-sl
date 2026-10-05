"use client";
import { useTranslation } from "@/components/I18nProvider";

import { useEffect } from "react";
import Image from "next/image";
import { X, CheckCircle2, ChevronRight, Download, Info } from "lucide-react";
import { Product } from "@/data/products";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({
  product,
  onClose,
}: ProductModalProps) {
  
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [product]);

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div 
        className="relative flex flex-col w-full max-w-5xl max-h-full bg-slate-950 border border-slate-700 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        
        {/* Close Button Floating */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/60 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/50 backdrop-blur-md transition-all"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col lg:flex-row h-full overflow-y-auto lg:overflow-hidden">
          
          {/* Left Column: Image Area */}
          <div className="w-full lg:w-1/2 relative bg-slate-900 min-h-[300px] lg:min-h-full">
            <Image
              src={product.image}
              alt={`Fotografía industrial de ${product.name}`}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Gradient Overlay for text readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90 lg:hidden" />
          </div>

          {/* Right Column: Content Area */}
          <div className="w-full lg:w-1/2 flex flex-col flex-1 max-h-full bg-slate-950 relative">
            
            {/* Scrollable Content Body */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
              
              {/* Header Info */}
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-950/50 border border-sky-800/50 text-xs font-semibold text-sky-400 mb-4">
                  <Info className="w-3.5 h-3.5" />
                  Especificaciones Técnicas
                </div>
                <h2 id="modal-title" className="text-3xl font-black text-white mb-3">
                  {product.name}
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              {/* Technical Features */}
              <div>
                <h3 className="text-lg font-bold text-slate-200 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  Características Principales
                </h3>
                <ul className="grid grid-cols-1 gap-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/50 border border-slate-800/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 shrink-0" />
                      <span className="text-sm text-slate-300 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Specs (if any) */}
              {product.specs && product.specs.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-slate-200 mb-4">Datos Técnicos</h3>
                  <div className="rounded-xl border border-slate-800 overflow-hidden">
                    <table className="w-full text-sm text-left">
                      <tbody className="divide-y divide-slate-800">
                        {product.specs.map((spec, idx) => (
                          <tr key={idx} className="bg-slate-900/30 hover:bg-slate-900/60 transition-colors">
                            <td className="px-4 py-3 font-semibold text-slate-300 w-1/3 bg-slate-900/50 border-r border-slate-800">
                              {spec.label}
                            </td>
                            <td className="px-4 py-3 text-slate-400">
                              {spec.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            {/* Fixed Footer Action Area */}
            <div className="p-6 bg-slate-900 border-t border-slate-800 shrink-0">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    onClose();
                    window.location.href = '#contacto';
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-sky-600 hover:bg-sky-500 shadow-lg shadow-sky-600/20 transition-all active:scale-[0.98]"
                >
                  <span>Pedir Presupuesto de este Equipo</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => {
                    alert("Ficha técnica PDF descargándose...");
                  }}
                  className="sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
                >
                  <Download className="w-4 h-4 text-sky-400" />
                  <span className="sm:hidden lg:inline">Descargar PDF</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
