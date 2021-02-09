import * as TYPES from './types'
// import primaAPI from '../api/prima' // un-comment if using it
// import GetSample from '../static/sample.json' // un-comment if using it


// First Init
export const init = () => async dispatch => {
    dispatch({ type: TYPES.SET_LOADING });
    dispatch({ type: TYPES.REMOVE_LOADING });
};