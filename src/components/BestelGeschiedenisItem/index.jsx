import React, { Component } from "react";
import request from 'superagent';
import Loader from '../../components/Loading';

class BestelGeschiedenisItem extends Component 
{
    constructor(props) 
    {
        super(props);

        this.state = {
            klant: null
        }
 
    }


    render()
    {
        return (
            <div className= "mandjeItem">
                <img src={this.props.foto} className= "productFoto" alt=""/>
                <div>
                    <h2>{(this.props.geregistreerd)?'Klant: ':'Gast: '}{this.props.klantID}</h2>
                    <p>{this.props.adres}</p>
                    <h4>€{this.props.prijs.toFixed(2)}</h4>
                </div>
                <div>
                    <h1>{this.props.producten.length}</h1>
                </div>
            </div>
        );
    }
}

export default BestelGeschiedenisItem;
