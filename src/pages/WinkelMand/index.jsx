import React, { Component } from "react";
import request from 'superagent';
import WinkelmandItem from "../../components/WinkelmandItem";
import { Link } from "react-router-dom";

// layout
import LayoutAccount from "../../layout/Account";

// components
import SimpleHeading from "../../components/SimpleHeading";


class WinkelMand extends Component {
  constructor(props) {
    super(props);
    this.retrieveProduct = this.retrieveProduct.bind(this);
    this.productToState = this.productToState.bind(this);

    this.state = {
      loading: true,
      producten: []
    };

  }

  componentWillReceiveProps(nextProps) {
    const currentParams = this.props.match.params;
    const nextParams = nextProps.match.params;
    if (currentParams.page !== nextParams.page) {
      this.getProducts(nextParams.page,this.state.query);
    }

  }

  componentDidMount() {
    console.log("this.props", this.props);
    this.getProducts(this.props.match.params.page,this.state.query);

  }


  productToState(){
      const items = JSON.parse(window.localStorage.getItem('cart'));
      let result = [];

      for(let i = 0; i < items.length; i++){
        console.log(i + 'e element: ' + this.retrieveProduct(items[i].id));
        result.push(this.retrieveProduct(items[i].id));
      }

      console.log('prod to stat: ' + JSON.stringify(result));
      return result;
    }

    retrieveProduct(id){
      
      console.log('retrieve ' + id + ': ' + JSON.stringify(result.data));
      return result.data;
    }

    getProducts(page,query) {
      request
        .get(`http://localhost:5000/api/product?pageSize=9999`)
        .then(response => {
          this.setState({
            response: response.body,
            loading: false
          });
        });
    }

  render() {
    console.log('producten: ' + this.state.producten);
    return (   
      <React.Fragment>
        <LayoutAccount className="SignUp" simple>
          <div className="wrapper">
            <SimpleHeading
              title="Winkelmand"
              description="Een overzicht van de door u geselecteerde producten:"
            />
            <WinkelmandItem foto='https://www.tuinflora.com/media/catalog/product/cache/5/image/500x/9df78eab33525d08d6e5fb8d27136e95/F/D/FD16894WH_3.jpg' titel='Kanker geile plant' prijs='420' />
            <button>Plaats bestelling</button>
          </div>
        </LayoutAccount>
      </React.Fragment>
    );
  }
}
export default WinkelMand;