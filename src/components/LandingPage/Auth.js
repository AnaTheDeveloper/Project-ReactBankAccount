import classes from './Auth.module.css';
import React from "react";
import Button from "../UI/Button";

const Auth = (props) => {



    return(
        <div className={classes.centre}>
            <Button onClick={props.onLogInButtonClickConfirmation}>LogIn</Button>
        </div>
    );
};

export default Auth;