import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import request from 'superagent';



// Material-UI
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

//components
import SimpleHeading from "../../components/SimpleHeading";
import WinkelmandItem from './../../components/winkelmandItem';
import { Link } from "react-router-dom";
import BetaalOverzichtItem from "../../components/BetaalOverzichtItem";
import LayoutDefault from '../../layout/Default';
import Loader from '../../components/Loading';




const styles = theme => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  typography: {
    useNextVariants: true,
  },
});

const theme = new createMuiTheme({
  palette: {
    primary: {
      main: '#76ff3b'
    },
    secondary: {
      main: '#000000'
    }
  }
});


  function getSteps() {
    return ['Orderlijst', 'Gegevens', 'Betaalwijze', 'Overzicht', 'Betaald'];
  }

  class payment extends Component {
    constructor(props){
      super(props);
      this.retrieveProduct = this.retrieveProduct.bind(this);
      this.productToState = this.productToState.bind(this);
      this.outputState = this.outputState.bind(this);
      this.isPresent = this.isPresent.bind(this);
      this.getAmount = this.getAmount.bind(this);
      this.getTotal = this.getTotal.bind(this);
      this.updateLocal = this.updateLocal.bind(this);
      this.order = this.order.bind(this);
    
  
      
      this.state = {        
        buttonDisabled: true,
        // cart: this.props.cart.items,
        // order: this.props.order.items,
        activeStep: this.setActiveStep(),
        // id: this.props.user.id,
        email:'',
        emailError: false,
        emailHelperText: '',
        aanhef: '',
        naam: '',
        achternaam: '',
        straat: '',
        huisnummer: '',
        postcode: '',
        stad: '',
        betaalwijze: '',
        redirect: false,
        loading: true,
        producten: [],
        aantallen: []
      }
    }
  

    componentDidMount(){
      this.productToState();
    }
  
  
    productToState(){
        const items = JSON.parse(window.localStorage.getItem('cart'));
        //console.log('Lokaal: ' + JSON.stringify(items));
        let result = [];
        let aantal  = [];
        if(items !== null){
          for(let i = 0; i < items.length; i++){
            //product ophalen
            const product = this.retrieveProduct(items[i].id)
            .then((res) => {
                if(this.isPresent(aantal, res.id)){
                  //Producten toevoegen die al in het mandje zitten:
                  for(let a = 0; a < aantal.length; a++){ //Vindt het juiste aantal object en update het aantal
                    if(aantal[a].id === res.id){
                      const oudAantal = parseInt(aantal[a].aantal);
                      const nieuwAantal = oudAantal + parseInt(items[i].qty);
                      aantal[a].aantal = nieuwAantal.toString();
                    }
                  }
                } else {
                  //Producten toevoegen die NOG NIET in het mandje zitten:
                  result.push({res});
                  aantal.push({id: res.id, aantal: items[i].qty});
                }
  
                //State setten
                if(i === items.length - 1){  
                  //console.log('Aantallen voor state set: ' + JSON.stringify(aantal));
                  this.setState({producten: result});
                  this.setState({loading: false});
                  this.setState({aantallen: aantal});
                }
              }
            );
          }
        }
      }
  
      isPresent(QArray, id){
        for(let i = 0; i < QArray.length; i++){
          //console.log('Vergelijk: ' + QArray[i].id + 'met: ' + id)
          if(QArray[i].id === id){
            return true;
          }
        }
        return false;
      }
  
      getTotal(){
        let total = 0;// eslint-disable-next-line
        this.state.producten.map((product)=>{
          //console.log('telt: ' + JSON.stringify(product));
          for(let i = 0; i < this.state.aantallen.length; i++){
            //console.log('aantal object: ' + JSON.stringify(this.state.aantallen[i]));
            if(product.res.id === this.state.aantallen[i].id){
              //console.log('producten ' + product.res.id + ' kosten: ' + (product.res.prijs * parseInt(this.state.aantallen[i].aantal)).toString());
              total  = total + (product.res.prijs * parseInt(this.state.aantallen[i].aantal));
            }
          }
        });
        //console.log('TOTAAL: ' + total);
        sessionStorage.setItem('total', total);
        return total;
      }
  
      getAmount(id){
        for(let i = 0; i < this.state.aantallen.length; i++){
          if(this.state.aantallen[i].id === id){
           return this.state.aantallen[i].aantal;
          }
        }
      }
    
      async retrieveProduct(id){
        return await axios.get('http://localhost:5000/api/product/' + id)
        .then((res) =>{
          return res.data;
        });
      }
  
      outputState(){
        const stateObject = this.state.producten;
        console.log('Complete state: ' + JSON.stringify(stateObject));
        //console.log('Lengte state: ' + stateObject.length);
        //console.log('producten onderdeel: ' + JSON.stringify(stateObject[0]));
        //console.log('aantallen :' + JSON.stringify(this.state.aantallen));
      }
  
      //Te roepen na increase- en decrease functies om localStorage aan de state gelijk te zetten
      updateLocal(){
        let localArray = [];
        for(let i = 0; i < this.state.aantallen.length; i++){
          localArray.push({id: this.state.aantallen[i].id, qty: this.state.aantallen[i].aantal});
        }
        window.localStorage.setItem('cart', JSON.stringify(localArray));
        console.log('Local items: ' + JSON.stringify(window.localStorage.getItem('cart')));
        console.log('stateAantallen: ' + JSON.stringify(this.state.aantallen));
        this.setState(this.state);
      }
  
      
  
      order(){
        //producten uit aantallen array tot bestelling array maken en in sessionStorage pleuren
        const aantallenArray = this.state.aantallen;
        let bestelArray = [];
        for(let i = 0 ; i < aantallenArray.length; i++){
          let productAantal = parseInt(aantallenArray[i].aantal);
          let productID = aantallenArray[i].id;
          console.log('van product ' + productID + ' hebben we: ' + productAantal);
          let currentCount = 0
          while (currentCount < productAantal){
            bestelArray.push(productID);
            currentCount += 1;
          }
        }
        sessionStorage.setItem('order', bestelArray);
        console.log('Order: '+ sessionStorage.getItem('order'));
      }

    handleChange = name => event => {
      this.setState({
        [name]: event.target.value,
      });
  
      if (this.state.aanhef.length &&
          this.state.naam.length &&
          this.state.achternaam.length &&
          this.state.email.length &&
          this.state.straat.length &&
          this.state.huisnummer.length &&
          this.state.postcode.length &&
          this.state.stad.length) {
        this.setState({
          buttonDisabled: false
        })
      } else {
        this.setState({
          buttonDisabled: true
        })
      }
  
    };

    setActiveStep = () => {
      if (this.props.loggedIn) {
        return 3
      } else {
        return 1
      }
    }
  
    componentDidMount = () => {
      if (this.props.loggedIn) {
        this.setState({
          buttonDisabled: false
        })
      }
    }
  
    getStepContent = (stepIndex) => {
      switch (stepIndex) {
        case 0:
        return (   
          
              <div className="wrapper">
                <SimpleHeading
                  title="Winkelmand"
                  description="Een overzicht van de door u geselecteerde producten:"
                />
                <div className="betaalOverzicht">
                    <h1>Betaal overzicht</h1>
                    
              </div>
              </div>
          );

          case 1:
      return (
        
            <div className="stepper-content-container">
              <form className="order-form-details">
                <div className="order-form-details-column" id="order-form-details-column-lables">
                  <div className="order-form-details-row-label">
                    <p>Aanhef</p>
                  </div>
                  <div className="order-form-details-row-label">
                    <p>Naam</p>
                  </div>
                  <div className="order-form-details-row-label">
                    <p>Email</p>
                  </div>
                  <div className="order-form-details-row-label">
                    <p>Straat en huisnummer</p>
                  </div>
                  <div className="order-form-details-row-label">
                    <p>Postcode</p>
                  </div>
                  <div className="order-form-details-row-label">
                    <p>Stad</p>
                  </div>
                </div>
                <div className="order-form-details-column">
                  <div className="order-form-details-row-input">
                    <div className="order-form-details-radio">
                      <FormControl component="fieldset" className="order-form-details-radio">
                        <RadioGroup
                          className="order-form-details-radio"
                          aria-label="Aanhef"
                          name="aanhef"
                          value={this.state.aanhef}
                          onChange={this.handleChange('aanhef')}
                        >
                          <FormControlLabel value="Dhr." control={<Radio color="primary" />} label="Dhr." />
                          <FormControlLabel value="Mevr." control={<Radio color="primary" />} label="Mevr." />
                        </RadioGroup>
                      </FormControl>
                    </div>
                  </div>
                  <div className="order-form-details-row-input">
                    <TextField
                      id="order-input-name"
                      type="text"
                      name="naam"
                      placeholder="Naam"
                      value={this.state.naam}
                      onChange={this.handleChange('naam')}
                      onBlur={this.handleChange ('naam')}
                    />
                    <div className="order-input-divider" />
                    <TextField
                      id="order-input-achternaam"
                      type="text"
                      name="achternaam"
                      placeholder="Achternaam"
                      value={this.state.achternaam}
                      onChange={this.handleChange('achternaam')}
                      onBlur={this.handleChange ('achternaam')}
                    />
                  </div>
                  <div className="order-form-details-row-input">
                    <FormControl error={this.state.emailError}>
                      <Input
                        id="order-input-email"
                        label="Email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        autoComplete="email"
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                        onBlur={this.handleChange ('email')}
                        inputProps={{
                          'aria-label': 'Email'
                        }} />
                      <FormHelperText id="component-error-text">{ this.state.emailHelperText }</FormHelperText>
                    </FormControl>
                  </div>
                  <div className="order-form-details-row-input">
                    <TextField
                      id="order-input-straat"
                      type="text"
                      name="straat"
                      placeholder="Straat"
                      value={this.state.straat}
                      onChange={this.handleChange('straat')}
                      onBlur={this.handleChange ('straat')}
                    />
                    <div className="order-input-divider" />
                    <TextField
                      id="order-input-huisnummer"
                      type="text"
                      name="Huisnummer"
                      placeholder="Huisnummer"
                      value={this.state.huisnummer}
                      onChange={this.handleChange('huisnummer')}
                      onBlur={this.handleChange ('huisnummer')}
                    />
                  </div>
                  <div className="order-form-details-row-input">
                    <TextField
                      id="order-input-postcode"
                      type="text"
                      name="Postcode"
                      placeholder="Postcode"
                      value={this.state.postcode}
                      onChange={this.handleChange('postcode')}
                      onBlur={this.handleChange ('postcode')}
                    />
                  </div>
                  <div className="order-form-details-row-input">
                    <TextField
                      id="order-input-stad"
                      type="text"
                      name="Stad"
                      placeholder="Stad"
                      value={this.state.stad}
                      onChange={this.handleChange('stad')}
                      onBlur={this.handleChange ('stad')}
                    />
                    
                  </div>
                </div>
              </form>
            </div>
            
      );
      case 2:
      return (
        <div className="stepper-content-container">
          <form className="order-form-details">
            <div className="order-form-details-column" id="order-form-details-column-lables">
              <div className="order-form-details-row-label">
                <p>Betaalwijze</p>
              </div>
            </div>
            <div className="order-form-details-column">
              <div className="order-form-details-row-input">
                <FormControl>
                  <Select
                    color="primary"
                    displayEmpty
                    value={this.state.betaalwijze}
                    onChange={this.handleChange('betaalwijze')}
                  >
                    <MenuItem value="" disabled>
                      Betaalwijze
                    </MenuItem>
                    <MenuItem value={'iDeal'}>iDeal</MenuItem>
                    <MenuItem value={'Creditcard'}>Creditcard</MenuItem>
                    <MenuItem value={'Paypal'}>Paypal</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </form>
        </div>
      
      );
      case 3:
      this.outputState();
        return (  
                        
          <div className="stepper-content-container">
          <div className="order-form-details">
            <div className="order-form-details-column">
              {/* Gegevens user */}
              <span className="order-ov-span">Gegevens</span>
              <div className="order-ov-details">
                {this.state.aanhef}&nbsp;
                {this.state.naam}&nbsp;
                {this.state.achternaam}
              </div>
              <div className="order-ov-details">
                {this.state.straat}&nbsp;
                {this.state.huisnummer}
              </div>
              <div className="order-ov-details">
                {this.state.postcode}&nbsp;
                {this.state.stad}
              </div>
            </div>
            <div className="order-form-details-column">
              {/* Betaalwijze */}
              <span className="order-ov-span">Betaalwijze</span>
              <div className="order-ov-details">
                {this.state.betaalwijze}
              </div>
            </div>
            
            <div className="wrapper">             
              <div className="betaalOverzicht">
                  <h1>Betaal overzicht</h1>
                  Totaal: <br />
                  <table>
                    <tbody>
                      {this.state.producten.map((producten) => {
                        return <BetaalOverzichtItem naam={producten.res.naam} aantal={this.getAmount(producten.res.id)} prijs={producten.res.prijs} />
                      })}
                    </tbody>
                  </table>
                  
                  <div className='line'></div>
                  <table>
                    <tbody>
                      <tr>
                        <td>Verzending:</td>
                        <td>€4,95</td>
                      </tr>
                      <tr>
                        <td>Totaal excl. BTW:</td>
                        <td>€{((this.getTotal()/106)*100 + 4.95).toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td>6% BTW: </td>
                        <td>€{((this.getTotal()/106)*6).toFixed(2)}</td>
                      </tr>
                      <tr>
                        <td><b>Totaal incl. BTW:</b></td>
                        <td><b>€{(this.getTotal() + 4.95).toFixed(2)}</b></td>                    
                      </tr>
                    </tbody>
                  </table>   
              </div>
              
            </div>
              
          </div>
        </div>
          
      
          
        );
      // } if (window.localStorage.getItem('cart') === null || JSON.parse(window.localStorage.getItem('cart')).length === 0) {
      //   return (
      //   <React.Fragment>
          
      //         <SimpleHeading
      //           title="Winkelmand"
      //           description="U heeft nog geen producten aan uw winkelmand toegevoegd."
      //         />
      //         <Link to="/overzicht/0"><button class="button">Klik hier om verder te winkelen</button></Link>                
      //   </React.Fragment>
      //   );
      // } else {
      //   return <Loader />
        
      // }
      
         
      
      case 4:
      return (
        <div className="stepper-content-container">
          <h3 className="order-payment-successfull">Betaling successvol!</h3>
        </div>
      );
      default:
        return 'Uknown stepIndex';
    }
  }

  handleNext = () => {
    if (this.state.activeStep + 1 === 0) {
      this.setState(state => ({
        buttonDisabled: false
      }));
    } else if (this.state.activeStep + 1 === 1) {
      if (this.state.aanhef.length &&
        this.state.naam.length &&
        this.state.achternaam.length &&
        this.state.email.length &&
        this.state.straat.length &&
        this.state.huisnummer.length &&
        this.state.postcode.length &&
        this.state.stad.length) {
        this.setState({
          buttonDisabled: false
        })
      } else {
        this.setState({
          buttonDisabled: true
        })
      }
    } else if (this.state.activeStep + 1 === 2) {
      if (this.state.betaalwijze.length) {
        this.setState({
          buttonDisabled: false
        })
      } else {
        this.setState({
          buttonDisabled: true
        })
      }
    }

    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    if (this.state.activeStep - 1 === 0) {
      this.setState(state => ({
        // buttonDisabled: false
        redirect: true
      }));
    }

    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;
    return (
      
      <section className="section-container">
      {this.state.redirect ? (
        <Redirect to="/Winkelmand" push />
      ) : null}
      
        <LayoutDefault className="SignUp" simple="true">
        <SimpleHeading title="Bestellen"/>
        <div className="stepper-container">
          <Stepper activeStep={activeStep} alternativeLabel className="stepper">
            {steps.map(label => {
              return (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </div>
        <div>
          {this.state.activeStep === steps.length ? (
            <div>
              {/* Betaalt! component */}
            </div>
          ) : (
            <div>
              <div className={classes.instructions}>{this.getStepContent(activeStep)}</div>
              <div className="order-action-container">
                <div style={{ display: 'flex', flexFlow: 'row nowrap' }}>
                
                  
                  {activeStep === 0 | activeStep === 4 ? null : (
                    <Button
                      variant="outlined"
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                      className={classes.backButton}
                      >
                      Terug
                    </Button>
                  )}
                  {activeStep === 3 | activeStep === 4 ? null : (
                    <MuiThemeProvider theme={theme}>
                      <Button
                        variant="contained"
                        color='secondary'
                        onClick={this.handleNext}
                        disabled={this.state.buttonDisabled}>
                          Volgende
                      </Button>
                    </MuiThemeProvider>
                  )}
                  {activeStep === 3 ? (
                    <MuiThemeProvider theme={theme}>                   
                          <Button
                            variant="contained"
                            color='primary'
                            onClick={() => {                        
                              this.setState({
                                activeStep: this.state.activeStep + 1
                              })
                            }}
                          >
                            Betalen
                          </Button>                       
                    </MuiThemeProvider>
                  ) : null}
                  {activeStep === 4 ? (
                     <Link to="/overzicht/0"><button class="button">Klik hier om verder te winkelen</button></Link>
                  ) : null}
                  
                </div>
              </div>
            </div>
          )}
        </div>
        </LayoutDefault>        
      </section>
      
        
      
    );
  }
}

  



export default withStyles(styles)(payment);