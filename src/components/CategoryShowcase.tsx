import React from 'react';
import { 
  Zap, 
  Wrench, 
  Flame, 
  Disc, 
  ShieldCheck, 
  Settings, 
  ArrowUpRight,
  Info
} from 'lucide-react';
import { CATEGORIES } from '../data/products';
import { CategoryId } from '../types';

interface CategoryShowcaseProps {
  onSelectCategory: (categoryId: CategoryId) => void;
}

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({ onSelectCategory }) => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-6 h-6 text-accent-500" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-accent-500" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-accent-500" />;
      case 'Disc':
        return <Disc className="w-6 h-6 text-accent-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-accent-500" />;
      case 'Settings':
      default:
        return <Settings className="w-6 h-6 text-accent-500" />;
    }
  };

  return (
    <section id="categories" className="py-16 sm:py-20 bg-industrial-light border-b border-industrial-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-industrial-border gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 text-accent-600 font-mono text-xs uppercase tracking-wider font-semibold mb-2">
              <span>Equipment Taxonomy</span>
            </div>
            <h2 className="font-condensed font-bold uppercase text-3xl sm:text-4xl text-navy-950 tracking-tight">
              Core Industrial Categories
            </h2>
            <p className="mt-2 text-sm sm:text-base text-industrial-muted max-w-2xl font-sans">
              Explore primary equipment categories supplied for manufacturing, engineering, and workshop operations in Coimbatore.
            </p>
          </div>

          <div className="flex items-center text-xs text-industrial-muted font-mono bg-white px-3 py-2 rounded border border-industrial-border shadow-subtle">
            <Info className="w-4 h-4 text-accent-500 mr-2 flex-shrink-0" />
            <span>Click any category to filter catalogue</span>
          </div>
        </div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              role="button"
              tabIndex={0}
              onClick={() => onSelectCategory(cat.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectCategory(cat.id);
                }
              }}
              className="group relative bg-white border border-industrial-border rounded-lg overflow-hidden shadow-subtle hover:shadow-card hover:border-navy-600 focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all duration-200 cursor-pointer flex flex-col"
            >
              {/* Category Image Header */}
              <div className="relative h-44 w-full overflow-hidden bg-navy-950">
                <img
                  src={cat.imageUrl}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 filter brightness-90 group-hover:brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-3 left-3 w-10 h-10 rounded bg-navy-900/90 backdrop-blur-sm border border-navy-700 flex items-center justify-center shadow-subtle">
                  {getCategoryIcon(cat.iconName)}
                </div>

                {/* Item Count Chip */}
                <div className="absolute bottom-3 right-3 bg-navy-900/80 backdrop-blur-sm px-2.5 py-1 rounded text-xs font-mono text-slate-300">
                  {cat.itemCount} Featured Items
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-navy-900 group-hover:text-accent-600 transition-colors">
                      {cat.name}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-accent-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <p className="text-xs font-medium text-accent-600 font-mono mt-1">
                    {cat.tagline}
                  </p>

                  <p className="text-xs text-industrial-muted mt-2.5 leading-relaxed line-clamp-2">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-industrial-border flex items-center justify-between text-xs font-semibold text-navy-800 group-hover:text-accent-600">
                  <span>View Products</span>
                  <span className="font-mono text-slate-400 text-[11px]">→ Filter</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

