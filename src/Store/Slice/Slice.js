import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    user : null,
    token : null,
    role : null
}

const authSlice = createSlice({
    name : 'auth',
    initialState,
        reducers : {
            userAuth : (state , action) => {
                state.user = action.payload.user
                state.token = action.payload.token
                state.role = action.payload.role
            }
        
    }
})

export const {userAuth} = authSlice.actions;
export default authSlice.reducer;