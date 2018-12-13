import React, { Component } from 'react';

// layout
import LayoutDefault from '../../layout/Default';
import SimpleHeading from "../../components/SimpleHeading";
import PageHero from "../../components/PageHero";
//import logo from './components/logo.jpg';



class AboutUs extends Component {
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
              <div className="AboutUsText">                
                    <SimpleHeading
                      
                      key="heading"
                    />
                
                <div>
                    <h1>About Us</h1>
                <p className="AboutUsText" >Wij zijn kameplant inc. De leverancier voor al u exotische planten. <br/>
                Samen met ons team zorgen wij voor een tropisch gevoel in u huis.<br/>
                Onze missie is een groener en schoner Nederland. Wij brengen onze missie tot stand dankzij<br/>
                inzet van de juiste software en praktisch talent.<br/>
                Sterk door service zijn we gegroeid tot de partij die we nu zijn.
                </p>
                </div>
                </div>
            </LayoutDefault>
          </React.Fragment>

      );
    }
}

export default AboutUs;

