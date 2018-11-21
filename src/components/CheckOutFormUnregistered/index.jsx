import React, { Component } from "react";
import { Link } from "react-router-dom";

// components
import Button from "../../components/Button";

class CheckOutFormUnRegistered extends Component {
  handleSubmit = event => {
    event.preventDefault();
    console.log("submit!");
  };

  render() {
    const { title, description } = this.props;
    return (
<form className="CheckOutUnRegistered" onSubmit={this.handleSubmit}>
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
          type="Voornaam"
          name="Voornaam"
          placeholder="Voornaam"
          aria-label="Voornaam"
        />
        <input
          type="Tussenvoegsel"
          name="Tussenvoegsel"
          placeholder="Tussenvoegsel"
          aria-label="Tussenvoegsel"
        />
        <input
          type="Achternaam"
          name="Achternaam"
          placeholder="Achternaam"
          aria-label="Achternaam"
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




  export default CheckOutFormUnRegistered;