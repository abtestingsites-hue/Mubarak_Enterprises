import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryShowcase } from './components/CategoryShowcase';
import { Catalogue } from './components/Catalogue';
import { BulkEnquiryBanner } from './components/BulkEnquiryBanner';
import { AboutSection } from './components/AboutSection';
import { CustomerReviewsSection } from './components/CustomerReviewsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CategoryId, Product } from './types';
import { MessageSquare } from 'lucide-react';
import { openWhatsAppEnquiry } from './utils/whatsapp';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId | 'all'>('all');
  const [activeProductModal, setActiveProductModal] = useState<Product | null>(null);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (categoryId: CategoryId) => {
    setSelectedCategory(categoryId);
    const catalogueEl = document.getElementById('catalogue');
    if (catalogueEl) {
      catalogueEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFloatingWhatsApp = () => {
    openWhatsAppEnquiry({
      notes: "Quick inquiry via floating WhatsApp button"
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-industrial-dark">

      {/* Global Header */}
      <Header 
        onNavigate={handleNavigate} 
        activeSection={activeSection} 
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Homepage Hero */}
        <div id="hero">
          <Hero 
            onExploreClick={() => handleNavigate('catalogue')}
            onEnquireClick={() => handleNavigate('contact')}
          />
        </div>

        {/* Core Product Categories */}
        <CategoryShowcase 
          onSelectCategory={handleCategorySelect} 
        />

        {/* Interactive Product & Equipment Catalogue */}
        <Catalogue 
          initialCategory={selectedCategory}
          onViewProductDetails={(product) => setActiveProductModal(product)}
        />

        {/* Industrial RFQ & Bulk Supply Banner */}
        <BulkEnquiryBanner />

        {/* About Mubarak Enterprises */}
        <AboutSection />

        {/* Customer Reviews & Feedback */}
        <CustomerReviewsSection />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Contact & Location (Coimbatore) */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer 
        onNavigate={handleNavigate}
        onSelectCategory={handleCategorySelect}
      />

      {/* Dedicated Product Details & Quote Specification Modal */}
      <ProductDetailModal 
        product={activeProductModal}
        onClose={() => setActiveProductModal(null)}
      />

      {/* Floating Action Button for WhatsApp Enquiry */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          onClick={handleFloatingWhatsApp}
          className="flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-elevated transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
          aria-label="Contact Mubarak Enterprises on WhatsApp"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="text-xs font-bold hidden sm:inline">WhatsApp Enquiry</span>
        </button>
      </div>
    </div>
  );
};

export default App;

