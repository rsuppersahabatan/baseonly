import { combineReducers } from "redux"
import configReducer from './configReducer'

export default combineReducers({
    general: configReducer, // INIT (array)
});