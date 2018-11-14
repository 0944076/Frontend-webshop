import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './navbar';
import Router from './router';
import Footer from './footer';
import Card from './card';
import { BrowserRouter } from 'react-router-dom';

var destination = document.querySelector('#root')

ReactDOM.render(
    
        <BrowserRouter>
        <div>            
    <Card/>
    <Navbar/>
    <Router/>
    <Footer/>
    
    </div>
    </BrowserRouter>

    
    
    
    

    ,destination
)