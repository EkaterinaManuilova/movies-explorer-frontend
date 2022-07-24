import { MOVIES_API } from '../utils/constants'

class MoviesApi {
    constructor(options) {
        this._baseUrl = options.baseUrl
        // this._headers = options.headers
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`)
        }
        return res.json()
    }

    getInitialMovies() {
        return fetch(`${this._baseUrl}`, {
            headers: {
              "Content-Type": "application/json",
            },
        }).then(this._getResponseData)
    }
}

const moviesApi = new MoviesApi({
    baseUrl: `${MOVIES_API}`,
    // headers: {
    //     'Content-Type': 'application/json',
    // },
})

export default moviesApi
