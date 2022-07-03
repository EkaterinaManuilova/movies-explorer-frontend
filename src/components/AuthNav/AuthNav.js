import React from 'react';
import './AuthNav.css';
import RegButton from '../RegButton/RegButton';
import LoginButton from '../LoginButton/LoginButton';

function AuthNav() {
  return (
   <nav className="auth-nav">
    <React.Fragment>
      <RegButton />
      <LoginButton />
    </React.Fragment>
  </nav>
  )
}

export default AuthNav;