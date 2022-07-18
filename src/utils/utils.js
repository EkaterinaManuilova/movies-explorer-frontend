//фильтрация фильмов по длине до 40минут
export function findShortMovies(movies) {
  return movies.filter((item) => item.duration < 40);
}

//филтрация фильмов по ключевому слову и длине
export function searchAndFilterMovies(movies, searchQuery, filterCheckbox) {
const queryMovies = movies.filter((item) => {
  return (item.nameRU).toLowerCase().indexOf(searchQuery.toLowerCase()) > -1
  }
);
if (filterCheckbox === 'щт') {
  return findShortMovies(queryMovies);
}
return queryMovies
}

//конвертация минут в  часы-минуты
export function getTimeFromMin(min) {
const hours = Math.trunc(min/60);
const minutes = min % 60;
return `${hours}ч ${minutes}м`;
}