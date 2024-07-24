import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

import { type CuisineFilters } from '@/app/api/cuisines';

type CuisinesListFilterProps = {
  // eslint-disable-next-line unused-imports/no-unused-vars
  onChange: (filters: CuisineFilters) => void;
};

export const CuisinesListFilter = ({ onChange }: CuisinesListFilterProps) => {
  const [search, setSearch] = useState<CuisineFilters['search']>();
  const [category, setCategory] = useState<CuisineFilters['category']>();
  const [maxPrice, setMaxPrice] = useState<CuisineFilters['maxPrice']>();
  const [debouncedSearch] = useDebounce(search, 500);

  useEffect(() => {
    onChange({
      category,
      maxPrice,
      search: debouncedSearch,
    });
  }, [category, debouncedSearch, maxPrice, onChange]);

  return (
    <div className="flex flex-row gap-2">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products"
      />
      <select
        value={category || ''}
        onChange={(e) =>
          setCategory(e.target.value as CuisineFilters['category'])
        }
      >
        <option>all</option>
        <option value="Japanese">Japanese</option>
        <option value="Italian">Italian</option>
        <option value="French">French</option>
      </select>
      <select
        value={maxPrice?.toString() || ''}
        onChange={(e) =>
          setMaxPrice(e.target.value ? parseInt(e.target.value) : undefined)
        }
      >
        <option>all</option>
        <option value="10">$10</option>
        <option value="50">$50</option>
        <option value="100">$100</option>
      </select>
    </div>
  );
};
