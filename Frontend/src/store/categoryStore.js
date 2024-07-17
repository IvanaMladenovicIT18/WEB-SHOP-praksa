import { create } from 'zustand'
import { API_BASE_URL } from '../../constants';

const useCategoryStore = create((set) => ({
    categories: [],
    loading: false,
    error: null,

    getAllCategories: async () => {
        set({ loading: true });
        try {
            const response = await fetch(`${API_BASE_URL}/categories`);
            const data = await response.json();
            set({ categories: data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false })
        }
    },

    getCategoryById: async (id) => {
        set({ loading: true });
        try {
          const response = await fetch(`${API_BASE_URL}/categories/${id}`);
          const data = await response.json();
          set({ loading: false });
          return data;
        } catch (error) {
          set({ error: error.message, loading: false });
        }
      }

}))

export default useCategoryStore;