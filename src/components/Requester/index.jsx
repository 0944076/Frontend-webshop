import ReactDOM from 'react-dom';
import React, { Component } from "react";
import { Link } from "react-router-dom";
//import axios from 'axios';

//import './App.css';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const axios = require('axios');


class Klantid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }
    componentDidMount() {
        fetch('http://83.96.162.248:5000/api/klant/3',{method: "GET"})
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json
                })
            });
    }
    render() {
        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        return (
            <div classname="Klantid">
                
                <ul>
                    {items.map(item => (
                        <li key="{item.id}">
                            Naam: {item.id} | Adres: {item.email}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
export default Klantid;

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





















