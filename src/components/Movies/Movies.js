import React, { useState, useEffect } from 'react'
import './Movies.css'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import MoreButton from '../MoreButton/MoreButton'
// import moviesCardList from '../../utils/moviesCardList'
import Preloader from '../Preloader/Preloader'
import moviesApi from '../../utils/moviesApi'
import { searchAndFilterMovies } from '../../utils/utils'

function Movies({ moviesCardList, onSave, onDelete}) {
    const [isLoading, setIsLoading] = useState(false)
    const [searchMessage, setSearchMessage] = useState('')
    const [isSearchComplited, setIsSearchComplited] = useState(false)

    const [keyWord, setKeyWord] = useState('')
    const [checkBoxStatus, setCheckBoxStatus] = useState(false)

    const [initialMovies, setInitialMovies] = useState([])
    const [searchedMovies, setSearchedMovies] = useState([])

    const [toRenderMovies, setToRenderMovies] = useState([])

    const [isMore, setIsMore] = useState(false)
    const [count, setCount] = useState(0)
    const [additional, setAdditional] = useState(0)

    const windowSize = window.innerWidth

    useEffect(() => {
      if (windowSize > 768) {
            setCount(12)
            setAdditional(3)
        } else if (windowSize <= 768 && windowSize >= 450) {
            setCount(8)
            setAdditional(2)
        } else if (windowSize < 480) {
            setCount(5)
            setAdditional(2)
        }
    }, [windowSize])

    useEffect(() => {
      if (searchedMovies.length > 0) {
        if (searchedMovies.length > count){
          setToRenderMovies(searchedMovies.slice(0, count))
          console.log(toRenderMovies)
          setIsMore(true)
        } else {
          setToRenderMovies(searchedMovies)
          console.log(toRenderMovies)
        }
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count, searchedMovies])

    const handleMoreMoviesLoad = () => {
      setToRenderMovies((state) => searchedMovies.slice(0, state.length + additional))
      console.log(toRenderMovies)

    }

    useEffect(() => {
      if (toRenderMovies.length === searchedMovies.length) {
        setIsMore(false)
      }
    }, [searchedMovies.length, toRenderMovies])


  useEffect(() => {
    setIsSearchComplited(false)
    if (localStorage.getItem('searchedMovies')) {
      const previos = localStorage.getItem('searchedMovies')
      const resultMovies = searchAndFilterMovies(previos, keyWord, checkBoxStatus)
      setSearchedMovies(resultMovies)
      setIsSearchComplited(true)
    }

  }, [checkBoxStatus, keyWord])

  useEffect(() => {
    if (initialMovies.length > 0) {
      const resultMovies = searchAndFilterMovies(initialMovies, keyWord, checkBoxStatus)
      console.log(resultMovies)
      setSearchedMovies(resultMovies)
      console.log(searchedMovies)
      setIsSearchComplited(true)
      localStorage.setItem('keyWord', keyWord)
      localStorage.setItem('checkBoxStatus', checkBoxStatus)
      localStorage.setItem('searchedMovies', resultMovies)
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkBoxStatus, initialMovies, keyWord])


    // useEffect(() => {
    //     const timer = setTimeout(() => setIsLoading(!isLoading), 3000)
    //     return () => clearTimeout(timer)
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [])

    const handleSearchMovies = (keyWord, checkBoxStatus) => {
      setToRenderMovies([])
      setKeyWord(keyWord)
      setCheckBoxStatus(checkBoxStatus)

      const initialMoviesArr = JSON.parse(localStorage.getItem('initialMovies'))
      // console.log(initialMoviesArr)

      if (!initialMoviesArr) {
        setIsLoading(true)
        moviesApi.getInitialMovies()
    .then((initialMovies) => {
      setInitialMovies(initialMovies)
      console.log(initialMovies)
      localStorage.setItem('initialMovies', initialMovies)
    })
    .catch((err) => {
      setSearchMessage('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.')
      console.log(err)
      localStorage.removeItem('initialMovies')
    })
    .finally(() => {
      setIsLoading(false)
    })
      } else {
        setInitialMovies(initialMoviesArr)
        console.log(initialMoviesArr)
      }
    }


    return (
        <section className="movies">
            <SearchForm onSearchMovies={handleSearchMovies} />
            {isLoading ? (
                <Preloader />
            ) : (
              isSearchComplited ? (
                toRenderMovies.length > 0
                ?
                (
                  <MoviesCardList
              movies={toRenderMovies}
              moviesCardList={moviesCardList}
                  onSave={onSave}
                  onDelete={onDelete}
              // isSaved={false}
          />
                ) : (
                  <span className="movies__mesage">{!isLoading ? 'Ничего не найдено.' : {searchMessage}}</span>
                )

          ) : (
            ''
            )
            )}
            {isMore && <MoreButton onClick={handleMoreMoviesLoad} />}
        </section>
    )
}

export default Movies
