import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { getProductById } from '../api/productService';
import { Product } from '../types';
import ScreenHeader from '../components/ScreenHeader';
import theme from '../styles/theme';

export default function ProductDetailScreen() {
  const route = useRoute<RouteProp<{ params: { id: string } }, 'params'>>();
  const navigation = useNavigation();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    getProductById(route.params.id).then((result) =>
      setProduct(result ?? null),
    );
  }, [route.params.id]);

  if (!product) {
    return (
      <View style={styles.container}>
        <ScreenHeader
          title="Product Details"
          backButton
          onBackPress={() => navigation.goBack()}
        />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScreenHeader
        title="Product Details"
        backButton
        onBackPress={() => navigation.goBack()}
      />
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
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background,
  },
  name: {
    fontWeight: 'bold', // Use valid RN value
    fontSize: theme.fontSizes.large,
    marginBottom: theme.spacing.md,
    color: theme.colors.text,
  },
  price: {
    color: theme.colors.primary,
    marginBottom: theme.spacing.md,
    fontWeight: 'bold', // Use valid RN value
    fontSize: theme.fontSizes.medium,
  },
  category: {
    color: theme.colors.muted,
    fontSize: theme.fontSizes.medium,
  },
});
