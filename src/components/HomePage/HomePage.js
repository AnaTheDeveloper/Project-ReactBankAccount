import React, {useState} from "react";
import classes from './HomePage.module.css';
import Button from "../UI/Button";




const HomePage = (props) => {


    return(
        <div>
            <p>Hi There!, Welcome to your bank account!</p>

            <footer className={classes.footer}>
                <Button>Back</Button>
            </footer>
        </div>
    );
};

export default HomePage;