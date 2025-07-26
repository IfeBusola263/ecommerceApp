import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { getProductById } from '../api/productService';
import { Product } from '../types';

export default function ProductDetailScreen() {
  const route = useRoute<RouteProp<{ params: { id: string } }, 'params'>>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    getProductById(route.params.id).then((result) =>
      setProduct(result ?? null),
    );
  }, [route.params.id]);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.category}>{product.category}</Text>
      {/* Add more details as needed */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 8,
  },
  price: {
    color: 'green',
    marginBottom: 8,
  },
  category: {
    color: '#888',
  },
});
