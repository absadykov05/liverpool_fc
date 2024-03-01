import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react' 

export const liverpoolApi = createApi({ 

  reducerPath: 'liverpool', 

  baseQuery: fetchBaseQuery({ baseUrl: "https://currency-exchange.p.rapidapi.com" }), 

  endpoints: (builder) => ({ 
	getMatches: builder.query({
		query: () => `/exchange?from=USD&to=KZT&q=1.0`
	}),	
  }) 

});

export const {useGetMatchesQuery} = liverpoolApi