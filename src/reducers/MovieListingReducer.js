import { FetchMovieListing } from '../actions/types'

const INITIAL_STATE = {
    page: 1,
    moviesList: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FetchMovieListing:
            if (action.payload.page === 1) {
                return {
                    ...state,
                    page: action.payload.page,
                    moviesList: [...action.payload.moviesList]
                }
            }

            return {
                ...state,
                page: action.payload.page,
                moviesList: [...state.moviesList, ...action.payload.moviesList]
            }
            
        default:
            return state
    }
}
