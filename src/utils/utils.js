//фильтрация фильмов по длине до 40минут
export function findShortMovies(movies) {
  return movies.filter((item) => item.duration < 40);
}

//филтрация фильмов по ключевому слову и длине
export function searchAndFilterMovies(movies, keyWord, checkBoxStatus) {
  console.log(movies)
const queryMovies = Array.isArray(movies) ? movies.filter((item) => {
  return (item.nameRU).toLowerCase().indexOf(keyWord.toLowerCase()) > -1
  }
) : [];
console.log(queryMovies)
if (checkBoxStatus) {
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

export function changeMovies(movies) {
  movies.forEach(movie => {
    if(!movie.image){
      movie.image = 'https://g2.dcdn.lt/images/pix/kinas-76443525.jpg';
      movie.thumbnail = 'https://g2.dcdn.lt/images/pix/kinas-76443525.jpg'
    } else {
      movie.thumbnail = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`
      movie.image = `https://api.nomoreparties.co${movie.image.url}`
    }
  });
};