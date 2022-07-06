import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreButton from '../MoreButton/MoreButton';
import moviesCardList from '../../utils/moviesCardList';

function Movies() {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList moviesCardList={moviesCardList} isSaved={false} />
      <MoreButton />
    </section>
  )
}

export default Movies;