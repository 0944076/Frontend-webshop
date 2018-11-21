import React, { Component } from "react";
import { Link } from "react-router-dom";

// components
import Button from "../../components/Button";

class CheckOutFormRegistered extends Component {
  handleSubmit = event => {
    event.preventDefault();
    console.log("submit!");
  };

  render() {
    const { title, description } = this.props;
    return (
<form className="CheckOutRegistered" onSubmit={this.handleSubmit}>
      <fieldset>
        <input
          type="Straatnaam"
          name="Straatnaam"
          placeholder="Straatnaam"
          aria-label="Straatnaam"
        />
        <input
          type="Postcode"
          name="Postcode"
          placeholder="Postcode"
          aria-label="Postcode"
        />
        <input
          type="Huisnummer"
          name="Huisnummer"
          placeholder="Huisnummer"
          aria-label="Huisnummer"
        />
        <input
          type="Huisnummer"
          name="Huisnummer"
          placeholder="Huisnummer"
          aria-label="Huisnummer"
        />
        <input
          type="betaling"
          name="betaling"
          placeholder="betaling"
          aria-label="betaling"
        />
        <Button type="submit">Check Out</Button>
      </fieldset>
      </form> 
      );
    }
  }




  export default CheckOutFormRegistered;