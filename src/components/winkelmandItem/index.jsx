import React, { Component } from "react";

class winkelmandItem extends Component 
{
    constructor(props) 
    {
        super(props);
    }

    render()
    {
        return <div>
            <img src={this.props.product.foto} />
            <h1>{this.props.product.titel}</h1>
            <p>{this.props.product.prijs}</p>
        </div>
    }
}

export default winkelmandItem;
