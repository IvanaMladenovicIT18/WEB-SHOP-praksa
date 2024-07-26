import { create } from "zustand";
import { API_BASE_URL } from "../../constants";
import useCartStore from "./cartStore";


const useUserStore = create((set) => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
    error: null,

    login: async (email, password) => {
        try {
            set({ error: null });

            const response = await fetch(`${API_BASE_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email, password})
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error);
            }

            const data = await response.json();
            localStorage.setItem('user', JSON.stringify(data));
            set({ user: data });
        } catch (error) {
            set({ error: error.message });
            throw error;
        }
    },

    register: async (name, surname, phoneNumber, address, email, password) => {
        try {
            set( { error: null });

            const response = await fetch(`${API_BASE_URL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, surname, phoneNumber, address, email, password})
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error);
            }

            const data = await response.json();
            localStorage.setItem('user', JSON.stringify(data));
            set({ user: data });
            
        } catch (error) {
            set({ error: error.message });
            throw error;
        }
    },

    logout: () => {
        localStorage.removeItem('user');
        useCartStore.getState().clearCart();
        set({ user: null });
    },

    updateUser: async (userData) => {
        try {
            set({ error: null });
            console.log(userData)

            const response = await fetch(`${API_BASE_URL}/users/profile`, { // Zameni '7' sa pravim ID-om korisnika
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user')).token}` // Dodaj token ako je potreban za autorizaciju
                },
                body: JSON.stringify(userData)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error);
            }

            const data = await response.json();
            localStorage.setItem('user', JSON.stringify(data)); // Ažuriraj podatke u localStorage
            set({ user: data });
        } catch (error) {
            set({ error: error.message });
            throw error;
        }
    }
}))

export default useUserStore;