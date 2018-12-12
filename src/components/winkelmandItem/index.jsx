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
                <div>
                    <h2>{this.props.titel}</h2>
                    <p>
                        {this.props.aantal}x
                        <img src="https://img.icons8.com/metro/1600/plus.png" className="itemButton" height="30px" />
                        <img src="https://img.icons8.com/metro/1600/minus.png" className="itemButton" height="30px" />
                    </p>
                    <p>€{this.props.prijs}</p>
                </div>
            </div>
        );

    }
}

export default WinkelmandItem;
