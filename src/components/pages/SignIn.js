import React, { useState } from 'react';
import './Auth.css';
import { Auth } from 'aws-amplify';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function SignIn() {
    let history = useHistory();

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    async function signIn() {
        
        try {
            const user = await Auth.signIn(username, password);
            history.push("/");
        } catch (error) {
            console.log('error signing in', error);
        }
    }

    const classes = useStyles();

    return (
        <div id='sign-in-view'>
            

            <form className={classes.root} noValidate autoComplete="off">
            <h1 className='auth-head'>Sign In</h1>
                <TextField id="standard-basic" label="Email" value={username} onChange={(e)=> setUsername(e.target.value)} />
                <TextField id="standard-basic" label="Password" type="password" value={password} onChange={(e)=> setPassword(e.target.value)} />
                <Button variant="contained" onClick={signIn}>Sign In</Button>
                <p>Don't have an account? <Link to='/register'>Register Here</Link></p>
            </form>
        </div>
    )
}
