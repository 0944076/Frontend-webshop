import React, { Component } from "react";
import LayoutAccount from "../../layout/Account";
import SimpleHeading from "../../components/SimpleHeading";
import request from 'superagent';
import Loader from '../../components/Loading';
import BestelGeschiedenisItem from '../../components/BestelGeschiedenisItem';

class BestelGeschiedenis extends Component {
  constructor(props) {
    super(props);
    this.retrieveClientOrders = this.retrieveClientOrders.bind(this);

    this.state = {
      bestellingen: [],
      loading: true
    };

    this.retrieveClientOrders();
  }

  retrieveClientOrders(){
    const klant = JSON.parse(sessionStorage.getItem('klantID'));
    console.log('KlantID: ' + klant.id);
    request.get('http://localhost:5000/api/bestellingen/' + klant.id)
    .then((res) => {return JSON.parse(res.text)})
    .then((bestellingNummers) => { 

      let writeToState = [bestellingNummers.length];
      for (let i = 0; i < bestellingNummers.length; i++){
        request.get('http://localhost:5000/api/bestelling/' + bestellingNummers[i])
        .then((_bestelling) =>{return JSON.parse(_bestelling.text)})
        .then((bestelling) => {
          writeToState[i] = bestelling;

          if(writeToState[bestellingNummers.length - 1] === bestelling){
            console.log('Write to state array: ' + JSON.stringify(writeToState));
            this.setState({bestellingen: writeToState, loading: false});
          }
        });
      }
    });
  }

  render() {
    if(this.state.loading){
      return <Loader />
    } else {
      return (
        <div className="mandFrame">
         {this.state.bestellingen.map((item) => {
           return <BestelGeschiedenisItem klantID={item.klantID} producten={item.producten} geregistreerd={item.geregistreerd} adres={item.adres} prijs={item.prijs} datum='tijdelijke string'/>
         })}
        </div>
      );
    }
  }
}

export default BestelGeschiedenis;
