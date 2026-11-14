
import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseApi = createApi({
    reducerPath: "Api",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_API_URL}`,

        prepareHeaders: (headers) => {
            const token = localStorage.getItem("accessToken");
            if(token){
                headers.set("Authorization",`Bearer ${token}`);
            }
            return headers;
        }
    }),
    tagTypes : ["Provide"],
    endpoints : () => ({})
})

export default baseApi;