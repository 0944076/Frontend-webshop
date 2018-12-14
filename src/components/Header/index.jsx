import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryd: ''
    };
  }

  handleInputChange = () => 
  {
    this.setState(
    {
      queryd: this.search.value.toLowerCase(),
      
    });
  }

  preventHandler = (e) => 
  {
    
      e.preventDefault();
  }
  
  executeSearchEnter = (e) => 
  {
    if (e.key === 'Enter'){
      e.preventDefault();
      this.refs.but.click()
    }
  }
  

  render() {
    const { queryd } = this.state;
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
                alt=""
              />
            </Link>
          </h1>
          <div className="header__navigation">
              <Link to={`/search/${queryd}`}>
              <form>
                <div>
              <input
                type='text'
                id='text'
                placeholder="Search for..."
                onClick={ e => this.preventHandler(e) }
                onKeyPress={ e => this.executeSearchEnter(e) }
                onKeyUp={this.handleInputChange}
                ref={input => this.search = input}
            />
                <button type="button" ref="but">
                  Zoeken
                </button>
                </div>
                </form>
             </Link>
             
             
            <NavLink exact activeClassName="is-active" to="/">
              Home
            </NavLink>
            <div className="dropdown">
              <button className="dropbtn is-active ">Producten</button>
              <div className="dropdown-content">
              <NavLink activeClassName="is-active" to="/overzicht">
                Bloembollen
              </NavLink>
              <NavLink
                activeClassName="is-active"
                to="/fruitbomen"
              >
                Fruitbomen
              </NavLink>
              <NavLink
                activeClassName="is-active"
                to="/kamerplanten"
              >
                Kamerplanten
              </NavLink>
              <NavLink
                activeClassName="is-active"
                to="/rozen"
              >
                Rozen
              </NavLink>
              <NavLink
                activeClassName="is-active"
                to="/zaden"
              >
                Zaden
              </NavLink>
              
              </div>
            </div>
            
            <NavLink exact activeClassName="is-active" to="/SignUp">
              Registreren
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
