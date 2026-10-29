import React from 'react';
import { 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onEnquireClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section className="relative bg-navy-950 text-white overflow-hidden border-b border-navy-800 min-h-[560px] lg:min-h-[620px] flex items-center">
      {/* Full-bleed Background Image: Industrial angle grinder with flying sparks */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/products/prod-pt-01-angle-grinder.jpg"
          alt="Industrial angle grinder cutting steel with sparks at Mubarak Enterprises"
          className="w-full h-full object-cover object-right md:object-[center_right] filter brightness-90 contrast-105"
          loading="eager"
        />
        {/* Shading gradient on the left so the orange card and pillars stand out crisply */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 w-full">
        <div className="max-w-xl">
          
          {/* Solid Orange Industrial Hero Card */}
          <div className="bg-accent-500 rounded-sm shadow-2xl overflow-hidden">
            <div className="p-6 sm:p-8 lg:p-9 space-y-4">
              
              {/* Eyebrow */}
              <div className="flex items-center space-x-2 text-white/90 font-mono text-xs uppercase tracking-widest font-semibold">
                <span className="w-6 h-0.5 bg-white/70"></span>
                <span>INDUSTRIAL TOOLS & SUPPLIES</span>
              </div>

              {/* Headline */}
              <h1 className="font-condensed font-extrabold uppercase tracking-tight text-3xl sm:text-4xl lg:text-5xl text-white leading-[0.95]">
                THE RIGHT TOOLS.<br />
                BUILT FOR THE JOB.
              </h1>

              {/* Supporting Copy */}
              <p className="text-white/95 text-sm sm:text-base leading-relaxed font-sans">
                Explore tools and equipment for workshops, fabrication and industrial applications.
              </p>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={onExploreClick}
                  className="inline-flex items-center px-6 py-3 rounded bg-navy-950 hover:bg-navy-900 text-white font-semibold text-sm transition-colors shadow-card group"
                >
                  <span>Explore Catalogue</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

            {/* Industrial Diagonal Hazard Stripe footer on card */}
            <div 
              className="h-5 w-full opacity-20 border-t border-black/10"
              style={{
                backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 12px, transparent 12px, transparent 24px)'
              }}
            />
          </div>

          {/* 4 Pillars Row Directly Under the Orange Card */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-white">
            <div className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-bold block text-white">Wholesale & Bulk</span>
                <span className="text-slate-300 text-[11px]">Workshop orders</span>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-bold block text-white">Known Brands</span>
                <span className="text-slate-300 text-[11px]">Industrial specifications</span>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-bold block text-white">Coimbatore Hub</span>
                <span className="text-slate-300 text-[11px]">Prompt local supply</span>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <CheckCircle2 className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="font-bold block text-white">Fast Quotations</span>
                <span className="text-slate-300 text-[11px]">Direct via WhatsApp</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
