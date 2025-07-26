import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
  setCategory,
  setPriceRange,
  setSortBy,
  setPage,
  setLimit,
} from '../store/filterSlice';
import { loadProducts } from '../store/productSlice';
import { useEffect } from 'react';

export default function useProducts() {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filters);
  const { products, loading, error } = useAppSelector(
    (state) => state.products,
  );

  useEffect(() => {
    dispatch(loadProducts());
  }, [filters, dispatch]);

  return {
    products,
    loading,
    error,
    setFilter: (category: string | null) => dispatch(setCategory(category)),
    setPriceRange: (range: [number, number]) => dispatch(setPriceRange(range)),
    setSort: (sort: string) => dispatch(setSortBy(sort)),
    nextPage: () => dispatch(setPage(filters.page + 1)),
    prevPage: () => dispatch(setPage(Math.max(1, filters.page - 1))),
    setLimit: (limit: number) => dispatch(setLimit(limit)),
    page: filters.page,
    limit: filters.limit,
    filters,
  };
}
