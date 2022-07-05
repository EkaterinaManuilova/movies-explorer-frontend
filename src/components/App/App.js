import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from "../Header/Header"
import Login from '../Login/Login';
import Register from "../Register/Register";
import Main from '../Main/Main';
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
// import PageNotFound from "../PageNotFound/PageNotFound";
// import Footer from "../Footer/Footer";
// import { CurrentUserContext } from "../../contexts/CurrentUserContext";
// import auth from "../../utils/auth";
// import moviesApi from "../../utils/moviesApi";


function App () {
// const [currentUser, setCurrentUser] = useState({});

// const [emailAuthorized, setEmailAuthorized] = useState("");


// function handleRegister(name, email, password) {
//   auth
//     .register(name, email, password)
//     .then(() => {
//       setIsSuccessReg(true);
//       navigate("/signin");
//     })
//     .catch((err) => {
//       console.log(err);
//       setIsSuccessReg(false);
//     });
//     .finally(() => {
//       handleInfoTooltipSetOpen();
//     });
// }

// function handleAuthorize(email, password) {
//   auth
//     .authorize(email, password)
//     .then((data) => {
//       if (data.token) {
//         localStorage.setItem("jwt", data.token);
//         // setEmailAuthorized(data.email);
//         navigate('/');
//         // handleTokenCheck();
//         setLoggedIn(true);
//       }
//     })
//     .catch((err) => console.log(err));
// }

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

      <div className="page-container">
    <Header />

    <Routes>
          <Route path="/signup" element={<Register />}>
          </Route>

          <Route path="/signin" element={<Login />}>
          </Route>

          <Route path="/profile" element={<Profile />}>
          </Route>

          <Route path="/" element={<Main />}>
          </Route>

          <Route path="/movies" element={<Movies />}>
          </Route>

          <Route path="/saved-movies" element={<SavedMovies />}>
          </Route>


          {/* <Route
            path="/*"
              element={<PageNotFound />}>
          </Route> */}


        </Routes>
        <Routes>
        <Route path="/" element={<Footer />}>
          </Route>
          <Route path="/movies" element={<Footer />}>
          </Route>
          <Route path="/saved-movies" element={<Footer />}>
          </Route>
        </Routes>

   {/* <Footer /> */}
    </div>
);
}

export default App;
