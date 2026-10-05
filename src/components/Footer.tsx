"use client";
import { COMPANY } from "@/data/company";
import { PRODUCTS } from "@/data/products";
import { useTranslation } from "@/components/I18nProvider";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUp, ShieldCheck, ChevronRight } from "lucide-react";

export default function Footer() {
  const { dictionary } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-sky-600 flex items-center justify-center shadow-md">
                <span className="font-mono font-black text-white text-base">A</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-bold tracking-tight text-white">ARDI</span>
                  <span className="text-[10px] font-semibold px-1 py-0.2 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    S.L.
                  </span>
                </div>
                <span className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">
                  {dictionary.components.footer.brandSub}
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Desde 1990 fabricando maquinaria en acero inoxidable AISI 304/316L para queserías y la industria
              agroalimentaria. Ingeniería propia, solidez mecánica y compromiso sanitario.
            </p>

            <div className="pt-2 flex items-center gap-2 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-[11px] font-medium">{dictionary.components.footer.ceMark}</span>
            </div>
          </div>

          {/* Quick links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">{dictionary.components.footer.navTitle}</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-sky-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#productos" className="hover:text-sky-400 transition-colors">
                  Catálogo de Productos
                </a>
              </li>
              <li>
                <a href="#quienes-somos" className="hover:text-sky-400 transition-colors">
                  Quiénes Somos
                </a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-sky-400 transition-colors">
                  Metodología
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-sky-400 transition-colors">
                  Contacto & Ubicación
                </a>
              </li>
            </ul>
          </div>

          {/* Product Lines (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">{dictionary.components.footer.linesTitle}</h4>
            <ul className="space-y-1.5 text-xs">
              {PRODUCTS.map(p => ({...p, ...dictionary.products.find(dp => dp.id === p.id)})).slice(0, 6).map((p) => (
                <li key={p.id}>
                  <a href="#productos" className="hover:text-sky-400 transition-colors flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-slate-600" />
                    <span className="truncate">{p.name.split("(")[0]}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct contact column (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">{dictionary.components.footer.contactTitle}</h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{COMPANY.location.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>
                  <a href={`tel:${COMPANY.contact.phone.replace(/\s+/g, "")}`} className="hover:text-white">
                    {COMPANY.contact.phoneDisplay}
                  </a>{" "}
                  / {COMPANY.contact.phoneMobileDisplay}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${COMPANY.contact.email}`} className="hover:text-white">
                  {COMPANY.contact.email}
                </a>
              </div>
              <div className="text-[11px] text-slate-500 pt-1">
                {COMPANY.contact.schedule}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <span>© {new Date().getFullYear()} ARDI, S.L. {dictionary.components.footer.rights}</span>
            <span className="hidden sm:inline text-slate-700">•</span>
            <a href="#contacto" className="hover:text-slate-300">
              Aviso Legal
            </a>
            <span className="text-slate-700">•</span>
            <a href="#contacto" className="hover:text-slate-300">
              Política de Privacidad
            </a>
            <span className="text-slate-700">•</span>
            <a href="#contacto" className="hover:text-slate-300">
              Política de Cookies
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] text-slate-400 font-mono">
              {dictionary.components.footer.location}
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
              aria-label={dictionary.components.footer.backTop}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
