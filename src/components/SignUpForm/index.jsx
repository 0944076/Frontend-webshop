import React, { Component } from "react";
import { Link } from "react-router-dom";

import Button from "../../components/Button";

class SignUpForm extends Component {
    handleSubmit = event => {
      event.preventDefault();
      console.log("submit!");
};
render() {
    const { title, description } = this.props;
    return (
<form className="SignUp" onSubmit={this.handleSubmit}>
      <fieldset>
        <input
          type="email"
          name="emailaddress"
          placeholder="E-mailaddress"
          aria-label="emailaddress"
        />
        <input
          type="password"
          name="password"
          placeholder="Wachtwoord"
          aria-label="password"
        />
        <Button type="submit">Signup</Button>
      </fieldset>
      </form> 
      );
    }
  }
  export default SignUpForm;