import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import theme from '../styles/theme';

interface ScreenHeaderProps {
  title: string;
  backButton?: boolean;
  onBackPress?: () => void;
  rightAction?: React.ReactNode;
}

export default function ScreenHeader({
  title,
  backButton,
  onBackPress,
  rightAction,
}: ScreenHeaderProps) {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View style={styles.row}>
          {backButton ? (
            <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
              <Text style={styles.backText}>{'<'} Back</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.spacer} />
          )}
          <Text style={styles.title}>{title}</Text>
          <View style={styles.right}>{rightAction}</View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: theme.spacing.lg,
    paddingHorizontal: theme.spacing.md,
    borderBottomLeftRadius: theme.spacing.lg,
    borderBottomRightRadius: theme.spacing.lg,
    backgroundColor: theme.colors.primary,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    paddingRight: theme.spacing.md,
  },
  backText: {
    color: theme.colors.background,
    fontWeight: 'bold',
    fontSize: theme.fontSizes.medium,
  },
  title: {
    color: theme.colors.background,
    fontWeight: 'bold',
    fontSize: theme.fontSizes.large,
    flex: 1,
    textAlign: 'center',
  },
  right: {
    minWidth: 32,
    alignItems: 'flex-end',
  },
  spacer: {
    width: 60,
  },
});
