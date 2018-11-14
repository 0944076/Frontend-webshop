import React, { Component} from 'react';

class Register extends Component {
  render() {
    return(
        
      <div class="container">
            <div class="jumbotron" id="registratie">
                <h4 id="aanmelding">Aanmelding</h4>

                <form action="" method="post">
                    <input type="text" name="Voornaam" placeholder="Voornaam" />
                    <input type="text" name="achternaam" placeholder="achternaam" /><br/>
                    <input type="text" name="straat" placeholder="Straat" />
                    <input type="text" name="Huisnummer" placeholder="Huisnummer" /><br/>
                    <input type="text" name="Postcode" placeholder="Postcode" />
                    <input type="text" name="Woonplaats" placeholder="Woonplaats" /><br/>
                    <input type="text" name="Email" placeholder="E-mail" />
                    <input type="text" name="Telefoon" placeholder="Telefoon(optioneel)" /><br/>
                    <input type="password" name="wachtwoord" placeholder="Wachtwoord" />
                    <input type="password" name="wachtwoord2" placeholder="Herhaling Wachtwoord" /><br/>
                    <input type="date" name="bday" min="2000-01-02" placeholder="DD-MM-JJJJ" /><br/>
                    <input type="submit" />
                </form>
            </div>
        </div>
);
  }

}

export default Register;