import React, {useState} from "react";
import classes from './HomePage.module.css';
import Button from "../UI/Button";
import MenuOptions from "./MenuOptions/MenuOptions";
import SubTitle from "../UI/SubTitle";
import BankPic from "../Img/BankPic.png";


const HomePage = (props) => {

    //Checking is user has clicked a menu option and is so hide the text
    const [hasUserClickedAMenuOption, setHasUserClickedAMenuOption] = useState(false);

    const userClickedAMenuOptionHandler = () => {
        setHasUserClickedAMenuOption(true);
    }

    //Reset the subtitle to show before you log out
    const resetUserClickedAMenuOptionHandler = () => {
        setHasUserClickedAMenuOption(false);
    }

    //Handles logout and resets, abstraction
    const logOUtHandler = () => {
        resetUserClickedAMenuOptionHandler();
        props.onBackConfirmation();
        console.log('reset called and log out called')
    }

    return(
        <React.Fragment>
            {/*TODO: Figure out why this isn't showing/being applied to the text.*/}
            <SubTitle>
                {!hasUserClickedAMenuOption && <p>Hi There! Welcome to your bank account!</p>}
            </SubTitle>

            {!hasUserClickedAMenuOption && <img src={BankPic} alt="Bank Pic" className={classes.img}/>}

            <MenuOptions onUserClickMenuOption={userClickedAMenuOptionHandler}/>

            <footer className={classes.footer}>
                <Button onClick={logOUtHandler}>Log Out</Button>
            </footer>

        </React.Fragment>
    );
};

export default HomePage;