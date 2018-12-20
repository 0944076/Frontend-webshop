import React, { Component } from "react";
import LayoutAccount from "../../layout/Account";
import SimpleHeading from "../../components/SimpleHeading";
import request from 'superagent';

class BestelGeschiedenis extends Component {
  constructor(props) {
    super(props);
    this.state = {
        klantID: null
    };
  }

  retrieveOrderHistory(){
      let klant = sessionStorage.getItem('klantID');
      request.get('http://localhost:5000/api/bestelling/' + klant.id)
      .then((res) => console.log(res));

      this.setState({klantID: klant.id});
  }

  render() {
      this.retrieveOrderHistory();
    return (
        <div className= "mandjeItem">
            {this.state.klantID}
        </div>
    );
  }
}

export default BestelGeschiedenis;
