import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
//const axios = require('axios');

 class PersonList extends Component {
    state = {
      persons: []
    }
    componentDidMount() {
        axios.get(`http://localhost:5000/api/klant/3`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
          })
      }
    
      render() {
        return (
          <ul>
            { this.state.persons.map(person => <li>{person.name}</li>)}
          </ul>
        )
      }
    }
    export default PersonList;

// // Make a request for a user with a given ID
// axios({
//     method:'get',
//     url:'http://localhost:5000/api/klant/3',
//     responseType:'json'
//   })
//   .then(function (response) {
//     // handle success
//     console.log(response.data);
//   })
// ;


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