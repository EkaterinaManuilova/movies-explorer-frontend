import React, { useState } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Header from "../Header/Header"
import Login from "../Login/Login";
import Register from "../Register/Register";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Footer from "../Footer/Footer";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import auth from "../../utils/auth";


function App () {
const [currentUser, setCurrentUser] = useState({});
const [isSuccessReg, setIsSuccessReg] = useState(false);
const [loggedIn, setLoggedIn] = useState(false);
// const [emailAuthorized, setEmailAuthorized] = useState("");
const navigate = useNavigate();


function handleRegister(name, email, password) {
  auth
    .register(name, email, password)
    .then(() => {
      setIsSuccessReg(true);
      navigate("/signin");
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
        navigate('/');
        // handleTokenCheck();
        setLoggedIn(true);
      }
    })
    .catch((err) => console.log(err));
}

// function handleTokenCheck() {
//   const token = localStorage.getItem("jwt");
//   if (token) {
//     setLoggedIn(true);
//     auth
//       .checkToken(token)
//       .then((res) => {
//         if (res) {
//         setEmailAuthorized(res.email);
//         }

//         history.push('/');
//       })
//       .catch((err) => console.log(err));
//   }
// }

// function handleLogOut() {
//   localStorage.removeItem("jwt");
//   setLoggedIn(false);
//   setCurrentUser({});
// }

return (
  <CurrentUserContext.Provider value={currentUser}>
    <div>
    <Header
      loggedIn={loggedIn}
    />
    <Routes>
          <Route path="/signup">
            <Register onRegister={handleRegister} />
          </Route>

          <Route path="/signin">
            <Login onLogin={handleAuthorize} />
          </Route>

          <Route exact path="/">
            <Main />
          </Route>

          <ProtectedRoute
            exact path="/movies"
            loggedIn={loggedIn}
            component={Movies}
          />

          <ProtectedRoute
            exact path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
          />

          <ProtectedRoute
            exact path="/me"
            loggedIn={loggedIn}
            component={Profile}
          />

          <Route path="/movies">
            {loggedIn ? <Navigate to="/movies" /> : <Navigate to="/singin" />}
          </Route>

          <Route path="*">
            <PageNotFound
/>          </Route>
        </Routes>

      <Footer />
    </div>
  </CurrentUserContext.Provider>
);
}

export default App;
