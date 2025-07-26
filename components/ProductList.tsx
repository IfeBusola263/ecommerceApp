import React, { useCallback } from 'react';
import { FlatList, StyleSheet, View, Text, RefreshControl, Animated } from 'react-native';
import { Product } from '../types';
import ProductCard from './ProductCard';
import theme from '../styles/theme';

interface Props {
  products: Product[];
  onProductPress?: (id: string) => void;
  refreshing?: boolean;
  onRefresh?: () => void;
}

export default function ProductList({
  products,
  onProductPress,
  refreshing = false,
  onRefresh,
}: Props) {
  const renderItem = useCallback(
    ({ item, index }) => (
      <Animated.View style={{ opacity: 1, transform: [{ scale: 1 }] }}>
        <ProductCard product={item} onPress={() => onProductPress?.(item.id)} />
      </Animated.View>
    ),
    [onProductPress],
  );

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      numColumns={2}
      contentContainerStyle={styles.grid}
      columnWrapperStyle={styles.row}
      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No products found.</Text>
        </View>
      }
      refreshControl={
        onRefresh ? (
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[theme.colors.primary]}
          />
        ) : undefined
      }
    />
  );
}

const styles = StyleSheet.create({
  grid: {
    paddingBottom: theme.spacing.lg,
  },
  row: {
    justifyContent: 'space-between',
    gap: theme.spacing.md,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.spacing.xl,
  },
  emptyText: {
    color: theme.colors.muted,
    fontSize: theme.fontSizes.medium,
    fontWeight: '500',
  },
});
