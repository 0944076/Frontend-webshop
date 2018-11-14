
import React, { Component} from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return(
      <div>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
            
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">KamerPlant inc</a>
  <button type="button" class="btn btn-light"><Link to="/home">Home</Link></button>
  
  <button type="button" class="btn btn-light dropdown-toggle" id = "dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><Link to="/categories">Categorieen</Link></button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
  <button type="button" class="btn btn-light"><Link to="/register">Registreren</Link></button>
  <button type="button" class="btn btn-light"><Link to="/login">Log in</Link></button>
  
  <button type="button" class="btn btn-light"><Link to="/plantsupport">Plantsupport</Link></button>
  <button type="button" class="btn btn-light"><Link to="/contact">Contact</Link></button>
  <button type="button" class="btn btn-light"><Link to="/about">About us</Link></button>
  <button type="button" class="btn btn-light"><Link to="/cart">Winkelwagen</Link></button>
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

</div>
    );
  }

}

export default Navbar;