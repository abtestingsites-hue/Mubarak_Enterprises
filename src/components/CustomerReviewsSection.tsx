import React from 'react';
import { MessageSquareQuote, ShieldCheck, MessageSquare, Info } from 'lucide-react';
import { CUSTOMER_REVIEWS, CustomerReview } from '../data/reviews';
import { BUSINESS_CONFIG } from '../config/business';
import { generateWhatsAppUrl } from '../utils/whatsapp';

export const CustomerReviewsSection: React.FC = () => {
  const feedbackWhatsAppUrl = generateWhatsAppUrl({
    notes: "Customer feedback / workshop review submission for Mubarak Enterprises."
  });

  return (
    <section id="reviews" className="py-16 sm:py-20 bg-white border-b border-industrial-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 pb-4 border-b border-industrial-border">
          <div className="inline-flex items-center space-x-2 text-accent-600 font-mono text-xs uppercase tracking-wider font-semibold mb-2">
            <span>Trade Reputation</span>
          </div>
          <h2 className="font-condensed font-bold uppercase text-3xl sm:text-4xl text-navy-950 tracking-tight">
            Customer Feedback & Reviews
          </h2>
          <p className="mt-2 text-sm sm:text-base text-industrial-muted max-w-3xl">
            Direct feedback from engineering workshops, contractors, and industrial buyers across Coimbatore and Western Tamil Nadu.
          </p>
        </div>

        {/* Content Area */}
        {CUSTOMER_REVIEWS.length === 0 ? (
          /* Honest, Polished Wholesale Review Empty State */
          <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50/70 p-8 sm:p-12 text-center max-w-3xl mx-auto">
            <div className="w-14 h-14 rounded-full bg-white border border-slate-200 text-navy-800 mx-auto flex items-center justify-center mb-4 shadow-subtle">
              <MessageSquareQuote className="w-7 h-7 text-accent-500" />
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-navy-900 mb-2">
              Customer feedback will be featured here as reviews become available.
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto mb-6">
              Mubarak Enterprises is dedicated to transparent, honest commercial trade. We do not publish simulated star ratings, fictitious testimonials, or unverified customer profiles. As verified reviews are submitted by partner workshops, they will be published here with authorization.
            </p>

            <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={feedbackWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-navy-800 hover:bg-navy-900 text-white text-xs sm:text-sm font-semibold shadow-subtle transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500"
              >
                <MessageSquare className="w-4 h-4 mr-2 text-accent-400" />
                <span>Share Workshop Feedback on WhatsApp</span>
              </a>
            </div>

            <div className="mt-4 flex items-center justify-center text-[11px] text-slate-500 font-mono">
              <Info className="w-3.5 h-3.5 text-accent-500 mr-1.5 flex-shrink-0" />
              <span>
                Feedback is collected directly via our sales desk (+{BUSINESS_CONFIG.whatsappNumber} • Provisional).
              </span>
            </div>
          </div>
        ) : (
          /* Testimonial Grid for when genuine reviews are populated */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CUSTOMER_REVIEWS.map((review: CustomerReview) => (
              <div 
                key={review.id}
                className="bg-slate-50 rounded-lg p-6 border border-industrial-border flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-2 text-xs text-accent-600 font-mono mb-3">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Verified Workshop Client</span>
                  </div>
                  <p className="text-sm text-slate-700 italic leading-relaxed mb-4">
                    "{review.feedback}"
                  </p>
                </div>
                
                <div className="pt-4 border-t border-slate-200 text-xs">
                  <span className="block font-bold text-navy-900">{review.authorName}</span>
                  {review.companyOrWorkshop && (
                    <span className="block text-slate-600">{review.companyOrWorkshop}</span>
                  )}
                  {review.location && (
                    <span className="block text-slate-400 font-mono text-[11px] mt-0.5">{review.location}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
