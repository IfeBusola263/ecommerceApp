import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getProducts } from '../api/productService';
import { RootState } from './index';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

export const loadProducts = createAsyncThunk<
  Product[],
  void,
  { state: RootState; rejectValue: string }
>('products/loadProducts', async (_, { getState, rejectWithValue }) => {
  try {
    const state = getState();
    const { page, category, priceRange, sortBy } = state.filters;
    const products = await getProducts(
      page,
      { category: category ?? undefined, priceRange },
      sortBy,
    );
    return products;
  } catch (err) {
    return rejectWithValue('Failed to load products');
  }
});

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loadProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.loading = false;
          state.products = action.payload;
        },
      )
      .addCase(loadProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Unknown error';
      });
  },
});

export default productSlice.reducer;
