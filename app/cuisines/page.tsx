'use client';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import { fetchCuisines, CuisineFilters } from '@/app/api/cuisines';
import { CuisineList } from '@/components/cuisines/CuisinesList';
import { CuisinesListFilter } from '@/components/cuisines/CuisinesListFilter';

const CuisinesPage = () => {
  const [search, setSearch] = useState<CuisineFilters['search']>();
  const [category, setCategory] = useState<CuisineFilters['category']>();
  const [maxPrice, setMaxPrice] = useState<CuisineFilters['maxPrice']>();

  const { data, isFetching } = useQuery({
    queryKey: ['cuisines', { category, maxPrice, search }],
    queryFn: () => fetchCuisines({ category, maxPrice, search }),
  });

  return (
    <div className="flex flex-col gap-2">
      <div>
        <h1 className="text-4xl font-bold">Cuisines</h1>
      </div>
      <CuisinesListFilter
        onChange={(filters) => {
          setCategory(filters.category);
          setMaxPrice(filters.maxPrice);
          setSearch(filters.search);
        }}
      />
      <div>
        {data && data.length > 0 && <CuisineList cuisines={data} />}
        {!data && isFetching && <p className="text-3xl">Loading...</p>}
        {(!data || data.length === 0) && !isFetching && (
          <p className="text-3xl">Nothing</p>
        )}
      </div>
    </div>
  );
};

export default CuisinesPage;
