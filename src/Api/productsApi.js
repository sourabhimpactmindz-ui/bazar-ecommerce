import baseApi from "./baseapi";



const Prdoucts = baseApi.injectEndpoints({
        endpoints : (builder) => ({
            getProducts : builder.query({
                query : () => ({
                    url : "/api/v1/product/get-product",
                    method : "GET",

                }),
                providesTags : ["Provide"]
            })
        })
})

export const {useGetProductsQuery} = Prdoucts