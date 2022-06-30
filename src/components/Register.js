import React from "react";
import { Link } from "react-router-dom";

function Register({ onRegister }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (! name || !email || !password) {
      return;
    }
    onRegister(name, email, password);
  }

  return (
    <div className="identification">
      <form
        className="auth-form auth-form_type_register"
        onSubmit={handleSubmit}
      >
        <h2 className="auth-form__title">Добро пожаловать!</h2>
        <input
          type="text"
          className="auth-form__input"
          value={name || ""}
          onChange={handleNameChange}
          placeholder="Имя"
          autoComplete="off"
          required
        />
        <input
          type="email"
          className="auth-form__input"
          value={email || ""}
          onChange={handleEmailChange}
          placeholder="E-mail"
          autoComplete="off"
          required
        />
        <input
          type="password"
          className="auth-form__input"
          value={password || ""}
          onChange={handlePasswordChange}
          placeholder="Пароль"
          autoComplete="off"
          required
        />
        <button type="submit" className="auth-form__button">
          Зарегистрироваться
        </button>
        <p className="auth-form__link-caption">Уже зарегистрированы?</p>
        <Link className="auth-form__link" to="/signin">
          Войти
        </Link>
      </form>
    </div>
  );
}

export default Register;
