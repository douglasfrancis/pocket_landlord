import React, { useEffect, useState } from 'react';
import Dashboard from './Dashboard';
import { Auth} from 'aws-amplify';
import './Home.css';

export default function Home() {
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

    return (
        <div id='home-view'>
             {loggedIn ? (<Dashboard />):(<h1>Home</h1>)}
        </div>
    )
}
