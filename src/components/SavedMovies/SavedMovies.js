import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import savedMoviesCardList from '../../utils/savedMoviesCardList';
import EmptySpace from '../EmptySpace/EmptySpace';

function SavedMovies() {

  return (
    <section className="saved-movies">
      <SearchForm />
      <MoviesCardList moviesCardList={savedMoviesCardList} isSaved={true} />
      <EmptySpace />
    </section>
  )
}

export default SavedMovies;