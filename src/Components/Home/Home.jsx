import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import './Home.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
    const products=useLoaderData()
    const [cart,setcart]=useState([])
    const handleAddToCart=(product)=>{
        const exist=cart.find(pd=>pd._id===product._id)
        if(exist){
            toast.error('Already added', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
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