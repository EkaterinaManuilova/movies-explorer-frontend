import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import Input from "../Input/Input";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function Login(onSubmit) {

  const isValidInput = true;

  return (
    <div className="identification">
    <AuthForm
      onSubmit={onSubmit}
      title="Рады видеть!"
      buttonText="Войти"
      linkCaption="Ещё не зарегистрированы?"
      linkText="Регистрация"
      linkPath="/signup"
      >
        <Input
          type="email"
          name="email"
          labelText="E-mail"
            // value={email || ""}
            // onChange={handleEmailChange}
          placeholder="mail@mail.ru"
          isValidInput={isValidInput}
        />
        <Input
          type="password"
          name="password"
          labelText="password"
          // value={email || ""}
          // onChange={handlePasswordChange}
          placeholder="********"
          isValidInput={isValidInput}
        />
    </AuthForm>
    <InfoTooltip/>
  </div>
  );
}

export default Login;
