import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import theme from '../styles/theme';

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
      <TouchableOpacity
        style={[styles.button, page <= 1 && styles.buttonDisabled]}
        onPress={prevPage}
        disabled={page <= 1 || loading}
      >
        <Text style={styles.buttonText}>Prev</Text>
      </TouchableOpacity>
      <Text style={styles.page}>Page {page}</Text>
      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={nextPage}
        disabled={loading}
      >
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      {loading && (
        <ActivityIndicator
          style={{ marginLeft: 12 }}
          size="small"
          color="#3461b2"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: theme.spacing.lg,
  },
  page: {
    marginHorizontal: theme.spacing.md,
    fontWeight: 'bold',
    color: theme.colors.text,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.lg,
    borderRadius: 16,
    marginHorizontal: theme.spacing.xs,
  },
  buttonDisabled: {
    backgroundColor: theme.colors.surface,
  },
  buttonText: {
    color: theme.colors.background,
    fontWeight: 'bold',
    fontSize: theme.fontSizes.small,
  },
});
