import React from 'react';
import { 
  ArrowUp, 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare 
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { CATEGORIES } from '../data/products';
import { CategoryId } from '../types';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectCategory: (categoryId: CategoryId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectCategory }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-slate-400 border-t border-navy-800 text-xs">
      
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Brand & Industrial Descriptor (Col span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={scrollToTop}>
              <div className="w-9 h-9 bg-accent-500 rounded flex items-center justify-center text-white font-black text-lg">
                ME
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-wider text-xl text-white uppercase font-sans">
                  Mubarak <span className="text-accent-500">Enterprises</span>
                </span>
                <span className="text-[10px] tracking-wider uppercase text-slate-400 font-mono">
                  Coimbatore, Tamil Nadu
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              Direct industrial supplier of power tools, hand tools, inverter welders, cutting abrasives, safety gear, and heavy workshop equipment for engineering workshops and manufacturing units.
            </p>

            <div className="pt-2">
              <button
                onClick={() => openWhatsAppEnquiry({ notes: "Footer quick enquiry" })}
                className="inline-flex items-center px-4 py-2 rounded bg-navy-800 hover:bg-navy-700 text-white font-mono text-xs border border-navy-700 hover:border-accent-500 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 mr-2 text-accent-500" />
                <span>Direct WhatsApp: +{BUSINESS_CONFIG.whatsappNumber}</span>
              </button>
            </div>
          </div>

          {/* Column 2: Navigation Links (Col span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold font-mono text-xs uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-accent-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('categories')}
                  className="hover:text-accent-400 transition-colors"
                >
                  Product Categories
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalogue')}
                  className="hover:text-accent-400 transition-colors"
                >
                  Catalogue & Filters
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-accent-400 transition-colors"
                >
                  About Mubarak Enterprises
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Support (Col span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold font-mono text-xs uppercase tracking-wider">
              Customer Support
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('faq');
                  }}
                  className="hover:text-accent-400 focus:text-accent-400 transition-colors inline-block focus:outline-none focus-visible:text-accent-400 focus-visible:underline"
                >
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-accent-400 transition-colors"
                >
                  Contact & Location
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('reviews')}
                  className="hover:text-accent-400 transition-colors"
                >
                  Customer Feedback
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Equipment Categories (Col span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold font-mono text-xs uppercase tracking-wider">
              Product Categories
            </h4>
            <ul className="space-y-2">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      onSelectCategory(cat.id);
                      onNavigate('catalogue');
                    }}
                    className="hover:text-accent-400 transition-colors text-left flex items-center justify-between w-full"
                  >
                    <span>{cat.name}</span>
                    <span className="font-mono text-[10px] text-slate-500">→</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact & Location Info (Col span 3, md:col-span-2 on tablet) */}
          <div className="md:col-span-2 lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold font-mono text-xs uppercase tracking-wider">
              Coimbatore Supply Base
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-accent-500 mt-0.5 flex-shrink-0" />
                <div>
                  <span>{BUSINESS_CONFIG.addressDisplay}</span>
                  <span className="block text-[10px] text-slate-500 font-mono mt-0.5">
                    {BUSINESS_CONFIG.addressDisclaimer}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-accent-500 flex-shrink-0" />
                <a href={`tel:${BUSINESS_CONFIG.phoneRaw}`} className="text-white hover:text-accent-400 font-mono">
                  {BUSINESS_CONFIG.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-accent-500 flex-shrink-0" />
                <a href={`mailto:${BUSINESS_CONFIG.email}`} className="text-slate-300 hover:text-accent-400 font-mono truncate">
                  {BUSINESS_CONFIG.email}
                </a>
              </div>
              <div className="pt-2 text-[11px] font-mono text-slate-500">
                Operating: {BUSINESS_CONFIG.workingHours.weekdays}
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Legal / Copyright Bar */}
      <div className="border-t border-navy-900 bg-navy-950 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Mubarak Enterprises. Industrial Tools & Equipment Supplier. Coimbatore, Tamil Nadu.
          </div>

          <div className="flex items-center space-x-4">
            <span className="font-mono text-slate-400">Serving Coimbatore & Tamil Nadu Industries</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white transition-colors flex items-center space-x-1"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-accent-500" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
};
