import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Product } from '../types/product'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
        getProductById: builder.query<Product, string>({
            query: (id) => `product/${id}`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductByIdQuery } = productApi