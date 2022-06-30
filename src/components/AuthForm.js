import React from "react";
import { Link } from "react-router-dom";

function AuthForm({
  children,
  onSubmit,
  title,
  isValid,
  buttonText,
  linkCaption,
  linkText,
  linkPath
}) {

  return (
    <form
      className="auth-form"
      onSubmit={onSubmit}
      noValidate
      >
        <Logo />
        <h2 className="auth-form__title">{title}</h2>
        <div className="auth-form__inputs">
          {children}
          <span
          className={`auth-form__error`}>
            {errors.name}
        </span>
        </div>
        <button  className={isValid ? "auth-form__button" : "auth-form__button auth-form__button_inactive"}>
          {buttonText}
        </button>
        <p className="auth-form__link-caption">
          {linkCaption}
        </p>
        <Link className="auth-form__link" to={linkPath}>
          {linkText}
        </Link>
      </form>
  );
}

export default AuthForm;