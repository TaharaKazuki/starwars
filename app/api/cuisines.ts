import { DebouncedState } from 'use-debounce';

import { CUISINES } from './data/cuisinesData';

export type CuisineFilters = {
  category?: 'Japanese' | 'Italian' | 'French';
  maxPrice?: number;
  search?: [
    string | undefined,
    // eslint-disable-next-line unused-imports/no-unused-vars
    DebouncedState<(value: string | undefined) => void>
  ];
};

export const fetchCuisines = async (options?: CuisineFilters) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  let filteredCuisines = CUISINES;

  if (options?.category) {
    filteredCuisines = filteredCuisines.filter((cuisine) => {
      return cuisine.category === options.category;
    });
  }

  if (options?.maxPrice) {
    filteredCuisines = filteredCuisines.filter((cuisine) => {
      return cuisine.price <= (options.maxPrice as number);
    });
  }

  if (options?.search) {
    filteredCuisines = filteredCuisines.filter((cuisine) => {
      return cuisine.name.toLowerCase().includes(options.search!.toLowerCase());
    });
  }

  return filteredCuisines;
};
