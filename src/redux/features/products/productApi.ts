import { api } from '@/redux/api/apiSlice';

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    // both are correct pattern. but we can not do the first one in mutation(post). In that case we have to use the 2nd method

    // method 1
    // singleProduct: builder.query({
    //   query: (id) =>  `/product/${id}` ,
    // }),

    // method 2
    singleProduct: builder.query({
      query: (id) => ({ url: `/product/${id}` }),
    }),

    // If the query callback needs additional data to generate the URL, it should be written to take a single argument. If you need to pass in multiple parameters, pass them formatted as a single "options object".
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['comments'],
    }),
    getComment: builder.query({
      query: (id) => ({ url: `/comment/${id}` }),
      providesTags: ['comments'],
    }),
  }),
});

export const {
  useGetCommentQuery,
  useGetProductsQuery,
  usePostCommentMutation,
  useSingleProductQuery,
} = productApi;
