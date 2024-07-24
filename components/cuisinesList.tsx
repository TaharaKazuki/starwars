import Image from 'next/image';

import { Cuisines } from '@/type/cuisine';

type CuisineListProps = {
  cuisines: Cuisines[];
};

export default function ProductList({ cuisines }: CuisineListProps) {
  return (
    <div className="flex flex-row flex-wrap gap-4">
      {cuisines.map((cuisine) => (
        <div
          key={cuisine.id}
          className="flex w-[250px] flex-col gap-4 rounded-md bg-gray-700 p-4"
        >
          <div className="flex flex-row justify-between">
            <div>
              <h2 className="text-xl font-bold">{cuisine.name}</h2>
              <p className="opacity-50">{cuisine.category}</p>
            </div>
            <p>${cuisine.price}</p>
          </div>
          <Image
            src={cuisine.image}
            alt={cuisine.name}
            className="rounded-md"
          />
        </div>
      ))}
    </div>
  );
}
