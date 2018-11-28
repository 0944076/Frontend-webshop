import React, { Component } from "react";
import { Link } from "react-router-dom";


// layout
import LayoutAccount from "../../layout/Account";

// components
import SimpleHeading from "../../components/SimpleHeading";
import LoginForm from "../../components/SignUpForm";


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null
    }

    
    ;
  }
  render() {
    return (
      <React.Fragment>
        
        <LayoutAccount className="SignUp" simple>
          <div className="wrapper">
            <SimpleHeading
              title="Registreren"
              description="Vul hier u persoonsgegevens in om een account aan te maken"
            />
            <LoginForm />
            


          </div>
        </LayoutAccount>
      </React.Fragment>
    );
  }
}
export default SignUp;