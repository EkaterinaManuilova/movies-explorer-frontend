import './Header.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainNav from '../MainNav/MainNav';
import Logo from '../Logo/Logo';
import ProfileButton from '../ProfileButton/ProfileButton';
import LoginButton from '../LoginButton/LoginButton';
import RegButton from '../RegButton/RegButton';


function Header() {

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;
  React.useEffect(() => {
   const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  if (width > breakpoint) {
  return (
    <header className="header">
      <Logo />
      <div className="header__content">
       <Routes>
        <Route path="/" element={<RegButton />}>
        </Route>
        <Route path="/movies" element={<MainNav />}>
        </Route>
        <Route path="/saved-movies" element={<MainNav />}>
        </Route>
        <Route path="/profile" element={<MainNav />}>
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
    <Logo />
    <div>Burger-menu</div>
  </header>
)
}

export default Header;