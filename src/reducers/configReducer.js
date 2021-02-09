import * as TYPES from '../actions/types';

const INITIAL_STATE = {
    loading: true,
    // sample: []
};

const configReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // case TYPES.GET_SAMPLES: //console.log(action);
        // return { ...state, sample: action.payload };
        case TYPES.SET_LOADING:
            return { ...state, loading: true };
        case TYPES.REMOVE_LOADING:
            return { ...state, loading: false };
        default:
            return { ...state };
    }
}

export default configReducer