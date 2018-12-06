import React, { Component } from "react";
import { Link } from "react-router-dom";

// layout
import LayoutAccount from "../../layout/Account";

// components
import SimpleHeading from "../../components/SimpleHeading";


class WinkelMand extends Component {
  constructor(props) {

    let items = JSON.parse(window.localStorage.getItem('cart'));
    console.log('Items: ' + items);
    console.log(items);
    let _producten = [];
    let displayObject = {
      
    }
    for(let i = 0; i < items.length; i++)
    {
        _producten.push(items[i].id);

    }

    super(props);
    this.state = {
      width: null,
      producten: _producten
    };
  }
  render() {
    console.log(this.state.producten);
    return (   
      <React.Fragment>
        <LayoutAccount className="SignUp" simple>
          <div className="wrapper">
            <SimpleHeading
              title="Winkelmand"
              description="Een overzicht van de door u geselecteerde producten:"
            />
          </div>
          <div>
            {
              //for(int x = 0; x < producten.length; x++)

            }
          </div>
          <button onClick={document.write("Every 60 seconds, in Africa, a minute passes.")}>Plaats bestelling</button>
        </LayoutAccount>
      </React.Fragment>
    );
  }
}
export default WinkelMand;