import React, { useEffect } from 'react'
import AuthForm from '../AuthForm/AuthForm'
import Input from '../Input/Input'
import InfoTooltip from '../InfoTooltip/InfoTooltip'
import useFormValidation from '../../utils/FormValidation'

function Register({ onRegister, isRegSuccess, isInfoTooltipOpen }) {

    const { values, handleChange, errors, isValid, resetForm } = useFormValidation();
    const isDisabled = !isValid;

    function handleSubmitRegisterForm(event) {
      event.preventDefault();
      onRegister(values);
    }
    useEffect(() => {
      resetForm({}, {}, false);
    }, [resetForm])

    return (
        <>
            <AuthForm
                onSubmit={handleSubmitRegisterForm}
                title="Добро пожаловать!"
                buttonText="Зарегистрироваться"
                linkCaption="Уже зарегистрированы?"
                linkText="Войти"
                linkPath="/signin"
                isDisabled={isDisabled}

            >
                <Input
                    type="text"
                    name="name"
                    labelText="имя"
                    value={values.name || ""}
                    onChange={handleChange}
                    placeholder="Имя"
                    minLength={2}
                    maxLength={30}
                    errorText={errors.name}
                    required
                />
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
            <InfoTooltip isRegSuccess={isRegSuccess} isInfoTooltipOpen={isInfoTooltipOpen} />
        </>
    )
}

export default Register