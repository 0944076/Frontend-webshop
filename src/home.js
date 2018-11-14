import React, { Component} from 'react';
import plantenbak from './plantenbak.jpg';



class Home extends Component {
  render() {
    return(
      
      <div id="homeimage">
       <img className="homeimage" src={plantenbak} alt="plantenbakfoto"></img>
        <div>
          <h1 align="center">Aanbiedingen </h1>
        </div>
      </div>

);
  }

}

export default Home;