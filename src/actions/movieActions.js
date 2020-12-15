
import axios from 'axios'
import { MOVIE_LIST_FAIL, MOVIE_LIST_REQUEST, MOVIE_LIST_SUCCESS } from '../Constants/movieConstants'

export const listMovies = () => async (dispatch) => {
    try{
        dispatch({type:MOVIE_LIST_REQUEST})

        const {data} = await axios.get("//swapi.dev/api/films")

        dispatch({
            type:MOVIE_LIST_SUCCESS,
            payload:data.results
        })
    }catch(error){
        dispatch({
            type:MOVIE_LIST_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}