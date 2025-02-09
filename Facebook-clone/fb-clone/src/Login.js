import React from 'react'
import "./Login.css"
import Button from '@material-ui/core/Button'
import {auth,provider} from "./firebase";
import { actionTypes } from './reducer';
import { useStateValue } from "./StateProvider";
function Login() {
    const [state,dispatch]=useStateValue();

    const signIn = () => {
        //Sign In
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            });
        })
            .catch((error) => alert(error.message)); 
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt="" />

                <img src="https://i.ibb.co/HzWd0nH/facebook-1-logo-png-transparent.png" alt="facebook-1-logo-png-transparent"  />
            </div>
            <Button type="submit" onClick={signIn} className="button">
                Sign In
            </Button>
        </div>
    );
}

export default Login
