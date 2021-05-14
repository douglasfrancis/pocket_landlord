import React from 'react';
import './Auth.css';
import { Auth } from 'aws-amplify';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Register() {

    /*async function signUp() {
        try {
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    email,          // optional
                    phone_number,   // optional - E.164 number convention
                    // other custom attributes 
                }
            });
            console.log(user);
        } catch (error) {
            console.log('error signing up:', error);
        }
    }*/
    

    const classes = useStyles();

    return (
        <div id='register-view'>
            
            <form className={classes.root} noValidate autoComplete="off">
            <h1 className='auth-head'>Register</h1>
                <TextField id="standard-basic" label="Full Name" />
                <TextField id="standard-basic" label="Email" />
                <TextField id="standard-basic" label="Password" type="password" />
                <TextField id="standard-basic" label="Confirm Password" type="password" />
                <Button variant="contained">Register</Button>
                <p>Already have an account? <Link to='/signin'>Sign In</Link></p>
            </form>
            
        </div>
    )
}
