import classes from './Auth.module.css';
import React from "react";
import Button from "../UI/Button";

const Auth = (props) => {

    const logInHandler = () => {
        props.onLogInButtonClickConfirmation()
    }

    return(
        <div className={classes.centre}>
            <Button onClick={logInHandler} >LogIn</Button>
        </div>
    );
};

export default Auth;