import productReducer from '../store/productSlice';

const initialState = {
  products: [],
  loading: false,
  error: null,
};

describe('productReducer', () => {
  it('should handle loadProducts.pending', () => {
    const action = { type: 'products/loadProducts/pending' };
    const state = productReducer(initialState, action);
    expect(state.loading).toBe(true);
    expect(state.error).toBeNull();
  });

  it('should handle loadProducts.fulfilled', () => {
    const products = [
      { id: '1', name: 'Test', price: 10, image: '', category: 'A' },
    ];
    const action = {
      type: 'products/loadProducts/fulfilled',
      payload: products,
    };
    const state = productReducer(initialState, action);
    expect(state.loading).toBe(false);
    expect(state.products).toEqual(products);
  });

  it('should handle loadProducts.rejected', () => {
    const action = { type: 'products/loadProducts/rejected', payload: 'Error' };
    const state = productReducer(initialState, action);
    expect(state.loading).toBe(false);
    expect(state.error).toBe('Error');
  });
});
