import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  CheckCircle2, 
  ExternalLink, 
  Building2, 
  Navigation,
  AlertCircle
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { openWhatsAppEnquiry, generateWhatsAppUrl } from '../utils/whatsapp';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    requirement: '',
    urgency: 'Standard Enquiry (This Week)'
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Open WhatsApp with all submitted form details prefilled
    openWhatsAppEnquiry({
      customerName: formData.name,
      companyName: formData.company,
      notes: `[${formData.urgency}] Contact Phone: ${formData.phone || 'Not provided'}\nRequirement: ${formData.requirement}`
    });

    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="scroll-mt-32 sm:scroll-mt-36 py-12 sm:py-16 bg-industrial-light border-b border-industrial-border">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-9">
          <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-accent-50 border border-accent-200/60 text-accent-700 font-mono text-[11px] uppercase tracking-wider font-semibold mb-2.5">
            <Building2 className="w-3.5 h-3.5 text-accent-600" />
            <span>Direct Commercial Desk</span>
          </div>
          <h2 className="font-condensed font-bold uppercase text-3xl sm:text-4xl text-navy-950 tracking-tight">
            Contact & Location Details
          </h2>
          <p className="mt-2 text-sm sm:text-base text-industrial-muted leading-relaxed">
            Reach out to our Coimbatore supply desk for item availability, wholesale quotations, workshop tool matching, or urgent dispatch requests.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Direct Contact Information & Business Details (~42%) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Primary Details Box */}
            <div className="bg-white rounded-xl border border-industrial-border p-6 sm:p-7 shadow-card">
              <div className="pb-3.5 mb-1 border-b border-industrial-border">
                <h3 className="text-base sm:text-lg font-bold text-navy-900 flex items-center">
                  <Building2 className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0" />
                  <span>Office & Supply Desk</span>
                </h3>
                <p className="text-xs text-industrial-muted mt-1 leading-normal">
                  Commercial trade desk and registered distribution location in Coimbatore.
                </p>
              </div>

              <div className="divide-y divide-industrial-border/70 text-xs sm:text-sm">
                
                {/* 1. Physical Location & Map Directions */}
                <div className="py-3.5 first:pt-2">
                  <div className="flex items-start space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-navy-50 border border-navy-100/80 text-navy-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-navy-700" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="block text-xs font-mono font-bold uppercase tracking-wider text-navy-900">
                        Registered Business Location
                      </span>
                      <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mt-0.5">
                        {BUSINESS_CONFIG.addressDisplay}
                      </p>
                      {!BUSINESS_CONFIG.isVerifiedByOwner && BUSINESS_CONFIG.addressDisclaimer && (
                        <div className="mt-1.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-50 border border-amber-200/80 text-[11px] font-mono text-amber-900 leading-tight">
                          <AlertCircle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                          <span>{BUSINESS_CONFIG.addressDisclaimer}</span>
                        </div>
                      )}
                      <div className="mt-2">
                        <a
                          href={BUSINESS_CONFIG.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-xs font-semibold text-accent-600 hover:text-accent-700 focus:outline-none focus-visible:underline group"
                        >
                          <Navigation className="w-3.5 h-3.5 mr-1.5 text-accent-500 group-hover:translate-x-0.5 transition-transform" />
                          <span>Get Directions on Google Maps</span>
                          <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Direct Telephone */}
                <div className="py-3.5">
                  <div className="flex items-start space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-navy-50 border border-navy-100/80 text-navy-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone className="w-4 h-4 text-navy-700" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="block text-xs font-mono font-bold uppercase tracking-wider text-navy-900">
                        Direct Telephone Desk
                      </span>
                      <a
                        href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                        className="inline-block text-sm font-mono font-bold text-navy-900 hover:text-accent-600 focus:outline-none focus-visible:underline transition-colors mt-0.5"
                      >
                        {BUSINESS_CONFIG.phoneDisplay}
                      </a>
                      <span className="text-xs text-industrial-muted block mt-0.5">
                        Mon–Sat during regular business hours
                      </span>
                    </div>
                  </div>
                </div>

                {/* 3. WhatsApp Enquiry */}
                <div className="py-3.5">
                  <div className="flex items-start space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MessageSquare className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="block text-xs font-mono font-bold uppercase tracking-wider text-navy-900">
                        Instant WhatsApp Enquiry
                      </span>
                      <div className="mt-1">
                        <a
                          href={generateWhatsAppUrl({ notes: "Contact section direct inquiry" })}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 active:bg-emerald-200 px-3 py-1.5 rounded-lg border border-emerald-200/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                        >
                          <MessageSquare className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span className="font-mono">+{BUSINESS_CONFIG.whatsappNumber}</span>
                          <span className="font-sans font-medium text-emerald-700">• Chat on WhatsApp →</span>
                        </a>
                      </div>
                      <span className="text-xs text-industrial-muted block mt-1">
                        Fast response for item availability & quote requests
                      </span>
                    </div>
                  </div>
                </div>

                {/* 4. Electronic Mail */}
                <div className="py-3.5">
                  <div className="flex items-start space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-navy-50 border border-navy-100/80 text-navy-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail className="w-4 h-4 text-navy-700" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="block text-xs font-mono font-bold uppercase tracking-wider text-navy-900">
                        Electronic Mail (Formal Inquiries)
                      </span>
                      <a
                        href={`mailto:${BUSINESS_CONFIG.email}`}
                        className="inline-block text-xs sm:text-sm font-mono font-semibold text-navy-900 hover:text-accent-600 focus:outline-none focus-visible:underline transition-colors mt-0.5 break-all"
                      >
                        {BUSINESS_CONFIG.email}
                      </a>
                      <span className="text-xs text-industrial-muted block mt-0.5">
                        Purchase orders, tender schedules & formal vendor forms
                      </span>
                    </div>
                  </div>
                </div>

                {/* 5. Operating Hours */}
                <div className="py-3.5 last:pb-1">
                  <div className="flex items-start space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-navy-50 border border-navy-100/80 text-navy-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock className="w-4 h-4 text-navy-700" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="block text-xs font-mono font-bold uppercase tracking-wider text-navy-900">
                        Operating & Dispatch Schedule
                      </span>
                      <div className="mt-2 rounded-lg bg-slate-50/90 border border-slate-200/70 p-2.5 text-xs">
                        <dl className="space-y-1">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5 pb-1 border-b border-slate-200/60">
                            <dt className="font-medium text-slate-700">Monday – Friday</dt>
                            <dd className="font-mono text-navy-900 font-medium sm:text-right">{BUSINESS_CONFIG.workingHours.weekdays}</dd>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5 pb-1 border-b border-slate-200/60">
                            <dt className="font-medium text-slate-700">Saturday</dt>
                            <dd className="font-mono text-navy-900 font-medium sm:text-right">{BUSINESS_CONFIG.workingHours.saturday}</dd>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-0.5">
                            <dt className="font-medium text-slate-700">Sunday</dt>
                            <dd className="font-mono text-slate-500 sm:text-right">{BUSINESS_CONFIG.workingHours.sunday}</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Regional Industrial Clusters Served */}
            <div className="bg-navy-950 text-slate-300 rounded-xl p-5 border border-navy-800 text-xs shadow-card space-y-2.5">
              <h4 className="font-bold text-white text-xs flex items-center">
                <MapPin className="w-3.5 h-3.5 text-accent-500 mr-1.5 flex-shrink-0" />
                <span>Regional Industrial Clusters Served</span>
              </h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Regular tool supplies to Ganapathy, Peelamedu, SIDCO Industrial Estate Kurichi, Thudiyalur, Saravanampatti, Singanallur, and Tiruppur industrial corridor.
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1 text-[11px] font-mono">
                {['Coimbatore', 'Tiruppur', 'Erode', 'Pollachi', 'Palakkad border'].map((region) => (
                  <span key={region} className="bg-navy-900 text-accent-400 px-2 py-0.5 rounded border border-navy-700/80">
                    {region}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Quotation & Enquiry Form (~58%) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl border border-industrial-border p-6 sm:p-7 shadow-card">
              <div className="pb-3.5 mb-5 border-b border-industrial-border">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-accent-600 block mb-1">
                  Request For Quotation (RFQ)
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-navy-900">
                  Send Your Specification or Bulk Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-industrial-muted mt-1 leading-normal">
                  Fill in your workshop requirements below. Submitting will pre-format your inquiry and open directly in WhatsApp for quick sales verification.
                </p>
              </div>

              {formSubmitted && (
                <div 
                  role="status"
                  className="mb-5 p-3.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm flex items-start space-x-2.5 animate-fadeIn"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block text-emerald-900">WhatsApp Window Opened</span>
                    <span className="text-xs text-emerald-800">Your pre-formatted enquiry has been generated with your specifications.</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label 
                      htmlFor="rfq-name" 
                      className="block text-xs font-bold uppercase tracking-wider font-mono text-navy-900 mb-1.5"
                    >
                      Contact Person Name <span className="text-accent-600" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="rfq-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="e.g. S. Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-11 sm:h-12 text-xs sm:text-sm px-3.5 rounded-lg border border-industrial-border bg-slate-50/70 hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors text-navy-900 placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="rfq-company" 
                      className="block text-xs font-bold uppercase tracking-wider font-mono text-navy-900 mb-1.5"
                    >
                      Company / Workshop Name
                    </label>
                    <input
                      id="rfq-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="e.g. Precision Engineering Works"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full h-11 sm:h-12 text-xs sm:text-sm px-3.5 rounded-lg border border-industrial-border bg-slate-50/70 hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors text-navy-900 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label 
                      htmlFor="rfq-phone" 
                      className="block text-xs font-bold uppercase tracking-wider font-mono text-navy-900 mb-1.5"
                    >
                      Phone / Mobile Number <span className="text-accent-600" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="rfq-phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="e.g. 98430 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full h-11 sm:h-12 text-xs sm:text-sm px-3.5 rounded-lg border border-industrial-border bg-slate-50/70 hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors text-navy-900 placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="rfq-priority" 
                      className="block text-xs font-bold uppercase tracking-wider font-mono text-navy-900 mb-1.5"
                    >
                      Enquiry Priority
                    </label>
                    <select
                      id="rfq-priority"
                      name="priority"
                      value={formData.urgency}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                      className="w-full h-11 sm:h-12 text-xs sm:text-sm px-3.5 rounded-lg border border-industrial-border bg-slate-50/70 hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors text-navy-900 cursor-pointer"
                    >
                      <option value="Immediate Purchase (Today/Tomorrow)">Immediate Purchase (Ready Stock Needed)</option>
                      <option value="Standard Enquiry (This Week)">Standard Enquiry (This Week)</option>
                      <option value="Bulk Project Quotation">Bulk Project Quotation</option>
                      <option value="Annual Workshop Supply Contract">Annual Workshop Supply Contract</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label 
                    htmlFor="rfq-requirement" 
                    className="block text-xs font-bold uppercase tracking-wider font-mono text-navy-900 mb-1.5"
                  >
                    Required Equipment, Brand & Quantity Details <span className="text-accent-600" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="rfq-requirement"
                    name="requirement"
                    rows={5}
                    required
                    placeholder="Specify tools (e.g., 20 boxes 4-inch cutting wheels, 2 nos 200A inverter welders, 1 bench vice 8-inch, delivery to Ganapathy)..."
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    className="w-full text-xs sm:text-sm p-3.5 rounded-lg border border-industrial-border bg-slate-50/70 hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-colors text-navy-900 placeholder:text-slate-400 min-h-[140px] resize-y"
                  />
                </div>

                <div className="pt-2">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3.5">
                    <button
                      type="submit"
                      className="w-full sm:w-auto min-h-[46px] sm:min-h-[48px] inline-flex items-center justify-center px-6 py-3 rounded-lg bg-accent-500 hover:bg-accent-600 active:bg-accent-700 text-white font-bold text-sm shadow-subtle hover:shadow-card transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 shrink-0"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      <span>Generate & Send WhatsApp Enquiry</span>
                    </button>

                    <span className="text-xs text-industrial-muted leading-relaxed sm:max-w-xs">
                      Prefills your specification directly into WhatsApp for commercial verification. No registration required.
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
