import React, { Component } from 'react';
import { Route, Routes, } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components//Cart';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Typography from "@mui/material/Typography";
class App extends Component {
    render() {
        return (
            <React.Fragment>
               
                <Routes>
                    <Route exact path='/products' element={<Products />} />
                    <Route exact path='/Cart' element={<Cart />} />
                </Routes>
            </React.Fragment>
        );
    }
}

export default App;