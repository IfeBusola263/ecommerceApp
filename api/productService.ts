import { Product } from '../types';
import productsData from './mock/products.json';

const MOCK_PRODUCTS: Product[] = productsData;

export async function getProducts(
  page: number,
  filters: { category?: string; priceRange?: [number, number] },
  sortBy?: string,
): Promise<Product[]> {
  let products = [...MOCK_PRODUCTS];
  if (filters.category) {
    products = products.filter((p) => p.category === filters.category);
  }
  if (filters.priceRange && Array.isArray(filters.priceRange)) {
    const [min, max] = filters.priceRange ?? [0, 999];
    products = products.filter((p) => p.price >= min && p.price <= max);
  }
  if (sortBy === 'price-asc') {
    products.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    products.sort((a, b) => b.price - a.price);
  }
  // Pagination
  const limit = 20;
  const start = (page - 1) * limit;
  return products.slice(start, start + limit);
}

export async function getProductById(id: string): Promise<Product | undefined> {
  return MOCK_PRODUCTS.find((p) => p.id === id);
}
