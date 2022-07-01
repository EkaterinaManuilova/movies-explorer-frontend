import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import Input from "../Input/Input";

function Register() {
  // const [name, setName] = React.useState("");
  // const [email, setEmail] = React.useState("");
  // const [password, setPassword] = React.useState("");

  // function handleNameChange(event) {
  //   setName(event.target.value);
  // }

  // function handleEmailChange(event) {
  //   setEmail(event.target.value);
  // }
  // function handlePasswordChange(event) {
  //   setPassword(event.target.value);
  // }
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   if (! name || !email || !password) {
  //     return;
  //   }
  //   onRegister(name, email, password);
  // }

  return (
    <div className="identification">
      <AuthForm
        // onSubmit={handleSubmit}
        title="Добро пожаловать!"
        // isValid={isValid}
        buttonText="Зарегистрироваться"
        linkCaption="Уже зарегистрированы?"
        linkText="Войти"
        linkPath="/signin"
        >
          <Input
            type="text"
            name="name"
            // value={name || ""}
            // onChange={handleNameChange}
            placeholder="Имя"
            minLength={2}
            maxLength={30}
            // errors={errors}
          />
          <Input
            type="email"
            name="email"
            // value={email || ""}
            // onChange={handleEmailChange}
            placeholder="E-mail"
            // errors={errors}
          />
          <Input
            type="password"
            name="password"
            // value={email || ""}
            // onChange={handlePasswordChange}
            placeholder="E-mail"
            // errors={errors}
          />
      </AuthForm>
    </div>
  );
}

export default Register;
