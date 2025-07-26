import { Product } from '../store/productSlice';

// Mock data
const MOCK_PRODUCTS: Product[] = [
  { id: '1', name: 'Shoe', price: 50, image: '', category: 'shoes' },
  { id: '2', name: 'Hat', price: 20, image: '', category: 'hats' },
  { id: '3', name: 'Shirt', price: 30, image: '', category: 'shirts' },
];

export async function getProducts(
  page: number,
  filters: { category?: string; priceRange?: [number, number] },
  sortBy?: string,
): Promise<Product[]> {
  // Filter and sort mock data
  let products = [...MOCK_PRODUCTS];
  if (filters.category) {
    products = products.filter((p) => p.category === filters.category);
  }
  if (filters.priceRange && Array.isArray(filters.priceRange)) {
    products = products.filter(
      (p) =>
        p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1],
    );
  }
  if (sortBy === 'price-asc') {
    products.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    products.sort((a, b) => b.price - a.price);
  }
  // Pagination (mock)
  const limit = 20;
  const start = (page - 1) * limit;
  return products.slice(start, start + limit);
}

export async function getProductById(id: string): Promise<Product | undefined> {
  return MOCK_PRODUCTS.find((p) => p.id === id);
}
