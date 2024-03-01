import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react' 

export const newsApi = createApi({ 
  reducerPath: 'api', 

  baseQuery: fetchBaseQuery({ baseUrl: "https://currencyconverter.p.rapidapi.com/?from_amount=1&from=USD&to=SEK",
   prepareHeaders: (headers, { getState }) => {
      headers.set('Content-Type', 'application/json')
      headers.set('4ad836ce85mshf8aa6c4b4a4a731p1df334jsnf6687a397d99', 'currencyconverter.p.rapidapi.com')
      return headers
    }
  }), 

  endpoints: (builder) => ({ 
	getNews: builder.query({
		query: () => ({
      url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
      params: {
        term: 'coin'
      },
      headers: {
        'X-RapidAPI-Key': '4ad836ce85mshf8aa6c4b4a4a731p1df334jsnf6687a397d99',
        'X-RapidAPI-Host': 'liverpool-latest-articles.p.rapidapi.com'
      }
    })
	}),	
  }) 

});
console.log('I am loading something');
export const {useGetNewsQuery} = newsApi