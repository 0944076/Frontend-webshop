import React, { Component } from 'react';
import request from 'superagent';

// layout
import LayoutDefault from '../../layout/Default';

// components
import PageHero from '../../components/PageHero';
import Loading from '../../components/Loading';
import ProductGrid from '../../components/ProductGrid';
import SimpleHeading from '../../components/SimpleHeading';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      response: null
    };
  }

  componentDidMount() {
    this.getFeaturedProducts();
  }

  getFeaturedProducts = () => {
    request.get(`https://reqres.in/api/product?per_page=3`).then(response => {
      this.setState({
        response: response.body,
        loading: false
      });
      console.log("response13", response);
      console.log("response14", response.data);
      console.log("response15", response.body.data);
    });
  };

  render() {
    const { loading, response } = this.state;
    return (
      <React.Fragment>
        <LayoutDefault className="home">
          <PageHero
            intro
            title="Welkom!"
            description="Welkom bij kamerplant inc. De website voor al je exlcusieve planten. Sterk door service zijn we gegroeid tot de webshop die we vandaag zijn"
            image="https://www.zoover.nl/blog/wp-content/uploads/2017/12/Kamperen-in-Kroati%C3%AB-Plitvicemeren.jpeg"
          />
          <div className="wrapper">
            {loading ? (
              <Loading text="Producten ophalen..." />
            ) : response && response && response.data.length > 0 ? (
              [
                <SimpleHeading
                  title="Actuele aanbiedingen"
                  description="Hier kunt u al onze actuele aanbiedingen vinden"
                  key="heading"
                />,
                <ProductGrid items={response.data} key="grid" />
              ]
            ) : (
              <p>Geen producten gevonden...</p>
            )}
          </div>
        </LayoutDefault>
      </React.Fragment>
    );
  }
}

export default Home;
