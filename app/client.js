import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyles } from './styles'
import App from './App'

import { HelmetProvider } from 'react-helmet-async';
const element = document.getElementById('app')
const app = (
  <HelmetProvider>
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </HelmetProvider>
)
ReactDOM.render(app, element)
// Enable Hot Module Reloading
if (module.hot) {
  module.hot.accept();
}
