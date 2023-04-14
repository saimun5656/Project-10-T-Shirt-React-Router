import React from 'react';
import './Product.css'

const Product = ({product,handleAddToCart}) => {
    const{price,picture,name,gender,}=product
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>${price}</p>
            <button onClick={()=>handleAddToCart(product)} className='buy-btn'>Buy Now</button>
        </div>
    );
};

export default Product;