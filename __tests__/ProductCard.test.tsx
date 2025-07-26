import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ProductCard from '../components/ProductCard';

const product = {
  id: '1',
  name: 'Test Product',
  price: 99.99,
  image: '',
  category: 'Electronics',
};

describe('ProductCard', () => {
  it('renders product details', () => {
    const { getByText } = render(<ProductCard product={product} />);
    expect(getByText('Test Product')).toBeTruthy();
    expect(getByText('$99.99')).toBeTruthy();
    expect(getByText('Electronics')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const onPress = jest.fn();
    const { getByText } = render(
      <ProductCard product={product} onPress={onPress} />,
    );
    fireEvent.press(getByText('Test Product'));
    expect(onPress).toHaveBeenCalled();
  });
});
