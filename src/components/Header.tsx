"use client";
import { COMPANY } from "@/data/company";
import { useTranslation } from "@/components/I18nProvider";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Phone, Mail, MapPin, Menu, X, ChevronRight, ShieldCheck } from "lucide-react";

export default function Header() {
  const { dictionary, lang } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleLanguageChange = (newLangCode: string) => {
    if (newLangCode === lang) return;
    const segments = pathname.split('/');
    if (segments.length > 1 && (segments[1] === 'es' || segments[1] === 'fr')) {
      segments[1] = newLangCode;
      router.push(segments.join('/') || '/');
    } else {
      router.push(`/${newLangCode}${pathname}`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: dictionary.common.home, href: "#inicio" },
    { name: dictionary.common.aboutUs, href: "#quienes-somos" },
    { name: dictionary.common.productCatalog, href: "#productos" },
    { name: dictionary.common.contact, href: "#contacto" },
  ];

  const languages = [
    { code: 'es', label: 'ES' },
    { code: 'fr', label: 'FR' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top micro bar for high-end industrial contact data */}
      <div className="bg-slate-950/95 border-b border-slate-800/80 text-xs text-slate-300 py-1.5 px-4 sm:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>{dictionary.components.header.barLoc}</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>{dictionary.components.header.barCe}</span>
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href={`tel:${COMPANY.contact.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 hover:text-sky-400 transition-colors font-medium text-slate-200"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>{COMPANY.contact.phoneDisplay}</span>
            </a>
            <a
              href={`mailto:${COMPANY.contact.email}`}
              className="flex items-center gap-1.5 hover:text-sky-400 transition-colors text-slate-300"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>{COMPANY.contact.email}</span>
            </a>

            {/* Language Switcher */}
            <div className="flex items-center space-x-1 pl-2 border-l border-slate-800">
              {languages.map((lng) => (
                <button
                  key={lng.code}
                  onClick={() => handleLanguageChange(lng.code)}
                  className={`px-1.5 py-0.5 text-[10px] font-semibold rounded transition-colors ${
                    lang === lng.code
                      ? "bg-sky-600 text-white"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                  aria-label={`Cambiar idioma a ${lng.label}`}
                >
                  {lng.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-slate-950/90 backdrop-blur-md shadow-xl shadow-black/30 border-b border-slate-800/80 py-3"
            : "bg-slate-950/75 backdrop-blur-sm border-b border-slate-800/50 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href="#inicio" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg p-1">
            <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-sky-500 via-sky-600 to-slate-800 p-0.5 shadow-md shadow-sky-900/30">
              <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
                <span className="font-mono font-black text-sky-400 text-lg tracking-wider group-hover:scale-110 transition-transform">
                  A
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-sky-400 transition-colors">
                  ARDI
                </span>
                <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  S.L.
                </span>
              </div>
              <span className="text-[10px] tracking-widest uppercase font-medium text-slate-400">
                {dictionary.components.header.brandSub}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-md transition-all duration-150"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 shadow-md shadow-sky-600/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{dictionary.components.header.btnQuote}</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden px-4 pt-3 pb-6 border-t border-slate-800/80 bg-slate-950/95 backdrop-blur-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800/80 hover:text-sky-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-col gap-3">
              <a
                href="#contacto"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 shadow-md shadow-sky-600/30"
              >
                <span>{dictionary.components.header.btnQuote}</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400">
                <a
                  href={`tel:${COMPANY.contact.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2 py-1 text-slate-300 hover:text-sky-400"
                >
                  <Phone className="w-4 h-4 text-sky-400" />
                  <span>{COMPANY.contact.phoneDisplay} / {COMPANY.contact.phoneMobileDisplay}</span>
                </a>
                <a
                  href={`mailto:${COMPANY.contact.email}`}
                  className="flex items-center gap-2 py-1 text-slate-300 hover:text-sky-400"
                >
                  <Mail className="w-4 h-4 text-sky-400" />
                  <span>{COMPANY.contact.email}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
