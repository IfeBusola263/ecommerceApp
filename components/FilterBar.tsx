import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface Props {
  category: string | null;
  priceRange: [number, number];
  setCategory: (cat: string | null) => void;
  setPriceRange: (range: [number, number]) => void;
}

export default function FilterBar({
  category,
  priceRange,
  setCategory,
  setPriceRange,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Category:</Text>
      <Picker
        selectedValue={category || ''}
        style={styles.picker}
        onValueChange={(value: string) => setCategory(value || null)}
      >
        <Picker.Item label="All" value="" />
        <Picker.Item label="Shoes" value="shoes" />
        <Picker.Item label="Hats" value="hats" />
        <Picker.Item label="Shirts" value="shirts" />
      </Picker>
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
    marginBottom: 16,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  picker: {
    height: 40,
    marginBottom: 8,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 4,
    width: 60,
  },
});
