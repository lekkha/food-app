import { createSlice } from "@reduxjs/toolkit";

//slice 

const cartSlice = createSlice({
    name: "cart",

    initialState: {
        items: []
    },

    reducers: {
        //add action whereever required 
        addItem: (state, action) => {
            //mutating the state(directly modifying )
            state.items.push(action.payload);
        },

        removeItem: (state) => {
            state.items.pop();
        },

        clearItem: (state) => {
            state.items.length = 0;
        },
    },

});

export const { addItem, removeItem, clearItem } = cartSlice.actions;

export default cartSlice.reducer; 