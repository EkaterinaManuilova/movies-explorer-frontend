import './Header.css';
import { React, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import ProfileButton from '../ProfileButton/ProfileButton';
import LoginButton from '../LoginButton/LoginButton';
import RegButton from '../RegButton/RegButton';
import BurgerMenuButton from '../BurgerMenuButton/BurgerMenuButton';
import BurgerMenu from '../BurgerMenu/BurgerMenu';


function Header() {

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 768;
  useEffect(() => {
   const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
function handleClickBurgerMenu() {
  setIsBurgerMenuOpen(!isBurgerMenuOpen);
}


  if (width > breakpoint) {
  return (
    <header className="header">
      <Routes>
      <Route path="/" element={<Logo />}>
        </Route>
        <Route path="/movies" element={<Logo />}>
        </Route>
        <Route path="/saved-movies" element={<Logo />}>
        </Route>
        <Route path="/profile" element={<Logo />}>
        </Route>
      </Routes>

      <div className="header__content">
       <Routes>
        <Route path="/" element={<RegButton />}>
        </Route>
        <Route path="/movies" element={<Navigation />}>
        </Route>
        <Route path="/saved-movies" element={<Navigation />}>
        </Route>
        <Route path="/profile" element={<Navigation />}>
        </Route>
      </Routes>

        <Routes>
          <Route path="/" element={<LoginButton />}></Route>

          <Route path="/movies" element={<ProfileButton />}></Route>

          <Route path="/saved-movies" element={<ProfileButton />}></Route>

          <Route path="/profile" element={<ProfileButton />}></Route>
        </Routes>
      </div>
    </header>
  )
}

return(
  <header className="header">
     <Routes>
      <Route path="/" element={<Logo />}>
        </Route>
        <Route path="/movies" element={<Logo />}>
        </Route>
        <Route path="/saved-movies" element={<Logo />}>
        </Route>
        <Route path="/profile" element={<Logo />}>
        </Route>
      </Routes>
    <div className="header__content">
    <Routes>
        <Route path="/" element={<RegButton />}>
        </Route>
    </Routes>
    <Routes>
          <Route path="/" element={<LoginButton />}></Route>
          <Route path="/movies" element={ <BurgerMenuButton isOpen={isBurgerMenuOpen} handleClick={handleClickBurgerMenu}/>}></Route>

          <Route path="/saved-movies" element={ <BurgerMenuButton isOpen={isBurgerMenuOpen} handleClick={handleClickBurgerMenu}/>}></Route>

          <Route path="/profile" element={ <BurgerMenuButton isOpen={isBurgerMenuOpen} handleClick={handleClickBurgerMenu}/>}></Route>
    </Routes>
    <Routes>
    <Route path="/movies" element={ <BurgerMenu isOpen={isBurgerMenuOpen} handleClick={handleClickBurgerMenu}/>}></Route>

<Route path="/saved-movies" element={ <BurgerMenu isOpen={isBurgerMenuOpen} handleClick={handleClickBurgerMenu}/>}></Route>

<Route path="/profile" element={ <BurgerMenu isOpen={isBurgerMenuOpen} handleClick={handleClickBurgerMenu}/>}></Route>
    </Routes>
    </div>
  </header>
)
}

export default Header;