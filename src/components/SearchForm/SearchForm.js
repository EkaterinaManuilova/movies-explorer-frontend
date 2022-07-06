import './SearchForm.css';
import searchIcon from '../../images/search-icon.svg';

function SearchForm() {
  
  return (
    <div className="search-form">
      <form className="seacrh-form__form">
        <div className="seacrh-form__form-conteiner">
        <input className="search-form__form-input" type="text" placeholder="Фильм" />
        <button type="submit" className="search-form__submit">
          <img className="search-form__submit-icon" src={searchIcon} alt="иконка стрелочка" />
        </button>
        </div>
      </form>
      <div className="search-form__short-film">
        <p className="search-form__short-film-caption">Короткометражки</p>
        <input className="search-form__short-film-checkbox" type="checkbox" />
      </div>
    </div>
  )
}

export default SearchForm;