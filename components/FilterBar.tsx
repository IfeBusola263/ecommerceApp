import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import theme from '../styles/theme';

interface Props {
  category: string | null;
  priceRange: [number, number];
  setCategory: (cat: string | null) => void;
  setPriceRange: (range: [number, number]) => void;
}

const categories = [
  { label: 'All', value: null },
  { label: 'Shoes', value: 'shoes' },
  { label: 'Hats', value: 'hats' },
  { label: 'Shirts', value: 'shirts' },
  { label: 'Apparel', value: 'apparel' },
  { label: 'Electronics', value: 'electronics' },
];

export default function FilterBar({
  category,
  priceRange,
  setCategory,
  setPriceRange,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Category:</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.chipRow}
      >
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat.label}
            style={[styles.chip, category === cat.value && styles.chipActive]}
            onPress={() => setCategory(cat.value)}
          >
            <Text
              style={[
                styles.chipText,
                category === cat.value && styles.chipTextActive,
              ]}
            >
              {cat.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Text style={styles.label}>Price Range:</Text>
      <View style={styles.priceRow}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={priceRange[0].toString()}
          onChangeText={(val) =>
            setPriceRange([Number(val) || 0, priceRange[1]])
          }
        />
        <Text style={{ marginHorizontal: 8 }}>-</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={priceRange[1].toString()}
          onChangeText={(val) =>
            setPriceRange([priceRange[0], Number(val) || 0])
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.md,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: theme.spacing.xs,
    color: theme.colors.text,
  },
  chipRow: {
    flexDirection: 'row',
    marginBottom: theme.spacing.sm,
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
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.surface,
    borderRadius: 8,
    padding: theme.spacing.xs,
    width: 60,
    textAlign: 'center',
    backgroundColor: theme.colors.background,
  },
});
