import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  RotateCcw, 
  X
} from 'lucide-react';
import { CATEGORIES, BRANDS, PRODUCTS } from '../data/products';
import { Product, CategoryId } from '../types';
import { ProductCard } from './ProductCard';

interface CatalogueProps {
  initialCategory?: CategoryId | 'all';
  onViewProductDetails: (product: Product) => void;
}

export const Catalogue: React.FC<CatalogueProps> = ({ 
  initialCategory = 'all', 
  onViewProductDetails 
}) => {
  const [search, setSearch] = useState<string>('');
  const [category, setCategory] = useState<CategoryId | 'all'>(initialCategory);
  const [brand, setBrand] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'name-asc' | 'name-desc' | 'brand'>('featured');

  // Sync initialCategory prop if changed by category showcase click
  React.useEffect(() => {
    if (initialCategory) {
      setCategory(initialCategory);
    }
  }, [initialCategory]);

  const handleResetFilters = () => {
    setSearch('');
    setCategory('all');
    setBrand('all');
    setSortBy('featured');
  };

  const hasActiveFilters = search.trim().length > 0 || category !== 'all' || brand !== 'all';

  // Filter and sort items together
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (category !== 'all' && item.category !== category) {
        return false;
      }

      // Brand filter
      if (brand !== 'all' && item.brand !== brand) {
        return false;
      }

      // Search query across name, model, brand, description, and applications
      if (search.trim().length > 0) {
        const query = search.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesModel = item.model?.toLowerCase().includes(query) ?? false;
        const matchesBrand = item.brand?.toLowerCase().includes(query) ?? false;
        const matchesDescription = item.description.toLowerCase().includes(query);
        const matchesApplications = item.applications.some(app => app.toLowerCase().includes(query));

        if (!matchesName && !matchesModel && !matchesBrand && !matchesDescription && !matchesApplications) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'featured') {
        if (a.featured === b.featured) return 0;
        return a.featured ? -1 : 1;
      }
      if (sortBy === 'name-asc') {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'name-desc') {
        return b.name.localeCompare(a.name);
      }
      if (sortBy === 'brand') {
        const brandA = a.brand || '';
        const brandB = b.brand || '';
        return brandA.localeCompare(brandB);
      }
      return 0;
    });
  }, [search, category, brand, sortBy]);

  return (
    <section id="catalogue" className="py-16 sm:py-20 bg-industrial-light border-b border-industrial-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 text-accent-600 font-mono text-xs uppercase tracking-wider font-semibold mb-2">
            <span>Industrial Tool Range</span>
          </div>
          <h2 className="font-condensed font-bold uppercase text-3xl sm:text-4xl text-navy-950 tracking-tight">
            Industrial Tools & Machinery Catalogue
          </h2>
          <p className="mt-2 text-sm sm:text-base text-industrial-muted max-w-3xl">
            Browse our curated industrial range. Filter by tool classification or manufacturer brand, inspect specifications, and generate direct WhatsApp quotation enquiries for Coimbatore delivery.
          </p>
        </div>

        {/* Filter & Search Control Panel */}
        <div className="bg-white rounded-lg border border-industrial-border p-4 sm:p-5 shadow-subtle mb-8 space-y-4">
          
          {/* Top row: Search input + Brand selector + Sort selector */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4">
            
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                placeholder="Search tools, model codes (e.g., GWS, 200i, HR2630), or applications..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-9 py-2.5 bg-slate-50 border border-industrial-border rounded-lg text-sm text-navy-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-navy-900"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Brand Filter */}
            <div className="md:col-span-3">
              <div className="relative">
                <select
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  className="w-full py-2.5 px-3 bg-slate-50 border border-industrial-border rounded-lg text-xs sm:text-sm text-navy-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-500 cursor-pointer font-medium"
                >
                  <option value="all">All Brands & Manufacturers</option>
                  {BRANDS.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Sort Selector */}
            <div className="md:col-span-3">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full py-2.5 px-3 bg-slate-50 border border-industrial-border rounded-lg text-xs sm:text-sm text-navy-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-500 cursor-pointer font-medium"
                >
                  <option value="featured">Sort: Featured Items First</option>
                  <option value="name-asc">Sort: Name (A to Z)</option>
                  <option value="name-desc">Sort: Name (Z to A)</option>
                  <option value="brand">Sort: Brand / Manufacturer</option>
                </select>
              </div>
            </div>

          </div>

          {/* Bottom row: Category Pills */}
          <div className="pt-2 border-t border-industrial-border/70 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-semibold text-slate-400 mr-1 flex items-center">
              <Filter className="w-3.5 h-3.5 mr-1" />
              <span>Category:</span>
            </span>

            <button
              onClick={() => setCategory('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                category === 'all'
                  ? 'bg-navy-900 text-white font-semibold'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Categories ({PRODUCTS.length})
            </button>

            {CATEGORIES.map((cat) => {
              const count = PRODUCTS.filter(p => p.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    category === cat.id
                      ? 'bg-navy-900 text-white font-semibold'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat.name} ({count})
                </button>
              );
            })}
          </div>

          {/* Active Filter Chips & Counter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-slate-600 font-mono">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-navy-900 mr-1">
                Showing {filteredProducts.length} of {PRODUCTS.length} products
              </span>

              {/* Active removable filter chips */}
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="inline-flex items-center space-x-1 px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] border border-slate-300 transition-colors"
                  title="Remove search query"
                >
                  <span>Query: "{search}"</span>
                  <X className="w-3 h-3 text-slate-500" />
                </button>
              )}

              {category !== 'all' && (
                <button
                  onClick={() => setCategory('all')}
                  className="inline-flex items-center space-x-1 px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] border border-slate-300 transition-colors"
                  title="Remove category filter"
                >
                  <span>Category: {CATEGORIES.find(c => c.id === category)?.name}</span>
                  <X className="w-3 h-3 text-slate-500" />
                </button>
              )}

              {brand !== 'all' && (
                <button
                  onClick={() => setBrand('all')}
                  className="inline-flex items-center space-x-1 px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] border border-slate-300 transition-colors"
                  title="Remove brand filter"
                >
                  <span>Brand: {brand}</span>
                  <X className="w-3 h-3 text-slate-500" />
                </button>
              )}
            </div>

            {hasActiveFilters && (
              <button
                onClick={handleResetFilters}
                className="inline-flex items-center text-xs font-semibold text-accent-600 hover:text-accent-700 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5 mr-1" />
                <span>Reset all filters</span>
              </button>
            )}
          </div>

        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onViewDetails={onViewProductDetails}
              />
            ))}
          </div>
        ) : (
          /* Empty Search / Filter State */
          <div className="bg-white rounded-lg border border-dashed border-slate-300 p-12 text-center max-w-lg mx-auto">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-500 mx-auto flex items-center justify-center mb-4">
              <Search className="w-6 h-6 text-slate-400" />
            </div>
            <h3 className="text-lg font-bold text-navy-900 mb-1">
              No matching equipment found
            </h3>
            <p className="text-xs text-slate-500 mb-5 leading-relaxed">
              We couldn’t find any tools matching your search criteria. Try clearing some filters or searching with a broader keyword (e.g., "drill", "welding", "taparia").
            </p>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center px-4 py-2 rounded bg-navy-800 hover:bg-navy-900 text-white text-xs font-semibold shadow-subtle transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
              <span>Clear Search & Show All Tools</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
