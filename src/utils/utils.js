import { SHORT_DURATION, CARDS_URL } from "./constants"

//фильтрация фильмов по длине до 40минут
export function findShortMovies(movies) {
    return movies.filter((item) => item.duration < SHORT_DURATION)
}

//филтрация фильмов по ключевому слову и длине
export function searchAndFilterMovies(movies, keyWord, checkBoxStatus) {
    const queryMovies = Array.isArray(movies)
        ? movies.filter((item) => {
              return (
                  item.nameRU.toLowerCase().indexOf(keyWord.toLowerCase()) > -1
              )
          })
        : []
    if (checkBoxStatus) {
        return findShortMovies(queryMovies)
    }
    return queryMovies
}

//конвертация минут в  часы-минуты
export function getTimeFromMin(min) {
    const hours = Math.trunc(min / 60)
    const minutes = min % 60
    return `${hours}ч ${minutes}м`
}

export function changeMovies(movies) {
    movies.forEach((movie) => {
        if (!movie.image) {
            movie.image = 'https://g2.dcdn.lt/images/pix/kinas-76443525.jpg'
            movie.thumbnail = 'https://g2.dcdn.lt/images/pix/kinas-76443525.jpg'
        } else {
            movie.thumbnail = `${CARDS_URL}${movie.image.formats.thumbnail.url}`
            movie.image = `${CARDS_URL}${movie.image.url}`
        }
    })
}
