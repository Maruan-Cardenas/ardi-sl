"use client";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/data/products";
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

  const localizedProducts = PRODUCTS.map(p => {
    const trans = dictionary.products ? dictionary.products.find((dp: any) => dp.id === p.id) : undefined;
    return {...p, ...trans};
  });
  
  const filteredProducts = activeCategory === "TODOS" 
    ? localizedProducts 
    : localizedProducts.filter(p => p.category === activeCategory);

  return (
    <section id="productos" className="relative py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 uppercase tracking-tight mb-4">
            {dictionary.components.catalog.titleStart}<span className="text-blue-700">{dictionary.components.catalog.titleHighlight}</span>
          </h2>
          <div className="w-24 h-1.5 bg-blue-700 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Equipos fabricados a medida en acero inoxidable AISI 304/316L, diseñados
            para maximizar el rendimiento y garantizar la máxima higiene en el sector lácteo.
          </p>
        </div>

        {/* Categories / Filter Bar */}
        <div className="flex flex-col items-center mb-12 space-y-5">
          <div className="flex items-center gap-2 text-gray-500">
            <Filter className="w-4 h-4 text-blue-700" />
            <span className="font-semibold text-xs tracking-[0.2em] uppercase">{dictionary.components.catalog.filterLbl}</span>
          </div>
          
          <div className="w-full relative group">
            {/* Gradient masks for smooth scrolling edges on mobile */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none md:hidden" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none md:hidden" />
            
            <div className="flex overflow-x-auto justify-start md:justify-center scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-2 -mb-2">
              <div className="flex items-center gap-2 px-4 md:px-0 mx-auto w-max bg-white p-2 rounded-xl border border-gray-200 shadow-sm">
                
                <button
                  onClick={() => setActiveCategory("TODOS")}
                  className={`relative px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-blue-500 uppercase tracking-wide ${
                    activeCategory === "TODOS"
                      ? "text-white bg-blue-900 shadow-md"
                      : "text-gray-600 hover:text-blue-900 hover:bg-gray-100"
                  }`}
                >
                  {dictionary.components.catalog.filterAll}
                </button>
                
                {PRODUCT_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`relative px-5 py-2.5 rounded-lg text-sm font-bold transition-all duration-300 whitespace-nowrap outline-none focus-visible:ring-2 focus-visible:ring-blue-500 uppercase tracking-wide ${
                      activeCategory === cat.id
                        ? "text-white bg-blue-900 shadow-md"
                        : "text-gray-600 hover:text-blue-900 hover:bg-gray-100"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group relative flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Product Image Area */}
              <div className="relative aspect-[4/3] w-full bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-900 text-white text-xs font-bold uppercase tracking-wider shadow-sm">
                    <Settings2 className="w-3.5 h-3.5" />
                    {dictionary.components.catalog.badgeCustom}
                  </span>
                </div>
              </div>

              {/* Product Content Area */}
              <div className="flex flex-col flex-1 p-6">
                <div className="mb-4 flex-1">
                  <h3 className="text-lg font-bold text-blue-950 mb-3 group-hover:text-blue-700 transition-colors uppercase leading-snug">
                    {product.name}
                  </h3>
                  <div className="w-12 h-0.5 bg-blue-700 mb-4 transition-all duration-300 group-hover:w-full"></div>
                  <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                    {product.shortDescription}
                  </p>
                </div>

                {/* Card Actions */}
                <div className="flex items-center mt-auto pt-6 border-t border-gray-100">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-blue-900 bg-blue-50 hover:bg-blue-900 hover:text-white transition-colors uppercase tracking-wide group/btn"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Más información</span>
                    <ChevronRight className="w-4 h-4 opacity-0 -ml-2 group-hover/btn:opacity-100 group-hover/btn:ml-0 transition-all" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
