import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {planetsReducer} from './reducers/planetsReducers'
import {peopleReducer} from './reducers/peopleReducers'
import {composeWithDevTools} from 'redux-devtools-extension'


const reducer = combineReducers({
    planetList:planetsReducer,
    peopleList:peopleReducer
})
const initialState = {}

const middleware = [thunk]
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store