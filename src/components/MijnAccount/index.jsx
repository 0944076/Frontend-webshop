import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import request from "superagent";

// components
//import Button from "../../components/Button";

class MijnAccount extends Component {
   constructor(props) {
    super(props);
    this.state = {
      session: null,
      isloading: true,
      gebruikers: []
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
  const testS = sessionStorage.getItem('SessieID');
  const testT2 = localStorage.setItem('klantID2', testT);
  const testT3 = localStorage.getItem('klantID2');
  const testS2 = localStorage.setItem('sessieID2', testS);
  const testS3 = localStorage.getItem('sessieID2');
  console.log("testKlant" + testT);
  console.log("testSessie" + testS);
  console.log("test2" + testT.naam);


  //fetch('http://localhost:5000/api/geregistreerdeklant/')
  //.then(res => res.json())
  //.then(parsedJSON => console.log(JSON.stringify(parsedJSON.results)))
  //.catch(error => console.log('parsing failed', error));

  request.get('http://localhost:5000/api/geregistreerdeklant/')
        
        .then(res => {
         
          var results = JSON.stringify(res.body.map(user =>
             ({
              id: "${user.id}" ,
              email: '${user.email}',
              naam: '${user.naam}',
              wachtwoord: '${user.wachtwoord}'
             }
             )));
          console.log(JSON.parse(results));
          //var localnaam = JSON.stringify(res.body.naam);
          //var localemail = JSON.stringify(this.state.email1);
          //var localpass = JSON.stringify(res.body.wachtwoord)
          
        //}).catch((err) => console.log('kon niet session ophalen'));
}).catch((err) => console.log('parsing failed',err));
}




render() {

  const {isLoading, gebruikers} = this.state;
  const { title, description } = this.props;
  
  return (   
  <div>
    <div className = "test">
      {
            
            //gebruikers.map(gebruiker =>{
              //const {id,naam,email} = gebruiker;
              //return <Collapsible key={id} title={naam}>
                //    <p>{email}</p> <Button onClick={e => this.onChange({id})}>Update</Button> <Button onClick={e => this.onDelete({id})}>Delete</Button>
              //</Collapsible>
            //})
          }
    </div>
   
    </div>
);
}
}

export default withRouter(MijnAccount);
