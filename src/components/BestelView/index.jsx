import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
//import PageHero from "../../components/PageHero";
//import LayoutDefault from "../../layout/Default";
import request from "superagent";
import Collapsible from 'react-collapsible';

// components
import Button from "../../components/Button";

class BestelView extends Component {
   constructor(props) {
    super(props);
    this.state = {
      session: null,
      isloading: true,
      name:'',
      email:'',
      delesucc: false,
      id: 0,
      bestellingen: [],
      bestellingen2: [],
      items: []
    }
    this.onUpdate = this.onUpdate.bind(this);
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
isLoggedIn(){
  let sessieObject = JSON.parse(sessionStorage.getItem('SessieID'));
  let klantObject = JSON.parse(sessionStorage.getItem('klantID'));
  if(sessieObject !== null && sessieObject.id > 0 && klantObject.admin === "true"){
    return true;
  } else {
    return false;
  }
}
onUpdate(gebruiker){
  this.setState({
    
    name: gebruiker.naam,
    email: gebruiker.email,
    id: gebruiker.id
});
var testI = this.state.id;
var testE = gebruiker.email;
console.log(testE);
const update = {
  id: testI,
  email: testE
}

  var test = gebruiker.id;
  console.log(test)
  
  if(test === 0){
    console.log('werkt nog nie');
    
  }
  else{
    let jsonlogi = JSON.parse(JSON.stringify(update));
    let test = JSON.parse(JSON.stringify(update));
    console.log(test);
    console.log('test ID ' + testI);
    console.log('test Email ' + testE);
    console.log('test samen' + jsonlogi);
    sessionStorage.setItem('editID',testE);
    this.props.history.push('/crud/user/update');
    
  }
}
onDelete(gebruiker){
  if (gebruiker.id === 0){
    console.log('standaard id');
    this.setState({
    
      name: gebruiker.naam,
      email: gebruiker.email,
      id: gebruiker.id
  });
  }
  else{
    if(window.confirm("wil je zeker "+ gebruiker.naam + " " + "verwijderen?")){
      
    var testI = gebruiker.id;
    console.log(testI);
    request.delete('http://localhost:5000/api/geregistreerdeklant/'+testI)
      .then(res => {
        this.setState({
          delesucc: true
      });
      });
    }
    else{
      console.log('verwijderen gestopt');
    }
  
  

}
}

fetchData(){

  const testT = sessionStorage.getItem('klantID');
  const testS = sessionStorage.getItem('SessieID');
  console.log("testKlant" + testT);
  console.log("testSessie" + testS);
  console.log("test2" + testT.naam);
  request.get('http://localhost:5000/api/bestelling/')
        
        .then(res => {
         
          var results = JSON.stringify(res.body.map(bestelling =>
             ({
              id: `${bestelling.id}` ,
              klantID: `${bestelling.klantID}`,
              geregistreerd: `${bestelling.geregistreerd}`,
              prijs: `${bestelling.prijs}`,
              datum: `${bestelling.datum}`,
              adres: `${bestelling.adres}`,
              producten: bestelling.producten,
              
             }
             
             )));
             var results2 = JSON.stringify(res.body.map(bestelling =>
              ({
               producten: bestelling.producten,
              }
              
              )));
              
             console.log(JSON.parse(results2));
             //console.log(results2);
             var bestelingen1 = JSON.parse(results);
             var bestellingen3 = JSON.parse(results2);
             //console.log(bestellingen3[0]);
             
             this.setState({
              isLoaded: false,
              bestellingen: bestelingen1,
              bestellingen2: bestellingen3,
              //producten: results2.producten

            })
            
          //console.log(this.state.bestellingen);
          //console.log("tussenregel");
          //console.log(this.state.items);

}).catch((err) => console.log('parsing failed',err));
}




render() {
  if(this.state.delesucc === true){
    setTimeout(() => {
      this.setState({
      delesucc: false
    })
    window.location.reload();
  }, 3000);
    return <div id="succes">Delete is succesvol</div>;
    
    

  }
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
  if(!this.isLoggedIn()){
    return (
      <React.Fragment>
       

          <div className="wrapper">
            <div className="not-found">
              <h1 className="not-found__title">U bent niet ingelogd</h1>
              <p className="not-found__description">
                <Link to="/signup">Login met een  account om bij uw Account te komen<br/></Link>
              </p>
            </div>
          </div>
      </React.Fragment>
    );
  }
  else{

    
  return (   
  <div className = 'test'>
  
      {
                
            this.state.bestellingen.map(bestelling =>{
              const {id,klantID,geregistreerd,prijs,datum,adres,Producten} = bestelling;
              return <Collapsible trigger={"KlantID: " + klantID} key={id} title={klantID}>
                    <p class="crud">geregistreerd: {geregistreerd}</p>
                    <p class="crud">prijs: {prijs}</p>
                    <p class="crud">datum: {datum}</p>
                    <p class="crud">adres: {adres}</p>
                    <p class="crud">Producten:</p>
                    <table>
                      <tbody>
                      <tr>
                                  <tr>
                                  <td>Product</td>
                                  <td>Prijs</td>
                                  <td>Voorraad</td>
                                  </tr>
                        {bestelling.producten.map(product => {
                          console.log('Gemapt product: ' + product);
                          return <tr>
                                  <td><p class="table">{product.naam}</p></td>
                                  <td><p class="table">€{product.prijs}</p></td>
                                  <td><p class="table">{product.voorraad}</p></td>
                                  </tr>
                                  
                        })}
                        </tr>
                      </tbody>
                    </table>

                      
                    
                    <a class="buttonu" onClick={() => this.onUpdate(bestelling)}><Button id="buttonu" >Bestelling afronden</Button></a>
                    <a class="buttond" onClick={() => this.onDelete(bestelling)}><Button id="buttond">Bestelling verwijderen</Button></a>
              </Collapsible>
            })}

</div>

);
}
}
}
}

export default withRouter(BestelView);
