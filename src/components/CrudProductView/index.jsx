import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import request from "superagent";
import Collapsible from 'react-collapsible';

// components
import Button from "../../components/Button";

class CrudProductView extends Component {
   constructor(props) {
    super(props);
    this.state = {
      session: null,
      isloading: true,
      products: []
    }
  }
  
componentDidMount(){
  this.fetchData();
}
fetchData(){

  request.get('http://localhost:5000/api/product/')
        
        .then(res => {
         
          var results = JSON.stringify(res.body.map(product =>
             ({
              id: `${product.id}` ,
              naam: `${product.naam}`,
              prijs: `${product.prijs}`,
              beschrijving: `${product.beschrijving}`,
              voorraad: `${product.voorraad}`,
              categorie: `${product.categorieID}`
              //wachtwoord: `${user.wachtwoord}`
             }
             
             )));
             var product1 = JSON.parse(results);
             this.setState({
              isLoaded: false,
              products: product1
            })
            
          console.log(this.state.products);
          //var localnaam = JSON.stringify(res.body.naam);
          //var localemail = JSON.stringify(this.state.email1);
          //var localpass = JSON.stringify(res.body.wachtwoord)
          
        //}).catch((err) => console.log('kon niet session ophalen'));
}).catch((err) => console.log('parsing failed',err));
}




render() {

  const {isLoading, products} = this.state;
  const { title, description } = this.props;
  console.log(this.state.products);
  return (   
  <div>
  
    <a href="http://localhost:3000/crud/product/create">
    <button class="button" >Product aanmaken</button></a>
      {
                
            products.map(product =>{
              const {id,naam,prijs,beschrijving,voorraad,categorieID} = product;
              return <Collapsible trigger={"ID: " + id + " " + "Naam: " + naam} key={id} title={naam}>
                    <p>Naam: {naam}</p>
                    <p>Prijs: {prijs}</p>
                    <p>beschrijving: {beschrijving}</p>
                    <p>Voorraad: {voorraad}</p>
                    <p>Categorie: {categorieID}</p>
                     <Button onClick={e => this.onChange({id})}>Update</Button> <Button onClick={e => this.onDelete({id})}>Delete</Button>
              </Collapsible>
            })
          }
   
    </div>
);
}
}

export default withRouter(CrudProductView);
