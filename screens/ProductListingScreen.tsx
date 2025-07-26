import React from 'react';
import { View, Text } from 'react-native';
import useProducts from '../hooks/useProducts';
import ProductList from '../components/ProductList';
import FilterBar from '../components/FilterBar';
import SortMenu from '../components/SortMenu';
import PaginationControls from '../components/PaginationControls';
import Loader from '../components/Loader';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

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
  );
}
