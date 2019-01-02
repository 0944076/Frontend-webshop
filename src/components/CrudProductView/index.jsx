import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import request from "superagent";
import { Link } from "react-router-dom";
import Collapsible from 'react-collapsible';

// components
import Button from "../../components/Button";

class CrudProductView extends Component {
   constructor(props) {
    super(props);
    this.state = {
      session: null,
      isloading: true,
      delesucc: false,
      id: 0,
      products: []
    }
  }
  
componentDidMount(){
  if(!this.isLoggedIn()){
    console.log('not logged in')
  }
  else{
    this.fetchData();
  }
}
change = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
};

onUpdate(product){
  
   this.setState({
    
    naam: product.naam,
       prijs: product.prijs,
       id: product.id,
       beschrijving: product.beschrijving,
       voorraad: product.voorraad,
       categorieID: product.categorieID
 });
  var testI = this.state.id;
 
  const update = {
   id: testI,
  }  

   var test = this.state.id;
   console.log(this.state)
   
   if(test === 0){
     console.log('werkt nog nie');
   }
   else{
     let jsonlogi = JSON.parse(JSON.stringify(update));
     let test = JSON.parse(JSON.stringify(update));
     //console.log(test);
   //console.log('test ID ' + testI);
//     console.log('test Email ' + testE);
//     console.log('test samen' + jsonlogi);
     sessionStorage.setItem('editpID',testI);
    this.props.history.push('/crud/product/update');
    
  }
}
onDelete(product){
  if (this.state.id === 0){
    console.log('standaard id');
     this.setState({
       naam: product.naam,
       prijs: product.prijs,
       id: product.id,
       beschrijving: product.beschrijving,
       voorraad: product.voorraad,
       categorieID: product.categorieID
   });
  }
  else{
     if(window.confirm("wil je zeker "+ product.naam + " " + "verwijderen?")){
      
    var testI = this.state.id;
    console.log(testI);
      //request.delete('http://localhost:5000/api/product/'+testI)
    //   .then(res => {
    //     this.setState({
    //       delesucc: true
    //   });
    //   });
     }
      else{
       console.log('verwijderen gestopt');
     }
  
  

}
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
isLoggedIn(){
  let sessieObject = JSON.parse(sessionStorage.getItem('SessieID'));
  let klantObject = JSON.parse(sessionStorage.getItem('klantID'));
  if(sessieObject !== null && sessieObject.id > 0 && klantObject.admin === "true"){
    return true;
  } else {
    return false;
  }
}



render() {
  if(!this.isLoggedIn()){
    return (
      <React.Fragment>
       

          <div className="wrapper">
            <div className="not-found">
              <h1 className="not-found__title">U bent niet ingelogd</h1>
              <p className="not-found__description">
                <Link to="/signup">Login met een admin account om bij het adminpaneel te komen<br/></Link>
              </p>
            </div>
          </div>
      </React.Fragment>
    );
  }
  else{
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
                    <a onClick={() => this.onUpdate(product)}><Button>Update</Button></a>
                    <a onClick={() => this.onDelete(product)}><Button>Delete</Button></a>
              </Collapsible>
            })
          }
   
    </div>
);
}
}
}

export default withRouter(CrudProductView);
