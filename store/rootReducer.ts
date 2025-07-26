import { combineReducers } from '@reduxjs/toolkit';
import filterReducer from './filterSlice';
import productReducer from './productSlice';

const rootReducer = combineReducers({
  filters: filterReducer,
  products: productReducer,
  // Add other slices here
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
