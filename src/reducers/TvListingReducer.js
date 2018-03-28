import { FetchTvListing } from '../actions/types'

const INITIAL_STATE = {
    page: 1,
    tvList: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FetchTvListing:
            if (action.payload.page === 1) {
                return {
                    ...state,
                    page: action.payload.page,
                    tvList: [...action.payload.tvList]
                }
            }

            return {
                ...state,
                page: action.payload.page,
                tvList: [...state.tvList, ...action.payload.tvList]
            }
            
        default:
            return state
    }
}
