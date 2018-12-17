import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import request from "superagent";

// components
import Button from "../../components/Button";

class MijnAccount extends Component {
   constructor(props) {
    super(props);
    this.state = {
      session: null,
      isloading: true,
      session: []
    }
  }
  // componentDidMount(){
  //   //fetch('http://kamerplant.me:5000/api/geregistreerdeklant')
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res => res.json())
  //     .then(json => {
  //       this.setState({
  //         isLoaded: true,
  //         items: json,
  //       })
      
  //     });
      
  // } 
  

////if (!err) {
  ////request.post(`http://localhost:5000/api/sessie/`)
        //.send(new FormData(document.getElementById('SignUp')))
        //.set('Content-Type', 'application/json')
        //.type('form') 
        //.send(jsonlogi)
        ////.then(res => {
          //alert('Account succesvol' + res.body)
          ////this.setState({
            ////email1: '',
            ////email1Error: '',
            ////wachtwoord: '',
            ////wachtwoordError: ''
          ////});
        ////});
  //console.log(JSON.stringify(register));
  //this.addRegister(register);
//}
//componentDidMount(){
  //sessionStorage.getItem('sessionid') && this.setState({
    //sessionid: JSON.parse(sessionStorage.getItem('sessionid')),
    //isLoading: false
  //});
  //console.log("test" + this.state.sesionid);
//}
componentDidMount(){
  this.fetchData();
}
fetchData(){
  //sessionStorage.getItem('sessionid') && this.setState({
    //session: JSON.stringify(sessionStorage.getItem('sessionid')),
    //isLoading: false
  //});
  //console.log("test " + this.state.session);
  const testT = sessionStorage.getItem('klantID');
  const testS = sessionStorage.getItem('sessieID');
  const testT2 = localStorage.setItem('klantID2', testT);
  const testT3 = localStorage.getItem('klantID2');
  const testS2 = localStorage.setItem('sessieID2', testS);
  const testS3 = localStorage.getItem('sessieID2');
  console.log("testKlant" + testT);
  console.log("testSessie" + testS);
  console.log("test2" + testT.naam);




  //request.get('http://localhost:5000/api/geregistreerdeklant/')
        //.then(res => {
         
          //var localid = JSON.stringify(res.body.id);
          //var localnaam = JSON.stringify(res.body.naam);
          //var localemail = JSON.stringify(this.state.email1);
          //var localpass = JSON.stringify(res.body.wachtwoord)
          
        //}).catch((err) => console.log('kon niet session ophalen'));
}




render() {

  const {isLoading, sessionid} = this.state;
  const { title, description } = this.props;
  
  return (   
  <div>
    <div className = "test">
      {
            //this.session.sessioncheck &&
            //this.state.sessioncheck.map(item => <div key={item.id}>{item.naam}</div>)
          }
    </div>
   
    </div>
);
}
}

export default withRouter(MijnAccount);
