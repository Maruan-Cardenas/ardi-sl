"use client";
import { COMPANY } from "@/data/company";
import { useTranslation } from "@/components/I18nProvider";

import Image from "next/image";
import { ArrowRight, ShieldCheck, Cog, CheckCircle2, FileText, Sparkles, Factory, Layers } from "lucide-react";

export default function Hero() {
  const { dictionary } = useTranslation();
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-6 pb-20 bg-gray-50">
      {/* Background with Light Industrial Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Instalaciones industriales y calderería de ARDI SL"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Gradients to blend smoothly with gray-50 */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-10/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-10/90 to-gray-50/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Text (8 columns on lg) */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            {/* Location & Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs text-gray-500 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold text-blue-900">{dictionary.components.hero.locationBadge}</span>
              <span className="text-gray-300">•</span>
              <span className="text-blue-600 font-bold">{dictionary.components.hero.sinceBadge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-blue-950 uppercase leading-[1.1] mb-6">
              {dictionary.components.hero.titleStart}
              <span className="text-blue-700">
                {dictionary.components.hero.titleHighlight}
              </span>{" "}
              para Queserías
            </h1>
            
            <div className="w-16 h-1.5 bg-blue-700 mb-6"></div>

            {/* Subtitle / Proposition */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl font-normal leading-relaxed mb-8">
              Especialistas en el diseño, fabricación a medida y montaje de cubas de cuajado, arcones desueradores,
              prensas y líneas automáticas. Calidad certificada en{" "}
              <strong className="text-blue-900 font-bold">{dictionary.components.hero.descHighlight}</strong> para obradores artesanos y
              grandes plantas industriales.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#productos"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white bg-blue-900 hover:bg-blue-800 shadow-md hover:shadow-lg transition-all duration-200 uppercase tracking-wide text-center"
              >
                <span>{dictionary.components.hero.exploreBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-blue-900 bg-white hover:bg-gray-50 border border-gray-200 shadow-sm transition-all duration-200 uppercase tracking-wide text-center"
              >
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>{dictionary.components.hero.quoteBtn}</span>
              </a>
            </div>

            {/* Trust bullet points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4 text-xs sm:text-sm text-gray-600 pt-4 border-t border-gray-200 w-full max-w-2xl">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="font-semibold">{dictionary.components.hero.ceMark}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="font-semibold">{dictionary.components.hero.tigWeld}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span className="font-semibold">{dictionary.components.hero.onSite}</span>
              </div>
            </div>
          </div>

          {/* Right Floating Card / Feature Highlights (4 cols on lg) */}
          <div className="lg:col-span-4 w-full">
            <div className="relative rounded-2xl bg-white border border-gray-200 p-6 shadow-xl shadow-gray-200/50">
              <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-5">
                <div className="flex items-center gap-2">
                  <Factory className="w-5 h-5 text-blue-700" />
                  <span className="text-sm font-extrabold text-blue-950 tracking-wide uppercase">
                    {dictionary.components.hero.prodLines}
                  </span>
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200">
                  {dictionary.components.hero.inProd}
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all">
                  <div className="flex items-center justify-between text-xs font-bold text-blue-950 mb-1">
                    <span className="flex items-center gap-1.5 uppercase">
                      <Cog className="w-3.5 h-3.5 text-blue-600 animate-spin-slow" />
                      {dictionary.components.hero.card1Title}
                    </span>
                    <span className="text-gray-500 font-medium">{dictionary.components.hero.card1Sub}</span>
                  </div>
                  <p className="text-[12px] text-gray-600 leading-tight">
                    {dictionary.components.hero.card1Desc}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all">
                  <div className="flex items-center justify-between text-xs font-bold text-blue-950 mb-1">
                    <span className="flex items-center gap-1.5 uppercase">
                      <Layers className="w-3.5 h-3.5 text-blue-600" />
                      {dictionary.components.hero.card2Title}
                    </span>
                    <span className="text-gray-500 font-medium">{dictionary.components.hero.card2Sub}</span>
                  </div>
                  <p className="text-[12px] text-gray-600 leading-tight">
                    {dictionary.components.hero.card2Desc}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all">
                  <div className="flex items-center justify-between text-xs font-bold text-blue-950 mb-1">
                    <span className="flex items-center gap-1.5 uppercase">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                      {dictionary.components.hero.card3Title}
                    </span>
                    <span className="text-gray-500 font-medium">{dictionary.components.hero.card3Sub}</span>
                  </div>
                  <p className="text-[12px] text-gray-600 leading-tight">
                    {dictionary.components.hero.card3Desc}
                  </p>
                </div>
              </div>

              {/* Callout button in card */}
              <div className="mt-5 pt-4 border-t border-gray-100">
                <a
                  href="#contacto"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-100 transition-all uppercase tracking-wide text-center"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{dictionary.components.hero.adviseBtn}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Global Statistics Counter Row */}
        <div className="mt-16 pt-8 border-t border-gray-200 grid grid-cols-2 md:grid-cols-4 gap-6">
          {COMPANY.stats.map((s, i) => { const ds = dictionary.company.stats; const keys = ["exp", "equip", "steel", "norm"]; const k = keys[i]; return { ...s, label: ((ds as any)[k+"Label"]), subtext: ((ds as any)[k+"Sub"]) }; }).map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white border border-gray-200 shadow-sm"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-bold uppercase tracking-wider text-blue-700">{stat.label}</div>
              <div className="text-xs text-gray-500 mt-1 font-medium">{stat.subtext}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
