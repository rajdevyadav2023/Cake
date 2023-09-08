import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        details: {
            name: '',
            phone: '',
            email: '',
            address: '',
            login: false,
        },
        cart: [],
        history: [],
        notification: 0,
    },
    reducers: {
        // create profile action 
        createProfile:(state, action)=> {
            const { name, phone, email, address } = action.payload;
            state.details.name = name;
            state.details.email = email;
            state.details.phone = phone;
            state.details.address = address;
            state.details.login = true;
        },
        // edit profile action 
        editProfile: (state, action) => {
            const { name, phone, email, address } = action.payload;
            state.details.name = name;
            state.details.email = email;
            state.details.phone = phone;
            state.details.address = address;
        },
        // add to cart action 
        addToCart: (state, action) => {
            state.cart.push[action.payload];
            state.notification = + 1;
        },
        // delete from cart action 
        deleteFromCart: (state, action) => {
            const { id } = action.payload;
            const deletedItem = state.cart.find(item => item.id == id);
            if (deletedItem) {
                state.notification = - 1;
                return state.cart.filter(item => item.id != id);
            }
        }

    }
});

export const {editProfile, addToCart, deleteFromCart} = userSlice.actions;
export default userSlice.reducer ;