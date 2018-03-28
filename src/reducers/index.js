import { combineReducers } from 'redux'
import MovieListingReducer from './MovieListingReducer'
import MovieDetailsReducer from './MovieDetailsReducer'

import TvListingReducer from './TvListingReducer'

export default combineReducers({
    movieListing: MovieListingReducer,
    movieDetails: MovieDetailsReducer,

    tvListing: TvListingReducer
})
