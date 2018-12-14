import React, { Component } from "react";



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
        
        <LayoutAccount className="SignUp" simple="true">
          <div className="wrapper">
            <SimpleHeading
             
            />
            <LoginForm />
            


          </div>
        </LayoutAccount>
      </React.Fragment>
    );
  }
}
export default SignUp;