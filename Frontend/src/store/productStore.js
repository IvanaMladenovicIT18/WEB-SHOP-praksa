import { create } from 'zustand'
import { API_BASE_URL } from './../../constants';

const useProductStore = create((set) => ({
    products: [],
    product: null,
    loading: false,
    error: null,

    getAllProducts: async () => {
        set({ loading: true });
        try {
            const response = await fetch(`${API_BASE_URL}/products`);
            const data = await response.json();
            const sortedProducts = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            const latestProducts = sortedProducts.slice(0, 4);
            set({ products: latestProducts, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false })
        }
    },

    getProductById: async (id) => {
        set({ loading: true });
        try {
          const response = await fetch(`${API_BASE_URL}/products/${id}`);
          const data = await response.json();
          set({ product: data, loading: false });
        } catch (error) {
          set({ error: error.message, loading: false });
        }
      },

    getProductsByCategory: async (categoryId) => {
        set({ loading: true });
        try {
            const response = await fetch(`${API_BASE_URL}/products/category/${categoryId}`);
            const data = await response.json();
            set({ products: data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    }

}))

export default useProductStore;