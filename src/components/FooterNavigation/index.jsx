import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class FooterNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null
    };
  }

  render() {
    return (
      <footer className="footer-navigation">
        <div className="wrapper">
        <div>
          <p className="contactfooter" > Heb je vragen, opmerkingen of klachten over de website, je online bestelling of retourzending,<br/> 
          neem dan contact met onze klantenservice. <br/>email: info@kamerplant.com 
          <br/> Telefoonnummer: +31-612345678 <br/> Adres: Wijnhaven 107, 3011 WN Rotterdam</p>
        </div>
          <div className="footer-navigation__columns">
            <div className="footer-navigation__list">
              <h4 className="footer-navigation__title">Categorieën</h4>
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
                to="/overzicht/categorie-1/subcategorie-3"
              >
                Bonsai
              </NavLink>
              <NavLink
                activeClassName="is-active"
                to="/overzicht/categorie-1/subcategorie-4"
              >
                Bloembollen
              </NavLink>
              <NavLink
                activeClassName="is-active"
                to="/overzicht/categorie-1/subcategorie-3"
              >
                rozen
              </NavLink>
              <NavLink
                activeClassName="is-active"
                to="/overzicht/categorie-1/subcategorie-3"
              >
                zaden
              </NavLink>
            </div>

            <div className="footer-navigation__list">
              <h4 className="footer-navigation__title">Pagina's</h4>
              <NavLink activeClassName="is-active" to="/">
                Home
              </NavLink>
              <NavLink
                activeClassName="is-active"
                to="/overzicht"
              >
                Producten
              </NavLink>
              <NavLink
                activeClassName="is-active"
                to="/SignUp"
              >
                Registreren
              </NavLink>
              <NavLink
                activeClassName="is-active"
                to="/inloggen"
              >
                Mijn Account
              </NavLink>
              <NavLink
                activeClassName="is-active"
                to="/winkelmand"
              >
                Winkelmand
              </NavLink>
              <NavLink
                activeClassName="is-active"
                to="/AboutUs"
              >
                About Us
              </NavLink>
              
            </div>
            
          </div>
        </div>
      </footer>
      
    );
  }
}

export default FooterNavigation;











            {/* <div className="footer-navigation__list">
              <h4 className="footer-navigation__title">Categorie 1</h4>
              <NavLink
                activeClassName="is-active"
                to="/overzicht/categorie-3/subcategorie-1"
              >
                Subcategorie 1
              </NavLink>
              <NavLink
                activeClassName="is-active"
                to="/overzicht/categorie-3/subcategorie-2"
              >
                Subcategorie 2
              </NavLink>
              <NavLink
                activeClassName="is-active"
                to="/overzicht/categorie-3/subcategorie-3"
              >
                Subcategorie 3
              </NavLink>
              <NavLink
                activeClassName="is-active"
                to="/overzicht/categorie-3/subcategorie-4"
              >
                Subcategorie 4
              </NavLink> */}