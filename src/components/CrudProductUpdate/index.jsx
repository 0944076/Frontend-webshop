import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import request from "superagent";
import { Link } from "react-router-dom";

// components
import Button from "../../components/Button";

class CrudProductUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: null,
      isloading: true,
      gebruikers: []
    }
  }
componentDidMount(){
  this.fetchData();
}
fetchData(){
  const product = sessionStorage.getItem('editpID');
  //console.log('http://localhost:5000/api/product/'+ product)
  request.get('http://localhost:5000/api/product/'+ product)       
  .then(res => {
   
   
   this.setState({
    naam: res.body.naam,
    prijs: res.body.prijs,
    id: res.body.id,
    beschrijving: res.body.beschrijving,
    foto: res.body.foto,
    voorraad: res.body.voorraad,
    categorieID: res.body.categorieID,
    bestellingen: res.body.bestellingen,
    verlanglijst: res.body.verlanglijst


  });
  

});
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
state = {
  hashpass: null,
  loading: true,
  response: null,
  naam: '',
  naamError: '',
  prijs: '',
  prijsError: '',
  beschrijving: '',
  beschrijvingError: '',
  voorraad: '',
  voorraadError: '',
  categorie: '',
  categorieError: '',
  foto: '',
  fotoError: '',
  toHome: false,
  prosucc: false,
};
change = e => {
  this.setState({
    [e.target.name]: e.target.value
    
  });
};

handleOptionChange = changeEvent => {
  this.setState({
    selectedOption: changeEvent.target.value
  });
};
validate = () => {
  let isError = false;
  const errors = {
      naamError: '',
      prijsError: '',
      beschrijvingError: '',
      voorraadError: '',
      fotoError: '',
      adminerror: ''
  };
  //naam
  if (document.getElementById('naam').value === ""){
    isError = true;
    errors.naamError = 'Vul hier de productnaam in'
    document.getElementById('naam').style.borderColor = "red";
  }
  else if (this.state.naam.length < 3 || this.state.naam.length > 50){
    isError = true;
    errors.naamError = 'Vul een geldige productnaam in'
    document.getElementById('naam').style.borderColor = "red";
  }
  else if (this.state.naam.match(/[!@#$%^&*():;'",.0-9]/i) || this.state.naam.match(/[-]/i )){
    isError = true;
    errors.naamError = 'alleen leestekens mogen gebruikt worden'
    document.getElementById('naam').style.borderColor = "red";
  }
  else{
    document.getElementById('naam').style.borderColor = "green";
  }
  //prijs
  if (document.getElementById('prijs').value === ""){
    isError = true;
    errors.prijsError = 'Vul hier uw prijs in'
    document.getElementById('prijs').style.borderColor = "red";
  }
  else{
    document.getElementById('prijs').style.borderColor = "green";
  }
  //beschrijving 
  if (document.getElementById('beschrijving').value === ""){
    isError = true;
    errors.beschrijvingError = 'Vul hier de product beschrijving in'
    document.getElementById('beschrijving').style.borderColor = "red";
  }
  
  else if (this.state.beschrijving.length < 3 ){
    isError = true;
    errors.beschrijvingError = 'Vul een geldig product beschrijving in'
    document.getElementById('beschrijving').style.borderColor = "red";
  }
  else{
    document.getElementById('beschrijving').style.borderColor = "green";
  }
  //voorraad
  if (document.getElementById('voorraad').value === ""){
    isError = true;
    errors.voorraadError = 'Vul hier uw voorraad aantal in'
    document.getElementById('voorraad').style.borderColor = "red";
  }
  else{
    document.getElementById('voorraad').style.borderColor = "green";
  }
  //foto
  if (document.getElementById('foto').value === ""){
    isError = true;
    errors.fotoError = 'Vul hier een link voor uw foto in'
    document.getElementById('foto').style.borderColor = "red";
  }
  else{
    document.getElementById('foto').style.borderColor = "green";
  }
  //categorieID
  if (document.getElementById('categorie').value === ""){
    isError = true;
    errors.categorieError = 'Vul hier de categorieID  in'
    document.getElementById('categorie').style.borderColor = "red";
  }
  else{
    document.getElementById('categorie').style.borderColor = "green";
  }
  //admin
  

    this.setState({
      ...this.setState,
      ...errors
    });
  return isError;
}
onSubmit = e => {

  e.preventDefault();
  const err = this.validate();
  
  
  if (!err) {
    let aid = this.state.id;
    let anaam = this.state.naam;
    let aprijs = JSON.parse(this.state.prijs);
    let abeschrijving = this.state.beschrijving;
    let afoto = this.state.foto;
    let avoorraad = JSON.parse(this.state.voorraad)
    let acategorieID = JSON.parse(this.state.categorieID)
    let abestellingen = this.state.bestellingen;
    let averlanglijst = this.state.verlanglijst;
  
    let anaam1 = JSON.stringify(anaam);
    let abeschrijving1 = JSON.stringify(abeschrijving);
    const product = {
      id: aid,
      naam: anaam,
      prijs: aprijs,
      beschrijving: abeschrijving,
      foto: afoto,
      voorraad: avoorraad,
      categorieID: acategorieID,
      bestellingen: abestellingen,
      verlanglijst: averlanglijst
    }
  //let jsonregi = product;
  //let jsonprod = JSON.parse(JSON.stringify(product));
  console.log("Naam: "+anaam1);
  console.log("prijs: "+aprijs);
  console.log("beschrijving: "+abeschrijving1);
  console.log("foto: "+ afoto);
  console.log("voorraad: "+avoorraad);
  console.log("categorieID: "+acategorieID);
  console.log("bestellingen: "+abestellingen);
  console.log("verlanglijst: "+averlanglijst);
  console.log(product);
     request.put(`http://localhost:5000/api/product/`)
     .send(product)
     .then(res => {
       this.setState({
         naam: '',
         naamError: '',
         prijs: '',
         prijsError: '',
         beschrijving: '',
         beschrijvingError: '',
         foto: '',
         fotoError: '',
         voorraad: '',
         voorraadError: '',
         prosucc: true
       });
     });
  }

};




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
  var { prosucc } = this.state;
    if(this.state.prosucc === true){
      setTimeout(() => {
        this.setState({
        prosucc: false
      })
      this.props.history.push('/crud/product/view')
    }, 3000);
      return <div id="succes">Product is succesvol geupdate</div>;
      
      

    }

  
  return (   
  <div>
    
    <form className="SignUp crud" onSubmit={this.onSubmit}>
      <fieldset>
      <div className="fieldsetDiv">
      <input
          type="string"
          name="naam"
          id="naam"
          placeholder="productnaam"
          value={this.state.naam}
          onChange={e => this.change(e)}
          errorText={this.state.naamError}
          aria-label="naam"
        /><br/>
        <span> {this.state.naamError}</span>
        <br />
        <input
          type="number"
          step="0.01"
          min="0.01"
          max="1000"
          name="prijs"
          id="prijs"
          placeholder="prijs"
          value={this.state.prijs}
          onChange={e => this.change(e)}
          errorText={this.state.prijsError}
          aria-label="prijs"
        /><br/>
        <span> {this.state.prijsError}</span>
        <br />
    
        <textarea
          type="string"
          name="beschrijving"
          id="beschrijving"
          value={this.state.beschrijving}
          placeholder="Beschrijving"
          onChange={e => this.change(e)}
          errorText={this.state.beschrijvingError}
          aria-label="beschrijving"
        /><br />
        <span> {this.state.beschrijvingError}</span>
        <br/>
        <input
          type="string"
          name="foto"
          id="foto"
          placeholder="foto link"
          value={this.state.foto}
          onChange={e => this.change(e)}
          errorText={this.state.fotoError}
          aria-label="foto"
        /><br/>
        <span> {this.state.fotoError}</span>
        <br />
        <input
          type="number"
          min="1"
          max="999"
          name="voorraad"
          id="voorraad"
          value={this.state.voorraad}
          placeholder="voorraad"
          onChange={e => this.change(e)}
          errorText={this.state.voorraadError}
          aria-label="voorraad"
        />
        <br />
        <span> {this.state.voorraadError}</span>
        <br />
        <p>Categorie:
          1:	Bloembollen
          2:	Fruitbomen
          3:	Kamerplanten
          4:	Rozen
          5:	Zaden
        </p>
        <input
          type="number"
          min="1"
          max="5"
          name="categorie"
          id="categorie"
          value={this.state.categorieID}
          placeholder="Categorie"
          onChange={e => this.change(e)}
          errorText={this.state.categorieError}
          aria-label="categorie"
        />
        <br />
        <span> {this.state.categorieError}</span>
        <br/>

      
        
        </div>
      </fieldset>
      <Button onClick={e => this.onSubmit(e)}>Product updaten</Button>

      </form> 
   
    </div>
);
}
}
}
export default withRouter(CrudProductUpdate);
