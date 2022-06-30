import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import auth from "../utils/auth";


function App () {
const [currentUser, setCurrentUser] = useState({});
const [isSuccessReg, setIsSuccessReg] = useState(false);
const [loggedIn, setLoggedIn] = useState(false);
// const [emailAuthorized, setEmailAuthorized] = useState("");
const history = useHistory();


function handleRegister(name, email, password) {
  auth
    .register(name, email, password)
    .then(() => {
      setIsSuccessReg(true);
      history.push("/signin");
    })
    .catch((err) => {
      console.log(err);
      setIsSuccessReg(false);
    });
    // .finally(() => {
    //   handleInfoTooltipSetOpen();
    // });
}

function handleAuthorize(email, password) {
  auth
    .authorize(email, password)
    .then((data) => {
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        // setEmailAuthorized(data.email);
        history.push('/');
        // handleTokenCheck();
        setLoggedIn(true);
      }
    })
    .catch((err) => console.log(err));
}

function handleTokenCheck() {
  const token = localStorage.getItem("jwt");
  if (token) {
    setLoggedIn(true);
    auth
      .checkToken(token)
      .then((res) => {
        if (res) {
        setEmailAuthorized(res.email);
        }

        history.push('/');
      })
      .catch((err) => console.log(err));
  }
}

function handleLogOut() {
  localStorage.removeItem("jwt");
  setLoggedIn(false);
  setCurrentUser({});
}

return (
  <CurrentUserContext.Provider value={currentUser}>
    <div>
    <Switch>
          <Route path="/signup">
            <Register onRegister={handleRegister} />
          </Route>
          <Route path="/signin">
            <Login onLogin={handleAuthorize} />
          </Route>
          <ProtectedRoute
            exact
            path="/"
            loggedIn={loggedIn}
            component={Main}
            onEditProfile={handleEditProfileClick}
          />
          <Route path="/">
            {loggedIn ? <Redirect to="/" /> : <Redirect to="/singin" />}
          </Route>
        </Switch>
    </div>
  </CurrentUserContext.Provider>
);
}

export default App;
