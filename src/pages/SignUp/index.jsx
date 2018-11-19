import React, { Component } from "react";
import { Link } from "react-router-dom";


// layout
import LayoutAccount from "../../layout/Account";

// components
import SimpleHeading from "../../components/SimpleHeading";
import LoginForm from "../../components/SignUpForm";
import Get from "../../components/Requester";
console.log('lmao');
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null
    };
  }
  render() {
    return (
      <React.Fragment>
        <LayoutAccount className="SignUp" simple>
          <div className="wrapper">
            <SimpleHeading
              title="registreren"
              description="Vul hier u persoonsgegevens in om een account aan te maken"
            />
            <LoginForm />
            <Get
            url="https://jsonplaceholder.typicode.com/users/" //basis url voor de get request, hierachter wordt id gezet
            id="2" //klant id
            />
          </div>
        </LayoutAccount>
      </React.Fragment>
    );
  }
}
export default SignUp;