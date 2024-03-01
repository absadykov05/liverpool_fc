import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query' 
import gamesReducer from './Reducers/gamesReducer'
import {liverpoolApi} from './Reducers/liverpoolApi'
import { currencyApi } from './Reducers/currencyApi'
import { newsApi } from './Reducers/newsApi'

export const store = configureStore({
  reducer: {
	  games: gamesReducer,
    [liverpoolApi.reducerPath]: liverpoolApi.reducer,
    [currencyApi.reducerPath]: currencyApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
})