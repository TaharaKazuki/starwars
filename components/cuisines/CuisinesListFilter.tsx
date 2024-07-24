import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

import { type CuisineFilters } from '@/app/api/cuisines';

type CuisinesListFilterProps = {
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
        <option value="first">First</option>
        <option value="second">Second</option>
        <option value="third">Third</option>
      </select>
      <select
        value={maxPrice}
        onChange={(e) =>
          setMaxPrice(e.target.value ? parseInt(e.target.value) : undefined)
        }
      >
        <option value="100">100</option>
        <option value="500">500</option>
        <option value="1000">1000</option>
      </select>
    </div>
  );
};
