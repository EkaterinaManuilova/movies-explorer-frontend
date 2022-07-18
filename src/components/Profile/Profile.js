import './Profile.css'
import { Link } from 'react-router-dom'
import useFormValidation from '../../utils/FormValidation'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import React from 'react';

function Profile({ onUpdateProfile, onLogout }) {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, handleChange, resetForm, errors, isValid } = useFormValidation();
  const isDisabled = !isValid
React.useEffect(() => {
resetForm(currentUser, {}, false);
}, [currentUser, resetForm])
  function handleSubmitProfileForm(e) {
    e.preventDefault()
    onUpdateProfile(values)
  }
    return (
        <div className="profile">
            <h2 className="profile__title">Привет, {currentUser.name}!</h2>
            <form className="profile__form" onSubmit={handleSubmitProfileForm}>
                <label className="profile__input">
                    Имя
                    <input
                        className="profile__input-item"
                        name="name"
                        type="text"
                        // defaultValue="Екатерина"
                        placeholder="Имя"
                        value={values.name || ""}
                        onChange={handleChange}
                        minLength={2}
                        maxLength={30}

                        required
                    />
                                <span
                className='profile__error profile__error_active'

            >{errors.name}</span>
                </label>
                <label className="profile__input">
                    E-mail
                    <input
                        className="profile__input-item"
                        name="email"
                        type="text"
                        // defaultValue="mail@mail.ru"
                        placeholder="E-mail"
                        pattern="[A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$"
                        value={values.email || ""}
                        onChange={handleChange}

                        required
                    />
                                <span
                className='input__error input__error_active'

            >{errors.email}</span>
                </label>
                <button type="submit" className="profile__submit" disabled={isDisabled}>
                    Редактировать
                </button>
            </form>
            <Link className="profile__logout" to="/" onClick={onLogout}>
                Выйти из аккаунта
            </Link>
        </div>
    )
}

export default Profile