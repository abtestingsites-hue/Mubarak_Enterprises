import React, { useState, useEffect } from 'react';
import { 
  X, 
  MessageSquare, 
  Phone, 
  Wrench, 
  Check, 
  Layers, 
  Package, 
  Clock, 
  Tag, 
  Copy,
  Info
} from 'lucide-react';
import { Product } from '../types';
import { BUSINESS_CONFIG } from '../config/business';
import { buildWhatsAppMessage, openWhatsAppEnquiry } from '../utils/whatsapp';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [customNotes, setCustomNotes] = useState<string>('');
  const [buyerName, setBuyerName] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Lock background body scroll when modal is active
  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [product]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Reset form when product changes
  useEffect(() => {
    if (product) {
      setQuantity(1);
      setCustomNotes('');
      setBuyerName('');
      setImageError(false);
      setCopied(false);
    }
  }, [product]);

  if (!product) return null;

  const currentMessage = buildWhatsAppMessage({
    productName: product.name,
    model: product.model,
    quantity: quantity,
    notes: customNotes,
    customerName: buyerName
  });

  const handleSendWhatsApp = () => {
    openWhatsAppEnquiry({
      productName: product.name,
      model: product.model,
      quantity: quantity,
      notes: customNotes,
      customerName: buyerName
    });
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(currentMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleQuantityPreset = (val: number) => {
    setQuantity(val);
  };

  const handleQuantityChange = (valStr: string) => {
    const parsed = parseInt(valStr, 10);
    if (isNaN(parsed) || parsed < 1) {
      setQuantity(1);
    } else {
      setQuantity(Math.min(parsed, 9999));
    }
  };

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6"
      onClick={onClose}
    >
      <div 
        className="relative bg-white w-full max-w-4xl rounded-xl shadow-2xl border border-navy-700 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-navy-900 text-white px-5 py-3.5 flex items-center justify-between border-b border-navy-700">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-accent-500"></span>
            <span className="text-xs font-mono font-medium text-slate-300 uppercase tracking-wider">
              {product.categoryName} • Specification Sheet
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-navy-800 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 max-h-[82vh] overflow-y-auto overscroll-contain">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
            
            {/* Left Column: Image & Specifications Table */}
            <div className="md:col-span-6 space-y-5">
              {/* Image Frame */}
              <div className="relative h-60 sm:h-72 w-full rounded-lg bg-slate-100 overflow-hidden border border-industrial-border">
                {!imageError ? (
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-navy-950 text-slate-400 p-6 text-center">
                    <Wrench className="w-12 h-12 text-accent-500 mb-2 opacity-80" />
                    <span className="font-mono text-sm font-semibold text-slate-200">{product.name}</span>
                    <span className="text-xs text-slate-400 mt-1 uppercase font-mono">{product.categoryName}</span>
                  </div>
                )}

                {product.badge && (
                  <div className="absolute top-3 left-3 bg-navy-900/90 text-accent-400 font-mono text-xs font-semibold px-2.5 py-1 rounded shadow-subtle border border-navy-700">
                    {product.badge}
                  </div>
                )}
              </div>

              {/* Technical Specifications Table */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 font-mono mb-2.5 flex items-center">
                  <Layers className="w-4 h-4 text-accent-500 mr-1.5" />
                  <span>Technical Specifications</span>
                </h4>
                <div className="border border-industrial-border rounded-lg overflow-hidden text-xs">
                  <table className="w-full text-left">
                    <tbody className="divide-y divide-industrial-border">
                      {product.specifications.map((spec, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                          <td className="px-3 py-2 font-medium text-slate-600 w-2/5 border-r border-industrial-border">
                            {spec.label}
                          </td>
                          <td className="px-3 py-2 font-mono font-semibold text-navy-900">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Applications Tags */}
              {product.applications.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 font-mono mb-2 flex items-center">
                    <Tag className="w-3.5 h-3.5 text-accent-500 mr-1.5" />
                    <span>Recommended Applications</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {product.applications.map((app, i) => (
                      <span key={i} className="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded border border-slate-200 font-medium">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Information, Quantity Selector & WhatsApp Action */}
            <div className="md:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Brand & Model */}
                <div className="flex items-center space-x-2 text-xs font-mono">
                  <span className="font-bold text-accent-600 uppercase tracking-wide">
                    {product.brand}
                  </span>
                  {product.model && (
                    <>
                      <span className="text-slate-400">•</span>
                      <span className="bg-navy-900 text-slate-200 px-2 py-0.5 rounded font-mono">
                        Model: {product.model}
                      </span>
                    </>
                  )}
                </div>

                {/* Product Title */}
                <h3 id="modal-product-title" className="text-xl sm:text-2xl font-extrabold text-navy-900 leading-tight">
                  {product.name}
                </h3>

                {/* Full Description */}
                <p className="text-xs sm:text-sm text-industrial-muted leading-relaxed">
                  {product.description}
                </p>

                {/* Packaging & Lead Time Details */}
                <div className="bg-slate-50 border border-industrial-border rounded-lg p-3 space-y-2 text-xs text-slate-600">
                  {product.leadTime && (
                    <div className="flex items-start">
                      <Clock className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Availability:</strong> {product.leadTime}</span>
                    </div>
                  )}
                  {product.standardPackaging && (
                    <div className="flex items-start">
                      <Package className="w-4 h-4 text-navy-700 mr-2 flex-shrink-0 mt-0.5" />
                      <span><strong>Packaging:</strong> {product.standardPackaging}</span>
                    </div>
                  )}
                </div>

                {/* Interactive Quantity Selector */}
                <div className="pt-2">
                  <label className="block text-xs font-bold uppercase tracking-wider font-mono text-navy-900 mb-2">
                    Enquiry Quantity Required
                  </label>
                  
                  <div className="flex items-center space-x-3 mb-2.5">
                    <div className="flex items-center border border-industrial-border rounded-lg bg-white overflow-hidden shadow-subtle">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-navy-900 font-bold transition-colors"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="1"
                        max="9999"
                        value={quantity}
                        onChange={(e) => handleQuantityChange(e.target.value)}
                        className="w-16 py-2 text-center font-mono font-bold text-navy-900 focus:outline-none"
                        aria-label="Quantity"
                      />
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-navy-900 font-bold transition-colors"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    <span className="text-xs text-industrial-muted font-medium">Units / Pieces</span>
                  </div>

                  {/* Quantity quick chips for workshop/bulk procurement */}
                  <div className="flex items-center space-x-1.5 text-xs">
                    <span className="text-slate-400 text-[11px] mr-1">Bulk Presets:</span>
                    {[1, 5, 10, 25, 50].map((preset) => (
                      <button
                        key={preset}
                        onClick={() => handleQuantityPreset(preset)}
                        className={`px-2.5 py-1 rounded text-xs font-mono font-semibold transition-colors ${
                          quantity === preset 
                            ? 'bg-navy-800 text-white' 
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {preset}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Optional Buyer Name / Project note */}
                <div className="space-y-2 pt-1">
                  <input
                    type="text"
                    placeholder="Your Name / Workshop Name (Optional)"
                    value={buyerName}
                    onChange={(e) => setBuyerName(e.target.value)}
                    className="w-full text-xs px-3.5 py-2 rounded-lg border border-industrial-border focus:ring-1 focus:ring-accent-500 focus:border-accent-500 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Additional specifications or delivery location in TN (Optional)"
                    value={customNotes}
                    onChange={(e) => setCustomNotes(e.target.value)}
                    className="w-full text-xs px-3.5 py-2 rounded-lg border border-industrial-border focus:ring-1 focus:ring-accent-500 focus:border-accent-500 outline-none"
                  />
                </div>

                {/* Transparent WhatsApp Enquiry Message Preview */}
                <div className="pt-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-1">
                    <span>Generated WhatsApp Dispatch Text:</span>
                    <button
                      onClick={handleCopyMessage}
                      className="inline-flex items-center text-accent-600 hover:text-accent-700 font-semibold"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3 mr-1 text-emerald-600" />
                          <span className="text-emerald-600">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 mr-1" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 text-slate-200 text-xs font-mono leading-relaxed select-all border border-slate-700">
                    "{currentMessage}"
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-4 border-t border-industrial-border">
                <button
                  onClick={handleSendWhatsApp}
                  className="w-full flex items-center justify-center px-5 py-3 rounded-lg bg-accent-500 hover:bg-accent-600 text-white font-bold text-sm shadow-subtle transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>

                <div className="flex items-center justify-between gap-3 text-xs">
                  <a
                    href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                    className="flex-1 flex items-center justify-center py-2.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-navy-900 font-semibold border border-slate-300 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 mr-1.5 text-navy-700" />
                    <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
                  </a>

                  <button
                    onClick={onClose}
                    className="py-2.5 px-4 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors font-medium border border-transparent hover:border-slate-300"
                  >
                    Close
                  </button>
                </div>

                <div className="flex items-start space-x-1.5 text-[11px] text-slate-500 pt-1.5 justify-center">
                  <Info className="w-3.5 h-3.5 text-accent-500 flex-shrink-0 mt-0.5" />
                  <span>
                    Opens WhatsApp with your pre-composed message. You can review before sending.
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
