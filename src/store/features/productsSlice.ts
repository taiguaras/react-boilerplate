import { createSlice } from '@reduxjs/toolkit';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const initialState: Product[] = [
  {
    id: 1,
    name: 'Classic T-Shirt',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    description: 'A comfortable and stylish classic t-shirt for everyday wear.'
  },
  {
    id: 2,
    name: 'Wireless Headphones',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'High-quality wireless headphones with noise cancellation.'
  },
  {
    id: 3,
    name: 'Smart Watch',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80',
    description: 'Feature-rich smartwatch with health tracking and notifications.'
  }
];

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export const selectAllProducts = (state: { products: Product[] }) => state.products;
export const selectProductById = (state: { products: Product[] }, productId: number) => 
  state.products.find(product => product.id === productId);

export default productsSlice.reducer; 