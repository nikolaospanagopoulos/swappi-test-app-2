import { PEOPLE_LIST_FAIL, PEOPLE_LIST_REQUEST, PEOPLE_LIST_SUCCESS } from "../Constants/peopleConstants"


export const peopleReducer = (state = {people:[]},action) => {
    switch (action.type) {
        case PEOPLE_LIST_REQUEST:
            return {loading:true , people:[]}
        case PEOPLE_LIST_SUCCESS:
            return {loading:false, people:action.payload}   
        case PEOPLE_LIST_FAIL:
            return {loading:false, error: action.payload}
        default:
            return state         
    }   
}