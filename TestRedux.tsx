import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAppDispatch, useAppSelector } from './store/hooks';
import {
  setCategory,
  setPriceRange,
  setSortBy,
  setPage,
  setLimit,
  resetFilters,
} from './store/filterSlice';
import { loadProducts } from './store/productSlice';

export default function TestRedux() {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filters);
  const products = useAppSelector((state) => state.products);

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontWeight: 'bold' }}>Filters:</Text>
      <Text>{JSON.stringify(filters, null, 2)}</Text>
      <Button
        title="Set Category: shoes"
        onPress={() => dispatch(setCategory('shoes'))}
      />
      <Button
        title="Set Price Range: 10-100"
        onPress={() => dispatch(setPriceRange([10, 100]))}
      />
      <Button
        title="Set Sort: price-desc"
        onPress={() => dispatch(setSortBy('price-desc'))}
      />
      <Button title="Set Page: 2" onPress={() => dispatch(setPage(2))} />
      <Button title="Set Limit: 5" onPress={() => dispatch(setLimit(5))} />
      <Button title="Reset Filters" onPress={() => dispatch(resetFilters())} />
      <Text style={{ fontWeight: 'bold', marginTop: 16 }}>Products:</Text>
      <Text>{JSON.stringify(products, null, 2)}</Text>
      <Button title="Load Products" onPress={() => dispatch(loadProducts())} />
    </View>
  );
}
