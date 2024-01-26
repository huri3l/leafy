import { Badge } from '@/components/ui/badge';
import { DrawerHeader } from '@/components/ui/drawer';
import { dict } from '@/content/dictionary';
import { __from, __to, useFilter } from '@/hooks/useFilter';
import { formatPrice } from '@/lib/utils';
import { X } from 'lucide-react';

export const FilterHeader = () => {
  const { removeTagFilter, removePriceFilter, hasFilters, tagFilters, priceFilters } = useFilter();

  const handleDelete = (filter: string) => {
    if (filter === __from || filter === __to) {
      removePriceFilter(filter);
    } else {
      removeTagFilter(filter);
    }
  };

  return (
    <DrawerHeader>
      <strong className="text-xl font-bold">{dict('general.filter')}</strong>

      {hasFilters && (
        <div className="mt-3 flex gap-2 flex-wrap pb-4 border-b-2 border-b-lf-gray-200">
          {tagFilters?.map((filter) => (
            <Badge key={filter} variant="secondary" className="gap-2">
              {filter}
              <button
                type="button"
                className="w-auto rounded-full bg-lf-gray-200"
                onClick={() => handleDelete(filter)}
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </Badge>
          ))}

          {priceFilters.from && (
            <Badge variant="secondary" className="gap-2">
              {dict('general.price.from', [formatPrice(Number(priceFilters.from))])}
              <button
                type="button"
                className="w-auto rounded-full bg-lf-gray-200"
                onClick={() => handleDelete(__from)}
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </Badge>
          )}

          {priceFilters.to && (
            <Badge variant="secondary" className="gap-2">
              {dict('general.price.to', [formatPrice(Number(priceFilters.to))])}
              <button
                type="button"
                className="w-auto rounded-full bg-lf-gray-200"
                onClick={() => handleDelete(__to)}
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </Badge>
          )}
        </div>
      )}
    </DrawerHeader>
  );
};
