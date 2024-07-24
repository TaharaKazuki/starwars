import { useState } from 'react';

import { type CuisineFilters } from '@/app/api/cuisines';

const CuisinesListFilter = () => {
  const [search, setSearch] = useState<CuisineFilters['search']>();
  const [category, setCategory] = useState<CuisineFilters['category']>();
  const [maxPrice, setMaxPrice] = useState<CuisineFilters['maxPrice']>();

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

export default CuisinesListFilter;
