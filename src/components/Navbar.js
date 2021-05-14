import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo-white.png';
import { Auth} from 'aws-amplify';
import './Navbar.css';
import { useHistory } from "react-router-dom";

export default function Navbar() {
    let history = useHistory();
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        UserLoggedInState();
      }, []);
    
      const UserLoggedInState = () => {
        Auth.currentAuthenticatedUser().then(() => {
          setLoggedIn(true)
        }).catch(() => {
          setLoggedIn(false)
        })
      };

      async function signOut() {
        try {
            await Auth.signOut();
            UserLoggedInState();
            
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    return (
        <div id='navbar'>
            <img id='nav-logo' src={logo} alt='logo'/>
            <Link to='/'><h1>Pocket Landlord</h1></Link>

            <div>
            {loggedIn ? (<button className='nav-btn' onClick={signOut}>Log Out</button>) : (<>
            <Link to='/signin'><button className='nav-btn' id='sign-btn'>Sign In</button></Link>
            <Link to='/register'><button className='nav-btn' id='register-btn'>Register</button></Link> 
            </>)}
            
            </div>

        </div>
    )
}
