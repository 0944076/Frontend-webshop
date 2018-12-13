import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    const { simple } = this.props;
    const cartAmount = window.localStorage.getItem('cart')
      ? JSON.parse(window.localStorage.getItem('cart')).length
      : 0;
    return (
      <header className={`header${simple ? ' header--simple' : ''}`}>
        <div className="wrapper">
          <h1 className="header__logo">
            <Link to="/">
              <img
                //src=""
                //alt="Kamerplanten inc"
                //title="Kamerplanten inc"
              />
            </Link>
          </h1>
          <div className="header__navigation">
            <NavLink exact activeClassName="is-active" to="/">
              Home
            </NavLink>
            <div className="dropdown">
              <button className="dropbtn is-active ">Producten</button>
              <div className="dropdown-content">
              <NavLink activeClassName="is-active" to="/overzicht">
                Kamerplanten
              </NavLink>
              <NavLink
                activeClassName="is-active"
                to="/overzicht"
              >
                Fruitbomen
              </NavLink>
              <NavLink
                activeClassName="is-active"
                to="/overzicht"
              >
                Bonsai
              </NavLink>
              <NavLink
                activeClassName="is-active"
                to="/overzicht"
              >
                Bloembollen
              </NavLink>
              <NavLink
                activeClassName="is-active"
                to="/overzicht"
              >
                Rozen
              </NavLink>
              <NavLink
                activeClassName="is-active"
                to="/overzicht"
              >
                Zaden
              </NavLink>
              </div>
            </div>
            
            <NavLink exact activeClassName="is-active" to="/SignUp">
              Registreren
              </NavLink>
              <NavLink exact activeClassName="is-active" to="/Search">
              Search
            </NavLink>
            <NavLink exact activeClassName="is-active" to="/inloggen">
              Mijn account
            </NavLink>
            <NavLink exact activeClassName="is-active" to="/winkelmand">
              Winkelmand ({cartAmount})
            </NavLink>
            <NavLink exact activeClassName="is-active" to="/WishList">
              WishList 
            </NavLink>
            <NavLink exact activeClassName="is-active" to="/AboutUs">
              About Us
            </NavLink>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
