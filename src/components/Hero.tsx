"use client";
import { COMPANY } from "@/data/company";
import { useTranslation } from "@/components/I18nProvider";

import Image from "next/image";
import { ArrowRight, ShieldCheck, Cog, CheckCircle2, FileText, Sparkles, Factory, Layers } from "lucide-react";

export default function Hero() {
  const { dictionary } = useTranslation();
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-6 pb-20">
      {/* Background with Dark Industrial Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-industrial.jpg"
          alt="Instalaciones industriales y calderería de ARDI SL"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 filter brightness-[0.25] contrast-[1.15]"
        />
        {/* Gradients to blend smoothly with slate-950 */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-sky-500/10 blur-[140px] pointer-events-none rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Text (8 columns on lg) */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            {/* Location & Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs text-slate-300 mb-6 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-white">{dictionary.components.hero.locationBadge}</span>
              <span className="text-slate-500">•</span>
              <span className="text-sky-400">{dictionary.components.hero.sinceBadge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              {dictionary.components.hero.titleStart}
              <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
                {dictionary.components.hero.titleHighlight}
              </span>{" "}
              para Queserías
            </h1>

            {/* Subtitle / Proposition */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-8">
              Especialistas en el diseño, fabricación a medida y montaje de cubas de cuajado, arcones desueradores,
              prensas y líneas automáticas. Calidad certificada en{" "}
              <strong className="text-white font-semibold">{dictionary.components.hero.descHighlight}</strong> para obradores artesanos y
              grandes plantas industriales.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#productos"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-sky-600 hover:bg-sky-500 shadow-lg shadow-sky-600/30 transition-all duration-200 hover:translate-y-[-1px] active:translate-y-[0px] text-center"
              >
                <span>{dictionary.components.hero.exploreBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-500 shadow-md backdrop-blur-md transition-all duration-200 text-center"
              >
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span>{dictionary.components.hero.quoteBtn}</span>
              </a>
            </div>

            {/* Trust bullet points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-300 pt-4 border-t border-slate-800/80 w-full max-w-2xl">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{dictionary.components.hero.ceMark}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{dictionary.components.hero.tigWeld}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{dictionary.components.hero.onSite}</span>
              </div>
            </div>
          </div>

          {/* Right Floating Card / Feature Highlights (4 cols on lg) */}
          <div className="lg:col-span-4 w-full">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-slate-800 p-6 backdrop-blur-xl shadow-2xl shadow-black/60">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                <div className="flex items-center gap-2">
                  <Factory className="w-5 h-5 text-sky-400" />
                  <span className="text-sm font-bold text-white tracking-wide uppercase">
                    {dictionary.components.hero.prodLines}
                  </span>
                </div>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {dictionary.components.hero.inProd}
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
                  <div className="flex items-center justify-between text-xs font-semibold text-white mb-1">
                    <span className="flex items-center gap-1.5 text-sky-300">
                      <Cog className="w-3.5 h-3.5 text-sky-400 animate-spin-slow" />
                      {dictionary.components.hero.card1Title}
                    </span>
                    <span className="text-slate-400">{dictionary.components.hero.card1Sub}</span>
                  </div>
                  <p className="text-[12px] text-slate-400 leading-tight">
                    {dictionary.components.hero.card1Desc}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
                  <div className="flex items-center justify-between text-xs font-semibold text-white mb-1">
                    <span className="flex items-center gap-1.5 text-sky-300">
                      <Layers className="w-3.5 h-3.5 text-sky-400" />
                      {dictionary.components.hero.card2Title}
                    </span>
                    <span className="text-slate-400">{dictionary.components.hero.card2Sub}</span>
                  </div>
                  <p className="text-[12px] text-slate-400 leading-tight">
                    {dictionary.components.hero.card2Desc}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
                  <div className="flex items-center justify-between text-xs font-semibold text-white mb-1">
                    <span className="flex items-center gap-1.5 text-sky-300">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      {dictionary.components.hero.card3Title}
                    </span>
                    <span className="text-slate-400">{dictionary.components.hero.card3Sub}</span>
                  </div>
                  <p className="text-[12px] text-slate-400 leading-tight">
                    {dictionary.components.hero.card3Desc}
                  </p>
                </div>
              </div>

              {/* Callout button in card */}
              <div className="mt-5 pt-4 border-t border-slate-800">
                <a
                  href="#contacto"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-sky-300 bg-sky-950/40 hover:bg-sky-900/40 border border-sky-800/50 hover:border-sky-600 transition-all text-center"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{dictionary.components.hero.adviseBtn}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Global Statistics Counter Row */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          {COMPANY.stats.map((s, i) => { const ds = dictionary.company.stats; const keys = ["exp", "equip", "steel", "norm"]; const k = keys[i]; return { ...s, label: ((ds as any)[k+"Label"]), subtext: ((ds as any)[k+"Sub"]) }; }).map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm"
            >
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-1 bg-gradient-to-r from-white to-slate-300 bg-clip-text">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-sky-400">{stat.label}</div>
              <div className="text-xs text-slate-400 mt-0.5">{stat.subtext}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
