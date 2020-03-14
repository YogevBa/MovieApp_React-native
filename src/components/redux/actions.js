import { getMoviesData } from '../../../api';

export const fetchMoviesRes = res => {
    return {
        type: 'getMovies',
        fetchRes: res
    }
}

export const getMoviesReq = () => {
    return async dispatch => {
        await getMoviesData().then(res => {
            dispatch(fetchMoviesRes(res ? res.results : []))
        })
    }
}

export const setFavoriteReq = (movie, actionType) => {
    if (actionType === 'add') {
        return {
            type: 'addFavorite',
            fetchRes: movie
        }
    }
    else {
        return {
            type: 'removeFavorite',
            fetchRes: movie
        }
    }

}





