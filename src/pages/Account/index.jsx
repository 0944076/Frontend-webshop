import React, { Component } from "react";

// layout
import LayoutAccount from "../../layout/Account";

// components
import SimpleHeading from "../../components/SimpleHeading";
import MijnAccount from "../../components/MijnAccount";
import BestelGeschiedenis from "../../components/BestelGeschiedenis";

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null
    };
  }

  render() {
    return (
      <React.Fragment>
        <LayoutAccount className="Account" simple>
          <div className="wrapper">
            <SimpleHeading
              title="Mijn account"
              description="Hier vind uw gegevens en bestellingen"
            />
            <MijnAccount />
            <BestelGeschiedenis />
          </div>
        </LayoutAccount>
      </React.Fragment>
    );
  }
}

export default Account;
