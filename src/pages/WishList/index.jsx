import React, { Component } from "react";
import { Link } from "react-router-dom";
import SimpleHeading from "../../components/SimpleHeading";
import LayoutDefault from "../../layout/Default";
import PageHero from "../../components/PageHero";
import WishlistItem from "../../components/WishlistItem";

class WishList extends Component {
  constructor(props) {
    super(props);

    this.isLoggedIn = this.isLoggedIn.bind(this);

    this.state = {
    };


  }

  retrieveWishlist(){
    
  }

  isLoggedIn(){
    let sessieObject = JSON.parse(sessionStorage.getItem('SessieID'));
    if(sessieObject !== null && sessieObject.id > 0){
      return true;
    } else {
      return false;
    }
  }

  render() {
    if(!this.isLoggedIn()){
      return (
        <React.Fragment>
          <LayoutDefault>
            <PageHero
              type="small"
              image="https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=01a9a264e737622958245b0f55a6e943&auto=format&fit=crop&w=1920&q=100"
            />

            <div className="wrapper">
              <div className="not-found">
                <h1 className="not-found__title">U bent niet ingelogd</h1>
                <p className="not-found__description">
                  <Link to="/signup">Login met u account om u wishlist weer te geven.<br/></Link>
                </p>
              </div>
            </div>
          </LayoutDefault>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <LayoutDefault className="SignUp" simple="true">
            <div className="wrapper">
              <SimpleHeading
                title="Verlanglijstje"
                description="Een overzicht van de producten op uw verlanglijstje:"
              />           
            </div>
            <WishlistItem titel="kanker geile plant" prijs={69} foto="https://www.cnnbs.nl/wp-content/uploads/2015/09/revegged.jpg" />
          </LayoutDefault>
        </React.Fragment>
      );
    } 
  }
}

export default WishList;
