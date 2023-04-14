import React from 'react';

const Cart = ({cart,handleRemoveFromCart}) => {
    return (
        <div>
            <h1>Order Review : {cart.length}</h1>
            {
                cart.map(pd=><p key={pd._id}>{pd.name} <button onClick={()=>handleRemoveFromCart(pd._id)}>X</button></p>)
            }
        </div>
    );
};

export default Cart;