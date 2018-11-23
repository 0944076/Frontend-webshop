import React, { Component } from "react";
import { Link } from "react-router-dom";
import request from "superagent";
import Get from "../../components/Requester";

// layout
import LayoutDefault from "../../layout/Default";

// components
import Loading from "../../components/Loading";
import ProductGrid from "../../components/ProductGrid";
import Pagination from "../../components/Pagination";

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      response: null
    };
  }

  componentWillReceiveProps(nextProps) {
    const currentParams = this.props.match.params;
    const nextParams = nextProps.match.params;
    if (currentParams.page !== nextParams.page) {
      this.getProducts(nextParams.page);
    }
  }

  componentDidMount() {
    console.log("this.props", this.props);
    this.getProducts(this.props.match.params.page);
  }

  getProducts(page) {
    this.setState({
      response: null,
      loading: true
    });
    console.log(page);
    
    fetch(`http://localhost:5000/api/product/5`)
      .then(res => {console.log("1",res)})
      .catch(err => {console.log("2",err)})

  
    
    request
      .get(`http://localhost:5000/api/product/5`)
      .then(response => {

        console.log("response2", response.body);

        
        

        

        this.setState({
          response: response.body,
          loading: false
        });
      });
  }

  render() {
    const { loading, response } = this.state;
    return (
      <React.Fragment>
        
        <LayoutDefault simple="true" className="overview">
          <div className="wrapper">
            {loading ? (
              <Loading text="Producten ophalen..." />
            ) : response ? (
              [
                <Pagination
                  perPage={response.per_page}
                  totalPages={response.total_pages}
                  currentPage={response.page}
                  key="pagination"
                />,
                
                <ProductGrid items={response} key="grid" />
                
              ]
            ) : (
              <p>Geen producten gevonden...</p>
            )}
                        {/* <Get
            //url="http://kamerplant.me:5000/api/klant"
            url="http://127.0.0.1:5000/api/product/"
           // url="https://jsonplaceholder.typicode.com/users/" //basis url voor de get request, hierachter wordt id gezet
            id="2" //klant id
            listofdata = {["data.id","data.naam","data.prijs"]}
            /> */}
          </div>
        </LayoutDefault>
        
      </React.Fragment>
    );
  }
}

export default Overview;
