import React, {useState} from "react";
import classes from "./MenuOptions.module.css";
import Balance from "./BalanceScreen/Balance";
import Deposit from "./DepositScreen/Deposit";
import Withdraw from "./WithdrawScreen/Withdraw";
import Button from "../../UI/Button";

const MenuOptions = (props) => {

    const [balanceButtonClicked, setBalanceButtonClicked] = useState(false);
    const [depositButtonClicked, setDepositButtonClicked] = useState(false);
    const [withdrawButtonClicked, setWithdrawButtonClicked] = useState(false);

    const balanceHandler = () => {
        setBalanceButtonClicked(true);
        console.log('balance button has been clicked')
        props.onUserClickMenuOption();
        console.log('menu option has been clicked')
    }

    const balanceShowHandler = () => {
        setBalanceButtonClicked(false);
    }

    const depositHandler = () => {
        setDepositButtonClicked(true);
        console.log('deposit button has been clicked')
        props.onUserClickMenuOption();
    }

    const depositShowHandler = () => {
        setDepositButtonClicked(false);
    }

    const withdrawHandler = () => {
        setWithdrawButtonClicked(true);
        console.log('withdraw button has been clicked')
        props.onUserClickMenuOption();
    }

    const withdrawShowHandler = () => {
        setWithdrawButtonClicked(false);

    }


    return(
        <div className={classes.centre}>

            {!balanceButtonClicked && <Button onClick={balanceHandler}>Balance</Button>}
            {balanceButtonClicked && <Balance onBalanceSelect={balanceShowHandler}></Balance>}

            {!depositButtonClicked && <Button onClick={depositHandler}>Deposit</Button>}
            {depositButtonClicked && <Deposit onDepositSelect={depositShowHandler}></Deposit>}

            {!withdrawButtonClicked && <Button onClick={withdrawHandler}>Withdraw</Button>}
            {withdrawButtonClicked && <Withdraw onWithdrawSelect={withdrawShowHandler}></Withdraw>}

        </div>
    );

};

export default MenuOptions;