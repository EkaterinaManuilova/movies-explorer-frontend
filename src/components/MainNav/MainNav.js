import React from 'react';
import './MainNav.css';
import { Link } from 'react-router-dom';

function MainNav() {
  return (
    <nav className="main-nav">
    <React.Fragment>
      <Link className="main-nav__link main-nav__link_active" to="/movies">
        Фильмы
      </Link>
      <Link className="main-nav__link main-nav__link_active" to="/saved-movies">
      Сохраненные фильмы
    </Link>
    </React.Fragment>
    </nav>

  )
}

export default MainNav;