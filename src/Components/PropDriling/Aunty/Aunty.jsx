import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = () => {
    return (
        <div>
           <h1>Aunty</h1> 
           <section className='flex'>
           <Cousin>Minhaz</Cousin>
           <Cousin>Sayma</Cousin>
           </section>
        </div>
    );
};

export default Aunty;