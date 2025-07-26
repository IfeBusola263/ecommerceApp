import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useProducts from '../hooks/useProducts';
import ProductList from '../components/ProductList';
import FilterBar from '../components/FilterBar';
import SortMenu from '../components/SortMenu';
import PaginationControls from '../components/PaginationControls';
import Loader from '../components/Loader';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import ScreenHeader from '../components/ScreenHeader';

export default function ProductListingScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {
    products,
    loading,
    error,
    setFilter,
    setPriceRange,
    setSort,
    filters,
    nextPage,
    prevPage,
  } = useProducts();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  const handleProductPress = (id: string) => {
    navigation.navigate('ProductDetail', { id });
  };

  return (
    <View style={styles.container}>
      <ScreenHeader title="Products" />
      <View style={{ flex: 1, padding: 16 }}>
        <FilterBar
          category={filters.category}
          priceRange={filters.priceRange}
          setCategory={setFilter}
          setPriceRange={setPriceRange}
        />
        <SortMenu sortBy={filters.sortBy} setSort={setSort} />
        <ProductList products={products} onProductPress={handleProductPress} />
        <PaginationControls
          page={filters.page}
          nextPage={nextPage}
          prevPage={prevPage}
          loading={loading}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
