import ReactDOM from 'react-dom';
import React, { Component, Children } from "react";
import { Link } from "react-router-dom";
import { Fetch } from 'react-request';
import { string } from 'postcss-selector-parser';


process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';



class Get extends Component {
    render() {
        return (
          <Fetch url={this.props.url+this.props.id}>
            {({ fetching, failed, data }) => {
              if (fetching) {
                return <div>Loading data...</div>;
              }
     
              if (failed) {
                return <div>The request did not succeed.</div>;
              }
     
              if (data) {
                //console.log(props.children)
                console.log(this.props.listofdata.length);
                  //let var1 = [eval(this.props.listofdata[0]),eval(this.props.listofdata[1]),eval(this.props.listofdata[2])];
                  let datafilter = [];

                  for (let i=0; i < this.props.listofdata.length; i++) {
                    datafilter[i] = eval(this.props.listofdata[i]);
                  }
                  
                  

                return (
                 
                 
                    
                  <div>
                    
                    {datafilter}
                    
                 

                    
                  
                  
                  </div>
                );
              }
     
              return null;
            }}
          </Fetch>
        );
      }
    }

export default Get;

// class Klantid extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             items: [],
//             isLoaded: false
//         }
//     }
//     componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/users',{method: "GET"})
//             .then(res => res.json())
//             .then(json => {
//                 this.setState({
//                     isLoaded: true,
//                     items: json
//                 })
//             });
//     }
//     render() {
//         var { isLoaded, items } = this.state;
//         if (!isLoaded) {
//             return <div>Loading...</div>;
//         }
//         return (
//             <div classname="Klantid">
                
//                 <ul>
//                     {items.map(item => (
//                         <li key="{item.id}">
//                             Naam: {item.id} | Adres: {item.email}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         );
//     }
// }
//export default Klantid;

// function Welcome(id) {
//   axios({
//     method:'get',
//     url:'http://localhost:5000/api/klant/3',
//     responseType:'json'
//   })
//   .then(function (response) {
//     // handle success
//     console.log(response.data);
//   })
// ;
//   return response.data;
// }


// .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });





















