import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Home.css'
const Home = () => {
    const products=useLoaderData()
    const [cart,setcart]=useState([])
    const handleAddToCart=(product)=>{
        const exist=cart.find(pd=>pd._id===product._id)
        if(exist){

        }
        else{
            setcart([...cart,product])
        }
           
    }
    const handleRemoveFromCart=(id)=>{
        const remaining =cart.filter(pd=>pd._id!==id);
        console.log(remaining);
        setcart(remaining)
    }
    return (
        <div className='home-container'>
           
              <div className='products-container'>
              {
                products.map(pd=><Product key={pd._id} handleAddToCart={handleAddToCart} product={pd}></Product>)
               } 
              </div>
              <div className='cart-container'>
                      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
              </div>
        </div>
    );
};

export default Home;