import { useState } from 'react';
import './MoviesCard.css';

function MoviesCard({ moviesCard }) {
const [isMarked, setIsMarked] = useState(false);

function handleMarkMovie(moviesCard) {
  setIsMarked(!isMarked)
}

  return (
    <li className="movies-card" key={moviesCard.id}>
      <div className="movies-card__head">
        <div className="movies-card__head-info">
          <h2 className="movies-card__title">{moviesCard.title}</h2>
          <p className="movies-card__duration">{moviesCard.duration}</p>
        </div>
        <button type="button" className={!isMarked ? "movies-card__mark-button" : "movies-card__mark-button movies-card__mark-button_marked"} onClick={handleMarkMovie}></button>
      </div>
      <div>
        <img className="movies-card__image" src={moviesCard.image} alt={`Фото к фильму ${moviesCard.title}`} />
      </div>
    </li>
  )
}

export default MoviesCard;