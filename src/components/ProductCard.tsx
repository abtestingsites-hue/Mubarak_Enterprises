import React, { useState } from 'react';
import { MessageSquare, Eye, Wrench } from 'lucide-react';
import { Product } from '../types';
import { openWhatsAppEnquiry } from '../utils/whatsapp';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const [imageError, setImageError] = useState(false);

  const handleQuickEnquiry = (e: React.MouseEvent) => {
    e.stopPropagation();
    openWhatsAppEnquiry({
      productName: product.name,
      model: product.model,
      quantity: 1,
      notes: "Quick inquiry from catalogue card."
    });
  };

  const getBadgeStyle = (badge?: string) => {
    switch (badge) {
      case 'Heavy Duty':
        return 'bg-amber-100 text-amber-800 border-amber-300';
      case 'Workshop Essential':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Precision Tool':
        return 'bg-emerald-100 text-emerald-800 border-emerald-300';
      case 'High Performance':
        return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'Industrial Grade':
      default:
        return 'bg-slate-100 text-slate-800 border-slate-300';
    }
  };

  return (
    <div 
      onClick={() => onViewDetails(product)}
      className="group bg-white rounded-lg border border-industrial-border shadow-subtle hover:shadow-card hover:border-navy-600 transition-all duration-200 flex flex-col h-full overflow-hidden cursor-pointer"
    >
      {/* Product Image Box */}
      <div className="relative h-48 sm:h-52 w-full bg-slate-100 overflow-hidden border-b border-industrial-border flex-shrink-0">
        {!imageError ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300 filter contrast-[1.02]"
            loading="lazy"
          />
        ) : (
          /* Fallback Industrial Blueprint Graphic */
          <div className="w-full h-full flex flex-col items-center justify-center bg-navy-950 text-slate-400 p-4 text-center">
            <Wrench className="w-10 h-10 text-accent-500 mb-2 opacity-80" />
            <span className="font-mono text-xs font-semibold text-slate-300">{product.model || product.name}</span>
            <span className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">{product.categoryName}</span>
          </div>
        )}

        {/* Badge */}
        {product.badge && (
          <div className={`absolute top-2.5 left-2.5 text-[11px] font-semibold font-mono px-2 py-0.5 rounded border ${getBadgeStyle(product.badge)} shadow-subtle`}>
            {product.badge}
          </div>
        )}

        {/* Category tag top right */}
        <div className="absolute top-2.5 right-2.5 bg-navy-900/80 backdrop-blur-sm text-slate-200 text-[10px] font-mono px-2 py-0.5 rounded">
          {product.categoryName}
        </div>
      </div>

      {/* Content Box */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col">
        {/* Brand & Model row */}
        <div className="flex items-center justify-between text-xs text-industrial-muted font-mono mb-1.5">
          <span className="font-semibold text-navy-800 uppercase tracking-wide truncate max-w-[170px]">
            {product.brand || 'Industrial Supply'}
          </span>
          {product.model && (
            <span className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-700 font-mono text-[11px] flex-shrink-0 ml-1">
              {product.model}
            </span>
          )}
        </div>

        {/* Product Name with minimum height for multi-card grid alignment */}
        <h3 className="text-sm sm:text-base font-bold text-navy-900 group-hover:text-accent-600 transition-colors line-clamp-2 leading-snug min-h-[2.5rem]">
          {product.name}
        </h3>

        {/* Short description with consistent line clamping */}
        <p className="text-xs text-industrial-muted mt-2 line-clamp-2 leading-relaxed min-h-[2rem]">
          {product.shortDescription}
        </p>

        {/* Key Specifications (2 top specs preview) */}
        {product.specifications.length > 0 && (
          <div className="mt-auto pt-3 border-t border-industrial-border/70 space-y-1 bg-slate-50/80 p-2.5 rounded text-[11px]">
            {product.specifications.slice(0, 2).map((spec, i) => (
              <div key={i} className="flex justify-between items-center text-slate-600">
                <span className="text-slate-500 font-medium truncate pr-2">{spec.label}:</span>
                <span className="font-mono font-semibold text-navy-900 truncate max-w-[140px] text-right">{spec.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Card Action Footer */}
      <div className="p-4 pt-0 sm:p-5 sm:pt-0 mt-auto">
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => onViewDetails(product)}
            className="w-full inline-flex items-center justify-center px-3 py-2 rounded text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-navy-900 border border-slate-300 transition-colors focus:outline-none focus:ring-1 focus:ring-navy-600"
          >
            <Eye className="w-3.5 h-3.5 mr-1.5 text-navy-700" />
            <span>Details</span>
          </button>

          <button
            onClick={handleQuickEnquiry}
            className="w-full inline-flex items-center justify-center px-3 py-2 rounded text-xs font-semibold bg-accent-500 hover:bg-accent-600 text-white shadow-subtle transition-colors focus:outline-none focus:ring-1 focus:ring-accent-400"
          >
            <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
            <span>Enquire</span>
          </button>
        </div>
      </div>
    </div>
  );
};
