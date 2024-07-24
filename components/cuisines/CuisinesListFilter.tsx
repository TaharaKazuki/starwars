import { useEffect, useState } from 'react';

import { type CuisineFilters } from '@/app/api/cuisines';
import { useDebounce } from '@/hooks/useDebounce';

type CuisinesListFilterProps = {
  // eslint-disable-next-line unused-imports/no-unused-vars
  onChange: (filters: CuisineFilters) => void;
};

export const CuisinesListFilter = ({ onChange }: CuisinesListFilterProps) => {
  const [search, setSearch] = useState<CuisineFilters['search']>();
  const [category, setCategory] = useState<CuisineFilters['category']>();
  const [maxPrice, setMaxPrice] = useState<CuisineFilters['maxPrice']>();
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    onChange({ category, maxPrice, search: debouncedSearch });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, debouncedSearch, maxPrice]);

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
          setCategory(e.target.value as CuisineFilters['category'])
        }
      >
        <option value="Japanese">Japanese</option>
        <option value="Italian">Italian</option>
        <option value="French">French</option>
      </select>
      <select
        value={maxPrice}
        onChange={(e) =>
          setMaxPrice(e.target.value ? parseInt(e.target.value) : undefined)
        }
      >
        <option value="10">$10</option>
        <option value="50">$50</option>
        <option value="100">$100</option>
      </select>
    </div>
  );
};
