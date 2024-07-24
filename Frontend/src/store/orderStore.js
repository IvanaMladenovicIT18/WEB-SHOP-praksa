import { create } from "zustand";
import { API_BASE_URL } from "../../constants";
import useUserStore from './userStore';

const useOrderStore = create((set) => ({
    orders: [],
    order: null,
    loading: true,
    error: false,

    getOrdersByUser: async (id) => {
        const { user } = useUserStore.getState();
        set({ loading: true });
        try {
            const response = await fetch(`${API_BASE_URL}/orders/user/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user?.token}`
                }
            });
            const data = await response.json();
            set({ orders: data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },

    getOrderById: async (id) => {
        const { user } = useUserStore.getState();
        set({ loading: true });
        try {
          const response = await fetch(`${API_BASE_URL}/orders/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user?.token}`
            }
        });
          const data = await response.json();
          set({ loading: false });
          return data;
        } catch (error) {
          set({ error: error.message, loading: false });
        }
    },

    createOrder: async (userID, products) => {
        const { user } = useUserStore.getState();
        set({ loading: true });
        try {
            const response = await fetch(`${API_BASE_URL}/orders`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user?.token}`
                },
                body: JSON.stringify({ userID, products })
            });
            const data = await response.json();
            set({ order: data, loading: false });
            return data;
        } catch (error) {
            set({ error: error.message, loading:false });
        }
    }
}));

export default useOrderStore;