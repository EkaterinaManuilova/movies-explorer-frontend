import React, { useState, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Header from '../Header/Header'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import PageNotFound from '../PageNotFound/PageNotFound'
import mainApi from '../../utils/mainApi'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function App() {
    const navigate = useNavigate()

    const [loggedIn, setLoggedIn] = useState(false)
    const [currentUser, setCurrentUser] = useState({})

    const [isSuccess, setIsSuccess] = useState(false)

    const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false)

    const [savedMovies, setSavedMovies] = useState([])

    const [profileMessage, setProfileMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    //получение данных юзера
    useEffect(() => {
        handleTokenCheck()
        if (loggedIn) {
            navigate('/movies')
            mainApi
                .getProfile()
                .then((profileData) => {
                    const data = {
                        name: profileData.name,
                        email: profileData.email,
                        _id: profileData._id,
                    }
                    setCurrentUser(data)
                })
                .catch((err) => console.log(err))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loggedIn])

    // получение фильмов юзера
    useEffect(() => {
        const token = localStorage.getItem('jwt')
        if (token) {
            mainApi
                .getSavedMovies()
                .then((data) => {
                    setSavedMovies(
                        data.filter((item) => item.owned === currentUser._id)
                    )
                })
                .catch((err) => console.log(err))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleRegister = (userData) => {
        mainApi
            .register(userData)
            .then(() => {
                setIsSuccess(true)
                handleAuthorize(userData)
            })
            .catch((err) => {
                console.log(err)
                setIsSuccess(false)
                if (err.code === 409) {
                    setErrorMessage(
                        'Пользователь с таким email уже зарегистрирован.'
                    )
                } else {
                    setErrorMessage(
                        'При регистрации произошла ошибка. Попробуйте снова.'
                    )
                }
            })
            .finally(() => {
                setIsInfoTooltipOpen(true)
            })
    }

    const handleAuthorize = (userData) => {
        mainApi
            .authorize(userData)
            .then((data) => {
                if (data.token) {
                    localStorage.setItem('jwt', data.token)
                    setIsSuccess(true)
                    setLoggedIn(true)
                    navigate('/movies')
                }
            })
            .catch((err) => {
                console.log(err)
                setIsSuccess(false)
                if (err.code === 400) {
                    setErrorMessage('Неверный email и/или пароль')
                } else if (err.code === 401) {
                    setErrorMessage('Пользователь с таким email не найден')
                } else {
                    setErrorMessage(
                        'При авторизации произошла ошибка. Попробуйте снова.'
                    )
                }
            })
            .finally(() => {
                setIsInfoTooltipOpen(true)
            })
    }

    const handleTokenCheck = () => {
        const token = localStorage.getItem('jwt')
        if (token) {
            mainApi
                .checkToken(token)
                .then((res) => {
                    if (res) {
                        setLoggedIn(true)
                    }
                })
                .catch((err) => console.log(err))
        }
    }

    const handleUpdateProfile = (userData) => {
        mainApi
            .updateProfile(userData)
            .then((newUserData) => {
                setCurrentUser(newUserData)
                setProfileMessage('Данные успешно обновлены.')
            })
            .catch((err) => {
                console.log(err)
                if (err.code === 409) {
                    setProfileMessage(
                        'Пользователь с данным email уже существует.'
                    )
                } else {
                    setProfileMessage('При обновлении данных произошла ошибка.')
                }
            })
    }

    const handleLogOut = () => {
        localStorage.clear()
        setLoggedIn(false)
        setCurrentUser({})
        navigate('/')
    }

    //сохранение фильма в Сохраненные фильмы
    const handleSaveMovie = (movie) => {
        mainApi
            .saveMovie(movie)
            .then((newMovie) => {
                setSavedMovies([newMovie, ...savedMovies])
                setIsSuccess(true)
            })
            .catch((err) => {
                console.log(err)
                setIsSuccess(false)
                setErrorMessage(
                    'При сохранени фильма произошла ошибка. Попробуйте снова.'
                )
            })
            .finally(() => {
              setIsInfoTooltipOpen(true)
            })
    }

    //удаление фильма из Сохраненных фильмов
    const handleDeleteMovie = (movie) => {
        mainApi
            .deleteMovie(movie._id)
            .then(() => {
                setSavedMovies((movies) =>
                    movies.filter((m) => m._id !== movie._id)
                )
                setIsSuccess(true)
            })
            .catch((err) => {
                console.log(err)
                setIsSuccess(false)
                setErrorMessage(
                    'При удалении фильма произошла ошибка. Попробуйте снова.'
                )
            })
            .finally(() => {
              setIsInfoTooltipOpen(true)
            })
    }

    useEffect(() => {
      const timer = setTimeout(() => setIsInfoTooltipOpen(false), 2000)
      return () => clearTimeout(timer)
  })

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page-container">
                <Header />

                <Routes>
                    <Route
                        path="/signup"
                        element={
                            <Register
                                onRegister={handleRegister}
                                isSuccess={isSuccess}
                                isInfoTooltipOpen={isInfoTooltipOpen}
                                errorMessage={errorMessage}
                            />
                        }
                    ></Route>

                    <Route
                        path="/signin"
                        element={
                            <Login
                                onLogin={handleAuthorize}
                                isSuccess={isSuccess}
                                isInfoTooltipOpen={isInfoTooltipOpen}
                                errorMessage={errorMessage}
                            />
                        }
                    ></Route>

                    <Route
                        element={
                            <ProtectedRoute
                                loggedIn={loggedIn}
                            ></ProtectedRoute>
                        }
                    >
                        <Route
                            path="/profile"
                            element={
                                <Profile
                                    onLogout={handleLogOut}
                                    onUpdateProfile={handleUpdateProfile}
                                    message={profileMessage}
                                />
                            }
                        ></Route>

                        <Route
                            path="/movies"
                            element={[
                                <Movies
                                    key={'index0'}
                                    onSave={handleSaveMovie}
                                    onDelete={handleDeleteMovie}
                                    moviesCardList={savedMovies}
                                    isSuccess={isSuccess}
                                    isInfoTooltipOpen={isInfoTooltipOpen}
                                    errorMessage={errorMessage}
                                />,
                                <Footer key={'index1'} />,
                            ]}
                        ></Route>

                        <Route
                            path="/saved-movies"
                            element={[
                                <SavedMovies
                                    key={'index0'}
                                    onDelete={handleDeleteMovie}
                                    moviesCardList={savedMovies}
                                    isSuccess={isSuccess}
                                    isInfoTooltipOpen={isInfoTooltipOpen}
                                    errorMessage={errorMessage}
                                />,
                                <Footer key={'index1'} />,
                            ]}
                        ></Route>
                    </Route>

                    <Route
                        path="/"
                        element={[
                            <Main key={'index0'} />,
                            <Footer key={'index1'} />,
                        ]}
                    ></Route>

                    <Route path="/*" element={<PageNotFound />}></Route>
                </Routes>
            </div>
        </CurrentUserContext.Provider>
    )
}

export default App
