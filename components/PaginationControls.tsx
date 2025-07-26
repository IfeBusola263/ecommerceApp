import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

interface Props {
  page: number;
  nextPage: () => void;
  prevPage: () => void;
  loading: boolean;
}

export default function PaginationControls({
  page,
  nextPage,
  prevPage,
  loading,
}: Props) {
  return (
    <View style={styles.container}>
      <Button title="Prev" onPress={prevPage} disabled={page <= 1 || loading} />
      <Text style={styles.page}>Page {page}</Text>
      <Button title="Next" onPress={nextPage} disabled={loading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
  },
  page: {
    marginHorizontal: 16,
    fontWeight: 'bold',
  },
});
