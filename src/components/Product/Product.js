import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img, name, seller, price, stock} = props.product;
    // console.log(props)
    return (
        <div className="single-product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br/>
                <p><small>By: {seller}</small></p>
                <h5>${price}</h5>
                <p><small>Only {stock} left in stock - order now</small></p>
                <button className="main-button" onClick={()=>props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> Buy Now</button>
            </div>
        </div>
    );
};

export default Product;