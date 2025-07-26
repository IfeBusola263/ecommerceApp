import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../styles/theme';

interface Props {
  sortBy: string;
  setSort: (sort: string) => void;
}

const sortOptions = [
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
];

export default function SortMenu({ sortBy, setSort }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Sort By:</Text>
      <View style={styles.chipRow}>
        {sortOptions.map((opt) => (
          <TouchableOpacity
            key={opt.value}
            style={[styles.chip, sortBy === opt.value && styles.chipActive]}
            onPress={() => setSort(opt.value)}
          >
            <Text
              style={[
                styles.chipText,
                sortBy === opt.value && styles.chipTextActive,
              ]}
            >
              {opt.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.lg,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: theme.spacing.xs,
    color: theme.colors.text,
  },
  chipRow: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
  },
  chip: {
    paddingVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.md,
    borderRadius: 16,
    backgroundColor: theme.colors.surface,
    marginRight: theme.spacing.sm,
  },
  chipActive: {
    backgroundColor: theme.colors.primary,
  },
  chipText: {
    color: theme.colors.text,
    fontWeight: '500',
  },
  chipTextActive: {
    color: theme.colors.background,
  },
});
