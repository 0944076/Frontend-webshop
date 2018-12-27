import React, { Component } from "react";


// layout
import LayoutAccount from "../../layout/Account";

// components
import SimpleHeading from "../../components/SimpleHeading";
import LogUitComp from "../../components/Loguitcomp";

class LogUit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: null
    };
  }
  
  render() {
    return (
      <React.Fragment>
        <LayoutAccount className="loguit" simple="true">
          <div className="wrapper">
            <SimpleHeading
              title="Uitgeloged"
              description="U bent uitgelogd"
            />
            <LogUitComp />
          </div>
        </LayoutAccount>
      </React.Fragment>
    );
  }
}

export default LogUit;
