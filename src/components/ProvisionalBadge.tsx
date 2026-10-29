import React, { useState } from 'react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';

export const ProvisionalBadge: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // If verified by owner or dismissed, don't show
  if (BUSINESS_CONFIG.isVerifiedByOwner || dismissed) return null;

  return (
    <aside 
      aria-label="Provisional Demonstration Notice"
      className="bg-navy-950 text-slate-300 border-b border-accent-500/30 text-xs px-4 py-2 transition-all duration-200"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center space-x-2 text-[11px] sm:text-xs">
          <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-accent-500/20 text-accent-400 font-mono font-bold text-[10px] uppercase border border-accent-500/30">
            Owner Review Build
          </span>
          <span className="text-slate-300">
            Provisional trade catalogue for <strong>Mubarak Enterprises (Coimbatore)</strong>.
          </span>
          <button
            onClick={() => setExpanded(!expanded)}
            className="hidden sm:inline-flex items-center text-accent-400 hover:text-accent-300 font-semibold underline text-[11px] ml-1"
          >
            <span>{expanded ? 'Hide details' : 'Verification checklist'}</span>
            {expanded ? <ChevronUp className="w-3 h-3 ml-0.5" /> : <ChevronDown className="w-3 h-3 ml-0.5" />}
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => setDismissed(true)}
            className="text-slate-400 hover:text-white p-0.5 rounded"
            title="Dismiss notice"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {expanded && (
        <div className="max-w-7xl mx-auto pt-2 pb-1 text-[11px] text-slate-400 border-t border-navy-800 mt-2 font-mono">
          <p className="text-slate-300 mb-1">
            To configure verified phone numbers, official GST number, and shop address, edit: <code className="text-accent-400 bg-navy-900 px-1 py-0.5 rounded">src/config/business.ts</code>.
          </p>
          <ul className="list-disc pl-5 space-y-0.5 text-slate-400">
            <li>WhatsApp enquiry number currently configured: <span className="text-white">+{BUSINESS_CONFIG.whatsappNumber}</span> (Provisional)</li>
            <li>Voice phone number: <span className="text-white">{BUSINESS_CONFIG.phoneDisplay}</span></li>
            <li>Physical shop location: <span className="text-white">{BUSINESS_CONFIG.addressDisplay}</span></li>
            <li>Product catalogue: 24 sample reference items with specifications for enquiry demonstration</li>
            <li>Brand references: Supplied for commercial enquiry; not exclusive distributorship claims</li>
          </ul>
        </div>
      )}
    </aside>
  );
};
