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
import PageNotFound from "../PageNotFound/PageNotFound";

function App () {

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

          <Route path="/" element={[<Main />, <Footer />]}>
          </Route>

          <Route path="/movies" element={[<Movies />, <Footer />]}>
          </Route>

          <Route path="/saved-movies" element={[<SavedMovies />, <Footer />]}>
          </Route>

          <Route path="/*"  element={<PageNotFound />}>
          </Route>
        </Routes>
    </div>
);
}

export default App;
