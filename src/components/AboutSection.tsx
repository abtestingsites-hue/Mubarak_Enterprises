import React from 'react';
import { 
  Building, 
  CheckCircle, 
  MessageSquare,
  HelpCircle
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-b border-industrial-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 pb-4 border-b border-industrial-border">
          <div className="inline-flex items-center space-x-2 text-accent-600 font-mono text-xs uppercase tracking-wider font-semibold mb-2">
            <span>Supplier Profile</span>
          </div>
          <h2 className="font-condensed font-bold uppercase text-3xl sm:text-4xl text-navy-950 tracking-tight">
            About Mubarak Enterprises
          </h2>
          <p className="mt-2 text-sm sm:text-base text-industrial-muted max-w-3xl">
            A trusted wholesale and trade supplier of industrial hand tools, high-torque power machinery, welding equipment, and workshop supplies based in Coimbatore, Tamil Nadu.
          </p>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Business Overview */}
          <div className="lg:col-span-7 space-y-6 text-sm text-slate-700 leading-relaxed">
            <div className="prose text-slate-700 space-y-4">
              <p>
                <strong>Mubarak Enterprises</strong> operates as an industrial tools and equipment supply business serving contractors, fabrication workshops, engineering facilities, and maintenance technicians in and around <strong>Coimbatore, Tamil Nadu</strong>.
              </p>
              
              <p>
                Coimbatore’s reputation as an engineering and manufacturing hub demands tooling that withstands heavy duty cyclic operation. From wet-grinder and agricultural pump manufacturers to structural PEB fabricators and CNC machine shops, we focus on connecting tradespeople with dependable equipment suited to their specific working tolerances.
              </p>

              <p>
                Our commercial approach prioritizes transparent specifications, prompt availability updates, and accessible enquiry channels through WhatsApp and direct phone contact.
              </p>
            </div>

            {/* 4 Conservative Operational Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-lg bg-slate-50 border border-industrial-border">
                <div className="flex items-center space-x-2 text-navy-900 font-bold text-sm mb-1.5">
                  <CheckCircle className="w-4 h-4 text-accent-500" />
                  <span>Specification Matching</span>
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Assistance in finding matching disc sizes, motor wattages, voltage specifications, and tool ratings for your project.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-50 border border-industrial-border">
                <div className="flex items-center space-x-2 text-navy-900 font-bold text-sm mb-1.5">
                  <CheckCircle className="w-4 h-4 text-accent-500" />
                  <span>Trade & Workshop Quantities</span>
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Support for single machine replacements up to carton quantities of abrasives and workshop consumables.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-50 border border-industrial-border">
                <div className="flex items-center space-x-2 text-navy-900 font-bold text-sm mb-1.5">
                  <CheckCircle className="w-4 h-4 text-accent-500" />
                  <span>Tamil Nadu Supply Reach</span>
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Local pick-up coordination in Coimbatore alongside transport parcel dispatch to surrounding districts.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-50 border border-industrial-border">
                <div className="flex items-center space-x-2 text-navy-900 font-bold text-sm mb-1.5">
                  <CheckCircle className="w-4 h-4 text-accent-500" />
                  <span>Direct Communication</span>
                </div>
                <p className="text-xs text-slate-600 leading-normal">
                  Enquiries answered directly by business representatives with real-time stock checks and lead time estimates.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Business Verification & Operational Notice Card */}
          <div className="lg:col-span-5 space-y-4">
            {/* Quick Fact Sheet Card */}
            <div className="bg-navy-900 text-white rounded-lg p-6 border border-navy-750 shadow-card">
              <h3 className="text-base font-bold text-white mb-4 flex items-center">
                <Building className="w-4 h-4 text-accent-500 mr-2" />
                <span>Supplier Information Summary</span>
              </h3>

              <div className="space-y-3 text-xs font-mono">
                <div className="flex justify-between py-2 border-b border-navy-800">
                  <span className="text-slate-400">Business Name:</span>
                  <span className="text-slate-200 font-semibold">{BUSINESS_CONFIG.name}</span>
                </div>

                <div className="flex justify-between py-2 border-b border-navy-800">
                  <span className="text-slate-400">Location Base:</span>
                  <span className="text-slate-200 font-semibold">{BUSINESS_CONFIG.city}, {BUSINESS_CONFIG.state}</span>
                </div>

                <div className="flex justify-between py-2 border-b border-navy-800">
                  <span className="text-slate-400">Primary Sector:</span>
                  <span className="text-slate-200 font-semibold">Industrial Tools & Equipment</span>
                </div>

                <div className="flex justify-between py-2 border-b border-navy-800">
                  <span className="text-slate-400">Enquiry Hours:</span>
                  <span className="text-slate-200 font-semibold">{BUSINESS_CONFIG.workingHours.weekdays}</span>
                </div>

                <div className="flex justify-between py-2">
                  <span className="text-slate-400">Enquiry Channels:</span>
                  <span className="text-accent-400 font-semibold">WhatsApp & Phone Desk</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-navy-800">
                <button
                  onClick={() => openWhatsAppEnquiry({ notes: "General supplier enquiry from About section" })}
                  className="w-full flex items-center justify-center py-2.5 px-4 rounded bg-accent-500 hover:bg-accent-600 text-white text-xs font-bold transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 mr-2" />
                  <span>Connect with Sales Desk</span>
                </button>
              </div>
            </div>

            {/* Honest Provisional Disclaimer Note */}
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600">
              <div className="flex items-center space-x-2 text-slate-800 font-semibold mb-1">
                <HelpCircle className="w-4 h-4 text-slate-500 flex-shrink-0" />
                <span>Catalogue & Specification Notice</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-normal">
                Product images, brands, and models presented on this website serve as reference catalogues of our standard supply capabilities. To confirm live stock, manufacturer warranties, and volume pricing, please verify directly with our desk.
              </p>
              <p className="text-[10px] text-slate-400 mt-2 font-mono leading-normal border-t border-slate-200/70 pt-2">
                {BUSINESS_CONFIG.brandNotice}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
