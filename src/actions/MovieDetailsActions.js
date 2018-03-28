import { FetchMovieCredits } from './types'
import { API_KEY } from '../Constants'

export const fetchMovieCredits = (movieId) => {
    return dispatch => {
        dispatch({
            type: FetchMovieCredits,
            payload: {
                cast: [],
                crew: []
            }
        })
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`)
            .then(response => {
                response.json()
                    .then(json => {
                        dispatch({
                            type: FetchMovieCredits,
                            payload: {
                                cast: json.cast,
                                crew: json.crew
                            }
                        })
                    })
            })
    }
}
