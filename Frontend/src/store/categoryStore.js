import { create } from 'zustand'

const useCategoryStore = create((set) => ({
    categories: [],
    loading: false,
    error: null,

    getAllCategories: async () => {
        set({ loading: true });
        try {
            const response = await fetch('http://localhost:5000/api/categories');
            const data = await response.json();
            set({ categories: data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false })
        }
    },

    getCategoryById: async (id) => {
        set({ loading: true });
        try {
          const response = await fetch(`https://api.example.com/categories/${id}`);
          const data = await response.json();
          set({ loading: false });
          return data;
        } catch (error) {
          set({ error: error.message, loading: false });
        }
      }

}))

export default useCategoryStore;