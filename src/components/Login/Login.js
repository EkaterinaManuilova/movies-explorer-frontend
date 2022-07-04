import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import Input from "../Input/Input";

function Login() {
  // const [email, setEmail] = React.useState("");
  // const [password, setPassword] = React.useState("");

  // function handleEmailChange(event) {
  //   setEmail(event.target.value);
  // }
  // function handlePasswordChange(event) {
  //   setPassword(event.target.value);
  // }
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   if (!email || !password) {
  //     return;
  //   }
  //   onLogin(email, password);
  // }

  const isValidInput = true;

  return (
    <div className="identification">
    <AuthForm
      // onSubmit={handleSubmit}
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
          errorText="Что-то пошло не так..."
        />
    </AuthForm>
  </div>
  );
}

export default Login;
