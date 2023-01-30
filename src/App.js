import React, { Component } from 'react';
import { Route, Routes, } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components//Cart';
import Navbar from './components/Navbar';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Routes>
                    <Route exact path='/home' element={<Home />} />
                    <Route exact path='/Cart' element={<Cart />} />
                </Routes>
            </React.Fragment>
        );
    }
}

export default App;