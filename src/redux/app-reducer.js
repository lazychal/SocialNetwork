import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_IS_DONE = 'INITIALIZED_IS_DONE';


let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_IS_DONE:
            return {
                ...state,
                initialized: true,
            };


        default:
            return state;
    }
};

export const initializedIsDone = () => ({type: INITIALIZED_IS_DONE});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(initializedIsDone())
    });

};

export default appReducer;