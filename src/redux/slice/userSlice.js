import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:null,
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        signup: (state,action) => {
           state.user = action.payload
        },
        signout: (state) => {
            state.user = null;
            localStorage.clear();
        }
    }
})

export const {signup,signout} = userSlice.actions;
export default userSlice.reducer;