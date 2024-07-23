import { create } from "zustand";
import { API_BASE_URL } from "../../constants";


const useUserStore = create((set) => ({
    user: JSON.parse(localStorage.getItem('userInfo')) || null,
    error: null,

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
            return { user: data };
            
        } catch (error) {
            set({ error: error.message });
            throw error;
        }
    }
}))

export default useUserStore;