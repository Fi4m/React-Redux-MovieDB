import { FetchTvListing } from './types'
import { API_KEY } from '../Constants'

export const fetchTvListing = (page = 1) => {
    return dispatch => {
        fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&page=${page}`)
            .then(response => {
                response.json()
                    .then(json => {
                        dispatch({
                            type: FetchTvListing,
                            payload: {
                                page: json.page,
                                tvList: json.results
                            }
                        })
                    })
            })
    }
}
