import { create } from 'zustand'
import { API_BASE_URL } from '../../constants';
import useUserStore from './userStore';

const useOrderItemStore = create((set) => ({
    orderItems: [],
    error: null,

    getOrderItemsByOrderId: async (id) => {
      const { user } = useUserStore.getState();
        try {
          const response = await fetch(`${API_BASE_URL}/orderitems/order/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user?.token}`
            }
          });
          const data = await response.json();
          set({ orderItems: data });
        } catch (error) {
          set({ error: error.message });
        }
      }

}))

export default useOrderItemStore;