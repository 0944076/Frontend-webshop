import React, { Component } from "react";
import request from "superagent";



// layout
import LayoutDefault from "../../layout/Default";

// components
import Loading from "../../components/Loading";
import ProductGrid from "../../components/ProductGrid";
//import Pagination from "../../components/Pagination";


class Search extends Component {
  constructor(props) 
  {
    super(props);
    this.state = {
      loading: true,
      response: null,
      response2: null,
      cat: null
      
      
    };
    
  }
  componentDidUpdate(prevProps) 
  {
    if(this.props.match.params.queryd !==
      prevProps.match.params.queryd)
    {
      this.setState(
        {
        cat: null
        })
      this.handleInputFilter();
    }
  } 
  componentWillReceiveProps(nextProps) 
  {
    const currentParams = this.props.match.params;
    const nextParams = nextProps.match.params;
    if (currentParams.page !== nextParams.page) 
    {
      this.getProducts(nextParams.page);
    }
  }

  componentDidMount() 
  {
    console.log("this.props", this.props);
    this.getProducts(this.props.match.params.page);
    this.handleInputFilter();
  }

    
  handleInputClick = () => 
  {
    this.handleInputFilter()
  }


  handleInputChange = () => 
  {
    this.setState({
      cat: parseInt(this.search.value)
      
    })
  }

  handleInputFilter() 
  {
    let querys = this.props.match.params.queryd
    let cats = this.state.cat
    if (this.state.response && cats != null)
    {
      this.setState(
        {
        response2: this.state.response.filter(function(product)
          {
          return (product.naam && product.categorieID && product.naam.toLowerCase().includes(querys) && (product.categorieID == (cats)));
          }),
          cat: null
        })
        
    }
    else if(this.state.response)
    {
      this.setState(
        {
        response2: this.state.response.filter(function(product)
          {
          return (product.naam && product.categorieID && product.naam.toLowerCase().includes(querys));
          }),
        })
        
    }
  }


  async getProducts(page,query) 
  {// eslint-disable-next-line
    const res = await
    request
      .get(`http://localhost:5000/api/product?pageSize=9999`)
      .then(response => 
      {
        this.setState(
          {
          response: response.body,
          loading: false
          });
        
      });
      this.handleInputFilter()
  }

  render() 
  {
    // console.log("response2",this.state.response2)
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
                // <Pagination
                //   perPage={response2.per_page}
                //   totalPages={response2.total_pages}
                //   currentPage={response2.page}
                //   key="pagination"
             
                //   //  .__(.)< (MEOW)
                //   //   \___)   

                // />,
                
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
