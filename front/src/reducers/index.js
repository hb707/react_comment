import { combineReducers } from "redux";
import { createAction, handleActions } from 'redux-actions'
import counter from './counter'
import comment from "./comment";


const rootReducer = combineReducers({
    counter, comment
})

export default rootReducer;