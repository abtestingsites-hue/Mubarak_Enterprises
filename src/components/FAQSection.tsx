import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, MessageSquare, Phone } from 'lucide-react';
import { FAQS, FAQItem } from '../data/faqs';
import { BUSINESS_CONFIG } from '../config/business';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

export const FAQSection: React.FC = () => {
  // Store open state as a set of IDs; initially expand the first FAQ for clear discoverability
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['faq-bulk-orders']));

  const toggleFAQ = (id: string) => {
    setOpenIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleCustomQuestion = () => {
    openWhatsAppEnquiry({
      notes: "Enquiry question not covered in website FAQs"
    });
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': FAQS.map(item => ({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer
      }
    }))
  };

  return (
    <section id="faq" className="scroll-mt-28 sm:scroll-mt-32 py-10 sm:py-12 bg-industrial-light border-b border-industrial-border">
      {/* Schema.org FAQPage Structured Data */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} 
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-7">
          <div className="inline-flex items-center space-x-2 text-accent-600 font-mono text-xs uppercase tracking-wider font-semibold mb-1.5">
            <HelpCircle className="w-4 h-4" />
            <span>Buyer Guidance</span>
          </div>
          <h2 className="font-condensed font-bold uppercase text-2xl sm:text-3xl lg:text-4xl text-navy-950 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-industrial-muted">
            Quick answers to common product, procurement, and enquiry questions.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-2">
          {FAQS.map((item: FAQItem) => {
            const isOpen = openIds.has(item.id);
            const answerId = `faq-answer-${item.id}`;
            const buttonId = `faq-button-${item.id}`;

            return (
              <div 
                key={item.id}
                className="bg-white rounded-lg border border-industrial-border shadow-subtle overflow-hidden transition-colors"
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full min-h-[48px] sm:min-h-[52px] py-3 sm:py-3.5 px-4 sm:px-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
                >
                  <span className="text-sm sm:text-[15px] font-bold text-navy-900 leading-snug">
                    {item.question}
                  </span>
                  
                  <span className="flex-shrink-0 w-6 h-6 rounded bg-slate-100 flex items-center justify-center text-navy-800 transition-colors">
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5 text-accent-500" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 text-slate-500" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-4 pb-3.5 sm:px-5 sm:pb-4 pt-2.5 text-xs sm:text-sm text-slate-600 border-t border-slate-100 animate-fadeIn"
                  >
                    <p className="text-slate-600 leading-normal">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Help Callout */}
        <div className="mt-6 sm:mt-8 rounded-lg bg-navy-900 text-white p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 border border-navy-750 shadow-card">
          <div className="text-center sm:text-left space-y-1">
            <h3 className="text-sm sm:text-base font-bold text-white">
              Have a question not listed here?
            </h3>
            <p className="text-xs text-slate-300 leading-normal">
              Our Coimbatore sales desk is available during regular business hours to assist with technical specifications, quotations, and product availability.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 flex-shrink-0 w-full sm:w-auto">
            <button
              onClick={handleCustomQuestion}
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-accent-500 hover:bg-accent-600 text-white font-semibold text-xs sm:text-sm shadow-subtle transition-colors focus:outline-none focus:ring-2 focus:ring-accent-400"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              <span>Ask on WhatsApp</span>
            </button>

            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="inline-flex items-center justify-center px-3.5 py-2 rounded-lg bg-navy-800 hover:bg-navy-700 text-slate-200 border border-navy-700 font-semibold text-xs sm:text-sm transition-colors"
            >
              <Phone className="w-4 h-4 mr-2 text-accent-500" />
              <span>Call Sales</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
