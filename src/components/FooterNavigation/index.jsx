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
          <p className="contactfooter" >Hebt u vragen over onze webshop neem dan gerust contact met ons op<br/> via het onderstaand mailadres<br/>info@kamerplant.com </p>
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
              <NavLink activeClassName="is-active" to="/overzicht">
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
                to="/overzicht/categorie-1/subcategorie-3"
              >
                Registreren
              </NavLink>
              <NavLink
                activeClassName="is-active"
                to="/overzicht/categorie-1/subcategorie-4"
              >
                Mijn Account
              </NavLink>
              <NavLink
                activeClassName="is-active"
                to="/overzicht/categorie-1/subcategorie-3"
              >
                Contact
              </NavLink>
              <NavLink
                activeClassName="is-active"
                to="/overzicht/categorie-1/subcategorie-3"
              >
                placeholder
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