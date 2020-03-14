const api_key = '94530f49093bddf9d36f28353471c320'
const url_call = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`

export const getMoviesData = async () => {
    let baseCall = await fetch(url_call)
    let parsedRes = await baseCall.json()
    return parsedRes
}