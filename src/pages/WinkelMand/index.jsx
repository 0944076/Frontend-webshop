import React, { Component } from "react";
import axios from 'axios';
import WinkelmandItem from "../../components/winkelmandItem";
import BetaalOverzichtItem from "../../components/BetaalOverzichtItem";
import Loader from '../../components/Loading';

// layout
//import LayoutAccount from "../../layout/Account";
import LayoutDefault from '../../layout/Default';

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
    this.increaseAmount = this.increaseAmount.bind(this);
    this.decreaseAmount = this.decreaseAmount.bind(this);
    this.updateLocal = this.updateLocal.bind(this);

    this.state = {
      loading: true,
      producten: [],
      aantallen: []
    };

    this.productToState();

  }


  productToState(){
      const items = JSON.parse(window.localStorage.getItem('cart'));
      //console.log('Lokaal: ' + JSON.stringify(items));
      let result = [];
      let aantal  = [];
      if(items !== null){
        for(let i = 0; i < items.length; i++){
          //product ophalen
          // eslint-disable-next-line
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
                //console.log('Aantallen voor state set: ' + JSON.stringify(aantal));
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
        //console.log('Vergelijk: ' + QArray[i].id + 'met: ' + id)
        if(QArray[i].id === id){
          outcome = true;
        }
      }
      return outcome;
    }

    getTotal(){
      let total = 0;// eslint-disable-next-line
      this.state.producten.map((product)=>{
        //console.log('telt: ' + JSON.stringify(product));
        for(let i = 0; i < this.state.aantallen.length; i++){
          //console.log('aantal object: ' + JSON.stringify(this.state.aantallen[i]));
          if(product.res.id === this.state.aantallen[i].id){
            //console.log('producten ' + product.res.id + ' kosten: ' + (product.res.prijs * parseInt(this.state.aantallen[i].aantal)).toString());
            total  = total + (product.res.prijs * parseInt(this.state.aantallen[i].aantal));
          }
        }
      });
      //console.log('TOTAAL: ' + total);
      return total;
    }

    getAmount(id){
      for(let i = 0; i < this.state.aantallen.length; i++){
        if(this.state.aantallen[i].id === id){
         return this.state.aantallen[i].aantal;
        }
      }
    }

    increaseAmount(id){
      console.log('Increase: ' + id);
      for(let i = 0; i < this.state.aantallen.length; i++){
        if(this.state.aantallen[i].id === id){
         const nieuwAantal = parseInt(this.state.aantallen[i].aantal) + 1;// eslint-disable-next-line
         this.setState(this.state.aantallen[i] = {id: this.state.aantallen[i].id, aantal: nieuwAantal});
        }
      }
      this.updateLocal();
    }

    decreaseAmount(id){
      console.log('Increase: ' + id);
      for(let i = 0; i < this.state.aantallen.length; i++){
        if(this.state.aantallen[i].id === id){
          if(this.state.aantallen[i].aantal > 1){
            const nieuwAantal = parseInt(this.state.aantallen[i].aantal) - 1;// eslint-disable-next-line
            this.setState(this.state.aantallen[i] = {id: this.state.aantallen[i].id, aantal: nieuwAantal});
            break;
          } else {
            //Remove aantallen object
            const aantallenArray = this.state.aantallen;
            console.log('aantallenArray: ' + JSON.stringify(aantallenArray));
            console.log('Haalt: ' + this.state.aantallen[i].id + ' weg.');
            const newArray = aantallenArray.splice(i,1);

            const productenArray = this.state.producten;
            let newProductArray;
            for(let x = 0; x < productenArray.length; x++){
              console.log('Op iteratie ' + x + ' vinden wij: ' + JSON.stringify(productenArray[x]));
              if(productenArray[x].res.id === id){
                console.log('product ' + id + ' uit state verwijderen.');
                newProductArray = productenArray.splice(x,1);
                break;
              }
            }

            //Update state
            this.setState({producten: newProductArray});
            this.setState({aantallen: newArray});
            break;
          }
        }
      }
      this.updateLocal();
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
      //console.log('aantallen :' + JSON.stringify(this.state.aantallen));
    }

    //Te roepen na increase- en decrease functies om localStorage aan de state gelijk te zetten
    updateLocal(){
      let localArray = [];
      for(let i = 0; i < this.state.aantallen.length; i++){
        localArray.push({id: this.state.aantallen[i].id, qty: this.state.aantallen[i].aantal});
      }
      window.localStorage.setItem('cart', JSON.stringify(localArray));
      console.log('Local items: ' + JSON.stringify(window.localStorage.getItem('cart')));
      console.log('stateAantallen: ' + JSON.stringify(this.state.aantallen));
      this.setState(this.state);
    }

  render() {
    if (!this.state.loading){
      this.outputState();
      return (   
        <React.Fragment>
          <LayoutDefault className="SignUp" simple="true">
            <div className="wrapper">
              <SimpleHeading
                title="Winkelmand"
                description="Een overzicht van de door u geselecteerde producten:"
              />
              <div className="betaalOverzicht">
                  <h1>Betaal overzicht</h1>
                  <a href="/winkelmand"><img src="https://png.pngtree.com/svg/20160707/_refresh_55882.png" alt="refresh" className="refresh"/></a><br />
                  Totaal: <br />
                  <table>
                    <tbody>
                      {this.state.producten.map((item) => {
                        return <BetaalOverzichtItem naam={item.res.naam} aantal={this.getAmount(item.res.id)} prijs={item.res.prijs} />
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
                    return <WinkelmandItem 
                      id={item.res.id}
                      foto={item.res.foto} 
                      titel={item.res.naam} 
                      prijs={item.res.prijs} 
                      aantal={this.getAmount(item.res.id)} 
                      plus={this.increaseAmount}
                      min={this.decreaseAmount}
                    />
                  })}
                </div>
                <a href="/overzicht"><button>Klik hier om verder te winkelen</button></a>
              </div>
            </div>
          </LayoutDefault>
        </React.Fragment>
      );
    } else if (window.localStorage.getItem('cart') === null || JSON.parse(window.localStorage.getItem('cart')).length === 0) {
      return (
      <React.Fragment>
        <LayoutDefault className="SignUp" simple="true">
          <div className="wrapper">
            <SimpleHeading
              title="Winkelmand"
              description="U heeft nog geen producten aan uw winkelmand toegevoegd."
            />
            <a href="/overzicht"><button>Klik hier om verder te winkelen</button></a>
          </div>
        </LayoutDefault>
        
      </React.Fragment>
      );
    } else {
      return <Loader />
    }
  }
}
export default WinkelMand;