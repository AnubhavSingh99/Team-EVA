import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        cart: []
    },
    reducers: {
        addToCart : (state,action) => {
            state.cart.push(action.payload)
        }
        ,
        removeFromCart : (state, action) => {
            state.cart = state.cart.filter(x => x.id !== action.payload.id);
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.cart.find(x => x.id === id);
            if (item) {
                item.quantity = quantity;
            }
        }

    }
})

export default cartSlice.reducer;
export const {addToCart,removeFromCart,updateQuantity} = cartSlice.actions;