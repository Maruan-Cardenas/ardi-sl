"use client";
import React from "react";
import { useTranslation } from "@/components/I18nProvider";
import { Wrench, Settings, Clock, ArrowRight } from "lucide-react";

export default function MaintenanceSection() {
  const { lang } = useTranslation();

  const content = {
    es: {
      badge: "Soporte Técnico",
      titleStart: "Servicio de ",
      titleHighlight: "Mantenimiento",
      description: "En ARDI S.L. sabemos que parar la producción no es una opción. Por eso ofrecemos un servicio de asistencia técnica rápido, especializado y directo de fábrica para garantizar que tus equipos operen al máximo rendimiento.",
      cards: [
        {
          icon: <Wrench className="w-6 h-6 text-blue-600" />,
          title: "Mantenimiento Preventivo",
          desc: "Revisiones periódicas para anticipar averías, calibrar componentes y alargar la vida útil de tu maquinaria de acero inoxidable."
        },
        {
          icon: <Clock className="w-6 h-6 text-blue-600" />,
          title: "Reparaciones Ágiles",
          desc: "Asistencia rápida en caso de paradas de línea o fallos críticos. Nuestro equipo de técnicos acude para dar soluciones eficaces."
        },
        {
          icon: <Settings className="w-6 h-6 text-blue-600" />,
          title: "Repuestos Originales",
          desc: "Suministro e instalación de componentes, válvulas y automatismos originales para mantener la máxima compatibilidad y seguridad."
        }
      ],
      btn: "Solicitar Asistencia"
    },
    fr: {
      badge: "Support Technique",
      titleStart: "Service d'",
      titleHighlight: "Entretien",
      description: "Chez ARDI S.L., nous savons que l'arrêt de la production n'est pas une option. C'est pourquoi nous offrons un service d'assistance technique rapide, spécialisé et direct de l'usine pour garantir que vos équipements fonctionnent à plein rendement.",
      cards: [
        {
          icon: <Wrench className="w-6 h-6 text-blue-600" />,
          title: "Entretien Préventif",
          desc: "Des examens périodiques pour anticiper les pannes, calibrer les composants et prolonger la durée de vie de vos machines en acier inoxydable."
        },
        {
          icon: <Clock className="w-6 h-6 text-blue-600" />,
          title: "Réparations Agiles",
          desc: "Assistance rapide en cas d'arrêt de ligne ou de défaillance critique. Notre équipe de techniciens intervient pour apporter des solutions efficaces."
        },
        {
          icon: <Settings className="w-6 h-6 text-blue-600" />,
          title: "Pièces de Rechange Originales",
          desc: "Fourniture et installation de composants, vannes et automatismes originaux pour maintenir la compatibilité et la sécurité maximales."
        }
      ],
      btn: "Demander de l'aide"
    }
  };

  const t = content[lang as keyof typeof content] || content.es;

  return (
    <section id="mantenimiento" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight leading-tight uppercase">
            {t.titleStart}
            <span className="text-blue-700">
              {t.titleHighlight}
            </span>
          </h2>
          <div className="w-16 h-1.5 bg-blue-700 mx-auto mt-6 mb-6"></div>
          <p className="text-base text-gray-600 leading-relaxed font-medium">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {t.cards.map((card, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3 uppercase tracking-wide">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white bg-blue-900 hover:bg-blue-800 shadow-md hover:shadow-lg transition-all duration-200 uppercase tracking-wide"
          >
            <span>{t.btn}</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
