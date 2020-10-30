import axios from 'axios'

const URL = "http://api.tvmaze.com/"

export function getAllMovies() {
    return axios.get(URL + 'shows');
}
export function getMovieDetails(showId) {
    return axios.get(URL + 'shows/' + showId)
}
export function searchMovie(query) {
    return axios.get(URL + `search/shows?q=${query}`)
}