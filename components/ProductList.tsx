import React from 'react';
import { FlatList } from 'react-native';
import { Product } from '../store/productSlice';
import ProductCard from './ProductCard';

interface Props {
  products: Product[];
  onProductPress?: (id: string) => void;
}

export default function ProductList({ products, onProductPress }: Props) {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ProductCard product={item} onPress={() => onProductPress?.(item.id)} />
      )}
      ListEmptyComponent={null}
    />
  );
}
