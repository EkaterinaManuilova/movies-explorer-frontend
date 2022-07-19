import React, { useState } from 'react'
import { useLocation, matchPath } from 'react-router'
import MarkButton from '../MarkButton/MarkButton'
import DelButton from '../DelButton/DelButton'
import { getTimeFromMin } from '../../utils/utils'
import './MoviesCard.css'

function MoviesCard({ moviesCard, moviesCardList, onSave, onDelete }) {
  const isSaved = moviesCard.id && moviesCardList.some((m) => m.id === moviesCard.id)
  const [isSavedMovie, setIsSavedMovie] = useState(false);
  const location = useLocation();

  function handleClickMovie() {
    if(isSaved) {
      onDelete(moviesCardList.filter((m) => m.id ===  moviesCard.id)[0])
    }
    onSave(moviesCard)
    setIsSavedMovie(!isSavedMovie)
  }
  function handleDeleteClick() {
    console.log(moviesCard)
    onDelete(moviesCard)
    setIsSavedMovie(false)
  }

    return (
        <li className="movies-card" key={moviesCard.id}>
            <div className="movies-card__head">
                <div className="movies-card__head-info">
                    <h2 className="movies-card__title">{moviesCard.nameRU}</h2>
                    <p className="movies-card__duration">
                        {getTimeFromMin(moviesCard.duration)}
                    </p>
                </div>
                { matchPath({path: '/movies'} ,location.pathname) && (
                  <MarkButton isSavedMovie={isSavedMovie} onClick={handleClickMovie} />
                )}
                { matchPath({path: '/saved-movies'} ,location.pathname) && (
                  <DelButton  onClick={handleDeleteClick} />
                )}
            </div>
            <a className="movies-card__link" href={moviesCard.trailerLink} target="_blank" rel="noreferrer">
                          <img
                className="movies-card__image"
                src={`https://api.nomoreparties.co/${moviesCard.image.url}`}
                alt={`Фото к фильму ${moviesCard.nameRu}`}
            />
            </a>
        </li>
    )
}

export default MoviesCard
