import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryd: ''
    };
  }
  handleInputChange = () => {
    this.setState({
      queryd: this.search.value.toLowerCase(),
      
    });
  }


    
  handleInputClick = () => {
      this.setState({
        queryd: this.search.value.toLowerCase(),
        
      })
     
      //this.handleInputFilter()
     
      }

  //  handleInputFilter() {
  //   let queryds = this.state.queryd;
  //  // <Link to={`/search/${queryds}`} className="search-command-header"/> 
      
  //   }

  

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
            <input
                type='text'
                id='text'
                placeholder="Search for..."
                ref={input => this.search = input}
                //onKeyDown={this.handleInputChange}
                onKeyUp={this.handleInputChange}
            />
            {/* <input type = "button" id = "go" 
              onClick=
             /> */}
              <Link to={`/search/${queryd}`}>
            <Button size='small' color='green'>
                <p>Click Me!</p>
            </Button>
             </Link>
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
