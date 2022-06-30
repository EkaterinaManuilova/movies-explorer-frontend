import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import Input from "../Input/Input";

function Login({ onLogin }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (!email || !password) {
      return;
    }
    onLogin(email, password);
  }

  return (
    <div className="identification">
    <AuthForm
      onSubmit={handleSubmit}
      title="Рады видеть!"
      buttonText="Войти"
      linkCaption="Ещё не зарегистрированы?"
      linkText="Регистрация"
      linkPath="/signup"
      >
        <Input
          type="email"
          name="email"
          value={email || ""}
          onChange={handleEmailChange}
          placeholder="E-mail"
          // errors={errors}
        />
        <Input
          type="password"
          name="password"
          value={email || ""}
          onChange={handlePasswordChange}
          placeholder="E-mail"
          // errors={errors}
        />
    </AuthForm>
  </div>
  );
}

export default Login;
