import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseURL = "https://localhost:5000"

export const worksApi = createApi({
    reducerPath: "worksApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
    endpoints: (builder) => ({
        getWorks: builder.query({
            query: () => "/api/works"
        })
    })
})

export const { useGetWorksQuery } = worksApi