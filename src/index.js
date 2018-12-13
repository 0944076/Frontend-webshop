import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css';

// pages
import Home from './pages/Home';
import Overview from './pages/Overview';
import ProductSingle from './pages/ProductSingle';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound';
import WishList from './pages/WishList';
import Search from './pages/Search';
import WinkelMand from './pages/WinkelMand';
import Payment from './pages/Payment';


// styles
import './styles.scss';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/overzicht" component={Overview} />
      <Route exact path="/overzicht/pagina/:page" component={Overview} />
      <Route exact path="/product/:id" component={ProductSingle} />
      <Route exact path="/inloggen" component={Login} />
      <Route exact path="/SignUp" component={SignUp} />
      <Route exact path="/AboutUs" component={AboutUs} />
      <Route exact path="/WishList" component={WishList} />
      <Route exact path="/Search" component={Search} />
      <Route exact path="/Search/:queryd" component={Search} />
      <Route exact path="/winkelmand" component={WinkelMand} />
      <Route exact path="/Payment" component={Payment} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
