import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
import { getProducts } from './components/actions/actions'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider} from '@mui/material/styles';
import {theme} from './components/theme';


//Dispatch the getProducts() before our root component renders
store.dispatch(getProducts())

ReactDOM.render(
    <Provider store={ store }>
      <BrowserRouter>
      <ThemeProvider theme={theme}>
      <App/>
      </ThemeProvider>
      </BrowserRouter>
    </Provider>, document.getElementById('root')
);
