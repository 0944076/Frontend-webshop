import React, { Component } from "react";
import LayoutAccount from "../../layout/Account";
import SimpleHeading from "../../components/SimpleHeading";
import request from 'superagent';

class BestelGeschiedenis extends Component {
  constructor(props) {
    super(props);
    this.retrieveClientOrders = this.retrieveClientOrders.bind(this);
    this.state = {
    };
    this.retrieveClientOrders();
  }

  retrieveClientOrders(){
      request.get('http://localhost:5000/api/bestelling/')
      .then((res) => {
        let klant = sessionStorage.getItem('klantID');
          const alleBestellingen = res.text;
          console.log('alle bestelingen: ' + alleBestellingen);
          for(let i = 0; i < alleBestellingen.length; i++){
            if(alleBestellingen[i].id === klant.id){
                console.log("Klant " + klant.id + " heeft besteld: " + alleBestellingen);
            }
          }
      });
  }

  render() {
      
    return (
        <div className= "mandjeItem">
            {this.state.klantID}
        </div>
    );
  }
}

export default BestelGeschiedenis;
