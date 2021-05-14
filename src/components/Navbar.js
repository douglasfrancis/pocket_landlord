import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    return (
        <div id='navbar'>
            <Link to='/'><h1>Pocket Landlord</h1></Link>
            <div>
            <Link to='/signin'><button id='sign-btn'>Sign In</button></Link>
            <Link to='/register'><button id='register-btn'>Register</button></Link>
            </div>
        </div>
    )
}
