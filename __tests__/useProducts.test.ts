import { renderHook, act } from '@testing-library/react-hooks';
import useProducts from '../hooks/useProducts';
import * as productService from '../api/productService';

jest.mock('../api/productService');

const mockProducts = [
  { id: '1', name: 'Test', price: 10, image: '', category: 'A' },
];

describe('useProducts', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should set loading true while fetching', async () => {
    (productService.getProducts as jest.Mock).mockResolvedValueOnce(
      mockProducts,
    );
    const { result, waitForNextUpdate } = renderHook(() => useProducts());
    expect(result.current.loading).toBe(true);
    await waitForNextUpdate();
    expect(result.current.loading).toBe(false);
    expect(result.current.products).toEqual(mockProducts);
  });

  it('should set error on fetch failure', async () => {
    (productService.getProducts as jest.Mock).mockRejectedValueOnce('Error');
    const { result, waitForNextUpdate } = renderHook(() => useProducts());
    await waitForNextUpdate();
    expect(result.current.error).toBeDefined();
    expect(result.current.products).toEqual([]);
  });
});
