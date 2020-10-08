import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { store } from './store';
import { Enhanced } from './components/RestaurantsListPage/index';
import { Header } from './components/Header/Header';

export const App = () => (
  <Provider store={store}>
    <div className="page">
      <Header />
      <main className="content">
        <Enhanced />
      </main>
      <footer>Footer</footer>
    </div>
  </Provider>
);
