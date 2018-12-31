import React, { Component } from 'react';
import request from 'superagent';
import Plot from 'react-plotly.js';


// layout
import LayoutDefault from '../../layout/Default';


// components
import PageHero from '../../components/PageHero';
import Loading from '../../components/Loading';


class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      response: null,
      x: [],
      y: [],
      data: [],
      average: null,
      klantcount: null,
      geregistreerdeklantpercentage: null
    };
  }

  
  componentDidMount() {
    this.getProducts("api/bestelling");
    this.getProducts("api/geregistreerdeklant");
    this.setState(
      {
      loading: false
      })
   
  }


  async getProducts(link) 
  {// eslint-disable-next-line
    const res = await
    request.get(`http://localhost:5000/${link}`)
    .then(response => {
      this.setState({
        response: response.body
      });
      console.log("response13", response.body);
      if (link === "api/bestelling")
      {
      let bestellingcount = [];
      let bestellingprijs = [];
      let avg = 0;
      let avgscrewthisshit = [];
      for (let i = 0; i < response.body.length; i++) 
      {
        bestellingcount.push(response.body[i].id);
        bestellingprijs.push(response.body[i].prijs);
        avg = avg + response.body[i].prijs;
      }
      avgscrewthisshit.push(avg/response.body.length);
      this.setState({
        x: bestellingcount,
        y: bestellingprijs,
        average: avgscrewthisshit
      });
      console.log("bestellingcount", bestellingcount);
      console.log("bestellingprijs", bestellingprijs);
    }
    if (link === "api/geregistreerdeklant")
    {
      let klantcountarray = [];
      klantcountarray.push(response.body.length);
      this.setState({
        klantcount: klantcountarray
      });
    }
    });
  };

  

  render() {
    const { loading, response, x, y, average, klantcount} = this.state;
    if (x.length === 0 || average === null || klantcount === null) {
      return null
    }
    console.log("x,y", x,y,average);
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
                <div>
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
              <Plot
              data={[
                {
                  x: [1],
                  y: average,
                  type: 'bar',
                  marker: {color: 'orange'},
                }
              ]}
              layout={ {width: 320, height: 640, title: 'gemiddelde prijs'} }
            />
                          <Plot
              data={[
                {
                  x: [1],
                  y: klantcount,
                  type: 'bar',
                  marker: {color: 'yellow'},
                }
              ]}
              layout={ {width: 320, height: 640, title: 'Aantal geregistreerde klanten'} }
            />
                 </div>
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
