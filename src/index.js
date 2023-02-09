import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
import { getProducts } from './components/actions/actions'
import { Routes, Route, HashRouter } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './components/theme';
import Home from './components/Home';
import Cart from './components//Cart';
import Products from './components/Products';
import PageNotFound from '../src/404.png';
import Container from '@mui/material/Container';
//Dispatch the getProducts() before our root component renders
store.dispatch(getProducts())

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/Cart' element={<Cart />} />
          <Route
              path="*"
              element={
                  <Container maxWidth="sm">
                   <img src={PageNotFound} width="500" alt="Page Not found"/>
                </Container>
              }/>
        </Routes>
      </ThemeProvider>
    </HashRouter>
  </Provider>, document.getElementById('root')
);
