import React, { Component } from "react";
import axios from 'axios';
import WinkelmandItem from "../../components/WinkelmandItem";
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

    this.state = {
      loading: true,
      producten: []
    };

    this.productToState();

  }


  productToState(){
      const items = JSON.parse(window.localStorage.getItem('cart'));
      console.log('Lokaal: ' + JSON.stringify(items));
      let result = [];

      for(let i = 0; i < items.length; i++){
        const product = this.retrieveProduct(items[i].id)
        .then((res) => {
          result.push({product: res, aantal: items[i].qty});
          //console.log('result array:' + result.map((element) => JSON.stringify(element)));
          if(result.length === items.length){  
            this.setState({producten: result});
            this.setState({loading: false});
          }
          }
        );
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
      console.log('Lengte state: ' + stateObject.length);
      console.log('producten onderdeel: ' + JSON.stringify(stateObject[0]));
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
                      <tr>
                        <td>Verzending:</td>
                        <td>€4,95</td>
                      </tr>
                      <tr>
                        <td>Totaal excl. BTW:</td>
                        <td>€104,95</td>
                      </tr>
                      <tr>
                        <td>6% BTW: </td>
                        <td>€6</td>
                      </tr>
                      <tr>
                        <td><b>Totaal incl. BTW:</b></td>
                        <td><b>€110,95</b></td>                    
                      </tr>
                    </tbody>
                  </table>   
                  <button>Plaats bestelling</button>
              </div>
              <div className="paginaFrame">
                <div className="mandFrame">
                  <WinkelmandItem foto='https://www.tuinflora.com/media/catalog/product/cache/5/image/500x/9df78eab33525d08d6e5fb8d27136e95/F/D/FD16894WH_3.jpg' titel='Kanker geile plant' prijs='420' /><br />
                  <WinkelmandItem foto='https://www.tuinflora.com/media/catalog/product/cache/5/image/500x/9df78eab33525d08d6e5fb8d27136e95/F/D/FD16894WH_3.jpg' titel='Kanker geile plant' prijs='420' /><br />
                  <WinkelmandItem foto='https://www.tuinflora.com/media/catalog/product/cache/5/image/500x/9df78eab33525d08d6e5fb8d27136e95/F/D/FD16894WH_3.jpg' titel='Kanker geile plant' prijs='420' /><br />
                  <WinkelmandItem foto='https://www.tuinflora.com/media/catalog/product/cache/5/image/500x/9df78eab33525d08d6e5fb8d27136e95/F/D/FD16894WH_3.jpg' titel='Kanker geile plant' prijs='420' /><br />
                  <WinkelmandItem foto='https://www.tuinflora.com/media/catalog/product/cache/5/image/500x/9df78eab33525d08d6e5fb8d27136e95/F/D/FD16894WH_3.jpg' titel='Kanker geile plant' prijs='420' /><br />
                  <WinkelmandItem foto='https://www.tuinflora.com/media/catalog/product/cache/5/image/500x/9df78eab33525d08d6e5fb8d27136e95/F/D/FD16894WH_3.jpg' titel='Kanker geile plant' prijs='420' /><br />
                  <WinkelmandItem foto='https://www.tuinflora.com/media/catalog/product/cache/5/image/500x/9df78eab33525d08d6e5fb8d27136e95/F/D/FD16894WH_3.jpg' titel='Kanker geile plant' prijs='420' /><br />
                  <WinkelmandItem foto='https://www.tuinflora.com/media/catalog/product/cache/5/image/500x/9df78eab33525d08d6e5fb8d27136e95/F/D/FD16894WH_3.jpg' titel='Kanker geile plant' prijs='420' /><br />
                  <WinkelmandItem foto='https://www.tuinflora.com/media/catalog/product/cache/5/image/500x/9df78eab33525d08d6e5fb8d27136e95/F/D/FD16894WH_3.jpg' titel='Kanker geile plant' prijs='420' /><br />
                  <WinkelmandItem foto='https://www.tuinflora.com/media/catalog/product/cache/5/image/500x/9df78eab33525d08d6e5fb8d27136e95/F/D/FD16894WH_3.jpg' titel='Kanker geile plant' prijs='420' /><br />
                  <WinkelmandItem foto='https://www.tuinflora.com/media/catalog/product/cache/5/image/500x/9df78eab33525d08d6e5fb8d27136e95/F/D/FD16894WH_3.jpg' titel='Kanker geile plant' prijs='420' /><br />
                  <WinkelmandItem foto='https://www.tuinflora.com/media/catalog/product/cache/5/image/500x/9df78eab33525d08d6e5fb8d27136e95/F/D/FD16894WH_3.jpg' titel='Kanker geile plant' prijs='420' /><br />
                  <WinkelmandItem foto='https://www.tuinflora.com/media/catalog/product/cache/5/image/500x/9df78eab33525d08d6e5fb8d27136e95/F/D/FD16894WH_3.jpg' titel='Kanker geile plant' prijs='420' /><br />
                  <WinkelmandItem foto='https://www.tuinflora.com/media/catalog/product/cache/5/image/500x/9df78eab33525d08d6e5fb8d27136e95/F/D/FD16894WH_3.jpg' titel='Kanker geile plant' prijs='420' /><br />
                  <WinkelmandItem foto='https://www.tuinflora.com/media/catalog/product/cache/5/image/500x/9df78eab33525d08d6e5fb8d27136e95/F/D/FD16894WH_3.jpg' titel='Kanker geile plant' prijs='420' /><br />
                </div>
              </div>
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