import React, { useState, useEffect } from 'react'
import './Movies.css'
import SearchForm from '../SearchForm/SearchForm'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import MoreButton from '../MoreButton/MoreButton'
import moviesCardList from '../../utils/moviesCardList'
import Preloader from '../Preloader/Preloader'

function Movies() {
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(!isLoading), 3000)
        return () => clearTimeout(timer)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleSearchMovies = () => {

    }

    return (
        <section className="movies">
            <SearchForm onSearchMovies={handleSearchMovies} />
            {!isLoading ? (
                <Preloader />
            ) : (
                <MoviesCardList
                    moviesCardList={moviesCardList}
                    isSaved={false}
                />
            )}
            <MoreButton />
        </section>
    )
}

export default Movies
