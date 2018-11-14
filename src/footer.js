import React, { Component} from 'react';
import "./index.css"
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return(
        
        <div id="footer">This footer will always be positioned at the bottom of the page, but <strong>not fixed</strong>.
                <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <button type="button" class="btn btn-light"><Link to="/home">Home</Link></button>
        <button type="button" class="btn btn-light"><Link to="/contact">Contact</Link></button>
  <button type="button" class="btn btn-light"><Link to="/about">About us</Link></button>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#"><span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"></a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#"></a>
            </li>
          </ul>
        </div>
      </nav>
      Use of this site constitutes acceptance of our User Agreement and Privacy Policy. © 2018 Kamerplanten inc.
      </div>

      
      
      
          );
        }
      
      }

export default Footer;