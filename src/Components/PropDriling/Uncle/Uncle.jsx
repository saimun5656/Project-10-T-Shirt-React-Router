import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className='flex'>
            <Cousin hasFriend={true}>Liton</Cousin>
            <Cousin>mona</Cousin>
            </section>
        </div>
    );
};

export default Uncle;