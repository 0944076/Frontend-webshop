import React, { Component } from "react";
import axios from 'axios';
import WinkelmandItem from "../../components/winkelmandItem";
import BetaalOverzichtItem from "../../components/BetaalOverzichtItem";
import { Link } from "react-router-dom";
import Loader from '../../components/Loading';

// layout
import LayoutAccount from "../../layout/Account";

// components
import SimpleHeading from "../../components/SimpleHeading";


class WinkelMand extends Component {
  constructor(props) {
    super(props);
    this.retrieveProduct = this.retrieveProduct.bind(this);
    this.productToState = this.productToState.bind(this);
    this.outputState = this.outputState.bind(this);
    this.isPresent = this.isPresent.bind(this);
    this.getAmount = this.getAmount.bind(this);
    this.getTotal = this.getTotal.bind(this);

    this.state = {
      loading: true,
      producten: [],
      aantallen: []
    };

    this.productToState();

  }


  productToState(){
      const items = JSON.parse(window.localStorage.getItem('cart'));
      console.log('Lokaal: ' + JSON.stringify(items));
      let result = [];
      let aantal  = [];
      if(items !== null){
        for(let i = 0; i < items.length; i++){
          //product ophalen
          const product = this.retrieveProduct(items[i].id)
          .then((res) => {
            if(this.isPresent(aantal, res.id)){
              //Producten toevoegen die al in het mandje zitten:
              for(let a = 0; a < aantal.length; a++){ //Vindt het juiste aantal object en update het aantal
                if(aantal[a].id === res.id){
                  const oudAantal = parseInt(aantal[a].aantal);
                  const nieuwAantal = oudAantal + parseInt(items[i].qty);
                  aantal[a].aantal = nieuwAantal.toString();
                }
              }
            } else {
              //Producten toevoegen die NOG NIET in het mandje zitten:
              result.push({res});
              aantal.push({id: res.id, aantal: items[i].qty});
            }
            
            //State setten
            if(i === items.length - 1){  
              console.log('Aantallen voor state set: ' + JSON.stringify(aantal));
              this.setState({producten: result});
              this.setState({loading: false});
              this.setState({aantallen: aantal});
            }
            }
          );
        }
      }
    }

    isPresent(QArray, id){
      let outcome = false;
      for(let i = 0; i < QArray.length; i++){
        console.log('Vergelijk: ' + QArray[i].id + 'met: ' + id)
        if(QArray[i].id === id){
          outcome = true;
        }
      }
      return outcome;
    }

    getTotal(){
      let total = 0;
      this.state.producten.map((product)=>{
        console.log('telt: ' + JSON.stringify(product));
        for(let i = 0; i < this.state.aantallen.length; i++){
          console.log('aantal object: ' + JSON.stringify(this.state.aantallen[i]));
          if(product.res.id == this.state.aantallen[i].id){
            console.log('producten ' + product.res.id + ' kosten: ' + (product.res.prijs * parseInt(this.state.aantallen[i].aantal)).toString());
            total  = total + (product.res.prijs * parseInt(this.state.aantallen[i].aantal));
          }
        }
      });
      console.log('TOTAAL: ' + total);
      return total;
    }

    getAmount(QArray, id){
      for(let i = 0; i < QArray.length; i++){
        if(QArray[i].id === id){
         return QArray[i].aantal;
        }
      }
    }

    async retrieveProduct(id){
      return await axios.get('http://localhost:5000/api/product/' + id)
      .then((res) =>{
        return res.data;
      });
    }

    outputState(){
      const stateObject = this.state.producten;
      console.log('Complete state: ' + JSON.stringify(stateObject));
      //console.log('Lengte state: ' + stateObject.length);
      //console.log('producten onderdeel: ' + JSON.stringify(stateObject[0]));
      console.log('aantallen :' + JSON.stringify(this.state.aantallen));
    }
  render() {
    if (!this.state.loading){
      this.outputState();
      return (   
        <React.Fragment>
          <LayoutAccount className="SignUp" simple>
            <div className="wrapper">
              <SimpleHeading
                title="Winkelmand"
                description="Een overzicht van de door u geselecteerde producten:"
              />
              <div className="betaalOverzicht">
                  <h1>Betaal overzicht</h1><br />
                  Totaal: <br />
                  <table>
                    <tbody>
                      {this.state.producten.map((item) => {
                        return <BetaalOverzichtItem naam={item.res.naam} aantal={this.getAmount(this.state.aantallen, item.res.id)} prijs={item.res.prijs} />
                      })}
                    </tbody>
                  </table>
                  <div className='line'></div>
                  <table>
                    <tbody>
                      <tr>
                        <td>Verzending:</td>
                        <td>€4,95</td>
                      </tr>
                      <tr>
                        <td>Totaal excl. BTW:</td>
                        <td>€{((this.getTotal()/106)*100 + 4.95).toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>6% BTW: </td>
                        <td>€{((this.getTotal()/106)*6).toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td><b>Totaal incl. BTW:</b></td>
                        <td><b>€{(this.getTotal() + 4.95).toFixed(2)}</b></td>                    
                      </tr>
                    </tbody>
                  </table>   
                  <button>Volgende stap...</button>
              </div>
              <div className="paginaFrame">
                <div className="mandFrame">
                
                  {this.state.producten.map((item) => {
                    return <WinkelmandItem foto={item.res.foto} titel={item.res.naam} prijs={item.res.prijs} aantal={this.getAmount(this.state.aantallen, item.res.id)} />
                  })}
                </div>
              </div>
            </div>
          </LayoutAccount>
        </React.Fragment>
      );
    } else if (window.localStorage.getItem('cart') === null) {
      return (
      <React.Fragment>
        <LayoutAccount className="SignUp" simple>
          <div className="wrapper">
            <SimpleHeading
              title="Winkelmand"
              description="U heeft nog geen producten aan uw winkelmand toegevoegd."
            />
          </div>
        </LayoutAccount>
      </React.Fragment>
      );
    } else {
      return <Loader />
    }
  }
}
export default WinkelMand;