import React, { Component } from 'react';

// layout
import LayoutDefault from '../../layout/Default';
import SimpleHeading from "../../components/SimpleHeading";
import PageHero from "../../components/PageHero";
//import PaymentProgress from '../../components/PaymentProgress'

class Payment extends Component {
    constructor(props) {
      super(props);
      this.state = {
        width: null
      };
    }
  
    render() {
        return (
            
            <React.Fragment>
            <LayoutDefault className="home">
              <PageHero                            
                image="https://www.euroreizen.be/userfiles/bestemming/azoren-200_200_6_xl.jpg"
              />
              <div className="Payment text">                
                    <SimpleHeading
                      
                      key="heading"
                    />
                <p>hoi</p>
                
                </div>
            </LayoutDefault>
          </React.Fragment>

      );
    }
}

export default Payment;
