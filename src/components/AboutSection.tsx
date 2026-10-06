"use client";
import React from "react";
import { COMPANY } from "@/data/company";
import { useTranslation } from "@/components/I18nProvider";

import Image from "next/image";
import { Wrench, Cpu, ShieldCheck, Truck, CheckCircle2, Award, History, Layers } from "lucide-react";

export default function AboutSection() {
  const { dictionary } = useTranslation();
  const iconMap: Record<string, React.ReactNode> = {
    Wrench: <Wrench className="w-6 h-6 text-blue-600" />,
    Cpu: <Cpu className="w-6 h-6 text-blue-600" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    Truck: <Truck className="w-6 h-6 text-blue-600" />,
  };

  return (
    <section id="quienes-somos" className="py-24 bg-white relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Split: Story and Taller photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
              <History className="w-3.5 h-3.5" />
              <span>{dictionary.components.about.historyBadge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight leading-tight uppercase">
              {dictionary.components.about.titleStart}
              <span className="text-blue-700">
                {dictionary.components.about.titleHighlight}
              </span>
            </h2>
            <div className="w-16 h-1.5 bg-blue-700 mb-2"></div>

            <p className="text-base text-gray-600 leading-relaxed font-medium">
              Fundada en 1990 en el <strong>{dictionary.components.about.desc1Highlight1}</strong>{dictionary.components.about.desc1Mid}
              <span className="text-blue-900 font-bold">{dictionary.components.about.desc1Highlight2}</span> nos hemos consolidado como referente en el
              diseño y fabricación integral de maquinaria en acero inoxidable para la industria láctea, quesera y
              alimentaria.
            </p>

            <p className="text-sm text-gray-500 leading-relaxed">
              Nuestro valor diferencial reside en el dominio exhaustivo de la calderería fina y la soldadura sanitaria
              TIG con purga de argón interior. No somos meros distribuidores: construimos cada cuba, cada arcón desuerador
              y cada línea de prensado a partir de chapa y perfiles de aceros nobles AISI 304 y 316L, dotando a cada equipo
              de robustez mecánica y acabados sanitarios impecables sin recovecos.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 text-blue-950 font-bold text-sm mb-1 uppercase tracking-wide">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span>{dictionary.components.about.ceTitle}</span>
                </div>
                <p className="text-xs text-gray-500">
                  {dictionary.components.about.ceDesc}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 text-blue-950 font-bold text-sm mb-1 uppercase tracking-wide">
                  <Layers className="w-4 h-4 text-blue-600" />
                  <span>{dictionary.components.about.steelTitle}</span>
                </div>
                <p className="text-xs text-gray-500">
                  {dictionary.components.about.steelDesc}
                </p>
              </div>
            </div>
          </div>

          {/* Right Image & Workshop showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gray-100 border border-gray-200 shadow-xl shadow-gray-200/50">
              <Image
                src="/images/taller-soldadura.jpg"
                alt="Taller de calderería de {dictionary.components.about.desc1Highlight2} en Oiartzun"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center filter brightness-[0.95]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-sm border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-blue-950 uppercase tracking-wide">{dictionary.components.about.imgTitle}</h4>
                    <p className="text-xs text-gray-500 font-medium">{dictionary.components.about.imgSub}</p>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 uppercase">
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
            <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-950 tracking-tight uppercase">
              {dictionary.components.about.pillarsTitle}
            </h3>
            <div className="w-16 h-1 bg-blue-700 mx-auto mt-4 mb-4"></div>
            <p className="text-sm text-gray-600 font-medium">
              {dictionary.components.about.pillarsDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY.pillars.map((p, i) => ({ ...p, ...dictionary.company.pillars[i] })).map((pillar) => (
              <div
                key={pillar.id}
                className="p-6 rounded-2xl bg-gray-50 hover:bg-white border border-gray-200 hover:border-blue-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-blue-200 transition-all shadow-sm">
                    {iconMap[pillar.icon]}
                  </div>
                  <h4 className="text-lg font-bold text-blue-950 mb-3 group-hover:text-blue-700 transition-colors uppercase tracking-wide">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Methodology / Process Steps */}
        <div id="metodologia" className="pt-12 border-t border-gray-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
              <span>{dictionary.components.about.methodBadge}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-950 tracking-tight uppercase">
              {dictionary.components.about.methodTitle}
            </h3>
            <p className="mt-4 text-sm text-gray-600 font-medium">
              {dictionary.components.about.methodDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY.processSteps.map((p, i) => ({ ...p, ...dictionary.company.processSteps[i] })).map((step) => (
              <div
                key={step.step}
                className="relative p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-5xl font-black text-gray-100 mb-2">
                  {step.step}
                </div>
                <h4 className="text-base font-bold text-blue-950 mb-2 uppercase tracking-wide">{step.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
