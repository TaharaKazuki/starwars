import { CUISINES } from './data/cuisinesData';

export type CuisineFilters = {
  category?: 'Japanese' | 'Italian' | 'French' | 'All';
  maxPrice?: number;
  search?: string;
};

export type Cuisine = {
  id: number;
  name: string;
  category?: 'Japanese' | 'Italian' | 'French' | 'All';
  price: number;
  image: string;
};

export const fetchCuisines = async (
  options?: CuisineFilters
): Promise<Cuisine[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  let filteredCuisines = CUISINES;

  if (options?.category && options.category !== 'All') {
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
