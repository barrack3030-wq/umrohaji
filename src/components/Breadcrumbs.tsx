import React from 'react';
import { PageRoute } from '../types';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  route?: PageRoute;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (route: PageRoute) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-0 text-xs text-stone-500 overflow-x-auto">
      <ol className="flex items-center space-x-1.5 whitespace-nowrap">
        <li>
          <button
            onClick={() => onNavigate('/')}
            className="flex items-center gap-1 hover:text-emerald-700 transition-colors cursor-pointer text-stone-600"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Beranda</span>
          </button>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center space-x-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
              {item.route && !isLast ? (
                <button
                  onClick={() => onNavigate(item.route!)}
                  className="hover:text-emerald-700 transition-colors cursor-pointer text-stone-600 font-medium"
                >
                  {item.label}
                </button>
              ) : (
                <span className="text-stone-800 font-semibold truncate max-w-[200px] sm:max-w-xs">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
