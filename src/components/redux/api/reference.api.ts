import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { ICategoryResponse } from "../../models/ICategoryResponse"

export const referenceApi = createApi({
    reducerPath: "refereance/api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://127.0.0.1:8000/api/",
    }),
    endpoints: build => ({
        categories: build.query<ICategoryResponse, number>({
            query: (id: number) => ({
                url: `category/`,
                per_page: 10
            })
        })
    })
})


export const {useCategoriesQuery} = referenceApi