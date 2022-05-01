import React, {useState} from "react";
import classes from './HomePage.module.css';
import Button from "../UI/Button";
import SubTitle from "../UI/SubTitle";
import MenuOptions from "./MenuOptions/MenuOptions";


const HomePage = (props) => {


    return(
        <React.Fragment>

            {/*TODO: Figure out why this isn't showing/being applied to the text.*/}
            <SubTitle>
                <p>Hi There! Welcome to your bank account!</p>
            </SubTitle>

            <MenuOptions></MenuOptions>

            <footer className={classes.footer}>
                <Button onClick={props.onBackConfirmation}>Back</Button>
            </footer>
        </React.Fragment>
    );
};

export default HomePage;