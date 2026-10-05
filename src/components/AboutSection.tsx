"use client";
import { COMPANY } from "@/data/company";
import { useTranslation } from "@/components/I18nProvider";

import Image from "next/image";
import { Wrench, Cpu, ShieldCheck, Truck, CheckCircle2, Award, History, Layers } from "lucide-react";

export default function AboutSection() {
  const { dictionary } = useTranslation();
  const iconMap: Record<string, React.ReactNode> = {
    Wrench: <Wrench className="w-6 h-6 text-sky-400" />,
    Cpu: <Cpu className="w-6 h-6 text-sky-400" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-sky-400" />,
    Truck: <Truck className="w-6 h-6 text-sky-400" />,
  };

  return (
    <section id="quienes-somos" className="py-24 bg-slate-950/60 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Split: Story and Taller photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider">
              <History className="w-3.5 h-3.5" />
              <span>{dictionary.components.about.historyBadge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {dictionary.components.about.titleStart}
              <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
                {dictionary.components.about.titleHighlight}
              </span>
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Fundada en 1990 en el <strong>{dictionary.components.about.desc1Highlight1}</strong>{dictionary.components.about.desc1Mid}
              <span className="text-white font-semibold">{dictionary.components.about.desc1Highlight2}</span> nos hemos consolidado como referente en el
              diseño y fabricación integral de maquinaria en acero inoxidable para la industria láctea, quesera y
              alimentaria.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              Nuestro valor diferencial reside en el dominio exhaustivo de la calderería fina y la soldadura sanitaria
              TIG con purga de argón interior. No somos meros distribuidores: construimos cada cuba, cada arcón desuerador
              y cada línea de prensado a partir de chapa y perfiles de aceros nobles AISI 304 y 316L, dotando a cada equipo
              de robustez mecánica y acabados sanitarios impecables sin recovecos.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <div className="flex items-center gap-2 text-white font-bold text-sm mb-1">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>{dictionary.components.about.ceTitle}</span>
                </div>
                <p className="text-xs text-slate-400">
                  {dictionary.components.about.ceDesc}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <div className="flex items-center gap-2 text-white font-bold text-sm mb-1">
                  <Layers className="w-4 h-4 text-sky-400" />
                  <span>{dictionary.components.about.steelTitle}</span>
                </div>
                <p className="text-xs text-slate-400">
                  {dictionary.components.about.steelDesc}
                </p>
              </div>
            </div>
          </div>

          {/* Right Image & Workshop showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-900 border border-slate-700/80 shadow-2xl">
              <Image
                src="/images/taller-soldadura.jpg"
                alt="Taller de calderería de {dictionary.components.about.desc1Highlight2} en Oiartzun"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center filter brightness-90 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">{dictionary.components.about.imgTitle}</h4>
                    <p className="text-xs text-slate-400">{dictionary.components.about.imgSub}</p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-sky-500/20 text-sky-400 border border-sky-500/30">
                    {dictionary.components.about.imgBadge}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Excellence */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {dictionary.components.about.pillarsTitle}
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              {dictionary.components.about.pillarsDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY.pillars.map((p, i) => ({ ...p, ...dictionary.company.pillars[i] })).map((pillar) => (
              <div
                key={pillar.id}
                className="p-6 rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-sky-950/60 border border-sky-800/60 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    {iconMap[pillar.icon]}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology / Process Steps */}
        <div id="metodologia" className="pt-12 border-t border-slate-800/80">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <span>{dictionary.components.about.methodBadge}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {dictionary.components.about.methodTitle}
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              {dictionary.components.about.methodDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY.processSteps.map((p, i) => ({ ...p, ...dictionary.company.processSteps[i] })).map((step) => (
              <div
                key={step.step}
                className="relative p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80"
              >
                <div className="text-4xl font-black text-sky-500/20 font-mono mb-2">
                  {step.step}
                </div>
                <h4 className="text-base font-bold text-white mb-2">{step.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
