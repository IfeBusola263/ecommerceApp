import filterReducer, {
  setCategory,
  setPriceRange,
  setSortBy,
  setPage,
  setLimit,
  resetFilters,
} from '../store/filterSlice';

describe('filterReducer', () => {
  it('should handle setCategory', () => {
    const state = filterReducer(undefined, setCategory('electronics'));
    expect(state.category).toBe('electronics');
  });

  it('should handle setPriceRange', () => {
    const state = filterReducer(undefined, setPriceRange([100, 500]));
    expect(state.priceRange).toEqual([100, 500]);
  });

  it('should handle setSortBy', () => {
    const state = filterReducer(undefined, setSortBy('price-desc'));
    expect(state.sortBy).toBe('price-desc');
  });

  it('should handle setPage', () => {
    const state = filterReducer(undefined, setPage(2));
    expect(state.page).toBe(2);
  });

  it('should handle setLimit', () => {
    const state = filterReducer(undefined, setLimit(50));
    expect(state.limit).toBe(50);
  });

  it('should reset filters', () => {
    const state = filterReducer(undefined, resetFilters());
    expect(state).toEqual({
      category: null,
      priceRange: [0, 1000],
      sortBy: 'price-asc',
      page: 1,
      limit: 20,
    });
  });
});
