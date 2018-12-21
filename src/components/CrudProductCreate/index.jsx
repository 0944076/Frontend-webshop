import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import request from "superagent";
import Collapsible from 'react-collapsible';


// components
import Button from "../../components/Button";
let passwordHash = require('password-hash');

class CrudUserCreate extends Component {
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
  beschrijving: '',
  beschrijvingError: '',
  email: '',
  emailError: '',
  wachtwoord: '',
  wachtwoordError: '',
  wachtwoord1: '',
  wachtwoord1Error: '',
  admin: false,
  toHome: false,
  accsucc: false,
};
change = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
};
validate = () => {
  let isError = false;
  const errors = {
      naamError: '',
      beschrijvingError: '',
      emailError: '',
      wachtwoordError: '',
      wachtwoord1Error: ''
  };
  //naam
  if (document.getElementById('voornaam').value == ""){
    isError = true;
    errors.naamError = 'Vul hier de product naam in'
    document.getElementById('naam').style.borderColor = "red";
  }
  else if (this.state.naam.length < 3 || this.state.naam.length > 50){
    isError = true;
    errors.naamError = 'Vul een geldige product naam in'
    document.getElementById('naam').style.borderColor = "red";
  }
  else if (this.state.naam.match(/[!@#$%^&*()[]:;'",\.0-9]/i) || this.state.naam.match(/[-]/i )){
    isError = true;
    errors.naamError = 'alleen leestekens mogen gebruikt worden'
    document.getElementById('naam').style.borderColor = "red";
  }
  else{
    document.getElementById('naam').style.borderColor = "green";
  }
  //beschrijving
  if (document.getElementById('beschrijving').value == ""){
    isError = true;
    errors.beschrijvingError = 'Vul hier een beschrijving in'
    document.getElementById('beschrijving').style.borderColor = "red";
  }
  else if (this.state.beschrijving.length < 3 || this.state.beschrijving.length > 50){
    isError = true;
    errors.beschrijvingError = 'Vul een geldige beschrijving in'
    document.getElementById('beschrijving').style.borderColor = "red";
  }
  //email 
  if (this.state.email.length === 0){
    isError = true;
    errors.emailError = 'Vul hier uw email in'
    document.getElementById('email').style.borderColor = "red";
  }
  else if (this.state.email.length < 7 || this.state.email.length > 50 || this.state.email.indexOf("@") === -1){
    isError = true;
    errors.emailError = 'Vul een geldig emailadress in'
    document.getElementById('email').style.borderColor = "red";
  }
  else if (this.state.email.match(/[!#$%^&*()[]:;'",\ ]/i)){
    isError = true;
    errors.emailError = 'alleen leestekens mogen gebruikt worden'
    document.getElementById('email').style.borderColor = "red";
  }
  else{
    document.getElementById('email').style.borderColor = "green";
  }
  //wachtwoord
  if (this.state.wachtwoord.length === 0){
    isError = true;
    errors.wachtwoordError = 'Vul hier uw wachtwoord in'
    document.getElementById('wachtwoord').style.borderColor = "red";
  }
  else if (this.state.wachtwoord.length < 7 || this.state.wachtwoord.length > 20){
    isError = true;
    errors.wachtwoordError = 'Vul een geldig wachtwoord in'
    document.getElementById('wachtwoord').style.borderColor = "red";
  }
  else if (this.state.wachtwoord.match(/[!#$%^&*()[]:;'",\ ]/i)){
    isError = true;
    errors.wachtwoordError = 'alleen leestekens en cijfers mogen gebruikt worden'
    document.getElementById('wachtwoord').style.borderColor = "red";
  }
  else{
    document.getElementById('wachtwoord').style.borderColor = "green";
  }
  //wachtwoord1
  if (this.state.wachtwoord1.length === 0){
    isError = true;
    errors.wachtwoord1Error = 'Vul hier nogmaals u wachtwoord in'
    document.getElementById('wachtwoord1').style.borderColor = "red";
  }
  else if (this.state.wachtwoord !== this.state.wachtwoord1){
    isError = true;
    errors.wachtwoord1Error = 'wachtwoorden komen niet overheen'
    document.getElementById('wachtwoord1').style.borderColor = "red";
  }
  else{
    document.getElementById('wachtwoord1').style.borderColor= "green";
  }
    this.setState({
      ...this.setState,
      ...errors
    });
  return isError;
}
onSubmit = e => {
  e.preventDefault();
  const err = this.validate();
  let vanaam = this.state.naam + " " + this.state.beschrijving;
  let password = this.state.wachtwoord;
  let hashedPassword = passwordHash.generate(password);
  const register = {
    naam: vanaam,
    email: this.state.email,
    wachtwoord: hashedPassword,
    admin: false
  }
  let jsonregi = JSON.parse(JSON.stringify(register));
  console.log(jsonregi);
  console.log(this.state);
  
  if (!err) {
    request.post(`http://localhost:5000/api/geregistreerdeklant/`)
    .send(jsonregi)
    .then(res => {
      this.setState({
        naam: '',
        naamError: '',
        beschrijving: '',
        beschrijvingError: '',
        email: '',
        emailError: '',
        wachtwoord: '',
        wachtwoordError: '',
        admin: false,
        accsucc: true
      });
    });
  }

};




render() {
  var { accsucc } = this.state;
    if(this.state.accsucc === true){
      setTimeout(() => {
        this.setState({
        accsucc: false
      })
    }, 3000);
      return <div id="succes">Account aanmaken is succesvol</div>;
      
      

    }
  const {isLoading, gebruikers} = this.state;
  const { title, description } = this.props;
  console.log(this.state.gebruikers);
  return (   
  <div>
    
    <form className="SignUp" onSubmit={this.onSubmit}>
      <fieldset>
      <div className="fieldsetDiv">
      <input
          type="string"
          name="naam"
          id="naam"
          placeholder="naam product"
          value={this.state.naam}
          onChange={e => this.change(e)}
          errorText={this.state.naamError}
          aria-label="naam"
        /><br/>
        <span> {this.state.naamError}</span>
        <br />
        <textarea 
          rows="4" 
          cols="50" 
          name="beschrijving"  
          id="beschrijving" 
          value={this.state.beschrijving} 
          onChange={e => this.change(e)}
          errorText={this.state.beschrijvingError}
          aria-label="beschrijving"
          />
        <br/>
        <span> {this.state.beschrijvingError}</span>
        <br />
    
        <input
          type="email"
          name="email"
          id="email"
          placeholder="E-mailaddress"
          onChange={e => this.change(e)}
          errorText={this.state.emailError}
          aria-label="emailaddress"
        /><br />
        <span> {this.state.emailError}</span>
        <br/>
        <input
          type="password"
          name="wachtwoord"
          id="wachtwoord"
          placeholder="Wachtwoord"
          onChange={e => this.change(e)}
          errorText={this.state.wachtwoordError}
          aria-label="wachtwoord"
        />
        <br />
        <span> {this.state.wachtwoordError}</span>
        <br />
        <input
          type="password"
          name="wachtwoord1"
          id="wachtwoord1"
          placeholder="herhaling Wachtwoord"
          onChange={e => this.change(e)}
          errorText={this.state.wachtwoord1Error}
          aria-label="wachtwoord1"
        />
        <br />
        <span> {this.state.wachtwoord1Error}</span>
        <br/>
        </div>
      </fieldset>
      <Button onClick={e => this.onSubmit(e)}>Signup</Button>

      </form> 
   
    </div>
);
}
}

export default withRouter(CrudUserCreate);
