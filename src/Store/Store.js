import { configureStore} from "@reduxjs/toolkit"
import authReducer from "./Slice/Slice"
import baseApi from "../Api/baseapi";

const store = configureStore({
        reducer: {
            auth : authReducer,
            [baseApi.reducerPath] : baseApi.reducer
        
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
})

export default store;