"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCatalog from "@/components/ProductCatalog";
import ProductModal from "@/components/ProductModal";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import NotificationToast from "@/components/NotificationToast";
import { Product } from "@/data/products";

export default function Home() {
  const [selectedProductForModal, setSelectedProductForModal] =
    useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleSelectProduct = (product: Product) => {
    setSelectedProductForModal(product);
  };

  const handleShowToast = (msg: string) => {
    setToastMessage(msg);
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Fixed / Sticky Navigation */}
      <Header />

      <main className="flex-1">
        {/* 1. Hero Section: Impact banner & value proposition */}
        <Hero />

        {/* 2. Quiénes Somos: History, 4 Pillars, Workshop and Methodology */}
        <AboutSection />

        {/* 3. Product Catalog: Modern Grid of core machinery lines */}
        <ProductCatalog
          onSelectProduct={handleSelectProduct}
        />

        {/* 4. Contact Section: Direct info cards + interactive form */}
        <ContactSection onSuccessNotification={handleShowToast} />
      </main>

      {/* 5. Footer: Links, legal, address, copyright */}
      <Footer />

      {/* Interactive Product Technical Sheet Modal */}
      <ProductModal
        product={selectedProductForModal}
        onClose={() => setSelectedProductForModal(null)}
      />

      {/* Interactive Toast Notifications */}
      <NotificationToast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
