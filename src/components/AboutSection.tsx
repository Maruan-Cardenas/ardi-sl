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
                src="/images/about.jpg"
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
      </div>
    </section>
  );
}
