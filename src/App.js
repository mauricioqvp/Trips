import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Rotas from './rotas';
import Header from './components/Header';

export default function App() {
 return (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Rotas />
    </BrowserRouter>
  </Provider>
 );
}