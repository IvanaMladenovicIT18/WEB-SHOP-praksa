import { create } from 'zustand'

const useCartStore = create((set) => ({
    cart: JSON.parse(localStorage.getItem('cart')) || [],

    addToCart: (product, quantity) => set((state) => {
        const existingProductIndex = state.cart.findIndex(item => item.id === product.id);
        let updatedCart;
        if (existingProductIndex >=0 ) {
            updatedCart = state.cart.map((item, index) => 
                index === existingProductIndex ? { ...item, quantity: item.quantity + quantity } : item
            );
        } else {
            updatedCart = [...state.cart, { ...product, quantity }]
        }
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return { cart: updatedCart };
    })

}));

export default useCartStore;