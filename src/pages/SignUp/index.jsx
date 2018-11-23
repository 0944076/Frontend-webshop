import React, { Component } from "react";
import { Link } from "react-router-dom";
import Get from "../../components/Requester";

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
    };
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

            {/* <Get
            url="http://kamerplant.me:5000/api/klant"
           // url="https://jsonplaceholder.typicode.com/users/" //basis url voor de get request, hierachter wordt id gezet
            id="" //klant id
            datafield="data.id"
            datafield2="data.title"
            datafield3="JSON.stringify(data)"
            /> */}

          </div>
        </LayoutAccount>
      </React.Fragment>
    );
  }
}
export default SignUp;