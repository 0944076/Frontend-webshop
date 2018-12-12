import React, { Component } from "react";
import { Link } from "react-router-dom";
import request from "superagent";



// layout
import LayoutDefault from "../../layout/Default";

// components
import Loading from "../../components/Loading";
import ProductGrid from "../../components/ProductGrid";
import Pagination from "../../components/Pagination";


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      response: null,
      response2: null,
      query: ''
      
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


  handleInputChange = () => {
    this.setState({
      query: this.search.value.toLowerCase(),
      
    })}
    
  handleInputClick = () => {
      this.setState({
        query: this.search.value.toLowerCase(),
        
      })
     
      this.handleInputFilter()
     
      }
      // this.state.response2 = this.state.response.filter(function(product) {
  
      //   //search is case sensitive atm
      //     return product.naam.toLowerCase().includes(querys);
      //     })
   handleInputFilter() {
    let querys = this.state.query;
    
  
      this.state.response2 = this.state.response.filter(function(product) {
            return product.naam;
            })

      this.state.response2 = this.state.response2.filter(function(product) {
          //search is case sensitive atm
            return product.naam.toLowerCase().includes(querys);
            })
    

      
      ;
  }

  getProducts(page,query) {
    // this.setState({
    //   response: null,
    //   loading: true
    // });
    //console.log(page);
    request
      .get(`http://localhost:5000/api/product?pageSize=1299`)
     // .get(`https://jsonplaceholder.typicode.com/users/`)
      .then(response => {
      //  var searchresult =  response.body.filter(function(product) {
        
        

      //   //search is case sensitive atm
      //   console.log("statefuck", query);
      //   return product.naam.includes(query);
       
      //   });
      console.log("response321", response);
        this.setState({
          //response: response.body,
          response: response.body,
          loading: false
        });
        console.log("response32", response.body);
      });
  }

  render() {
    const { loading, response2 } = this.state;
    return (
      
      <React.Fragment>
        
        <LayoutDefault simple="true" className="Search">
          <div className="wrapper">
          
        <input
          type='text'
          id='text'
          placeholder="Search for..."
          ref={input => this.search = input}
         //onKeyDown={this.handleInputChange}
         onKeyUp={this.handleInputChange}
        />

        <input type = "button" id = "go" 
        onClick={this.handleInputClick}
        />
     
        
      
            {loading ? (
              <Loading text="Producten ophalen..." />
            ) : response2 && response2 && response2.length > 0  ? (
              [
                <Pagination
                  perPage={response2.per_page}
                  totalPages={response2.total_pages}
                  currentPage={response2.page}
                  key="pagination"
             
                  //  .__(.)< (MEOW)
                  //   \___)   

                />,
                
                <ProductGrid items={response2} key="grid" />
                
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

export default Search;
