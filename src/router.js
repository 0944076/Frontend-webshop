import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import Categories from './categories';
import PlantSupport from './PlantSupport';
import Login from './login';
import Register from './register';
import Contact from './contact';
import Cart from './cart';
import About from './about';
//import Card from './card';

const Router = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/categories" component={Categories} />
        <Route path="/plantsupport" component={PlantSupport} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/contact" component={Contact} />
        <Route path="/cart" component={Cart} />
        <Route path="/about" component={About} />
        {/* <Route path="/card" component={Card} /> */}
        


        </Switch>

        
)

export default Router;