import React, { useEffect, useState } from 'react'
import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
// import savedMoviesCardList from '../../utils/savedMoviesCardList'
import Devider from '../Devider/Devider'
import { searchAndFilterMovies } from '../../utils/utils'
// import MoviesCard from '../MoviesCard/MoviesCard'

function SavedMovies({ moviesCardList, onDelete }) {
  const [searchedMovies, setSearchedMovies] = useState([])
  const [isSearchComplited, setIsSearchComplited] = useState(false)

  const [keyWord, setKeyWord] = useState('')
  const [checkBoxStatus, setCheckBoxStatus] = useState(false)

  const handleSearchMovies = (keyWord, checkBoxStatus) => {

    setKeyWord(keyWord)
    setCheckBoxStatus(checkBoxStatus)
    setSearchedMovies(searchAndFilterMovies(moviesCardList, keyWord, checkBoxStatus))
    setIsSearchComplited(true)
  }

  useEffect(() => {

  })

    return (
        <section className="saved-movies">
            <SearchForm onSearchMovies={handleSearchMovies} />
            {!moviesCardList ? ('') : (
              isSearchComplited ? (
                <MoviesCardList
                movies={searchedMovies}
                onDelete={onDelete}
                isSaved={true}
            />
              ) : (
                <MoviesCardList
                movies={moviesCardList}
                onDelete={onDelete}
                isSaved={true}
            />
              )
            )}
    
            <Devider />
        </section>
    )
}

export default SavedMovies
