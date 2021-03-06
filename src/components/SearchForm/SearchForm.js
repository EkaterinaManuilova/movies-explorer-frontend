import React, { useState, useEffect } from 'react'

import './SearchForm.css'
import searchIcon from '../../images/search-icon.svg'

function SearchForm({ onSearchMovies, savedMoviesRoute }) {
    const [keyWord, setKeyWord] = useState('')
    const [checkBoxStatus, setCheckBoxStatus] = useState(false)

    const [error, setError] = useState(false)

    useEffect(() => {
        if (!savedMoviesRoute) {
            const query = localStorage.getItem('keyWord')

            if (query) {
                setKeyWord(query)
            }
        }
    }, [savedMoviesRoute])

    useEffect(() => {
        if (!savedMoviesRoute) {
            const status = localStorage.getItem('checkBoxStatus')

            if (JSON.parse(status) === true) {
                setCheckBoxStatus(true)
            } else {
                setCheckBoxStatus(false)
            }
        }
    }, [savedMoviesRoute])

    const handleSubmitSearchForm = (e) => {
        e.preventDefault()
        if (!keyWord) {
            setError(true)
        } else {
            setError(false)
            onSearchMovies(keyWord, checkBoxStatus)
        }
    }

    const handleSearchInputChange = (e) => {
        setKeyWord(e.target.value)
        setError(false)
    }

    const handleCheckBoxChange = (e) => {
        setCheckBoxStatus(e.target.checked)
        onSearchMovies(keyWord, e.target.checked)
    }

    return (
        <div className="search-form">
            <form
                className="seacrh-form__form"
                noValidate
                onSubmit={handleSubmitSearchForm}
            >
                <div className="seacrh-form__form-conteiner">
                    <input
                        className="search-form__form-input"
                        type="text"
                        placeholder="Фильм"
                        required
                        onChange={handleSearchInputChange}
                        autoComplete="off"
                        value={keyWord || ''}
                    />
                    <span className="search-form__error">
                        {error ? ' Нужно ввести ключевое слово.' : ''}
                    </span>
                    <button type="submit" className="search-form__submit">
                        <img
                            className="search-form__submit-icon"
                            src={searchIcon}
                            alt="иконка стрелочка"
                        />
                    </button>
                </div>
                <div className="search-form__filter">
                    <p className="search-form__filter-caption">
                        Короткометражки
                    </p>
                    <label className="search-form__filter-checkbox">
                        <input
                            className="search-form__checkbox"
                            type="checkbox"
                            onChange={handleCheckBoxChange}
                        />
                        <span
                            className={
                                !checkBoxStatus
                                    ? 'search-form__checkbox-cover-off'
                                    : 'search-form__checkbox-cover-on'
                            }
                        ></span>
                    </label>
                </div>
            </form>
        </div>
    )
}

export default SearchForm
