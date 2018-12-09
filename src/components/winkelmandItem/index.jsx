import React, { Component } from "react";

class WinkelmandItem extends Component 
{
    constructor(props) 
    {
        super(props);
    }

    render()
    {
        return (
            <div className= "mandjeItem">
                <img src={this.props.foto} className= "productFoto"/>
                <div className = "itemInfo">
                    <h1>{this.props.titel}</h1>
                    <p>€{this.props.prijs}</p>
                </div>
            </div>
        );

    }
}

export default WinkelmandItem;
