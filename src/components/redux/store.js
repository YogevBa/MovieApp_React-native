import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const INITIAL_STATE = {
    movies: [],
    favorites: []
}


const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'getMovies':
            return {
                ...state,
                movies: action.fetchRes
            }
        case 'addFavorite':
            return {
                ...state,
                favorites: [...state.favorites, action.fetchRes]
            }

        case 'removeFavorite':
            return {
                ...state,
                favorites: action.fetchRes
            }
        default:
            return state
    }
}

export const store = createStore(reducer, applyMiddleware(thunk))
