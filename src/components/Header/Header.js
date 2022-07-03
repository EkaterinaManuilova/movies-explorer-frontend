import './Header.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainNav from '../MainNav/MainNav';
import Logo from '../Logo/Logo';
import AuthNav from '../AuthNav/AuthNav';
import ProfileButton from '../ProfileButton/ProfileButton';


function Header() {
  return (
    <header className="header">
      <Logo />
      <div>
        <Routes>
          <Route path="/" element={<AuthNav />}>
          </Route>
          <Route path="/movies" element={<MainNav />}>
          </Route>
          <Route path="/saved-movies" element={<MainNav />}>
          </Route>
          <Route path="/profile" element={<MainNav />}>
          </Route>
      </Routes>
      </div>
      <div>
        <Routes>
          <Route path="/movies" element={<ProfileButton />}></Route>
        </Routes>
        <Routes>
          <Route path="/saved-movies" element={<ProfileButton />}></Route>
        </Routes>
        <Routes>
          <Route path="/profile" element={<ProfileButton />}></Route>
        </Routes>
      </div>
    </header>
  )
}

export default Header;