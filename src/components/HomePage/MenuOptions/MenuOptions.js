import React, {useState} from "react";
import classes from "./MenuOptions.module.css";
import Balance from "./BalanceScreen/Balance";
import Deposit from "./DepositScreen/Deposit";
import Withdraw from "./WithdrawScreen/Withdraw";
import Button from "../../UI/Button";


const MenuOptions = props => {

    const [balanceButtonClicked, setBalanceButtonClicked] = useState(false);

    const balanceHandler = () => {
        setBalanceButtonClicked(true);
        console.log('balance button has been clicked')
    }

    const [depositButtonClicked, setDepositButtonClicked] = useState(false);

    const depositHandler = () => {
        setDepositButtonClicked(true);
        console.log('deposit button has been clicked')
    }

    const [withdrawButtonClicked, setWithdrawButtonClicked] = useState(false);

    const withdrawHandler = () => {
        setWithdrawButtonClicked(true);
        console.log('withdraw button has been clicked')
    }






    return(
        <div className={classes.centre}>

            {!balanceButtonClicked && <Button onClick={balanceHandler}>Balance</Button>}

            {!depositButtonClicked && <Button onClick={depositHandler}>Deposit</Button>}

            {!withdrawButtonClicked && <Button onClick={withdrawHandler}>Withdraw</Button>}


        </div>
    );

};

export default MenuOptions;