import * as React from "react"
import * as ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { store } from '../Redux/store'
import { Provider } from 'react-redux'
import { ApiProvider } from "@reduxjs/toolkit/query/react"
import {liverpoolApi} from '../Redux/Reducers/liverpoolApi.js'
import App from './App.jsx'
import Home from './Matches/Home.jsx'
import { News } from "./News/News.jsx"
import Team from './Team/Team.jsx'

import './index.css'
import './App.css'
import { currencyApi } from "../Redux/Reducers/currencyApi.js"
import { newsApi } from "../Redux/Reducers/newsApi.js"

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
          {
            path: '/matches',
            element: <Home/>,
          },
          {
            path: '/news',
            element: <News/>,
          },
          {
            path: '/team',
            element: <Team/>,
          },
          {
            path: '/shop',
            element: <div>You can order the best Liverpool stuff here!</div>,
          },
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <ApiProvider api = {newsApi}>
          <RouterProvider router={router}/>
        </ApiProvider> 
  </React.StrictMode>,
)
