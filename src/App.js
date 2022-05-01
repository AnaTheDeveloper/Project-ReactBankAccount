import './App.css';
import React, {useState} from "react";
import Title from "./components/UI/Title";
import Auth from "./components/LandingPage/Auth";
import HomePage from "./components/HomePage/HomePage";

function App() {

    //Checking if user has clicked button or not. Initially set to false.
    const [hasLoggedIn, setHasLoggedIn] = useState(false);

    //When this method is called the boolean is changed to true.
    const loginHandler = () => {
        setHasLoggedIn(true);
        console.log('login handler called')
    }

  return (
    <React.Fragment>

      <Title>
        <p>Greenland Bank Account</p>
      </Title>

        {!hasLoggedIn && <Auth onLogInButtonClickConfirmation={loginHandler}/>}

        {hasLoggedIn && <HomePage />}

    </React.Fragment>
  );
}

export default App;
