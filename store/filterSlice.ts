import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FilterState {
  category: string | null;
  priceRange: [number, number];
  sortBy: string;
  page: number;
  limit: number;
}

const initialState: FilterState = {
  category: null,
  priceRange: [0, 1000],
  sortBy: 'price-asc',
  page: 1,
  limit: 20,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<string | null>) {
      state.category = action.payload;
    },
    setPriceRange(state, action: PayloadAction<[number, number]>) {
      state.priceRange = action.payload;
    },
    setSortBy(state, action: PayloadAction<string>) {
      state.sortBy = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setLimit(state, action: PayloadAction<number>) {
      state.limit = action.payload;
    },
    resetFilters() {
      return initialState;
    },
  },
});

export const {
  setCategory,
  setPriceRange,
  setSortBy,
  setPage,
  setLimit,
  resetFilters,
} = filterSlice.actions;
export default filterSlice.reducer;
