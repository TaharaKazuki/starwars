import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

import { type CuisineFilters } from '@/app/api/cuisines';

type CuisinesListFilterProps = {
  onChange: (filters: CuisineFilters) => void;
};

export const CuisinesListFilter = ({ onChange }: CuisinesListFilterProps) => {
  const [search, setSearch] = useState<CuisineFilters['search']>();
  const [category, setCategory] = useState<CuisineFilters['category'] | 'All'>(
    'All'
  );
  const [maxPrice, setMaxPrice] = useState<CuisineFilters['maxPrice'] | 'All'>(
    'All'
  );
  const [debouncedSearch] = useDebounce(search, 500);

  useEffect(() => {
    onChange({
      category: category === 'All' ? undefined : category,
      maxPrice: maxPrice === 'All' ? undefined : maxPrice,
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
        value={category}
        onChange={(e) =>
          setCategory(e.target.value as CuisineFilters['category'] | 'All')
        }
      >
        <option value="All">All</option>
        <option value="Japanese">Japanese</option>
        <option value="Italian">Italian</option>
        <option value="French">French</option>
      </select>
      <select
        value={maxPrice}
        onChange={(e) =>
          setMaxPrice(
            e.target.value === 'All' ? 'All' : parseInt(e.target.value)
          )
        }
      >
        <option value="10">$10</option>
        <option value="50">$50</option>
        <option value="100">$100</option>
      </select>
    </div>
  );
};
