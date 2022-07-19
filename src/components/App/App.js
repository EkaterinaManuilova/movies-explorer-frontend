import React, { useState, useEffect } from 'react'
import { Route, Routes, useNavigate} from 'react-router-dom'
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
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function App() {

  const navigate = useNavigate()

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({})

  const [isRegSuccess, setIsRegSuccess] = useState(false)

  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);

  const [savedMovies, setSavedMovies] = useState([])


//получение данных юзера
useEffect(() => {
  handleTokenCheck()
  if (loggedIn) {
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
}, [loggedIn])

  const handleRegister= (userData) => {
    mainApi
        .register(userData)
        .then(() => {
            setIsRegSuccess(true)
            handleAuthorize(userData);
        })
        .catch((err) => {
            console.log(err)
            setIsRegSuccess(false)
            setIsInfoTooltipOpen(true)
        })
        .finally(() => {
            setIsInfoTooltipOpen(false)
        })
}

const handleAuthorize = (userData) => {
  mainApi
      .authorize(userData)
      .then((data) => {
          if (data.token) {
              localStorage.setItem('jwt', data.token)
              setLoggedIn(true)
              navigate('/movies')
          }
      })
      .catch((err) => console.log(err))
}

const  handleTokenCheck = () => {
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

const handleUpdateProfile = (userData)=> {
  mainApi.updateProfile(userData).then((newUserData) => {
    setCurrentUser(newUserData).catch((err) => console.log(err))
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
  mainApi.saveMovie(movie)
.then((newMovie) => {
  setSavedMovies([newMovie, ...savedMovies])
})
.catch((err) => {
  console.log(err)
})
}

//удаление фильма из Сохраненных фильмов
const handleDeleteMovie = (movie) => {
  mainApi.deleteMovie(movie._id)
  .then(()=> {
    setSavedMovies((movies) => movies.filter((m) => m._id !== movie._id))
  })
  .catch((err) => {
    console.log(err)
  })
}

    return (
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page-container">
            <Header />

            <Routes>
                <Route path="/signup" element={<Register onRegister={handleRegister} isRegSuccess={isRegSuccess} isInfoTooltipOpen={isInfoTooltipOpen} />}></Route>

                <Route path="/signin" element={<Login onLogin={handleAuthorize} />}></Route>

                <Route path="/profile" element={<Profile onLogout={handleLogOut} onUpdateProfile={handleUpdateProfile} />}></Route>

                <Route
                    path="/"
                    element={[
                        <Main key={'index0'} />,
                        <Footer key={'index1'} />,
                    ]}
                ></Route>

                <Route
                    path="/movies"
                    element={[
                        <Movies
                        key={'index0'}
                        onSave={handleSaveMovie}
                        onDelete={handleDeleteMovie}
                        moviesCardList={savedMovies}
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
                        />,
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
