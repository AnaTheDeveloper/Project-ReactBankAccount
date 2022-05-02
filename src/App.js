import classes from './App.module.css';
import React, {useState} from "react";
import Title from "./components/UI/Title";
import Auth from "./components/LandingPage/Auth";
import HomePage from "./components/HomePage/HomePage";
import {Link, NavLink, Redirect, Route, Switch} from "react-router-dom";
import Welcome from "./components/test/welcomePage/Welcome";
import Menu from "./components/test/menuPage/Menu";
import MenuDetail from "./components/test/menuPage/MenuDetail";

import BankPic from "./components/Img/BankPic.png";



function App() {

    //Checking if user has loggedin or not. Initially set to false.
    const [hasLoggedIn, setHasLoggedIn] = useState(false);

    //When this method is called the boolean is changed to true.
    const loginHandler = () => {
        setHasLoggedIn(true);
        console.log('login handler called')
    }

    const backButtonHandler = () => {
        setHasLoggedIn(false);
        console.log('logout button clicked');
    }



    return (
        <React.Fragment>

            <Title>
                <p>Greenland Bank Account</p>
            </Title>


            {!hasLoggedIn && <img src={BankPic} alt="Bank Pic" className={classes.img}/>}


            {/*<ul>*/}
            {/*    <li >*/}
            {/*        <NavLink activeClassName={classes.linkActive} to='/welcome'> Welcome page </NavLink>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <NavLink activeClassName={classes.linkActive}  to={'/menu'}> Menu </NavLink>*/}
            {/*    </li>*/}
            {/*</ul>*/}

            {/* <div>*/}

            {/*     <Switch>*/}
            {/*         <Route path='/' exact>*/}
            {/*             <Redirect to='/welcome' />*/}
            {/*         </Route>*/}
            {/*         <Route path='/welcome' >*/}
            {/*             <Welcome />*/}
            {/*         </Route>*/}

            {/*         <Route path='/menu' exact >*/}
            {/*             <Menu />*/}
            {/*         </Route>*/}

            {/*         <Route path='/menu/:details'  >*/}
            {/*             <MenuDetail />*/}
            {/*         </Route>*/}
            {/*         <Route path='*'>*/}
            {/*             <Redirect to='/' />*/}
            {/*         </Route>*/}

            {/*     </Switch>*/}

            {/* </div>*/}

            {!hasLoggedIn && <Auth onLogInButtonClickConfirmation={loginHandler}/>}

            {hasLoggedIn && <HomePage onBackConfirmation={backButtonHandler}/>}

        </React.Fragment>
    );

};

export default App;
