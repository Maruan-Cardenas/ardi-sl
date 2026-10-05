"use client";
import { PRODUCTS } from "@/data/products";
import { useTranslation } from "@/components/I18nProvider";

import { useState } from "react";
import Image from "next/image";
import { Filter, Eye, Settings2, CheckCircle2, ChevronRight, FileText } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCatalogProps {
  onSelectProduct: (product: Product) => void;
}

export default function ProductCatalog({
  onSelectProduct,
}: ProductCatalogProps) {
  const { dictionary } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>("TODOS");

  const localizedProducts = PRODUCTS.map(p => ({...p, ...dictionary.products.find(dp => dp.id === p.id)}));
  const filteredProducts = activeCategory === "Todos" 
    ? localizedProducts 
    : localizedProducts.filter(p => p.category === activeCategory);

  return (
    <section id="productos" className="relative py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            {dictionary.components.catalog.titleStart}<span className="text-sky-400">{dictionary.components.catalog.titleHighlight}</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Equipos fabricados a medida en acero inoxidable AISI 304/316L, diseñados
            para maximizar el rendimiento y garantizar la máxima higiene en el sector lácteo.
          </p>
        </div>

        {/* Categories / Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800">
          <div className="flex items-center gap-2 text-slate-300">
            <Filter className="w-5 h-5 text-sky-400" />
            <span className="font-semibold text-sm tracking-wider uppercase">{dictionary.components.catalog.filterLbl}</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveCategory("TODOS")}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === "TODOS"
                  ? "bg-sky-600 text-white shadow-md shadow-sky-600/30"
                  : "bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800"
              }`}
            >
              {dictionary.components.catalog.filterAll}
            </button>
            
            {Object.entries(dictionary.productCategories).map(([k,v])=>({id: k === "elaboracion" ? "Elaboración" : k === "prensadoDesuerado" ? "Prensado & Desuerado" : k === "lavadoSanidad" ? "Lavado & Sanidad" : k === "automatizacion" ? "Automatización" : "Calderería & Suministros", label: v})).map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-sky-600 text-white shadow-md shadow-sky-600/30"
                    : "bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group relative flex flex-col bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:shadow-black/50"
            >
              {/* Product Image Area */}
              <div className="relative aspect-[4/3] w-full bg-slate-800 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                
                {/* Overlay Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-xs font-semibold text-white">
                    <Settings2 className="w-3.5 h-3.5 text-sky-400" />
                    {dictionary.components.catalog.badgeCustom}
                  </span>
                </div>
              </div>

              {/* Product Content Area */}
              <div className="flex flex-col flex-1 p-6">
                <div className="mb-4 flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-slate-400 line-clamp-3">
                    {product.shortDescription}
                  </p>
                </div>

                {/* Key Features Quick List */}
                <ul className="space-y-1.5 mb-6 text-sm text-slate-300">
                  {product.features.slice(0, 2).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Card Actions */}
                <div className="flex items-center gap-3 mt-auto pt-5 border-t border-slate-800/80">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                  >
                    <Eye className="w-4 h-4 text-sky-400" />
                    <span>{dictionary.components.catalog.btnView}</span>
                  </button>
                  <a
                    href="#contacto"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 shadow-md shadow-sky-600/20 transition-colors"
                  >
                    <span>{dictionary.components.catalog.btnQuote}</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Global Catalog Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 to-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-black/40">
          <div>
            <h4 className="text-xl font-bold text-white mb-2">
              {dictionary.components.catalog.ctaTitle}
            </h4>
            <p className="text-slate-400 text-sm max-w-xl">
              {dictionary.components.catalog.ctaDesc}
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <a
              href="#contacto"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-slate-500 transition-all"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>{dictionary.components.catalog.ctaBtn}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
