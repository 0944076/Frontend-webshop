import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductGridItem extends Component {
  render() {
    const { item } = this.props;
    //let price = Math.round(Math.random() * Math.floor(20));
    console.log("item in productgriditem",this.props)
    return (
      <Link to={`/product/${item.id}`} className="product-grid-item">
        <figure className="product-grid-item__figure">
          <div
            className="product-grid-item__image"
            style={{
              backgroundImage: `url(`+item.items.foto+`)`
            }}
          />
        </figure>
        <div className="product-grid-item__heading">
          <span className="product-grid-item__title">{item.name}</span>
          {/* <span className="product-grid-item__price">&euro;{price},-</span> */}
        </div>
      </Link>
    );
  }
}

export default ProductGridItem;
