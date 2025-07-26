import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface Props {
  sortBy: string;
  setSort: (sort: string) => void;
}

export default function SortMenu({ sortBy, setSort }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Sort By:</Text>
      <Picker
        selectedValue={sortBy}
        style={styles.picker}
        onValueChange={(value: string) => setSort(value)}
      >
        <Picker.Item label="Price: Low to High" value="price-asc" />
        <Picker.Item label="Price: High to Low" value="price-desc" />
      </Picker>
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
  },
});
