import { FetchMovieCredits } from '../actions/types'

const INITIAL_STATE = {
    cast: [],
    crew: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FetchMovieCredits:
            return {
                ...state,
                cast: action.payload.cast,
                crew: action.payload.crew
            }
        default:
            return state
    }
}
