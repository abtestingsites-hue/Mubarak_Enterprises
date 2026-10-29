import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Menu, 
  X, 
  MapPin, 
  Clock, 
  ChevronRight
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      onNavigate(sectionId);
    }, 50);
  };

  const handleWhatsAppClick = () => {
    openWhatsAppEnquiry({
      notes: "General enquiry from website header"
    });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Industrial Announcement Bar */}
      <div className="bg-navy-950 text-slate-300 text-xs border-b border-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-slate-300">
              <MapPin className="w-3.5 h-3.5 mr-1.5 text-accent-500 flex-shrink-0" />
              <span>{BUSINESS_CONFIG.city}, {BUSINESS_CONFIG.state}</span>
            </span>
            <span className="hidden md:inline text-navy-700">|</span>
            <span className="hidden md:flex items-center text-slate-300">
              <Clock className="w-3.5 h-3.5 mr-1.5 text-accent-500 flex-shrink-0" />
              <span>Mon–Sat: 9:00 AM – 7:30 PM</span>
            </span>
          </div>

          <div className="flex items-center space-x-4 text-xs">
            <span className="hidden sm:inline text-slate-400 font-mono">
              Wholesale & Bulk Trade Enquiries
            </span>
            <a 
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="hover:text-accent-400 transition-colors flex items-center font-medium text-white"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-accent-500" />
              <span>{BUSINESS_CONFIG.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`bg-white border-b border-industrial-border transition-shadow duration-200 ${
        isScrolled ? 'shadow-elevated' : 'shadow-subtle'
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Typographic Wordmark & Descriptor */}
            <div 
              onClick={() => handleNavClick('hero')} 
              className="cursor-pointer group flex items-center space-x-2.5 sm:space-x-3 min-w-0 mr-2"
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 bg-accent-500 rounded flex items-center justify-center text-white font-extrabold text-base sm:text-xl shadow-subtle group-hover:bg-accent-600 transition-colors flex-shrink-0">
                ME
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-extrabold tracking-tight sm:tracking-wider text-sm sm:text-xl lg:text-2xl text-navy-950 font-sans uppercase truncate">
                  Mubarak <span className="text-accent-500">Enterprises</span>
                </span>
                <span className="text-[9px] sm:text-xs tracking-wider uppercase text-industrial-muted font-medium font-mono truncate max-w-[140px] sm:max-w-none">
                  Industrial Tools & Supplies
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              <button
                onClick={() => handleNavClick('hero')}
                className={`px-3.5 py-2 text-sm font-semibold rounded transition-colors ${
                  activeSection === 'hero' 
                    ? 'text-accent-600 bg-accent-50 font-bold' 
                    : 'text-slate-700 hover:text-navy-950 hover:bg-slate-100/70'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('categories')}
                className={`px-3.5 py-2 text-sm font-semibold rounded transition-colors ${
                  activeSection === 'categories' 
                    ? 'text-accent-600 bg-accent-50 font-bold' 
                    : 'text-slate-700 hover:text-navy-950 hover:bg-slate-100/70'
                }`}
              >
                Categories
              </button>
              <button
                onClick={() => handleNavClick('catalogue')}
                className={`px-3.5 py-2 text-sm font-semibold rounded transition-colors ${
                  activeSection === 'catalogue' 
                    ? 'text-accent-600 bg-accent-50 font-bold' 
                    : 'text-slate-700 hover:text-navy-950 hover:bg-slate-100/70'
                }`}
              >
                Catalogue
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className={`px-3.5 py-2 text-sm font-semibold rounded transition-colors ${
                  activeSection === 'about' 
                    ? 'text-accent-600 bg-accent-50 font-bold' 
                    : 'text-slate-700 hover:text-navy-950 hover:bg-slate-100/70'
                }`}
              >
                About
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className={`px-3.5 py-2 text-sm font-semibold rounded transition-colors ${
                  activeSection === 'contact' 
                    ? 'text-accent-600 bg-accent-50 font-bold' 
                    : 'text-slate-700 hover:text-navy-950 hover:bg-slate-100/70'
                }`}
              >
                Contact & Location
              </button>
            </nav>

            {/* Desktop Quick Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center px-4 py-2.5 rounded font-bold text-sm bg-accent-500 hover:bg-accent-600 text-white shadow-subtle transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                <span>Request a Quote</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center lg:hidden space-x-1.5 sm:space-x-2 flex-shrink-0">
              <button
                onClick={handleWhatsAppClick}
                className="p-1.5 sm:p-2 text-accent-600 hover:text-white bg-accent-50 hover:bg-accent-500 border border-accent-200 rounded transition-colors focus:outline-none"
                aria-label="WhatsApp Quick Enquiry"
              >
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 sm:p-2.5 text-navy-900 hover:text-navy-950 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded focus:outline-none focus:ring-2 focus:ring-accent-500"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer Backdrop & Menu */}
        {mobileMenuOpen && (
          <>
            <div 
              className="fixed inset-0 bg-navy-950/60 backdrop-blur-xs z-30 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <div className="relative z-40 lg:hidden bg-white border-t border-industrial-border px-4 pt-3 pb-6 space-y-1.5 shadow-2xl">
            <button
              onClick={() => handleNavClick('hero')}
              className={`w-full text-left px-4 py-3 rounded text-sm font-medium flex items-center justify-between transition-colors ${
                activeSection === 'hero' 
                  ? 'bg-accent-50 text-accent-600 font-bold border-l-4 border-accent-500' 
                  : 'text-slate-700 hover:bg-slate-50 hover:text-navy-950'
              }`}
            >
              <span>Home</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => handleNavClick('categories')}
              className={`w-full text-left px-4 py-3 rounded text-sm font-medium flex items-center justify-between transition-colors ${
                activeSection === 'categories' 
                  ? 'bg-accent-50 text-accent-600 font-bold border-l-4 border-accent-500' 
                  : 'text-slate-700 hover:bg-slate-50 hover:text-navy-950'
              }`}
            >
              <span>Categories</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => handleNavClick('catalogue')}
              className={`w-full text-left px-4 py-3 rounded text-sm font-medium flex items-center justify-between transition-colors ${
                activeSection === 'catalogue' 
                  ? 'bg-accent-50 text-accent-600 font-bold border-l-4 border-accent-500' 
                  : 'text-slate-700 hover:bg-slate-50 hover:text-navy-950'
              }`}
            >
              <span>Catalogue</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`w-full text-left px-4 py-3 rounded text-sm font-medium flex items-center justify-between transition-colors ${
                activeSection === 'about' 
                  ? 'bg-accent-50 text-accent-600 font-bold border-l-4 border-accent-500' 
                  : 'text-slate-700 hover:bg-slate-50 hover:text-navy-950'
              }`}
            >
              <span>About</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`w-full text-left px-4 py-3 rounded text-sm font-medium flex items-center justify-between transition-colors ${
                activeSection === 'contact' 
                  ? 'bg-accent-50 text-accent-600 font-bold border-l-4 border-accent-500' 
                  : 'text-slate-700 hover:bg-slate-50 hover:text-navy-950'
              }`}
            >
              <span>Contact & Location</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>

            <div className="pt-4 border-t border-industrial-border space-y-3">
              <button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center px-4 py-3 rounded bg-accent-500 text-white font-bold text-sm shadow-subtle hover:bg-accent-600 transition-colors"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                <span>Instant WhatsApp Quote</span>
              </button>
              <a
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                className="w-full flex items-center justify-center px-4 py-2.5 rounded bg-slate-100 text-navy-900 font-semibold text-sm border border-slate-200 hover:bg-slate-200 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2 text-accent-500" />
                <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </>
      )}
      </div>
    </header>
  );
};
