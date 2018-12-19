import React, { Component } from "react";

class WishlistItem extends Component 
{
    constructor(props) 
    {
        super(props);
    }

    render()
    {
        return (
            <div className="wishlistItem">
                <img src={this.props.foto} className= "productFoto"/>
                <div>
                    <h2>{this.props.titel}</h2>
                    <p>€{this.props.prijs}</p>
                </div>
            </div>
        );

    }
}

export default WishlistItem;
