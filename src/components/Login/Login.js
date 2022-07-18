import React, { useEffect } from 'react'
import AuthForm from '../AuthForm/AuthForm'
import Input from '../Input/Input'
import InfoTooltip from '../InfoTooltip/InfoTooltip'
import useFormValidation from '../../utils/FormValidation'

function Login({onLogin, isSuccess, isInfoTooltipOpen }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormValidation();
  const isDisabled = !isValid;
  function handleSubmitLoginForm(event) {
    event.preventDefault();
    onLogin(values);
  }
  useEffect(() => {
    resetForm({}, {}, false);
  }, [resetForm])

    return (
        <>
            <AuthForm
                onSubmit={handleSubmitLoginForm}
                title="Рады видеть!"
                buttonText="Войти"
                linkCaption="Ещё не зарегистрированы?"
                linkText="Регистрация"
                linkPath="/signup"
                isDisabled={isDisabled}
            >
                <Input
                     type="email"
                     name="email"
                     labelText="E-mail"
                     pattern="[A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$"
                     value={values.email || ""}
                     onChange={handleChange}
                     placeholder="mail@mail.ru"
                     errorText={errors.email}
                />
                <Input
                     type="password"
                     name="password"
                     labelText="password"
                     value={values.password || ""}
                     onChange={handleChange}
                     placeholder="********"
                     errorText={errors.password}
                />
            </AuthForm>
            <InfoTooltip isSuccess={true} isInfoTooltipOpen={isInfoTooltipOpen} />
        </>
    )
}

export default Login