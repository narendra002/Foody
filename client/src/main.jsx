import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {NextUIProvider} from "@nextui-org/react";
import { store } from './ReduxFiles/Store.jsx'
import { Provider } from 'react-redux'
import "swiper/css/bundle";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <Provider store={store}>
    <App />
    </Provider>
    </NextUIProvider>
  </React.StrictMode>,
)