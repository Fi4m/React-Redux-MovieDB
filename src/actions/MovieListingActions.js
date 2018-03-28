import { FetchMovieListing } from './types'
import { API_KEY } from '../Constants'

export const fetchMovieListing = (page = 1) => {
    return dispatch => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`)
            .then(response => {
                response.json()
                    .then(json => {
                        console.log(json.results)
                        dispatch({
                            type: FetchMovieListing,
                            payload: {
                                page: json.page,
                                moviesList: json.results
                            }
                        })
                    })
            })
    }
}
