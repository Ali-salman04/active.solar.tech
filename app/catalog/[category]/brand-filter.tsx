'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

interface BrandFilterProps {
  brands: string[];
  selectedBrand: string;
  category: string;
}

export default function BrandFilter({ brands, selectedBrand, category }: BrandFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleBrandChange = useCallback((brand: string) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (brand === 'all') {
      params.delete('brand');
    } else {
      params.set('brand', brand);
    }

    const queryString = params.toString();
    const url = queryString ? `?${queryString}` : '';
    
    router.push(`/catalog/${category}${url}`);
  }, [router, searchParams, category]);

  return (
    <div className="mb-6">
      <label htmlFor="brand-select" className="block text-sm font-medium mb-2">
        Filter by Brand
      </label>
      <select
        id="brand-select"
        onChange={(e) => handleBrandChange(e.target.value)}
        value={selectedBrand}
        className="border border-gray-300 rounded-lg px-4 py-2 w-[200px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="all">All Brands</option>
        {brands.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </div>
  );
}