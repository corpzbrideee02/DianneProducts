import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
import { getProducts } from './components/actions/actions'
import App from './App'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider} from '@mui/material/styles';
import {theme} from './components/theme';
import Home from './components/Home';
import Cart from './components//Cart';
import Products from './components/Products';

//Dispatch the getProducts() before our root component renders
store.dispatch(getProducts())

ReactDOM.render(
    <Provider store={ store }>
      <BrowserRouter>
      <ThemeProvider theme={theme}>
      <Routes>
        
      <Route exact path="" element={<Home />} />
      <Route exact path='/products' element={<Products />} />
       <Route exact path='/Cart' element={<Cart />} />
      </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </Provider>, document.getElementById('root')
);
