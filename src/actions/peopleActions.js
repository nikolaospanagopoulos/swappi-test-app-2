
import axios from 'axios'
import { PEOPLE_LIST_FAIL, PEOPLE_LIST_REQUEST, PEOPLE_LIST_SUCCESS } from '../Constants/peopleConstants'

export const listPeople = () => async (dispatch) => {
    try{
        dispatch({type:PEOPLE_LIST_REQUEST})

        const {data} = await axios.get("//swapi.dev/api/people")

        dispatch({
            type:PEOPLE_LIST_SUCCESS,
            payload:data.results
        })
    }catch(error){
        dispatch({
            type:PEOPLE_LIST_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}