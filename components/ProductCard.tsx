import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Product } from '../types';
import theme from '../styles/theme';

interface Props {
  product: Product;
  onPress?: () => void;
}

export default function ProductCard({ product, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.category}>{product.category}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: theme.spacing.md,
    borderRadius: 12,
    marginBottom: theme.spacing.md,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    ...theme.shadow,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginBottom: theme.spacing.sm,
    backgroundColor: theme.colors.surface,
  },
  name: {
    fontWeight: 'bold',
    fontSize: theme.fontSizes.medium,
    marginBottom: theme.spacing.xs,
    color: theme.colors.text,
  },
  price: {
    color: theme.colors.primary,
    fontWeight: 'bold',
    fontSize: theme.fontSizes.small,
    marginBottom: theme.spacing.xs,
  },
  category: {
    color: theme.colors.muted,
    fontSize: theme.fontSizes.small,
  },
});
