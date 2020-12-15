import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {planetsReducer} from './reducers/planetsReducers'
import {peopleReducer} from './reducers/peopleReducers'
import {composeWithDevTools} from 'redux-devtools-extension'
import {movieReducer} from './reducers/movieReducers'

//this is my redux state store 


const reducer = combineReducers({
    planetList:planetsReducer,
    peopleList:peopleReducer,
    movieList:movieReducer
})
const initialState = {}

const middleware = [thunk]
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store