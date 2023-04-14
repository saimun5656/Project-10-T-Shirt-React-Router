import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {

    const ringbycontext=useContext(RingContext);

    return (
        <div>
            <h2>Special</h2>
            <p>Ring: {ringbycontext}</p>
        </div>
    );
};

export default Special;