import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import request from "superagent";


// components
import Button from "../../components/Button";


class CrudProductCreate extends Component {
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
  else if (this.state.beschrijving.length < 3 || this.state.beschrijving.length > 200 ){
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
        
    
    let anaam = this.state.naam;
    let aprijs = JSON.parse(this.state.prijs);
    let abeschrijving = this.state.beschrijving;
    let avoorraad = JSON.parse(this.state.voorraad)
    let acategorieID = JSON.parse(this.state.categorie)
  
    let anaam1 = JSON.stringify(anaam);
    let abeschrijving1 = JSON.stringify(abeschrijving);
    const product = {
      naam: anaam,
      prijs: aprijs,
      beschrijving: abeschrijving,
      foto: "https://www.tuinflora.com/media/catalog/product/cache/5/image/500x/9df78eab33525d08d6e5fb8d27136e95/F/D/FD14861WH_23.jpg",
      voorraad: avoorraad,
      categorieID: acategorieID,
      bestellingen: null,
      verlanglijst: null
    }
  //let jsonregi = product;
  //let jsonprod = JSON.parse(JSON.stringify(product));
  console.log("Naam: "+anaam1);
  console.log("prijs: "+aprijs);
  console.log("beschrijving: "+abeschrijving1);
  console.log("voorraad: "+avoorraad);
  console.log("categorieID: "+acategorieID);
  console.log(product)
    request.post(`http://localhost:5000/api/product/`)
    .send(product)
    .then(res => {
      this.setState({
        naam: '',
        naamError: '',
        prijs: '',
        prijsError: '',
        beschrijving: '',
        beschrijvingError: '',
        voorraad: '',
        voorraadError: '',
        prosucc: true
      });
    });
  }

};




render() {
  var { prosucc } = this.state;
    if(this.state.prosucc === true){
      setTimeout(() => {
        this.setState({
        prosucc: false
      })
    }, 3000);
      return <div id="succes">Account aanmaken is succesvol</div>;
      
      

    }

  
  return (   
  <div>
    
    <form className="SignUp1" onSubmit={this.onSubmit}>
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
          placeholder="Beschrijving"
          onChange={e => this.change(e)}
          errorText={this.state.beschrijvingError}
          aria-label="beschrijving"
        /><br />
        <span> {this.state.beschrijvingError}</span>
        <br/>
        <input
          type="number"
          min="1"
          max="999"
          name="voorraad"
          id="voorraad"
          placeholder="voorraad"
          onChange={e => this.change(e)}
          errorText={this.state.voorraadError}
          aria-label="voorraad"
        />
        <br />
        <span> {this.state.voorraadError}</span>
        <br />
        <input
          type="number"
          min="1"
          max="5"
          name="categorie"
          id="categorie"
          placeholder="Categorie"
          onChange={e => this.change(e)}
          errorText={this.state.categorieError}
          aria-label="categorie"
        />
        <br />
        <span> {this.state.categorieError}</span>
        <br/>
        <p>Admin?</p>
        <div className="radio">
          <label>
            <input type="radio"
             value="option1"
             id="admin1"
             errorText={this.state.adminerror}
             checked={this.state.selectedOption === 'option1'}
             onChange={this.handleOptionChange}
            />
            False
          </label>
        </div>
        <div className="radio">
          <label>
            <input
             type="radio"
             id="admin2"
             value="option2"
             errorText={this.state.adminerror}
             checked={this.state.selectedOption === 'option2'}
             onChange={this.handleOptionChange}
            />
            True
          </label><br/>
          <span>{this.state.adminerror}</span>
          <br />
        </div>
        
        </div>
      </fieldset>
      <Button onClick={e => this.onSubmit(e)}>Signup</Button>

      </form> 
   
    </div>
);
}
}

export default withRouter(CrudProductCreate);
