"use client";
import { useTranslation } from "@/components/I18nProvider";

import { useEffect, useState } from "react";
import { X, CheckCircle2, ChevronRight, Download, Info, ChevronLeft } from "lucide-react";
import { Product } from "@/data/products";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({
  product,
  onClose,
}: ProductModalProps) {
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset image index when product changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [product]);

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

  const images = product.images && product.images.length > 0 ? product.images : [product.image];

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div 
        className="relative flex flex-col w-full max-w-5xl max-h-full bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        
        {/* Close Button Floating */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 text-gray-600 hover:text-gray-900 hover:bg-gray-100 shadow-sm transition-all"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col lg:flex-row h-full overflow-y-auto lg:overflow-hidden">
          
          {/* Left Column: Image Area */}
          <div className="w-full lg:w-1/2 relative bg-gray-100 min-h-[300px] lg:min-h-full group">
            <img
              src={images[currentImageIndex]}
              alt={`Fotografía industrial de ${product.name} - ${currentImageIndex + 1}`}
              className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-300"
            />
            
            {images.length > 1 && (
              <>
                {/* Navigation Arrows */}
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 text-blue-900 hover:bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 text-blue-900 hover:bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Pagination Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(idx);
                      }}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        currentImageIndex === idx ? "bg-blue-600 scale-125" : "bg-white/70 hover:bg-white"
                      }`}
                      aria-label={`Ir a la imagen ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Gradient Overlay for text readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent opacity-90 lg:hidden pointer-events-none" />
          </div>

          {/* Right Column: Content Area */}
          <div className="w-full lg:w-1/2 flex flex-col flex-1 max-h-full bg-white relative">
            
            {/* Scrollable Content Body */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
              
              {/* Header Info */}
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-xs font-bold text-blue-900 uppercase tracking-wider mb-4">
                  <Info className="w-3.5 h-3.5" />
                  Especificaciones Técnicas
                </div>
                <h2 id="modal-title" className="text-3xl font-extrabold text-blue-950 mb-3 uppercase leading-tight">
                  {product.name}
                </h2>
                <div className="w-16 h-1 bg-blue-700 mb-5"></div>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {product.fullDescription}
                </p>
              </div>

              {/* Technical Features */}
              <div>
                <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2 uppercase tracking-wide">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  Características
                </h3>
                <ul className="grid grid-cols-1 gap-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-3 bg-gray-50 border border-gray-100">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0" />
                      <span className="text-sm text-gray-700 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Specs (if any) */}
              {product.specs && product.specs.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-blue-900 mb-4 uppercase tracking-wide">Datos Técnicos</h3>
                  <div className="border border-gray-200 overflow-hidden">
                    <table className="w-full text-sm text-left">
                      <tbody className="divide-y divide-gray-200">
                        {product.specs.map((spec, idx) => (
                          <tr key={idx} className="bg-white hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-3 font-semibold text-gray-800 w-1/3 bg-gray-50 border-r border-gray-200">
                              {spec.label}
                            </td>
                            <td className="px-4 py-3 text-gray-600">
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
            <div className="p-6 bg-gray-50 border-t border-gray-200 shrink-0">
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    onClose();
                    window.location.href = '#contacto';
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 font-bold text-white bg-blue-900 hover:bg-blue-800 transition-all uppercase tracking-wide"
                >
                  <span>Pedir Presupuesto</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
