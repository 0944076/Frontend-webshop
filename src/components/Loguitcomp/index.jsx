import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import request from "superagent";
import Button from "../../components/Button";
let passwordHash = require('password-hash');
class LogUitComp extends Component {

   constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }
  isLoggedIn(){
    let sessieObject = JSON.parse(sessionStorage.getItem('SessieID'));
    let klantObject = JSON.parse(sessionStorage.getItem('klantID'));
    if(sessieObject !== null && sessieObject.id > 0 && klantObject.admin === "false" ){
      return 0;
    }
    else if(sessieObject !== null && sessieObject.id > 0 && klantObject.admin === "true"){
      return 1;
    } else {
      return 2;
    }
  }
  componentDidMount(){
    if(this.isLoggedIn() === 2){
      console.log('not logged in')
      this.props.history.push('/SignUp');
      
    }
    else{
     
       
      
      
      setTimeout(() => {
          sessionStorage.removeItem('SessieID');
          sessionStorage.removeItem('klantID');
          this.props.history.push('/SignUp'); 
          }, 
        3000)
        
      //setTimeout(3000);
      
    }
  }


   


  //sessionStorage.setItem('klantID', JSON.stringify(storage));
           

        


render() {


   
    
    return (
      
<div>
 
  
  </div>
      );
    }
  }

  export default withRouter(LogUitComp);