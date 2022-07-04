import React from 'react';
import './BurgerMenu.css';
import closeIcon from '../../images/close-icon.svg';
import { Link } from 'react-router-dom';
import ProfileButton from '../ProfileButton/ProfileButton';

function BurgerMenu({isOpen, handleClick}) {


  return (
     <div className={isOpen ? 'burger-menu burger-menu_opened' : 'burger-menu'}>
      <button className="burger-menu-close-button" type="button" onClick={handleClick}>
        <img className="burger-menu__close-icon" src={closeIcon} alt="иконка закрытия" />
      </button>
      <nav className="burger-menu-nav">
    <React.Fragment>
    <Link className="burger-menu-nav__link" to="/">
        Главная
      </Link>
      <Link className="burger-menu-nav__link burger-menu-nav__link_active" to="/movies">
        Фильмы
      </Link>
      <Link className="burger-menu-nav__link" to="/saved-movies">
      Сохраненные фильмы
    </Link>
    </React.Fragment>
    </nav>
    <ProfileButton />
     </div>
  )
}

export default BurgerMenu;