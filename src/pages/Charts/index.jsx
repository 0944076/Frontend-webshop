import React, { Component } from 'react';
import request from 'superagent';
import { Link } from "react-router-dom";
import Plot from 'react-plotly.js';


// layout
import LayoutDefault from '../../layout/Default';


// components
import PageHero from '../../components/PageHero';
import Loading from '../../components/Loading';
import ProductGrid from '../../components/ProductGrid';
import SimpleHeading from '../../components/SimpleHeading';

class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      response: null,
      x: [],
      y: [],
      data: []
    };
  }

  
  componentDidMount() {
    this.getProducts();

   
  }


  async getProducts(page) 
  {// eslint-disable-next-line
    const res = await
    request.get(`http://localhost:5000/api/bestelling`)
    .then(response => {
      this.setState({
        response: response.body
      });
      console.log("response13", response.body);
      let bestellingcount = [];
      let bestellingprijs = [];
      for (let i = 0; i < response.body.length; i++) {
        bestellingcount.push(response.body[i].id);
      }
      for (let i = 0; i < response.body.length; i++) {
        bestellingprijs.push(response.body[i].prijs);
      }
      this.setState({
        x: bestellingcount,
        y: bestellingprijs,
        loading: false
      });
  
      console.log("bestellingcount", bestellingcount);
      console.log("bestellingprijs", bestellingprijs);
    });
  };

  

  render() {
    const { loading, response, x, y} = this.state;
    if (x.length === 0) {
      return null
    }
    console.log("x,y", x,y);
    return (
      <React.Fragment>
        <LayoutDefault className="charts">
        <PageHero
            intro
            title="Welkom!"
            description="Welkom bij kamerplant inc. De website voor al uw exclusieve planten."
            image="https://www.zoover.nl/blog/wp-content/uploads/2017/12/Kamperen-in-Kroati%C3%AB-Plitvicemeren.jpeg"
          />
                      {loading ? (
              <Loading text="Producten ophalen..." />
            ) : response && x && x.length > 0 && response.length > 0  ? (
              [
   
             
                //   //  .__(.)< (MEOW)
                //   //   \___)   

                <Plot
                data={[
                  {
                    x: x,
                    y: y,
                    type: 'bar',
                    marker: {color: 'red'},
                  }
                ]}
                layout={ {width: 820, height: 640, title: 'Bestellingen en prijs'} }
              />
                 
              ]
            ) : (
              <p>loading</p>
            )}
          {}

          

          <div className="wrapper_h">
            <div className="not-found">
              <p className="not-found__description">
              </p>
            </div>
          </div>
        </LayoutDefault>
      </React.Fragment>
    );
  }
}

export default Charts;
