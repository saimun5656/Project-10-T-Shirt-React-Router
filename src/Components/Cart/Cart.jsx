import React from 'react';
import { ToastContainer } from 'react-toastify';

const Cart = ({cart,handleRemoveFromCart}) => {
    let message;
    if(cart.length===0){
        message=<h1>add some product</h1>
    }
    else{
        message=<h1>Boroloxxxx</h1>
    }
    return (
        <div>
            <h1>Order Review : {cart.length}</h1>
            {message}
            {
                cart.map(pd=><p key={pd._id}>{pd.name} <button onClick={()=>handleRemoveFromCart(pd._id)}>X</button><ToastContainer/></p>)
            }
        </div>
    );
};

export default Cart;