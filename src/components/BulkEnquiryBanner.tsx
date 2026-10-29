import React from 'react';
import { MessageSquare, Phone, Building2 } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

export const BulkEnquiryBanner: React.FC = () => {
  const handleBulkRFQ = () => {
    openWhatsAppEnquiry({
      notes: "Requesting commercial quotation for workshop tool schedule / bulk factory supply list."
    });
  };

  return (
    <section className="bg-navy-950 border-y border-navy-800 text-white py-12 sm:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-900 border border-navy-750 rounded-xl p-6 sm:p-10 shadow-elevated relative overflow-hidden">
          
          {/* Subtle industrial angle accent */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-accent-500/10 rounded-full blur-xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center space-x-2 text-accent-400 font-mono text-xs uppercase tracking-wider font-semibold">
                <Building2 className="w-4 h-4" />
                <span>Contractor & Workshop Supply Program</span>
              </div>

              <h3 className="font-condensed font-bold uppercase text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                Ordering for a Workshop, Factory, or Infrastructure Site?
              </h3>

              <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                We support manufacturing units, fabrication facilities, foundries, and maintenance teams across Coimbatore with scheduled deliveries, bulk abrasive cartons, tool kits, and institutional supply quotes.
              </p>

              <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-slate-300">
                <span className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mr-2" />
                  Direct GST Invoice Supply
                </span>
                <span className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mr-2" />
                  Workshop Tool Schedules
                </span>
                <span className="flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mr-2" />
                  Tamil Nadu Regional Logistics
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={handleBulkRFQ}
                className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-accent-500 hover:bg-accent-600 text-white font-bold text-sm shadow-card transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-accent-400"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                <span>Submit Bulk WhatsApp RFQ</span>
              </button>

              <a
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg bg-navy-800 hover:bg-navy-700 text-slate-200 border border-navy-700 text-xs sm:text-sm font-semibold transition-colors"
              >
                <Phone className="w-4 h-4 mr-2 text-accent-500" />
                <span>Call Sales: {BUSINESS_CONFIG.phoneDisplay}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
