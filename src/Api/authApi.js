import baseApi from "./baseapi";


const Authuser = baseApi.injectEndpoints({
        endpoints : (builder) => ({
            Createuser : builder.mutation({
                query : (data) => ({
                url : "/api/v1/user/register",
                method : "POST",
                body : data
                })
               
            }),

            loginuser : builder.mutation({
                query : (data) => ({
                    url : "/api/v1/user/login",
                    method : "POST",
                    body : data
                })
            })
        })
})

export const {useCreateuserMutation , useLoginuserMutation} = Authuser