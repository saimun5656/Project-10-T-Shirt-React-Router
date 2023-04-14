import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav className='navbar'>
           <Link to="/">HOME</Link>
           <Link to="/orders">Order Review</Link>
           <Link to="/about">About</Link>
           <Link to="/contact">Contact</Link>
           <Link to="/grandpa">Grandpa</Link> 
        </nav>
    );
};

export default Header;