import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import moviesCardList from '../../utils/moviesCardList';

function MoviesCardList() {
  return (
    <div className="movies-card-lis-container">
      <ul className="movies-card-list">
      {moviesCardList.map((moviesCard) => (
        <MoviesCard
        key={moviesCard.id}
        moviesCard={moviesCard}
        />
      ))}
      </ul>
    </div>
  )
}

export default MoviesCardList;