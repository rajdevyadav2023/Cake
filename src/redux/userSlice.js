import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        details: {
            name: '',
            phone: '',
            email: '',
            address: '',
            password: '',
            login: false,
        },
        cart: [],
        history: [],
        notification: 0,
        notificationMessage: [],

    },
    reducers: {
        // create profile action 
        createProfile: (state, action) => {
            const { name, email, password } = action.payload;
            state.details.name = name;
            state.details.email = email;
            state.details.password = password
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

        // login account action 
        loginProfile: (state,action) => {
            state.details.login = action.payload.login;
        },

        // logout account action 
        logoutProfile: (state, action) => {
            state.details.login = action.payload.login;
        },

        // add to cart action 
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        // delete from cart action 
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id);
        },

    }
});

export const { editProfile, addToCart, removeFromCart, createProfile,loginProfile,logoutProfile } = userSlice.actions;
export default userSlice.reducer;